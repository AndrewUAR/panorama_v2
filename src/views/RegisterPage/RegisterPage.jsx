import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {PulseLoader} from "react-spinners";
import { css } from "@emotion/core";
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from '../../components/Grid/GridItem';
import styles from "../../assets/jss/views/registerPageStyle.js";
import CustomCard from '../../components/Card/Card';
import CardContent from '../../components/Card/CardContent';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/CustomButton';
import CardFooter from "../../components/Card/CardFooter";
import CardHeader from "../../components/Card/CardHeader";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { validateInputs, sanitizeInputs } from '../../app/helper/validateInput'
import { createUser } from "../../app/actions/authActions";
import { deleteError } from '../../app/actions/errorActions';

const buttonLoaderStyle = css`
  display: flex;
`;

const useStyles = makeStyles(styles);

const RegisterPage = props => {
  const { 
    createUser, 
    authenticated, 
    history, 
    errorMsg,
    deleteError,
    loadingAsync 
  } = props;

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const [error, setError] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmError: ''
  })

  useEffect(() => {
    if (authenticated) {
      history.push('/')
    }
  }, [authenticated, history]);

  useEffect(() => {
    return () => {
      deleteError()
    }
    // eslint-disable-next-line
  }, []);

  const { firstName, lastName, email, password, passwordConfirm} = user;

  const { firstNameError, lastNameError, emailError, passwordError, passwordConfirmError } = error;

  const onChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    sanitizeInputs({firstName, lastName}, setUser);
    const isValid = validateInputs(user, setError);
    if (isValid) createUser(user, history);
  }
  
  const classes = useStyles();

  return (
    <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={10} className={classes.borderWrap}>
              <CustomCard color="black">
                <div className={classes.cardHeaderContainer}>
                <CardHeader
                  login
                  color="blue"
                >
                  <h3 className={classes.cardTitle}>Register</h3>
                </CardHeader>
                </div>
                <CardContent>
                  <GridContainer justify="center"> 
                    <GridItem xs={10} sm={10} md={6}>
                      <div className={classes.buttonsSignUp}>
                        <Button color="blue" socialSignUp>
                          <i className="fab fa-facebook"/>Sign Up with Facebook
                        </Button>
                        <Button color="blue" socialSignUp>
                          <i className="fab fa-google"/>Sign Up with Google
                        </Button>
                        <Button color="blue" socialSignUp>
                          <i className="fab fa-twitter"/>Sign Up with Twitter
                        </Button>
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <form className={classes.form} onSubmit={onSubmit}>
                        <div className={classes.cardInput}>
                          <PersonIcon className={classes.cardInputIcon}/>
                          <FormInput 
                            id="firstName"
                            labelText="First Name"
                            underlineColor="underlineTeal"
                            inputProps={{
                              placeholder: "First Name",
                              type: "text",
                              name: "firstName",
                              value: firstName,
                              autoComplete: 'off'
                            }}
                            error={firstNameError}
                            onChange={onChange}
                          />
                        </div>
                        <div className={classes.cardInput}>
                          <PersonIcon className={classes.cardInputIcon}/>
                          <FormInput 
                            id="lastName"
                            labelText="Last Name"
                            underlineColor="underlineTeal"
                            inputProps={{
                              placeholder: "Last Name",
                              type: "text",
                              name: "lastName",
                              value: lastName,
                              autoComplete: 'off'
                            }}
                            error={lastNameError}
                            onChange={onChange}
                          />
                        </div>
                        <div className={classes.cardInput}>
                          <EmailIcon className={classes.cardInputIcon}/>
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
                        <div className={classes.cardInput}>
                          <LockIcon className={classes.cardInputIcon}/>
                          <FormInput 
                            id="password"
                            labelText="Password"
                            underlineColor="underlineTeal"
                            inputProps={{
                              placeholder: "Password",
                              type: "password",
                              name: "password",
                              value: password,
                              autoComplete: 'off'
                            }}
                            error={passwordError}
                            onChange={onChange}
                          />
                        </div>
                        <div className={classes.cardInput}>
                          <LockIcon className={classes.cardInputIcon}/>
                          <FormInput 
                            id="passwordConfirm"
                            labelText="Password Confirm"
                            underlineColor="underlineTeal"
                            inputProps={{
                              placeholder: "Password Confirm",
                              type: "password",
                              name: "passwordConfirm",
                              value: passwordConfirm,
                              autoComplete: 'off'
                            }}
                            error={passwordConfirmError}
                            onChange={onChange}
                          />
                        </div>
                        <CardFooter>
                        {errorMsg && <p className={classes.error}>{errorMsg}</p>}
                          <Button 
                            type="submit" 
                            color="blue" 
                            formNoValidate>
                            {loadingAsync 
                              ? <PulseLoader
                                  color={"#fff"}
                                  css={buttonLoaderStyle}
                                  loading={true}
                                  margin={2}
                                />
                              : <>Sign Up</>
                            }
                          </Button>
                        </CardFooter>
                    </form>
                  </GridItem>
                </GridContainer>
                </CardContent>
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
  createUser,
  deleteError
})

RegisterPage.propTypes = {
  createUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
  deleteError: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

export default connect(mapStateToProps, actions)(RegisterPage);
