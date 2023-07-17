import { collection, getDocs } from "firebase/firestore";
import "./App.css";
import db from "./Firebase";
import Exercise from "./Exercise";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";

// sample
// const exercises = [
//   {
//     type: "ベンチプレス",
//     sets: [
//       {
//         setId: 1,
//         weight: 60,
//         times: 10,
//       },
//       {
//         setId: 2,
//         weight: 70,
//         times: 10,
//       },
//       {
//         setId: 3,
//         weight: 80,
//         times: 10,
//       },
//     ],
//   },
//   {
//     type: "ダンベルフライ",
//     sets: [
//       {
//         setId: 1,
//         weight: 60,
//         times: 10,
//       },
//       {
//         setId: 2,
//         weight: 70,
//         times: 10,
//       },
//       {
//         setId: 3,
//         weight: 80,
//         times: 10,
//       },
//     ],
//   },
// ];

function App() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    let inputExercises = [];
    const col = collection(db, "exercises");
    getDocs(col).then((snapshot) => {
      snapshot.forEach((doc) => {
        inputExercises.push(doc.data());
      });
      setExercises(inputExercises);
    });
  }, []);

  return (
    <Container maxWidth="sm">
      {exercises.map((exercise) => {
        return <Exercise {...exercise}></Exercise>;
      })}
    </Container>
  );
}

export default App;
