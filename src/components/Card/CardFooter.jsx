import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/components/cardFooterStyle';

const useStyles = makeStyles(styles);

const CardFooter = (props) => {
  const { children, ...rest } = props;
  const classes = useStyles();
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default CardFooter;
