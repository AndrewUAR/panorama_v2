import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { PulseLoader } from 'react-spinners';
import { css } from '@emotion/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '../../components/Button/CustomButton';
import ColorlibStepIcon from './ColorlibStepIcon';
import {
  colorLibConnectorStyles,
  createPhotographerProfilePageStyle
} from '../../assets/jss/views/CreatePhotographerProfilePageStyle/CreatePhotographerProfilePageStyle';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import PhotographerForm from './Steps/PhotographerForm';
import { validateInputs } from '../../app/helper/validateInput';
import TermsAndConditions from './Steps/TermsAndConditions';
import PayoutMethods from './Steps/PayoutMethods';
import { createPhotographerProf } from '../../app/actions/photographerActions';

const useStyles = makeStyles(createPhotographerProfilePageStyle);

const ColorlibConnector = withStyles(colorLibConnectorStyles)(StepConnector);

const buttonLoaderStyle = css`
  display: flex;
`;

const getSteps = () => [
  'Terms And Agreements',
  'Photographer Form',
  'Choose Payout Method'
];

const CreatePhotographerProfilePage = (props) => {
  const { createPhotographerProf, email, loadingAsync } = props;

  const [photographer, setPhotographer] = useState({
    introduction: '',
    languages: [],
    location: '',
    categories: [],
    payPal: email
  });

  const [error, setError] = useState({
    introductionError: '',
    languagesError: '',
    locationError: '',
    categoriesError: '',
    payPalError: ''
  });

  const [checked, setChecked] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const { payPal } = photographer;

  const onChange = (e) => {
    const { name, value } = e.target;
    setPhotographer((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const createAccount = () => {
    const valid = validateInputs({ payPal }, setError);
    if (valid) createPhotographerProf(photographer, history);
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  const handleLanguagesChange = (e, values) => {
    setPhotographer((prevState) => ({
      ...prevState,
      languages: values
    }));
  };
  const handleCategoriesChange = (e, values) => {
    setPhotographer((prevState) => ({
      ...prevState,
      categories: values
    }));
  };

  const handleLocationChange = (e, value) => {
    setPhotographer((prevState) => ({
      ...prevState,
      location: value
    }));
  };

  const handleNext = () => {
    let valid;
    if (activeStep === 1)
      valid = validateInputs(_.omit(photographer, 'payPal'), setError);
    if (activeStep !== 1 || valid) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TermsAndConditions
            checked={checked}
            handleChecked={handleChecked}
            label="I agree to the Terms and Agreements."
          />
        );
      case 1:
        return (
          <PhotographerForm
            photographer={photographer}
            error={error}
            onChange={onChange}
            handleLanguagesChange={handleLanguagesChange}
            handleCategoriesChange={handleCategoriesChange}
            handleLocationChange={handleLocationChange}
          />
        );
      case 2:
        return (
          <PayoutMethods
            payPal={payPal}
            onChange={onChange}
            payPalError={error.payPalError}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <GridContainer justify="center" className={classes.container}>
      <GridItem xs={12} sm={10} md={12} className={classes.borderWrap}>
        <div className={classes.root}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  classes={{
                    label: classes.label,
                    active: classes.activeLabel
                  }}
                  StepIconComponent={ColorlibStepIcon}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            <>{getStepContent(activeStep)}</>
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
                size="sm"
                disabled={!checked}
                onClick={() => {
                  activeStep === steps.length - 1
                    ? createAccount()
                    : handleNext();
                }}
              >
                {activeStep === steps.length - 1 ? (
                  loadingAsync ? (
                    <PulseLoader
                      color="#fff"
                      css={buttonLoaderStyle}
                      loading
                      margin={2}
                    />
                  ) : (
                    'Create'
                  )
                ) : (
                  'Next'
                )}
              </Button>
            </div>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
};
const mapStateToProps = (state) => ({
  email: state.auth.authUser.email,
  loadingAsync: state.async.loading
});
const actions = {
  createPhotographerProf
};

CreatePhotographerProfilePage.propTypes = {
  createPhotographerProf: PropTypes.func.isRequired,
  email: PropTypes.string,
  loadingAsync: PropTypes.bool
};

export default connect(mapStateToProps, actions)(CreatePhotographerProfilePage);
