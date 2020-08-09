import {combineReducers} from "redux";
//reducers
import {counterReducer} from "./Counter/counterReducer";
import {itemAddReducer} from "./ItemAdd/itemAddReducer";
import {postsReducer} from "./Posts/postsReducer";
import {authReducer} from "./Auth/authReducer";


export const rootReducer = combineReducers({
   count: counterReducer,
   items: itemAddReducer,
   posts: postsReducer,
   auth: authReducer
});