import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/views/PhotographerPage/photographerPageStyle';
import HeaderSection from './Sections/HeaderSection';
import { ButtonGroup } from '@material-ui/core';
import Button from '../../components/Button/CustomButton';
import InfoSection from './Sections/InfoSection';

const useStyles = makeStyles(styles);

const PhotographerPage = (props) => {
  const { selectedPhotographer } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <HeaderSection selectedPhotographer={selectedPhotographer} />
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        className={classes.buttonGroup}
      >
        <Button>Schedule</Button>
        <Button>Albums</Button>
        <Button>Photo sessions</Button>
        <Button>Reviews</Button>
      </ButtonGroup>
      <InfoSection selectedPhotographer={selectedPhotographer} />
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
