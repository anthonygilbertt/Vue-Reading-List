<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Book</h3>

    <label for="title">Book title:</label>
    <input type="text" name="title" v-model="title" required />

    <label for="author">Book author:</label>
    <input type="text" name="author" v-model="author" required />

    <button>Add Book</button>
  </form>
</template>

<script>
import { ref } from "vue";
// Firebase Imports
import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default {
  setup() {
    const title = ref("");
    const author = ref("");
    const isPending = ref(false);
    const error = ref(null);

    const handleSubmit = async () => {
      // await console.log(title.value, author.value);
      const collectionReference = collection(db, "books");
      isPending.value = true;
      error.value = null;

      try {
        await addDoc(collectionReference, {
          title: title.value,
          author: author.value,
          isFav: false,
        });
        isPending.value = false;
      } catch (err) {
        console.log(err.message);
        error.value = "could not fetch the data";
        isPending.value = false;
      }
    };

    return { handleSubmit, title, author };
  },
};
</script>

<style>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}
</style>
