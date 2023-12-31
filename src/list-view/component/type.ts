import {FlatListProps} from 'react-native';

import {FlashListProps} from '@shopify/flash-list';

type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ListViewProps = (
  | ({
      type: 'flatlist';
    } & CustomOmit<
      FlatListProps<any>,
      'onRefresh' | 'refreshControl' | 'refreshing'
    >)
  | ({type?: 'flashlist' | undefined} & CustomOmit<
      FlashListProps<any>,
      'onRefresh' | 'refreshControl' | 'refreshing'
    >)
) & {
  /**
   * Function when refreshing
   * @default undefined
   */
  onRefresh?: () => void;

  /**
   * Function when scroll to end
   * @default undefined
   */
  onLoadMore?: () => void;

  /**
   * Enable to load more when scroll to end
   * @default false
   */
  canLoadMore?: boolean;

  /**
   * State of Refresh Control
   * @default false
   */
  refreshing?: boolean;

  /**
   * Enable to render Refresh Control
   * @default true
   */
  canRefresh?: boolean;
};
