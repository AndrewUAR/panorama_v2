import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import LoadingComponent from '../../app/layout/LoadingComponent';
import GridContainer from '../../components/Grid/GridContainer';
import GridLoader from "react-spinners/GridLoader";
import Button from '../../components/Button/CustomButton';
import styles from '../../assets/jss/views/AccountPageStyle/AccountPageStyle';
import GridItem from '../../components/Grid/GridItem';
import PhotographerAccountPage from '../../views/AccountPage/PhotographerAccountPage/PhotographerAccountPage';
import Sidebar from "../../views/AccountPage/Sidebar";
import Albums from './PhotographerAccountPage/Albums/MyAlbums';
import Album from "./PhotographerAccountPage/Albums/MyAlbum";

const useStyles = makeStyles(styles);

const AccountPage = props => {
  const { component } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(false)
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();

  return (
    <>
      <GridContainer justify="center" className={classes.container}>
        <GridItem xs={12} sm={11} md={2} className={classes.sidebar}>
          <Sidebar />
        </GridItem>
        <GridItem xs={12} sm={11} md={8}>
          {component ? component : <PhotographerAccountPage />}
        </GridItem>
      </GridContainer>
    </>
  )
}

AccountPage.propTypes = {

}

export default AccountPage
