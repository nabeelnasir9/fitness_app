// import React,{useEffect, useState} from 'react';
// import { useParams } from 'react-router-dom';
// import {Box} from '@mui/material';
// import { exerciseOptions, fetchData } from "../utils/fetchData";
// import Detail from '../components/Detail';
// import ExerciseVideos from '../components/ExerciseVideos';
// import SimilarExercises from '../components/SimilarExercises';

// const Exercise = () => {
//   const [exerciseDetail, setExerciseDetail] = useState({});
//   const { id } = useParams();
//   useEffect(() => {
//    const fetchExercisesDatas = async () =>{
//     const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
//     const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
//     const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
//     setExerciseDetail(exerciseDetailData);
//    }
//    fetchExercisesDatas();
//   }, [id]);
  
//   return (
//     <div>
//       <Detail exerciseDetail={exerciseDetail}/>
//       <ExerciseVideos/>
//       <SimilarExercises/>
//     </div> 
//   )
// }

// export default Exercise


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const Exercise = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      try {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
      const exerciseVideosData = await fetchData (`${youtubeSearchUrl}`)
    };
    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default Exercise;

