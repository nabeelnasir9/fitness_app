import React, {useState} from 'react';
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import ExercisesGet from '../components/ExercisesGet';

const Home = () => {
  const [exercises, setExercises] = useState([]);
const [bodyPart, setBodyPart] = useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}/>
        <ExercisesGet/>
    </Box>
  )
}

export default Home
