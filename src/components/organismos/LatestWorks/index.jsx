import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Work from '../../moleculas/Work';

const LatestWorks = () => {
  return (
    <>
      <Typography variant="h5" component="h2" sx={{ marginBottom: '20px' }}>
        Últimos trabajos
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Work />
          </Grid>
          <Grid item xs={4}>
            <Work />
          </Grid>
          <Grid item xs={4}>
            <Work />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestWorks;
