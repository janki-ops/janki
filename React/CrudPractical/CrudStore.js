import { createStore } from "redux";
import { CrudReducer } from "./CrudReducer";

export const CrudStore=createStore(CrudReducer)