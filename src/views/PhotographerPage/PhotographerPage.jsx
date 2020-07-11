import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/views/PhotographerPage/photographerPageStyle';
import HeaderSection from './Sections/HeaderSection';

const useStyles = makeStyles(styles);

const PhotographerPage = (props) => {
  const { selectedPhotographer } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HeaderSection selectedPhotographer={selectedPhotographer} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedPhotographer: state.photographers.selectedPhotographer
});

PhotographerPage.propTypes = {
  selectedPhotographer: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(PhotographerPage);
