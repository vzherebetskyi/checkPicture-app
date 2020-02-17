import { LOCAL_PIC_UPLOAD } from '../utils/constants';
import { HANDLE_UPLOAD_PIC_ERROR, HANDLE_UPLOAD_PIC_SUCCESS } from './action_types';

export const handleUploadPicError = () => ({
  type: HANDLE_UPLOAD_PIC_ERROR,
});

export const handleUploadPicSuccess = () => ({
  type: HANDLE_UPLOAD_PIC_SUCCESS,
});

export const handleUploadPic = (picture) => (dispatch => {
  const uploadPic = new XMLHttpRequest();
  console.log('picture uploaded ');
  uploadPic.open('POST', LOCAL_PIC_UPLOAD, true);
  uploadPic.setRequestHeader('Content-Type', 'text/plain');

  uploadPic.onreadystatechange = () => {
    if (uploadPic.readyState === 4 && uploadPic.status === 200) {
      dispatch(handleUploadPicSuccess());
    } else {
      console.log('Error found');
      dispatch(handleUploadPicError());
    }
  };

  uploadPic.send(JSON.stringify([picture]));
});
