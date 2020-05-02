import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import SideBar from './Sections/SideBar';
import styles from '../../assets/jss/views/SettingsPageStyle/settingsPageStyle';
import GeneralSettingsForm from './Sections/GeneralSettingsForm';
import SecuritySettingsForm from './Sections/SecuritySettingsForm';
import NotificationSettings from './Sections/NotificationSettings';
import Toast from '../../components/Toast/Toast';
import LoadingComponent from '../../app/layout/LoadingComponent';

const useStyles = makeStyles(styles)

const AccountPage = props => {
  const [section, setSection] = useState("general");
  const classes = useStyles();

  const onChange = section => {
    setSection(section);
  }

  return (
    <div className={classes.container}>
      <LoadingComponent />
      <div className={classes.settings}>
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} sm={12} md={3}>
            <SideBar onChange={onChange} />
          </GridItem>
          <GridItem xs={12} sm={12} md={9}>
            {section === "general" && <GeneralSettingsForm />}
            {section === "security" && <SecuritySettingsForm />}
            {section === "notifications" && <NotificationSettings />}
          </GridItem>
          
        </GridContainer>
      </div>
    </div>
  )
}

export default AccountPage;
