import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import RadioInput from '../../../components/RadioInput/RadioInput';
import styles from '../../../assets/jss/views/CreatePhotographerProfilePageStyle/Steps/photographerFormStyle';
import { makeStyles } from '@material-ui/core/styles';
import FormInput from '../../../components/FormInput/FormInput';
import EmailIcon from '@material-ui/icons/Email';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

const useStyles = makeStyles(styles);

const PayoutMethods = (props) => {
  const { payPal, onChange, payPalError } = props;
  const [method, setMethod] = useState('payPal');

  const classes = useStyles();

  const radioOptions = [
    { label: 'PayPal', value: 'payPal', icon: 'fab fa-paypal' },
    {
      label: 'ACH/Direct Deposit',
      value: 'directDeposit',
      icon: 'fas fa-university'
    }
  ];

  const optionChange = (e) => {
    setMethod(e.target.value);
  };

  return (
    <GridContainer justify="center">
      <GridItem xs={11} sm={8} md={5}>
        <form className={classes.formContainer}>
          <RadioInput
            direction="vertical"
            name="payoutMethod"
            options={radioOptions}
            value={method}
            onChange={optionChange}
          />
          {method === 'payPal' && (
            <div className={classes.accountCredentials}>
              <p className={classes.infoText}>
                Make sure that your account, which is an email address, is
                activated on PayPal before adding it as a payout method!
              </p>
              <div className={classes.formInput}>
                <EmailIcon className={classes.inputIcon} />
                <FormInput
                  id="payPal"
                  labelText="Account name"
                  underlineColor="underlineTeal"
                  inputProps={{
                    placeholder: 'Account name',
                    type: 'email',
                    name: 'payPal',
                    value: payPal,
                    autoComplete: 'off'
                  }}
                  onChange={onChange}
                  error={payPalError}
                />
              </div>
            </div>
          )}
          {method === 'directDeposit' && (
            <div className={classes.accountCredentials}>
              <p className={classes.infoText}>
                We are sorry, but direct deposit payouts are not supported yet.
              </p>
              <div className={classes.formInput}>
                <AccountBalanceIcon className={classes.inputIcon} />
                <FormInput
                  id="accountNumber"
                  disabled={true}
                  labelText="Account Number"
                  underlineColor="underlineTeal"
                  inputProps={{
                    placeholder: 'Account Number',
                    type: 'password',
                    name: 'accountNumber',
                    value: '',
                    autoComplete: 'off'
                  }}
                  onChange={onChange}
                />
              </div>
              <div className={classes.formInput}>
                <AccountTreeIcon className={classes.inputIcon} />
                <FormInput
                  id="routingNumber"
                  disabled={true}
                  labelText="Routing Number"
                  underlineColor="underlineTeal"
                  inputProps={{
                    placeholder: 'Routing Number',
                    type: 'password',
                    name: 'accountNumber',
                    value: '',
                    autoComplete: 'off'
                  }}
                  onChange={onChange}
                />
              </div>
            </div>
          )}
        </form>
      </GridItem>
    </GridContainer>
  );
};

PayoutMethods.propTypes = {
  payPalError: PropTypes.string,
  payPal: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default PayoutMethods;
