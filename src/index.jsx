import React from "react";
import ReactDOM from "react-dom";
import CalendarBoad from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";
import thunk from "redux-thunk";

//ローカライズ（日本時刻を指定する）
import "dayjs/locale/ja";
import { applyMiddleware } from "redux";
dayjs.locale("ja");

//storeを作成
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  // storeの情報をreact-reduxから使えるようにする処理（このままではコンポーネントからは参照できない）
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoad />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
