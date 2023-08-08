import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import db from "./Firebase";
import Exercise from "./Exercise";

const collectionName = "exercises";

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const inputRef = useRef();
  const exercisesCollection = collection(db, collectionName);

  // const exerciseObj = {
  //   name: "ベンチプレス",
  //   sets:[
  //     {
  //       no: 1,
  //       weight: 10,
  //       times: 1,
  //     }
  //   ]
  // }

  useEffect(() => {
    getDocs(query(exercisesCollection, orderBy("createdAt")))
      .then((snapshot) => {
        let inputExercises = [];
        snapshot.forEach((doc) => {
          inputExercises.push({ id: doc.id, ...doc.data() });
        });
        setExercises(inputExercises);
        console.log(inputExercises);
      })
      .catch
      // fail
      ();
  }, []);

  const addExercise = async (exercise) => {
    const docRef = await addDoc(exercisesCollection, exercise);
    setExercises([...exercises, { ...exercise, id: docRef.id }]);
  };

  const deleteExercise = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
    setExercises(
      exercises.filter((exercise) => {
        return exercise.id !== id;
      })
    );
  };

  const clickAddExercise = () => {
    addExercise({
      name: inputRef.current.value,
      sets: [],
      createdAt: serverTimestamp(),
    });
  };

  const clickDeleteExercise = (id) => {
    deleteExercise(id);
  };

  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={clickAddExercise}>Add</button>
      {exercises.map((exercise) => {
        return (
          <>
            <Exercise {...exercise}></Exercise>
            <button
              onClick={() => {
                clickDeleteExercise(exercise.id);
              }}
            >
              削除
            </button>
          </>
        );
      })}
    </>
  );
}

export default Exercises;
