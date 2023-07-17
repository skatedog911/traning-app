import "./Exercise.css";
import React, { useState } from "react";
import Set from "./Set";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const defaultSets = [
  {
    setId: 1,
    weight: 10,
    times: 1,
  },
];

function Exercise({ type, sets: initSets }) {
  const [sets, setSets] = useState(initSets);

  const addSet = () => {
    if (sets.length === 0) {
      setSets(defaultSets);
    } else {
      let newSet = { ...sets[sets.length - 1] };
      newSet.setId += 1;
      setSets([...sets, newSet]);
    }
  };

  const deleteSet = (setId) => {
    setSets(
      sets.filter((s) => {
        return s.setId !== setId;
      })
    );
  };

  return (
    <Grid
      sx={{
        backgroundColor: "gainsboro",
        p: 2,
        m: 4,
        borderRadius: 2,
      }}
    >
      <Grid sm={12}>{type}</Grid>
      <Grid sm={12} sx={{ pt: 1, pb: 1 }}>
        {sets.map((set) => {
          return <Set key={set.setId} {...set} deleteSets={deleteSet}></Set>;
        })}
      </Grid>
      <Grid sm={12}>
        <Button variant="contained" onClick={addSet} fullWidth color="info">
          ADD SET
        </Button>
      </Grid>
    </Grid>
  );
}

export default Exercise;
