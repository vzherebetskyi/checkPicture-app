import { SCRYFALL_PRICE } from '../utils/constants';
import { HANDLE_PRICE_ACTION } from './action_types';

export const setPrice = (price, cardName) => ({
  type: HANDLE_PRICE_ACTION,
  price,
  cardName,
});

export const getCardMID = (name) => (dispatch => {
  const requestCard = new XMLHttpRequest();
  const url = SCRYFALL_PRICE + name;
  let price;
  let cardName;

  requestCard.open('GET', url, true);
  requestCard.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  requestCard.onreadystatechange = () => {
    if (requestCard.readyState === 4 && requestCard.status === 200) {
      price = JSON.parse(requestCard.responseText).prices.usd;
      cardName = JSON.parse(requestCard.responseText).name;
      dispatch(setPrice(price, cardName));
    } else {
      console.log('Error found');
      price = 'undefined';
      cardName = JSON.parse(requestCard.responseText).code;
      dispatch(setPrice(price, cardName));
    }
  };
  requestCard.send();
});

//  else if 
