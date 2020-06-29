import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import InfoArea from './InfoArea';
import Main from './Main';
import Stats from './Stats';

const PhotographerAccountPage = (props) => {
  return (
    <GridContainer justify="center">
      <GridItem md={12}>
        <Stats />
      </GridItem>
      <GridItem md={12}>
        <InfoArea />
      </GridItem>
      <GridItem>
        <Main />
      </GridItem>
    </GridContainer>
  );
};

export default PhotographerAccountPage;
