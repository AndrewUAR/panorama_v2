import React, { useState } from 'react';
import { makeStyles, Hidden } from '@material-ui/core';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import styles from '../../../assets/jss/views/HomePageStyle/categoriesSectionStyles';
import image1 from '../../../assets/img/categories/portrait.jpg';
import image2 from '../../../assets/img/categories/event.jpg';
import image3 from '../../../assets/img/categories/studio.jpg';
import image4 from '../../../assets/img/categories/family.jpg';
import image5 from '../../../assets/img/categories/newborn.jpg';

const useStyles = makeStyles(styles);

const CategoriesSection = () => {
  const [isVisibleTop, setVisibleTop] = useState(false);
  const [isVisibleBottom, setVisibleBottom] = useState(false);
  const classes = useStyles();
  const categoriesTitle = classNames({
    [classes.categoryTitle]: true,
    [classes.title]: false
  });

  const onChangeTop = (isVisible) => {
    isVisible ? setVisibleTop(true) : setVisibleTop(false);
  };

  const onChangeBottom = (isVisible) => {
    isVisible ? setVisibleBottom(true) : setVisibleBottom(false);
  };

  const group1Classes = classNames({
    [classes.group1]: true,
    [classes.animationTop]: isVisibleTop
  });

  const group2Classes = classNames({
    [classes.group2]: true,
    [classes.animationBottom]: isVisibleBottom
  });

  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>Search by most popular categories</h1>
      <VisibilitySensor
        onChange={onChangeTop}
        partialVisibility={{ top: true }}
        offset={{ top: 50 }}
      >
        <div className={group1Classes}>
          <div className={classes.outerContainer}>
            <div className={classes.imageContainer}>
              <h2 className={categoriesTitle}>
                Portrait
                <br />
                Photography
              </h2>
              <img className={classes.image} src={image1} alt="" />
            </div>
          </div>
          <div className={classes.outerContainer}>
            <div className={classes.imageContainer}>
              <h2 className={categoriesTitle}>
                Event
                <br />
                Photography
              </h2>
              <img className={classes.image} src={image2} alt="" />
            </div>
          </div>
          <Hidden smDown>
            <div className={classes.outerContainer}>
              <div className={classes.imageContainer}>
                <h2 className={categoriesTitle}>
                  Studio
                  <br />
                  Photography
                </h2>
                <img className={classes.image} src={image3} alt="" />
              </div>
            </div>
          </Hidden>
        </div>
      </VisibilitySensor>
      <Hidden mdUp>
        <VisibilitySensor
          partialVisibility={{ top: true }}
          offset={{ top: 50 }}
        >
          <div className={classNames(classes.group2, classes.groupHidden)}>
            <div className={classes.outerContainer}>
              <div className={classes.imageContainer}>
                <h2 className={categoriesTitle}>
                  Studio
                  <br />
                  Photography
                </h2>
                <img className={classes.image} src={image3} alt="" />
              </div>
            </div>
          </div>
        </VisibilitySensor>
      </Hidden>
      <VisibilitySensor
        onChange={onChangeBottom}
        partialVisibility={{ top: true }}
        offset={{ top: 50 }}
      >
        <div className={group2Classes}>
          <div className={classes.outerContainer}>
            <div className={classes.imageContainer}>
              <h2 className={categoriesTitle}>
                Family
                <br />
                Photography
              </h2>
              <img className={classes.image} src={image4} alt="" />
            </div>
          </div>
          <div className={classes.outerContainer}>
            <div className={classes.imageContainer}>
              <h2 className={categoriesTitle}>
                Newborn
                <br />
                Photography
              </h2>
              <img className={classes.image} src={image5} alt="" />
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default CategoriesSection;
