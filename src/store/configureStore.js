import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

import mtgPriceReducer from '../reducers/mtgPriceReducer';
import uploadPicReducer from '../reducers/uploadPicReducer';

const reducers = combineReducers({
  mtgPriceState: mtgPriceReducer,
  uploadPicState: uploadPicReducer,
});

// Store creation

export default () => {
  const store = createStore(
    reducers,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  );
  return store;
};
