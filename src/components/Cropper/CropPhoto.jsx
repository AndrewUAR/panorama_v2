import React, { Component, createRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class CropPhoto extends Component {
  cropper = createRef();

  cropImage = () => {
    const { setImage } = this.props;
    if (typeof this.cropper.current.getCroppedCanvas() === 'undefined') {
      return;
    }

    this.cropper.current.getCroppedCanvas().toBlob((blob) => {
      setImage(blob);
    }, 'image/jpeg');
  };

  render() {
    const { imagePreview } = this.props;
    return (
      <Cropper
        ref={this.cropper}
        src={imagePreview}
        style={{ height: 300, width: 300 }}
        preview=".img-preview"
        aspectRatio={1}
        viewMode={1}
        background={false}
        dragMode="move"
        center={true}
        rotatable={true}
        guides={false}
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        crop={this.cropImage}
      />
    );
  }
}

export default CropPhoto;
