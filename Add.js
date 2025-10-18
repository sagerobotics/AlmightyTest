// --- Firebase imports ---
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// --- Firebase config (from your Firebase Console) ---

const firebaseConfig = {
    apiKey: "AIzaSyDXS6Lftgfl9-rzA0ljIj0YCSpF5_fp4FI",
    authDomain: "almighty-test.firebaseapp.com",
    databaseURL: "https://almighty-test-default-rtdb.firebaseio.com",
    projectId: "almighty-test",
    storageBucket: "almighty-test.firebasestorage.app",
    messagingSenderId: "942284018380",
    appId: "1:942284018380:web:5a97cd851a9e03ff536869",
    measurementId: "G-V0E4WCMN9Q"
  };

// --- Initialize & To Test & Test & one more---
const app = initializeApp(firebaseConfig);
console.log("🔍 Connected to Firestore project:", firebaseConfig.projectId);

const db = getFirestore(app);


async function addMembers() {
  try {
    const docRef = await addDoc(collection(db, "People"), {
      name: "McClarty Girls Museum",
      category: "Modern Art",
      location: "Madison MS",
      rating: 2.2,
      Like: "No",
      description: "A small-town museum highlighting local heritage and dance.",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log("✅ Document written with ID:", docRef.id);
  } catch (e) {
    console.error("❌ Error adding document:", e);
  }
}

addMembers();

