import dayjs from "dayjs";

export const createCalendar = (month) => {
  //今月の最初の日を追加
  const firstDay = getMonth(month);
  //最初の日の曜日のindexを取得
  const firstDayOfIndex = firstDay.day();

  //fill(0)で35個の値を0で初期化する
  return Array(35)
    .fill(0)
    .map((_, i) => {
      //演算（新しいdayjsのインスタンスを返す）
      //インデックスの差分
      const diffFromFirstDay = i - firstDayOfIndex;
      //差分の後の日にち
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

//その月のdayjsインスタンスを返す関数
export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};
//文字列のフォーマットをどうするか
export const isFirstDay = (day) => day.date() === 1;

export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPriviousMonth = (month) => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});
