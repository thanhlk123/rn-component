import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {DateData} from 'react-native-calendars/src/types';
import {RangePickerProps} from './type';

const XDate = require('xdate');

const DateRangePicker = (props: RangePickerProps) => {
  const {
    defaultValue,
    onChange,
    singleSelectMode,
    markedBgColor = 'orange',
    markedTextColor = 'white',
    dayTextColor,
    calendarBgColor,
    maxRange,
  } = props;

  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>('');
  const [markedDates, setMarkedDates] = useState<any>(undefined);

  // effect
  useEffect(() => {
    if (typeof defaultValue === 'string') {
      const formattedDate = formatDate(defaultValue);

      setStartDate(formattedDate);
      setEndDate(formattedDate);
      setupMarkedDates(formattedDate);
    } else if (typeof defaultValue === 'object') {
      const start = formatDate(defaultValue.startDate);
      const end = formatDate(defaultValue.endDate);

      setStartDate(start);
      setEndDate(end);
      setupMarkedDates(start, end);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (dateString: string) => {
    return moment(dateString).format('YYYY-MM-DD');
  };

  const handleSetStartDate = (start: string) => {
    setStartDate(start);
    setEndDate(undefined);
    setupMarkedDates(start);
    if (singleSelectMode) {
      onChange?.(start);
    } else {
      onChange?.({startDate: start, endDate: ''});
    }
  };

  const handleSetEndDate = (start: string, end: string) => {
    setEndDate(end);
    setupMarkedDates(start, end);
    onChange?.({startDate: start, endDate: end});
  };

  const handlePress = (date: DateData) => {
    const formattedDate = moment(date.dateString).format('YYYY-MM-DD');
    if (singleSelectMode) {
      handleSetStartDate(formattedDate);
      return;
    }

    if ((!startDate && !endDate) || (startDate && endDate)) {
      handleSetStartDate(formattedDate);
      return;
    }

    if (startDate) {
      if (moment(date.dateString).isBefore(moment(startDate))) {
        handleSetStartDate(formattedDate);
      } else if (
        !maxRange ||
        moment(date.dateString).diff(moment(startDate), 'days') < maxRange
      ) {
        handleSetEndDate(startDate, formattedDate);
      }
    }
  };

  const setupMarkedDates = (fromDate: string, toDate?: string) => {
    let mToDate = toDate ? new XDate(toDate) : undefined;
    let mFromDate = new XDate(fromDate);
    let range = mFromDate.diffDays(mToDate);
    let markedResult: any = {};

    if (singleSelectMode) {
      setMarkedDates({
        [fromDate]: {
          selected: true,
          selectedColor: markedBgColor,
          selectedTextColor: markedTextColor,
        },
      });
      return;
    }

    if (range === 0) {
      markedResult = {
        [fromDate]: {
          type: 'dot',
          selected: true,
          selectedColor: markedBgColor,
          selectedTextColor: markedTextColor,
          color: markedBgColor,
        },
      };
    } else if (range > 0 && !!mToDate) {
      markedResult = {
        [fromDate]: {
          customTextStyle: {
            color: markedTextColor,
          },
          color: markedBgColor,
          startingDay: true,
        },
      };
      for (var i = 1; i <= range; i++) {
        let tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd');
        if (i < range) {
          markedResult[tempDate] = {
            customTextStyle: {
              color: markedTextColor,
            },
            color: markedBgColor,
          };
        } else {
          markedResult[tempDate] = {
            endingDay: true,
            customTextStyle: {
              color: markedTextColor,
            },
            color: markedBgColor,
          };
        }
      }
    } else {
      markedResult = {
        [fromDate]: {
          customTextStyle: {
            color: markedTextColor,
          },
          color: markedBgColor,
          startingDay: true,
        },
      };
    }

    setMarkedDates(markedResult);
    return;
  };

  return (
    <Calendar
      firstDay={1}
      current={new Date().toISOString()}
      onDayPress={handlePress}
      markedDates={markedDates}
      markingType={singleSelectMode ? 'dot' : 'period'}
      theme={{
        ...props.theme,
        dayTextColor,
        calendarBackground: calendarBgColor,
      }}
      {...props}
    />
  );
};

export default DateRangePicker;
