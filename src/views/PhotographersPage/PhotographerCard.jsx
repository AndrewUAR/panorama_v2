import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography, Tooltip } from '@material-ui/core';
import Card from '../../components/Card/Card';
import MediaCard from '../../components/Card/CardMedia';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CardContent from '../../components/Card/CardContent';
import styles from '../../assets/jss/views/photographersPageStyle';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';

const useStyles = makeStyles(styles);

const PhotographerCard = (props) => {
  const { photographerObj } = props;
  const [favorite, setFavorite] = useState(false);
  const { firstName, lastName, profilePhoto, photographer } = photographerObj;
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Card color="blue">
        <CardHeader overflow="overflowBottom">
          <Tooltip title={photographer.ratingsAverage} placement="right" arrow>
            <div>
              <Rating
                name="read-only"
                value={photographer.ratingsAverage}
                precision={0.1}
                readOnly
              />
            </div>
          </Tooltip>
          {favorite ? (
            <FavoriteIcon
              className={classes.favoriteFilledIcon}
              onClick={() => setFavorite(false)}
            />
          ) : (
            <FavoriteBorderIcon
              className={classes.favoriteIcon}
              onClick={() => setFavorite(true)}
            />
          )}
        </CardHeader>
        <MediaCard
          component="img"
          alt="Photographer"
          height={300}
          image={profilePhoto}
          title="Andrew"
        />
        <CardContent>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.fullName}>
              <span>
                {firstName}
                {lastName}
              </span>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} className={classes.cardInfoArea}>
              <div className={classes.cardRating}>
                <span>
                  Hired:
                  {photographer.hired}
                </span>
                <span>
                  Rated times:
                  {photographer.ratingsQuantity}
                </span>
              </div>
              <div className={classes.infoRow}>
                <Typography noWrap>
                  Location: {photographer.location.placeName}
                </Typography>
              </div>
              <div className={classes.infoRow}>
                <Typography noWrap>
                  Languages: {photographer.languages.join(', ')}
                </Typography>
              </div>
            </GridItem>
          </GridContainer>
        </CardContent>
        <CardFooter className={classes.cardFooter}>
          <Typography noWrap>Price per hour: 45$</Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

PhotographerCard.propTypes = {
  photographerObj: PropTypes.object
};

export default PhotographerCard;
