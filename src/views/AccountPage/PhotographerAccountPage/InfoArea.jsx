import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/views/AccountPageStyle/AccountPageStyle";

const useStyles = makeStyles(styles);

const InfoArea = props => {
  const { user } = props;
  console.log(user)

  const { introduction, languages, categories, location } = user.photographer;

  const classes = useStyles();

  return (
    <div className={classes.info}>
      <div className={classes.personalInfo}>
        <p>Introduction: {introduction}</p>
        <p>Languages: {languages}</p>
        <p>Categories: {categories}</p>
        <p>Serve Location: {location.placeName}</p>
      </div>
      
    </div>
  )
}
const mapStateToProps = state => ({
  user: state.auth.authUser
})

InfoArea.propTypes = {
  
}

export default connect(mapStateToProps)(InfoArea);
