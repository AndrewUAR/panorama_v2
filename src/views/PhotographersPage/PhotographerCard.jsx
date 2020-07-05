import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../../components/Card/Card';
import MediaCard from '../../components/Card/CardMedia';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CardContent from '../../components/Card/CardContent';
import Rating from '@material-ui/lab/Rating';
import styles from '../../assets/jss/views/photographersPageStyle';
import CardHeader from '../../components/Card/CardHeader';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);

const PhotographerCard = (props) => {
  const { photographerObj } = props;
  const { firstName, lastName, profilePhoto, photographer } = photographerObj;
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Card color="blue">
        <CardHeader overflow="overflowBottom">
          <Rating
            name="read-only"
            value={photographer.ratingsAverage}
            readOnly
          />
          <FavoriteBorderIcon className={classes.favoriteIcon} />
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
                {firstName}&nbsp;{lastName}
              </span>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} className={classes.cardInfoArea}>
              <div className={classes.cardRating}>
                <span>Hired: {photographer.hired}</span>
                <span>Rated times: {photographer.ratingsQuantity}</span>
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
              <div className={classes.infoRow}>
                <Typography noWrap>Price per hour: 45$</Typography>
              </div>
            </GridItem>
          </GridContainer>
        </CardContent>
      </Card>
    </div>
  );
};

PhotographerCard.propTypes = {
  photographerObj: PropTypes.object
};

export default PhotographerCard;
