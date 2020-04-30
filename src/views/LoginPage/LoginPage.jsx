import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from '../../components/Grid/GridItem';
import styles from "../../assets/jss/views/loginPageStyle.js";
import CustomCard from '../../components/Card/Card';
import CardContent from '../../components/Card/CardContent';
import {  List, ListItemIcon } from '@material-ui/core';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/Button/CustomButton';
import CardFooter from "../../components/Card/CardFooter";
import CardHeader from "../../components/Card/CardHeader";
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { loginUser } from "../../app/actions/authActions";
import { deleteError } from '../../app/actions/errorActions';

const useStyles = makeStyles(styles);

const LoginPage = props => {
  const { loginUser, authenticated, history, errorMsg } = props;

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (authenticated) {
      history.push('/')
    }
  }, [authenticated, history]);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(deleteError())
    }
  }, [])

  const { email, password } = user;
  
  const classes = useStyles();

  const onChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
  }

  return (
    <>
    <div className={classes.pageHeader}>
      <div className={classes.container}>
        <GridContainer justify="flex-start">
          <GridItem xs={12} sm={6} md={4}>
            <CustomCard color="black">
                <CardHeader
                  login
                  color="blue"
                >
                  <h3 className={classes.cardTitle}>Login</h3>
                  <List className={classes.cardTitleIcons}>
                    <ListItemIcon>
                      <CustomButton justIcon><i className="fab fa-facebook" /></CustomButton>
                    </ListItemIcon>
                    <ListItemIcon>
                      <CustomButton justIcon><i className="fab fa-google" /></CustomButton>
                    </ListItemIcon>
                    <ListItemIcon>
                      <CustomButton justIcon><i className="fab fa-twitter" /></CustomButton>
                    </ListItemIcon>
                  </List>
                </CardHeader>
                <CardContent>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      <form onSubmit={onSubmit}>
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
                              autoComplete: 'off',
                            }}
                            onChange={onChange}
                          />
                        </div>
                        <CardFooter>
                        {errorMsg && <p className={classes.error}>{errorMsg}</p>}
                        <CustomButton type="submit" color="blue">Sign In</CustomButton>
                        <List className={classes.cardFooterLinks}>
                          <Link to="/forgotPassword">Forgot Password</Link>
                          <Link to="/register">Sign Up</Link>
                        </List>
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
  </>
  )
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  errorMsg: state.error.error
})

const actions = ({
  loginUser,
  deleteError
})

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
  deleteError: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
}

export default connect(mapStateToProps, actions)(LoginPage);
