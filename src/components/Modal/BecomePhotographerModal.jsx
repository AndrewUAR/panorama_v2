import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '../Button/CustomButton';
import { closeModal } from '../../app/actions/modalActions';
import styles from '../../assets/jss/components/modalStyle';

const useStyles = makeStyles(styles);

function getSteps() {
  return [
    'Sign in / Sign Up',
    'Create a photographer profile',
    'Make a portfolio'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `We are appreciating that you would like to become a part of our big family of photographers. 
              In order to create a photographer profile, you should have a regular account. 
              If you do have, please sign in or otherwise proceed to a registration page firstly.
              Then click a Become A Photographer button again.`;
    case 1:
      return `After signing in or signing up, please fill out the form and submit 
              your personal information in order to create a photographer profile.
              You will be asked to provide such information like your preferred location
              by which users usually search for photographers, photography categories, in which you are good,
              languages, which you speak and short also short introduction. Also you will need to
              create preferred photo session bookings, which users would be able to buy.`;
    case 2:
      return `You can create albums and upload photos to them in order to make an impressive portfolio,
              which would convince customers that you are a skilled photographer and would
              fulfill any their requirements.`;
    default:
      return 'Unknown step';
  }
}

const BecomePhotographerModal = (props) => {
  const { closeModal, authenticated } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modalContainer}
      open
      disableScrollLock={false}
      onClose={() => closeModal()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <div className={classes.stepper}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                classes={{
                  label: classes.label,
                  active: classes.activeLabel
                }}
              >
                {label}
              </StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    color="danger"
                    size="sm"
                  >
                    Back
                  </Button>
                  <Button
                    color="black"
                    size="sm"
                    onClick={
                      activeStep === steps.length - 1 ? handleClose : handleNext
                    }
                  >
                    {activeStep === steps.length - 1 ? 'Close' : 'Next'}
                  </Button>
                  {activeStep === steps.length - 1 && !authenticated && (
                    <>
                      <Button color="blue" size="sm" href="/login">
                        Sign In
                      </Button>
                      <Button color="blue" size="sm" href="/register">
                        Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
});

const actions = {
  closeModal
};

BecomePhotographerModal.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default connect(mapStateToProps, actions)(BecomePhotographerModal);
