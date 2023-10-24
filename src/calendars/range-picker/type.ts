import {CalendarProps} from 'react-native-calendars';

type IRange = {
  startDate: string;
  endDate: string;
};

export interface RangePickerProps extends CalendarProps {
  /**
   * Single select or range select
   * @default true
   */
  singleSelectMode?: boolean;

  /**
   * Default select when initial
   * DateTime format YYYY-MM-DD
   * @default undefined
   */
  defaultValue?: string | IRange;

  /**
   * Text color for selected value
   * @default 'white'
   */
  markedTextColor?: string;

  /**
   * Background color for selected value
   * @default 'orange'
   */
  markedBgColor?: string;

  /**
   * Text color for day text
   * @default 'back'
   */
  dayTextColor?: string;

  /**
   * Background color for calendar
   * @default 'white'
   */
  calendarBgColor?: string;

  /**
   * Trigger when change select
   */
  onChange?: (params: string | IRange) => void;

  /**
   * Defined max range can select
   * @default undefined
   */
  maxRange?: number;
}
