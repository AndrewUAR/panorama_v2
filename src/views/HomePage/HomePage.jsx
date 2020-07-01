import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from '../../assets/jss/views/HomePageStyle/homePageStyle';
import HeaderSection from './Sections/HeaderSection';
import IntroSection from './Sections/IntroSection';
import CategoriesSection from './Sections/CategoriesSection';

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.class}>
      <HeaderSection />
      <IntroSection />
      <CategoriesSection />
    </div>
  );
};

export default HomePage;
