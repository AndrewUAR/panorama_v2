import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '../../components/Button/CustomButton';
import Typography from '@material-ui/core/Typography';
import ColorlibStepIcon from "./ColorlibStepIcon";
import { colorLibConnectorStyles, createPhotographerProfilePageStyle } from "../../assets/jss/views/CreatePhotographerProfilePageStyle/CreatePhotographerProfilePageStyle";
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import PhotographerForm from './Steps/PhotographerForm';

const useStyles = makeStyles(createPhotographerProfilePageStyle);

export const ColorlibConnector = withStyles(colorLibConnectorStyles)(StepConnector);

function getSteps() {
  return ['Fill out the form', 'Create a portfolio', 'Choose payment options'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PhotographerForm />;
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <GridContainer justify="center" className={classes.container}>
      <GridItem xs={12} sm={10} md={8} className={classes.root}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel classes={{label: classes.label}} StepIconComponent={ColorlibStepIcon} className={classes.labelContainer}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </div>
            ) : (
              <div>
                <div>{getStepContent(activeStep)}</div>
                <div className={classes.actionsContainer}>
                  <Button 
                    disabled={activeStep === 0} 
                    onClick={handleBack}
                    color="black" 
                    size="sm"
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="blue"
                    onClick={handleNext}
                    size="sm"
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
      </GridItem>
    </GridContainer>
  );
}