import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from "../../../assets/jss/views/CreatePhotographerProfilePageStyle/Steps/photographerFormStyle";
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Checkbox from "../../../components/Checkbox/Checkbox";

const useStyles = makeStyles(styles);

const TermsAndConditions = props => {

  const {checked, handleChecked, label} = props;

  const classes = useStyles();

  return (
    <GridContainer justify="center">
      <GridItem xs={11} sm={10} md={7} className={classes.formContainer}>
        <Box displayPrint="block" className={classes.termsContainer}>
          <h2 className={classes.title}>Terms And Agreements</h2>
          {[...new Array(20)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
        <Checkbox className={classes.checkbox} checked={checked} onChange={handleChecked} label={label} />
      </GridItem>
    </GridContainer>
  )
}

TermsAndConditions.propTypes = {

}

export default TermsAndConditions
