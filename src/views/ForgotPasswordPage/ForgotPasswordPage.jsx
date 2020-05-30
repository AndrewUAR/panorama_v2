import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {PulseLoader} from "react-spinners";
import { css } from "@emotion/core";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/views/forgotPasswordStyle.js";
import GridContainer from '../../components/Grid/GridContainer.jsx';
import GridItem from '../../components/Grid/GridItem.jsx';
import CustomCard from '../../components/Card/Card.jsx';
import CardContent from '../../components/Card/CardContent.jsx';
import FormInput from '../../components/FormInput/FormInput.jsx';
import EmailIcon from '@material-ui/icons/Email';
import CardFooter from '../../components/Card/CardFooter.jsx';
import Button from '../../components/Button/CustomButton.jsx';
import CardHeader from '../../components/Card/CardHeader.jsx';
import { validateInputs } from '../../app/helper/validateInput';
import { forgotMyPassword } from '../../app/actions/authActions.js';

const useStyles = makeStyles(styles);

const buttonLoaderStyle = css`
  display: flex;
`;

const ForgotPasswordPage = props => {
  
  const { 
    errorMsg, 
    forgotMyPassword, 
    authenticated, 
    history,
    loadingAsync 
  } = props;

  const [user, setUser] = useState({email: ''});
  const [error, setError] = useState({
    emailError: ''
  });

  const { email } = user;
  const { emailError } = error;

  useEffect(() => {
    if (authenticated) {
      history.push('/')
    }
  }, [authenticated, history]);
  
  const onChange = e => {
    setUser({email: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();
    const isValid = validateInputs(user, setError);
    if (isValid) forgotMyPassword(user)
  }

  const classes = useStyles();
  return (
    <div className={classes.pageHeader}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={9} md={8} className={classes.borderWrap}>
            <CustomCard color="black">
              <div className={classes.cardHeaderContainer}>
                <CardHeader
                  login
                  color="blue"
                >
                  <h3 className={classes.cardTitle}>Reset Password</h3>
                </CardHeader>
              </div>
              <form onSubmit={onSubmit} className={classes.cardForm}>
                <CardContent>
                  <div className={classes.formInput}>
                    <EmailIcon className={classes.formInputIcon}/>
                    <FormInput 
                      id="email"
                      labelText="Email"
                      underlineColor="underlineTeal"
                      inputProps={{
                        placeholder: "Email",
                        type: "email",
                        name: "email",
                        value: email,
                        autoComplete: 'off'
                      }}
                      error={emailError}
                      onChange={onChange}
                    />
                  </div>
                  {errorMsg && <p className={classes.error}>{errorMsg}</p>}
                </CardContent>
                <CardFooter className={classes.formButton}>
                  <Button 
                    type="submit" 
                    color="blue"
                    formNoValidate
                  >{loadingAsync 
                      ? <PulseLoader
                          color={"#fff"}
                          css={buttonLoaderStyle}
                          loading={true}
                          margin={2}
                        />
                      : <>Reset</>
                    }
                  </Button>
                </CardFooter>
              </form>
            </CustomCard>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  errorMsg: state.error.error,
  loadingAsync: state.async.loading
})

const actions = ({
  forgotMyPassword
})

ForgotPasswordPage.propTypes = {
  errorMsg: PropTypes.string,
  forgotMyPassword: PropTypes.func.isRequired
}

export default connect(mapStateToProps, actions)(ForgotPasswordPage);
