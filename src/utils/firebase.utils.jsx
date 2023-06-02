import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAFf74vXds37PEVyt8v4Z8VCc62O-GHW7w",
  authDomain: "steam-307b4.firebaseapp.com",
  projectId: "steam-307b4",
  storageBucket: "steam-307b4.appspot.com",
  messagingSenderId: "306242474010",
  appId: "1:306242474010:web:9287e84892ef73bc07c1a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore database
const db = getFirestore(app);

// Function to get all games
const getGames = async () => {
  try {
    const gamesCollectionRef = collection(db, 'games');
    const gamesSnapshot = await getDocs(gamesCollectionRef);
    
    const games = [];
    gamesSnapshot.forEach((gameDoc) => {
      games.push({ id: gameDoc.id, ...gameDoc.data() });
    });
    
    return games;
  } catch (error) {
    console.error("Error getting games:", error);
    return null;
  }
};

// Function to get all DLC
const getDlc = async () => {
  try {
    const dlcCollectionRef = collection(db, 'dlc');
    const dlcSnapshot = await getDocs(dlcCollectionRef);
    
    const dlc = [];
    dlcSnapshot.forEach((dlcDoc) => {
      dlc.push({ id: dlcDoc.id, ...dlcDoc.data() });
    });
    
    return dlc;
  } catch (error) {
    console.error("Error getting dlc:", error);
    return null;
  }
};

export { app, getGames, getDlc };