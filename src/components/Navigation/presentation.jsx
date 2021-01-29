import React from "react";
import { IconButton, Toolbar, Typography, withStyles } from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { DatePicker } from "@material-ui/pickers";

const StyledToolbar = withStyles({
  root: { padding: 0 },
})(Toolbar);

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px" },
})(Typography);

const StyledDatePicker = withStyles({
  root: { marginLeft: 30 },
})(DatePicker);

const Navigation = ({ setNextMonth, setPriviousMonth, setMonth, month }) => {
  return (
    <StyledToolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </StyledTypography>
      <IconButton size="small" onClick={setPriviousMonth}>
        <ArrowBackIos />
      </IconButton>
      <IconButton size="small">
        <ArrowForwardIos onClick={setNextMonth} />
      </IconButton>
      <StyledDatePicker
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY月 M月"
        animateYearScrolling
        disableToolbar
      ></StyledDatePicker>
    </StyledToolbar>
  );
};

export default Navigation;
