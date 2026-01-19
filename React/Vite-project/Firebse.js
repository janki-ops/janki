import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyADpZWmlhLU8t2M-7Hh5BzexGxdwJbZP2s",
//   authDomain: "fir-first-project-c602f.firebaseapp.com",
//   projectId: "fir-first-project-c602f",
//   storageBucket: "fir-first-project-c602f.firebasestorage.app",
//   messagingSenderId: "484593734900",
//   appId: "1:484593734900:web:1823ec1baf163e2f813aa1",
//   measurementId: "G-M9QQPWZH5V"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBEye8V0D7SkZxB-r6-uE1NQK7f58L2JJY",
  authDomain: "revision-project-7fe75.firebaseapp.com",
  projectId: "revision-project-7fe75",
  storageBucket: "revision-project-7fe75.firebasestorage.app",
  messagingSenderId: "696552420570",
  appId: "1:696552420570:web:2abb6072a62e908637e1e3",
  measurementId: "G-Q0YXYKNCPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}