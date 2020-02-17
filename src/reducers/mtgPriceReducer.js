import { mtgCardState } from './defaultState';

export default (state = mtgCardState, action) => {
  switch (action.type) {
    case 'HANDLE_PRICE_ACTION':
      return {
        ...state,
        name: action.cardName,
        price: action.price,
      };
    default:
      return state;
  }
};
