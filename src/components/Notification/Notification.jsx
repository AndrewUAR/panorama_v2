import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';
import { removeSnackbar } from '../../app/actions/notificationActions';

const Notification = (props) => {
  const { notifications, removeSnackbar } = props;
  const [displayed, setDisplayed] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id) => {
    setDisplayed([...displayed, id]);
  };

  const removeDisplayed = (id) => {
    const updateDisplayed = _.filter(displayed, { key: id });
    setDisplayed(updateDisplayed);
  };

  const action = (key) => (
    <Button
      onClick={() => {
        closeSnackbar(key);
      }}
    >
      Dismiss
    </Button>
  );

  useEffect(() => {
    _.forEach(
      notifications,
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          closeSnackbar(key);
          return;
        }
        if (displayed.includes(key)) {
          return;
        }

        enqueueSnackbar(message, {
          key,
          action,
          ...options,
          autoHideDuration: 5000,
          preventDuplicate: true,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right'
          },
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            removeSnackbar(myKey);
            removeDisplayed(myKey);
          }
        });
        storeDisplayed(key);
      }
    );
    // eslint-disable-next-line
  }, [notifications, closeSnackbar, enqueueSnackbar]);

  return null;
};

const actions = {
  removeSnackbar
};

const mapStateToProps = (state) => ({
  notifications: state.notifications.notifications
});

Notification.propTypes = {
  notifications: PropTypes.array
};

export default connect(mapStateToProps, actions)(Notification);
