import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import scheduleReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";

//reducerを一つにまとめる
//combineReducer{[state名], [reducer]}で対応づけている
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addScheduleReducer,
  schedules: scheduleReducer,
  currentSchedule: currentScheduleReducer,
});

export default rootReducer;
