import React, { useState } from "react";
import db from "./Firebase";
import { doc, updateDoc } from "firebase/firestore";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const weightsList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function Exercise({ id, name, sets: initialSets }) {
  const [sets, setSets] = useState(initialSets);

  const clickDecTimes = (index) => {
    let newSets = [...sets];
    newSets.splice(index, 1, {
      ...sets[index],
      times: sets[index].times - 1,
    });
    updateSets(newSets).then(setSets(newSets));
  };

  const clickIncTimes = (index) => {
    let newSets = [...sets];
    newSets.splice(index, 1, {
      ...sets[index],
      times: sets[index].times + 1,
    });
    updateSets(newSets).then(setSets(newSets));
  };

  const clickAddSet = (index) => {
    let newSets = [...sets];

    newSets.splice(index, 0, {
      weights: 10,
      times: 10,
    });

    updateSets(newSets).then(setSets(newSets));
  };

  const clickDeleteSet = (index) => {
    let newSets = [...sets];
    newSets.splice(index, 1);
    updateSets(newSets).then(setSets(newSets));
  };

  const changeWeights = (index, newWeights) => {
    let newSets = [...sets];
    newSets.splice(index, 1, {
      ...sets[index],
      weights: newWeights,
    });
    updateSets(newSets).then(setSets(newSets));
  };

  const updateSets = async (sets) => {
    const exerciseDocument = doc(db, "exercises", id);
    await updateDoc(exerciseDocument, { sets: sets });
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "gainsboro",
        borderRadius: 2,
      }}
    >
      <Grid container sm={12} justifyContent="center">
        <Typography>{name}</Typography>
      </Grid>
      <Grid sm={12} sx={{ pt: 1, pb: 1 }}>
        {sets.map((set, index) => {
          return (
            <Grid container key={index}>
              <Grid item sm={2}>
                No.{index + 1}
              </Grid>
              <Grid item sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Weights</InputLabel>
                  <Select
                    value={set.weights}
                    label="Weights"
                    onChange={(e) => changeWeights(index, e.target.value)}
                  >
                    {weightsList.map((w) => {
                      return (
                        <MenuItem value={w} key={w}>
                          {w}kg
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={4} container>
                <Button
                  onClick={() => {
                    clickDecTimes(index);
                  }}
                >
                  -
                </Button>
                <Typography>{set.times}回</Typography>
                <Button
                  onClick={() => {
                    clickIncTimes(index);
                  }}
                >
                  +
                </Button>
              </Grid>
              <Grid item sm={2}>
                <Button
                  onClick={() => {
                    clickDeleteSet(index);
                  }}
                >
                  削除
                </Button>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Grid>
        <button
          onClick={() => {
            clickAddSet(sets.length);
          }}
        >
          追加
        </button>
      </Grid>
    </Grid>
  );
}

export default Exercise;
