import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from '../../components/Grid/GridContainer';

import styles from '../../assets/jss/views/AccountPageStyle/AccountPageStyle';
import GridItem from '../../components/Grid/GridItem';
import PhotographerAccountPage from './PhotographerAccountPage/PhotographerAccountPage';
import Sidebar from './Sidebar';

const useStyles = makeStyles(styles);

const AccountPage = (props) => {
  const { component } = props;

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(false)
    // eslint-disable-next-line
  }, []);

  const classes = useStyles();

  return (
    <>
      <GridContainer justify="center" className={classes.container}>
        <GridItem xs={12} sm={6} md={3} lg={2} className={classes.sidebar}>
          <Sidebar />
        </GridItem>
        <GridItem xs={12} sm={11} md={8} lg={8} className={classes.mainArea}>
          {component || <PhotographerAccountPage />}
        </GridItem>
      </GridContainer>
    </>
  );
};

AccountPage.propTypes = {
  component: PropTypes.node
};

export default AccountPage;
