import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/components/cardBodyStyle';

const useStyles = makeStyles(styles);

const CardContent = (props) => {
  const { children } = props;

  const classes = useStyles();

  const cardContentClasses = classNames({
    [classes.cardBody]: true
  });

  return <div className={cardContentClasses}>{children}</div>;
};

CardContent.propTypes = {
  children: PropTypes.node
};

export default CardContent;
