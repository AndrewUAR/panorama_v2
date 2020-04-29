import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/components/cardHeaderStyle";

const useStyles = makeStyles(styles);

const CardHeader = props => {
  const { login, signup, color, children, ...rest } = props;
  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes.cardHeaderLogin]: login,
    [classes.cardHeaderSignup]: signup,
    [classes[color]]: color
  })
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  )
}

CardHeader.propTypes = {
  className: PropTypes.string,
  login: PropTypes.bool,
  signup: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "pink",
    "blue",
    "black"
  ])
}

export default CardHeader

