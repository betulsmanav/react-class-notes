// !birden fazla reducer kullanacaksak =>combineReducers
// !createStore=> yeni storlar olusturmak icin 

import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/TodoReducer";

// ?bu sekilde tanimlama yapabilirim ama birden fazla reducer varsa hepsini kontrol edebilmek icin asagideki sytax i kullandik
// export const combinedStores = () => {
//   const store = createStore(counterReducer);
//   return store;
// };



const reducers = combineReducers({
  counterReducer: counterReducer,
  todoReducer: todoReducer
});



export const myStore =createStore(reducers)