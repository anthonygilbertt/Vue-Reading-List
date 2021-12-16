import { ref, watchEffect } from "vue";

// Firebase Imports
import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const getCollection = (c) => {
  const documents = ref(null);

  // collection reference
  let collectionReference = collection(db, c);

  const unsub = onSnapshot(collectionReference, (snapshot) => {
    let results = [];
    snapshot.docs.forEach((doc) => {
      results.push({ ...doc.data(), id: doc.id });
    });
    //update values
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents };
};

export default getCollection;
