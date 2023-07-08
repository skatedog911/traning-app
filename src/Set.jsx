import React, { useState } from "react";

// サンプルデータ
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function Set({ setId, weight: initialWeight, times: initialTimes }) {
  const [weight, setWeight] = useState(initialWeight);
  const [times, setTimes] = useState(initialTimes);

  const changeWeight = (e) => {
    setWeight(e.target.value);
  };

  const incTimes = () => {
    setTimes(times + 1);
  };

  const decTimes = () => {
    if (times <= 1) return;
    setTimes(times - 1);
  };

  return (
    <div className="set" key={setId}>
      <div>
        <select value={weight} onChange={changeWeight}>
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
        <button onClick={decTimes}>-</button>
      </div>
      <div>
        <button onClick={incTimes}>+</button>
      </div>
    </div>
  );
}

export default Set;
