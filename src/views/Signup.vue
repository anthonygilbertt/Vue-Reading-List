<template>
  <form @submit.prevent="handleSubmit">
    <h2>Sign up</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Sign up</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    // const { error, isPending, signup } = useSignup(email, password);
    const { signup, error } = useSignup(email, password);
    const router = useRouter();

    const handleSubmit = async () => {
      // console.log(email.value, password.value);
      await signup(email.value, password.value);

      if (!error.value) {
        router.push({ name: "/" });
      }
      // try {

      // } catch (error) {

      // }
      console.log("success!!");
    };

    return { email, password, handleSubmit, error };
  },
};
</script>
