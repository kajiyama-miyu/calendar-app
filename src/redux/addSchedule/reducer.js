import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
} from "./actions";
import dayjs from "dayjs";

const init = {
  //フォームデータ
  form: {
    title: "",
    description: "",
    date: dayjs(),
    location: "",
  },
  //dialogが飛来エチルかどうかの状態を表す
  isDialogOpen: false,
};

const addScheduleReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    //現在のstateの中に新しいformw追加しつつformの中でも現在のformに対して新しいデータを展開
    case ADD_SCHEDULE_SET_VALUE:
      return { ...state, form: { ...state.form, ...payload } };
    case ADD_SCHEDULE_OPEN_DIALOG:
      return { ...state, isDialogOpen: true };
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return init;
    default:
      return state;
  }
};

export default addScheduleReducer;
