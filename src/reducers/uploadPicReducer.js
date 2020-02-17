import { uploadPicState } from './defaultState';

export default (state = uploadPicState, action) => {
  switch (action.type) {
    case 'HANDLE_UPLOAD_ERROR':
      return { ...state, serverError: true };
    case 'HANDLE_UPLOAD_SUCCESS':
      return { ...state, pictureUploaded: true };
    default:
      return state;
  }
};
