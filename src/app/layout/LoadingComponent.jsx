import React from 'react';
import { ScaleLoader } from 'react-spinners';
import { makeStyles } from '@material-ui/core';
import styles from '../../assets/jss/components/loadingComponentStyle';

const useStyles = makeStyles(styles);

const LoadingComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ScaleLoader color="#00c6ff" loading height={50} width={6} margin={3} />
    </div>
  );
};

export default LoadingComponent;
