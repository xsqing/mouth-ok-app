/**
 * @description: 日历组件
 * 组件仓库： https://www.npmjs.com/package/react-native-calendars
 * 使用文档：
 */

import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import theme from "../constants/theme";
import dayjs from "dayjs";
// 设置中文 locale
LocaleConfig.locales["zh"] = {
  monthNames: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  monthNamesShort: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二",
  ],
  dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
  today: "今天",
};

LocaleConfig.defaultLocale = "zh";

const withTheme = (WrappedComponent, defaultTheme) => {
  const today = dayjs().format("YYYY-MM-DD");
  return (props) => {
    // 合并默认主题和传递进来的主题，传递进来的主题会覆盖默认主题
    const theme = {
      ...defaultTheme,
      ...props.theme,
    };

    // 移除theme属性，剩余的属性透传给WrappedComponent
    const { theme: _theme, ...otherProps } = props;

    return (
      <WrappedComponent
        theme={theme}
        {...otherProps}
        headerStyle={{ color: theme.secondary }}
        maxDate={today}
      />
    );
  };
};

const defaultTheme = {
  // // Calendar背景色使用primary
  // calendarBackground: theme.primary,
  // // 月份标题颜色
  // textSectionTitleColor: theme.gray_100,
  // // 不可选日期颜色
  // textSectionTitleDisabledColor: theme.black_400,
  // // 选中日期背景色
  // selectedDayBackgroundColor: theme.secondary,
  // // 选中日期文字颜色
  // selectedDayTextColor: "#ffffff",
  // // 今天日期文字颜色
  // todayTextColor: theme.secondary,
  // // 普通日期文字颜色
  // dayTextColor: theme.gray_100,
  // // 不可选日期文字颜色
  // textDisabledColor: theme.black_400,
  // // 事件点颜色
  // dotColor: theme.secondary,
  // // 选中日期的事件点颜色
  // selectedDotColor: theme.black,
  // // 箭头颜色
  // arrowColor: theme.secondary,
  // // 周标题颜色
  // weekTextColor: theme.gray_100,
  // monthTextColor: theme.gray_100,
  // // 周末文字颜色
  // // 如果需要强调周末，可以设置为不同的颜色
  // // weekendTextColor: theme.secondary,
  // textDayFontFamily: "Poppins-SemiBold",
  // textMonthFontFamily: "Poppins-SemiBold",
  // textDayHeaderFontFamily: "Poppins-SemiBold",
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 12,
};

// 使用HOC封装Calendar组件
const ThemedCalendar = withTheme(Calendar, defaultTheme);

export default ThemedCalendar;
