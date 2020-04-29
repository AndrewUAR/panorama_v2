import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../../components/FormInput/FormInput';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from "@material-ui/icons/Email";
import styles from "../../../assets/jss/views/SettingsPageStyle/settingsStyle";
import { makeStyles } from '@material-ui/core';
import Button from "../../../components/Button/CustomButton";

const useStyles = makeStyles(styles);

const GeneralSettingsForm = props => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: ''
  });

  const [error, setError] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    emailConfirmError: ''
  })
  
  const { firstName, lastName, email, emailConfirm} = user;
  const { firstNameError, lastNameError, emailError, emailConfirmError } = error;
  const classes = useStyles();

  const onChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }



  return (
    <div className={classes.formContainer}>
      <form className={classes.inputForm}>
        <div className={classes.inputSection}>
          <h3>Full Name</h3>
          <div className={classes.inputField}>
            <PersonIcon className={classes.inputFieldIcon}/>
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
          <div className={classes.inputField}>
            <PersonIcon className={classes.inputFieldIcon}/>
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
          </div>
          <div className={classes.inputSection}>
            <h3>Email</h3>
            <div className={classes.inputField}>
              <EmailIcon className={classes.inputFieldIcon}/>
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
            <div className={classes.inputField}>
              <EmailIcon className={classes.inputFieldIcon}/>
              <FormInput
                id="emailConfirm"
                labelText="Confirm Email"
                underlineColor="underlineTeal"
                inputProps={{
                  placeholder: "Confirm Email",
                  type: "text",
                  name: "emailConfirm",
                  value: emailConfirm,
                  autoComplete: 'off'
                }}
                error={firstNameError}
                onChange={onChange}
              />
          </div>
        </div>
        <div className={classes.buttonGroup}>
          <Button color="success">Update</Button>
          <Button color="danger">Cancel</Button>
        </div>
      </form>
    </div>
  )
}

GeneralSettingsForm.propTypes = {

}

export default GeneralSettingsForm
