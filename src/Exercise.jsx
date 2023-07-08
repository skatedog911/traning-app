import "./Exercise.css";
import React, { useState } from "react";
import Set from "./Set";

const exercise = {
  type: "ベンチプレス",
  sets: [
    {
      setId: 1,
      weight: 60,
      times: 10,
    },
    {
      setId: 2,
      weight: 70,
      times: 10,
    },
    {
      setId: 3,
      weight: 80,
      times: 10,
    },
  ],
};

function Exercise() {
  const { type, sets: initSets } = exercise;

  const [sets, setSets] = useState(initSets);

  const addSet = () => {
    let newSet = { ...sets[sets.length - 1] };
    newSet.setId += 1;

    console.log([...sets, newSet]);
    setSets([...sets, newSet]);
  };

  const deleteSet = (setId) => {
    console.log(setId);
    setSets(
      sets.filter((s) => {
        return s.setId !== setId;
      })
    );
  };

  return (
    <div>
      <div>{type}</div>
      <div>
        {sets.map((set) => {
          return (
            <div>
              <Set {...set}></Set>
              <button onClick={() => deleteSet(set.setId)}>削除</button>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={addSet}>追加</button>
      </div>
    </div>
  );
}

export default Exercise;
