import { createStore } from "redux";
import {reducer} from './../Reducers/index';

export const redux_store = createStore(reducer,{});