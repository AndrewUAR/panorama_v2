import React from 'react';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import InfoArea from './InfoArea';
import Main from './Main';
import Stats from './Stats';

const PhotographerAccountPage = (props) => (
  <GridContainer justify="center">
    <GridItem xs={12} sm={12} md={12}>
      <Stats />
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
      <InfoArea />
    </GridItem>
    <GridItem>
      <Main />
    </GridItem>
  </GridContainer>
);

export default PhotographerAccountPage;
