import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MessageIcon from '@material-ui/icons/Message';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import EventIcon from '@material-ui/icons/Event';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RateReviewIcon from '@material-ui/icons/RateReview';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Button from '../../components/Button/CustomButton';
import styles from '../../assets/jss/views/AccountPageStyle/sidebarStyle';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(styles);

const Sidebar = (props) => {
  const { user } = props;
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    setExpanded(isLargeScreen);
  }, [isLargeScreen]);

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <div className={classes.photoArea}>
      <div className={classes.box}>
        <div style={{ height: '100%', width: '100%' }}>
          <img
            src={user.profilePhoto}
            alt="userPhoto"
            className={classes.profPhoto}
          />
          <h3
            className={classes.userName}
            onClick={() => history.push('/my-profile')}
          >
            {user.firstName} {user.lastName}
          </h3>
        </div>
        <Accordion
          expanded={expanded}
          onChange={handleChange}
          classes={{ root: classes.accordion, expanded: classes.accordion }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.sideBarTitle}>Menu</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionList}>
            <GridContainer className={classes.buttonGroup}>
              <GridItem xs={6} sm={6} md={12}>
                <Button
                  fullWidth
                  color="transparent"
                  sideBarButton
                  startIcon={<MessageIcon />}
                >
                  My Messages
                </Button>
                <Button
                  fullWidth
                  color="transparent"
                  sideBarButton
                  onClick={() => history.push('/my-profile/albums')}
                  startIcon={<BurstModeIcon />}
                >
                  My Albums
                </Button>
                <Button
                  fullWidth
                  color="transparent"
                  sideBarButton
                  startIcon={<EventIcon />}
                >
                  My Bookings
                </Button>
              </GridItem>
              <GridItem xs={6} sm={6} md={12}>
                <Button
                  fullWidth
                  color="transparent"
                  sideBarButton
                  onClick={() => history.push('/my-profile/my-calendar')}
                  startIcon={<DateRangeIcon />}
                >
                  My Calender
                </Button>
                <Button
                  fullWidth
                  color="transparent"
                  sideBarButton
                  startIcon={<RateReviewIcon />}
                >
                  My Reviews
                </Button>
                <Button
                  fullWidth
                  color="transparent"
                  sideBarButton
                  startIcon={<CreditCardIcon />}
                >
                  My Payouts
                </Button>
              </GridItem>
            </GridContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.authUser
});

Sidebar.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(Sidebar);
