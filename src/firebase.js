// // Import the functions you need from the SDKs you need
// import {initializeApp} from "firebase/app";
// import {getAnalytics} from "firebase/analytics";
// import {onUnmounted} from "vue";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB9JJr6j9nNq04HqYfrdA7kKCXkWSdLNZk",
//   authDomain: "real-home-authentication-5f627.firebaseapp.com",
//   projectId: "real-home-authentication-5f627",
//   storageBucket: "real-home-authentication-5f627.appspot.com",
//   messagingSenderId: "319424790358",
//   appId: "1:319424790358:web:b9c750c5c76724850ae0f7",
//   measurementId: "G-KL5GJFX30H",
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//
// export const getUser = async (id) => {
//   const user = await usersCollection.doc(id).get();
//   return user.exists ? user.data() : null;
// };
//
// export const updateUser = (id, user) => {
//   return userCollection.doc(id).update(user);
// };
//
// export const deleteUser = (id) => {
//   return usersCollection.doc(id).delete();
// };
//
// export const useLoadUsers = () => {
//   const users = ref([]);
//   usersCollection.onSnapshot((snapshot) => {
//     users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   });
//   onUnmounted(close);
//   return users;
// };
