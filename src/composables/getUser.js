import { ref } from "vue";

// Firebase Imports
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "@firebase/auth";

// Create State
const user = ref(auth.currentUser);

// auth changes
onAuthStateChanged(auth, (userState) => {
  console.log("user state changed. current user is: ", userState);
  user.value = userState;
});

const getUser = () => {
  return { user };
};
export default getUser;
