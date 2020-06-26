import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const GridItem = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
};

GridItem.propTypes = {
  children: PropTypes.node
};

export default GridItem;
