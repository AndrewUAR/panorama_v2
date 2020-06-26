import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../../assets/jss/views/homePageStyle';
import HeaderSection from './HeaderSection';

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();
  return (
    <div>
      <HeaderSection />
    </div>
  );
};

export default HomePage;
