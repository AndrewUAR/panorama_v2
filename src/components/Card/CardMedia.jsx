import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import styles from '../../assets/jss/components/carMediaStyles';

const useStyles = makeStyles(styles);

const MediaCard = props => {
  const { alt, height, image, title} = props;
  const classes = useStyles();
  return (
    <CardMedia
      component="img"
      alt={alt}
      height={height}
      image={image}
      title={title}
    />
  )
}

MediaCard.propTypes = {

}

export default MediaCard;
