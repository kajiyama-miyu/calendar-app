//typeの定数宣言
//typeやpayload含むオブジェクとぉ返す関数
export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

//viewから直接呼び出す関数
//dispatchすることでreducerを介してstoreの値が更新される
export const calendarSetMonth = (payload) => ({
  type: CALENDAR_SET_MONTH,
  payload,
});
