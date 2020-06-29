import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import styles from '../../../assets/jss/views/HomePageStyle/introSectionStyles';
import image1 from '../../../assets/img/homePage/image_1.jpg';
import image2 from '../../../assets/img/homePage/image_2.jpg';
import image3 from '../../../assets/img/homePage/image_3.jpg';
import image4 from '../../../assets/img/homePage/image_4.jpg';
import image5 from '../../../assets/img/homePage/image_5.jpg';
import image6 from '../../../assets/img/homePage/image_6.jpg';
import image7 from '../../../assets/img/homePage/image_7.jpg';
import image8 from '../../../assets/img/homePage/image_8.jpg';
import image9 from '../../../assets/img/homePage/image_9.jpg';
import image10 from '../../../assets/img/homePage/image_10.jpg';

const useStyles = makeStyles(styles);

const IntroSection = (props) => {
  const [visibleTextLeft, setVisibleTextLeft] = useState(false);
  const [visibleTextRight, setVisibleTextRight] = useState(false);
  const [visiblePhotosRight, setVisiblePhotosRight] = useState(false);
  const [visiblePhotosLeft, setVisiblePhotosLeft] = useState(false);

  const classes = useStyles();

  const onChangeTextLeft = (isVisible) => {
    isVisible ? setVisibleTextLeft(true) : setVisibleTextLeft(false);
  };

  const onChangeTextRight = (isVisible) => {
    isVisible ? setVisibleTextRight(true) : setVisibleTextRight(false);
  };

  const onChangePhotosRight = (isVisible) => {
    isVisible ? setVisiblePhotosRight(true) : setVisiblePhotosRight(false);
  };

  const onChangePhotosLeft = (isVisible) => {
    isVisible ? setVisiblePhotosLeft(true) : setVisiblePhotosLeft(false);
  };

  const textClassesLeft = classNames({
    [classes.text]: true,
    [classes.textAnimationLeft]: visibleTextLeft,
    [classes.hidden]: !visibleTextLeft
  });

  const textClassesRight = classNames({
    [classes.text]: true,
    [classes.textAnimationRight]: visibleTextRight,
    [classes.hidden]: !visibleTextRight
  });

  const photosClassesLeft = classNames({
    [classes.photos]: true,
    [classes.photosAnimationBottom]: visiblePhotosLeft,
    [classes.hidden]: !visiblePhotosLeft
  });

  const photosClassesRight = classNames({
    [classes.photos]: true,
    [classes.photosAnimationTop]: visiblePhotosRight,
    [classes.hidden]: !visiblePhotosRight
  });

  return (
    <div className={classes.container}>
      <div>
        <VisibilitySensor
          onChange={onChangeTextLeft}
          partialVisibility={{ top: true }}
          offset={{ top: 50 }}
        >
          <div className={textClassesLeft}>
            <h3>
              Can't find an inspiration for cool photos? Our photographers would
              help you with that.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={onChangePhotosRight}
          partialVisibility={{ top: true }}
          offset={{ top: 50 }}
        >
          <div className={photosClassesRight}>
            <div className={classes.box1}>
              <img src={image1} alt="" className={classes.image} />
            </div>
            <div className={classes.box2}>
              <img src={image7} alt="" className={classes.image} />
            </div>
            <div className={classes.box3}>
              <img src={image3} alt="" className={classes.image} />
            </div>
            <div className={classes.box4}>
              <img src={image4} alt="" className={classes.image} />
            </div>
            <div className={classes.box5}>
              <img src={image5} alt="" className={classes.image} />
            </div>
          </div>
        </VisibilitySensor>
      </div>
      <div>
        <VisibilitySensor
          onChange={onChangePhotosLeft}
          partialVisibility={{ top: true }}
          offset={{ top: 50 }}
        >
          <div className={photosClassesLeft}>
            <div className={classes.box6}>
              <img src={image6} alt="" className={classes.image} />
            </div>
            <div className={classes.box7}>
              <img src={image2} alt="" className={classes.image} />
            </div>
            <div className={classes.box8}>
              <img src={image8} alt="" className={classes.image} />
            </div>
            <div className={classes.box9}>
              <img src={image9} alt="" className={classes.image} />
            </div>
            <div className={classes.box10}>
              <img src={image10} alt="" className={classes.image} />
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={onChangeTextRight}
          partialVisibility={{ top: true }}
          offset={{ top: 50 }}
        >
          <div className={textClassesRight}>
            <h3>
              We have tons of professional photographers, who would make you
              feel like a real-world photo model
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default IntroSection;
