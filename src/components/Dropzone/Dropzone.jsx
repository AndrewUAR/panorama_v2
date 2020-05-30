import React, {useCallback} from 'react';
import _ from "lodash";
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from "@material-ui/core";
import styles from "../../assets/jss/components/dropzoneStyle";
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

const useStyles = makeStyles(styles);

const Dropzone = (props) => {
  const { setFile, multiple, message } = props;

  const onDrop = useCallback(acceptedFiles => {
    if (multiple) acceptedFiles = _.slice(acceptedFiles, 0, 10);
    setFile(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
  })))
  }, [setFile])

  const {getRootProps, getInputProps} = useDropzone({
    multiple: multiple,
    accept: "image/*",
    onDrop
  });

  

  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <div className={classes.boxContent}>
          <SystemUpdateAltIcon />
          <p>{message}</p>
        </div>
      </div>
    </section>
  );
};

Dropzone.propTypes = {
  setFile: PropTypes.func.isRequired
}

export default Dropzone;