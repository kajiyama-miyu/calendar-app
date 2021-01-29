//reduxに接続する部分を書く場所
//reduxからのstateとreduceにdispathする関数をpropsとして提供するためのコンポーネント

import { connect } from "react-redux";
import CalendarBoad from "./presentations";
import { createCalendar } from "../../services/calendar";
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import {
  currentScheduleSetItem,
  currentScheduleOpenDialog,
} from "../../redux/currentSchedule/actions";
import { setSchedules } from "../../services/schedule";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

//storeの何か一つでも変更されると実行する
const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules,
});

const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    //dialogをopenするためのaction
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
  openCurrentScheduleDialog: (shedule, e) => {
    //他の発火しうるクリックイベントをキャンセルするメソッド。これによって新しい予定を作成するためのイベントの発火を防ぐ。
    e.stopPropagation();

    dispatch(currentScheduleSetItem(shedule));
    dispatch(currentScheduleOpenDialog(true));
  },
  fetchSchedule: (month) => {
    dispatch(asyncSchedulesFetchItem(month));
  },
});
//上のメソッドによって生成されたpropsのみを使用
//そのため上の結果が前回と異なる場合のみ実行される
const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar: month,
    schedules: { items: schedules },
  } = stateProps;

  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    fetchSchedule: () => dispatchProps.fetchSchedule(month),
    calendar,
    month,
  };
};
//第一引数はstoreから仏ような情報を選択してpropsの形にする関数
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoad);
