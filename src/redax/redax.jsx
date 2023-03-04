import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  basketItems: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload],
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basketItems: state.basketItems.filter(
          item => item.id !== action.payload
        ),
      };
    case 'CLEAR_BASKET':
      return {
        ...state,
        basketItems: [],
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
