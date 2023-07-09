import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

// サンプルデータ
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function Set({
  setId,
  weight: initialWeight,
  times: initialTimes,
  deleteSets,
}) {
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
    <Grid
      container
      key={setId}
      spacing={2}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
        m: 1,
      }}
    >
      <Grid sm={3}>
        <FormControl fullWidth>
          <InputLabel>Weight</InputLabel>
          <Select value={weight} onChange={changeWeight} label="Weight">
            {weights.map((w) => {
              return (
                <MenuItem key={w} value={w}>
                  {w}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid sm={1}>
        <Typography>kg</Typography>
      </Grid>
      <Grid sm={2}>{times}回</Grid>
      <Grid sm={1}>
        <IconButton aria-label="decriment" onClick={decTimes} color="primary">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid sm={1}>
        <IconButton aria-label="increment" onClick={incTimes} color="primary">
          <AddCircleOutlineIcon />
        </IconButton>
      </Grid>
      <Grid sm={4}>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => deleteSets(setId)}
        >
          DELETE
        </Button>
      </Grid>
    </Grid>
  );
}

export default Set;
