import React from 'react';

import Header from '../components/organismos/Header';
import { Container } from 'postcss';
import Skill from '../components/organismos/Skill';
import LatestWorks from '../components/organismos/LatestWorks';

const Jmocana = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="xl" sx={{ marginBottom: '50px' }}>
        <Skill />
      </Container>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: 'primary.main', padding: '30px 10px' }}
      >
        <Container maxWidth="xl">
          <LatestWorks />
        </Container>
      </Container>
    </div>
  );
};

export default Jmocana;
