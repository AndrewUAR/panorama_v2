import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from '../../components/Grid/GridItem';
import styles from "../../assets/jss/views/resetPasswordPageStyle.js";
import CustomCard from '../../components/Card/Card';
import CardContent from '../../components/Card/CardContent';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/Button/CustomButton';
import CardFooter from "../../components/Card/CardFooter";
import CardHeader from "../../components/Card/CardHeader";
import Footer from "../../components/Footer/Footer";
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(styles);

const ResetPasswordPage = props => {
  
  const classes = useStyles();

  return (
    <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="flex-start">
            <GridItem xs={12} sm={6} md={4}>
              <CustomCard color="black">
                <CardHeader
                  login
                  color="blue"
                >
                  <h3 className={classes.cardTitle}>Reset Password</h3>
                </CardHeader>
                <CardContent>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>                   
                      <div className={classes.cardInput}>
                      <LockIcon className={classes.cardInputIcon}/>
                      <FormInput 
                        id="password"
                        labelText="New Password"
                        underlineColor="underlineTeal"
                        inputProps={{
                          placeholder: "New Password",
                          type: "password",
                          name: "password",
                          value: "",
                          autoComplete: 'off'
                        }}
                      />
                    </div>
                    <div className={classes.cardInput}>
                      <LockIcon className={classes.cardInputIcon}/>
                      <FormInput 
                        id="passwordConfirm"
                        labelText="Confirm New Password"
                        underlineColor="underlineTeal"
                        inputProps={{
                          placeholder: "Confirm New Password",
                          type: "password",
                          name: "passwordConfirm",
                          value: "",
                          autoComplete: 'off',
                        }}
                      />
                    </div>
                    </GridItem>
                  </GridContainer>
                </CardContent>
                <CardFooter>
                  <CustomButton color="blue">Reset</CustomButton>
                </CardFooter>
              </CustomCard>
            </GridItem>
          </GridContainer>
        </div>
    </div>
  )
}

ResetPasswordPage.propTypes = {

}

export default ResetPasswordPage;
