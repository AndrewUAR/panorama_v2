import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import styles from '../../../assets/jss/views/PhotographerPage/albumsSectionStyle';
import Album from '../../AccountPage/PhotographerAccountPage/Albums/Album';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Button from '../../../components/Button/CustomButton';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { openModal } from '../../../app/actions/modalActions';
import { selectAlbum } from '../../../app/actions/albumActions';

const useStyles = makeStyles(styles);

const Albums = (props) => {
  const { albums, selectAlbum, openModal } = props;
  const [step, setStep] = useState(3);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const theme = useTheme();

  const isPhone = useMediaQuery(theme.breakpoints.only('xs'));
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (isDesktop) {
      setStep(3);
      setEnd(3);
    }
    if (isTablet) {
      setStep(2);
      setEnd(2);
    }
    if (isPhone) {
      setStep(1);
      setEnd(1);
    }
  }, [isTablet, isPhone, isDesktop]);

  const classes = useStyles();

  const handleForwards = () => {
    if (end < albums.length) {
      setStart(start + step);
      setEnd(end + step);
    }
  };

  const handleBackwards = () => {
    if (start > 0) {
      setStart(start - step);
      setEnd(end - step);
    }
  };

  const handleAlbum = (id) => {
    console.log(id);
    selectAlbum(id);
    openModal('ImagesModal');
  };

  return (
    <div className={classes.root}>
      <div className={classes.sectionTitle}>Check out some of my works</div>
      <div className={classes.container}>
        <Button carouselButton onClick={() => handleBackwards()}>
          <DoubleArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </Button>
        <GridContainer justify="center" className={classes.albums}>
          {albums.slice(start, end).map((album, index) => (
            <GridItem
              xs={12}
              sm={6}
              md={3}
              key={index}
              onClick={() => handleAlbum(album._id)}
            >
              <Album images={album.images} title={album.title} />
            </GridItem>
          ))}
        </GridContainer>
        <Button carouselButton onClick={() => handleForwards()}>
          <DoubleArrowIcon />
        </Button>
      </div>
    </div>
  );
};

const actions = {
  selectAlbum,
  openModal
};

export default connect(null, actions)(Albums);
