import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { colorLibStepIconStyles } from "../../assets/jss/views/CreatePhotographerProfilePageStyle/CreatePhotographerProfilePageStyle";


const useStyles = makeStyles(colorLibStepIconStyles);

function ColorlibStepIcon(props) {
  const classes = useStyles();
  const { active, completed } = props;

  const icons = {
    1: <ListAltIcon />,
    2: <AddPhotoAlternateIcon />,
    3: <CreditCardIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

export default ColorlibStepIcon
