import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/views/PhotographerPage/photographerPageStyle';
import HeaderSection from './Sections/HeaderSection';
import { ButtonGroup } from '@material-ui/core';
import Button from '../../components/Button/CustomButton';
import InfoSection from './Sections/InfoSection';
import Albums from './Sections/Albums';

const useStyles = makeStyles(styles);

const PhotographerPage = (props) => {
  const { selectedPhotographer } = props;
  const { albums } = selectedPhotographer;

  const classes = useStyles();

  const albumsFiltered = _.filter(albums, function (album) {
    return !_.isEmpty(album.images);
  });

  return (
    <div className={classes.container}>
      <HeaderSection selectedPhotographer={selectedPhotographer} />
      <div className={classes.infoArea}>
        <ButtonGroup
          color="primary"
          aria-label="outlined primary button group"
          classes={{
            root: classes.buttonsGroup,
            grouped: classes.buttonsSectionSwitch
          }}
        >
          <Button href="#schedule">Schedule</Button>
          <Button href="#albums">Albums</Button>
          <Button href="#photo_sessions">Photo sessions</Button>
          <Button href="#reviews">Reviews</Button>
        </ButtonGroup>
        <InfoSection selectedPhotographer={selectedPhotographer} />
      </div>
      {!_.isEmpty(albumsFiltered) && <Albums albums={albumsFiltered} />}
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
