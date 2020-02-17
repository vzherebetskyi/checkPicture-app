import React from 'react';
import { connect } from 'react-redux';

import pictures from '../utils/importPictures';
import { handleUploadPic } from '../actions/pictureActions';
import convertToBlackWhite from '../utils/black_and_white';
import { PICTURE_MAX_SIZE, PICTURE_TOO_LARGE } from '../utils/constants';

class AddPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureSource: undefined,
      pictureSize: true,
    };
    window.localStorage.clear();
  }

  uploadPicture = () => {
    this.props.dispatch(handleUploadPic(
      convertToBlackWhite(document.getElementsByName('cardImage')[0]),
    ));
  };

  previewPicture = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(e.target.files[0].type, e.target.files[0].size);

    e.target.files[0].size > PICTURE_MAX_SIZE ? (
    window.localStorage.getItem('pictureSource') && window.localStorage.removeItem('pictureSource'),
      this.setState(() => ({
      pictureSize: false,
      pictureSource: undefined,
    }))
    ) :
    reader.onloadend = () => {
      window.localStorage.setItem('pictureSource', reader.result);
      this.setState(() => ({
        pictureSource: 'selected',
      }));
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { pictureSize, pictureSource } = this.state;
    return (
      <div>
        <form className="pictureBlock">
          <img className="mainPicture" src={window.localStorage.getItem('pictureSource') || pictures['no_image.png']} alt="Uploaded Pic" name="cardImage" />
          <div>
            <label> 
              <p>Select Picture</p>
              <input type="file" name="filename" accept=".png, .jpg, .jpeg" onChange={(e) => this.previewPicture(e)} />
            </label>
            { !pictureSize && <p>{PICTURE_TOO_LARGE}</p>}
            <button type="button" onClick={pictureSource && this.uploadPicture}>
              Upload Picture
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddPicture);
