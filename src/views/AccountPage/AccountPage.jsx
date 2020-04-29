import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import SideBar from './Sections/SideBar';
import styles from '../../assets/jss/views/SettingsPageStyle/settingsPageStyle';
import GeneralSettingsForm from './Sections/GeneralSettingsForm';
import SecuritySettingsForm from './Sections/SecuritySettingsForm';

const useStyles = makeStyles(styles)

const AccountPage = props => {
  const [section, setSection] = useState("general");
  const classes = useStyles();

  const onChange = section => {
    setSection(section);
  }

  return (
    <div className={classes.container}>
      <div className={classes.settings}>
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} sm={12} md={3}>
            <SideBar onChange={onChange} />
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            {section === "general" && <GeneralSettingsForm />}
            {section === "security" && <SecuritySettingsForm />}
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  )
}

AccountPage.propTypes = {

}

export default AccountPage;
