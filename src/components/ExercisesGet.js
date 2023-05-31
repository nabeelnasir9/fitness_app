import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const ExercisesGet = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exerciseData);
    };
    fetchExercisesData();
  }, [bodyPart, setExercises]);
  

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  const indexOfLastexercise = currentPage * exercisePerPage;
  const indexOfFirstexercise = indexOfLastexercise - exercisePerPage;
  console.log('object', exercises)
  const currentExercise = exercises.slice(
    indexOfFirstexercise,
    indexOfLastexercise
  );
  

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default ExercisesGet;
