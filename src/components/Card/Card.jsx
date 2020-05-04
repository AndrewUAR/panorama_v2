import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles'
import styles from '../../assets/jss/components/cardStyle.js';

const useStyles = makeStyles(styles);

const CustomCard = props => {
  const { color, children, ...rest } = props;

  const classes = useStyles();


  const cardClasses = classNames({
    [classes.card]: true,
    [classes[color]]: color
  })

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  )
}

CustomCard.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "pink",
    "blue",
    "black",
    "teal"
  ])
}

export default CustomCard;
