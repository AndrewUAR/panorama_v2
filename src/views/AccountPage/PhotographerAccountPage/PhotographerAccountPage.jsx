import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import styles from "../../../assets/jss/views/AccountPageStyle/AccountPageStyle";
import Sidebar from '../Sidebar';
import InfoArea from "./InfoArea";
import Main from './Main';
import Stats from './Stats';

const useStyles = makeStyles(styles);

const PhotographerAccountPage = props => {

  const classes = useStyles();

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
  )
}

PhotographerAccountPage.propTypes = {

}

export default PhotographerAccountPage
