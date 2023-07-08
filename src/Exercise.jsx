import "./Exercise.css";
import React, { useState } from "react";

// サンプルデータ
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90];

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

  const handleSets = (e, setId) => {
    const newSets = sets.map((s) => {
      if (s.setId === setId) {
        return {
          setId: s.setId,
          weight: e.target.value,
          times: s.times,
        };
      } else {
        return s;
      }
    });
    console.log(e);
    console.log(setId);
    console.log(newSets);

    setSets(newSets);
  };

  return (
    <div>
      <div>{type}</div>
      <div>
        {sets.map(({ setId, weight, times }) => {
          return (
            <div className="set" key={setId}>
              <div>
                <select value={weight} onChange={(e) => handleSets(e, setId)}>
                  {weights.map((w) => {
                    return (
                      <option key={w} value={w}>
                        {w}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>{times}回</div>
              <div>
                <button>削除</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exercise;
