import React, { useEffect, useState } from 'react';

import { createPost } from '../../../api/posts';
import { Grid, Typography } from '@mui/material';
import TextField from "@mui/material/TextField";

export default function PostFormCreate () {

  const [post, setPost] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {

//     };
//     fetchData();
//   }, []);

  return (
    <>
      <Grid>
        <Typography> TEST </Typography>
      </Grid>
    </>
  );  
};
