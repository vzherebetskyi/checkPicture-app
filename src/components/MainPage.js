import React from 'react';
import { connect } from 'react-redux';

import AddPicture from './AddPicture';
import { getCardMID } from '../actions/mtgPriceAPIActions';
import { ERROR_NOTIFICATION_1, SUCCESS_NOTIFICATION_1 } from '../utils/constants';
import Slider from './Slider';

const MainPage = ({ data, serverErrorState, dispatch }) => {
  const getPrice = (e) => {
    e.preventDefault();
    // console.log('works! ');
    const name = e.target.elements.card_name.value.trim().split(' ').join(',').toLowerCase();
    dispatch(getCardMID(name));
  };

  const { name, price } = data;
  const { serverError, pictureUploaded } = serverErrorState;
  return (
    <div>
      <AddPicture />
      <div className="infoOnCard">
        <h3>Here will be displayed info on your card.</h3>
      </div>
      <form onSubmit={getPrice}>
        <input type="text" name="card_name" />
        <button type="submit">Get Price</button>
      </form>
      {serverError && <p>{ ERROR_NOTIFICATION_1 }</p>}
      {pictureUploaded && <p>{ SUCCESS_NOTIFICATION_1 }</p>}
      <h2>
        Card Name:
        {name}
      </h2>
      <h2>
        Card Price:
        {price}
      </h2>
      <Slider />
    </div>
  );
};

const connectedMainPage = (state) => ({
  data: state.mtgPriceState,
  serverErrorState: state.uploadPicState,
});

export default connect(connectedMainPage)(MainPage);
