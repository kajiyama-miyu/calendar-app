import React from "react";
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import {
  isSameMonth,
  isFirstDay,
  isSameDay,
  getMonth,
} from "../../services/calendar";
import Schedule from "../Schedule";

const CalendarElement = ({ day, month, schedules, ...props }) => {
  //月の最初だけを月情報をつける
  //文字列のフォーマットをどうするか
  const format = isFirstDay(day) ? "M月D日" : "D";
  //現在の日付取得
  const today = dayjs();

  //propsで受け取った日にちと現在の日にちが同じかどうかを判定する関数
  const isToday = isSameDay(day, today);

  const currentMonth = getMonth(month);
  //今月以外の日にちはグレーダウンする関数
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map((e) => (
          <Schedule key={e.id} schedule={e} {...props} />
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;