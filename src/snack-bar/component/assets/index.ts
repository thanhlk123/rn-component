export const images = {
  icWarning: require('./source/warning.png'),
  icLink: require('./source/link.png'),
  icError: require('./source/close.png'),
  icSuccess: require('./source/checked.png'),
  icTodo: require('./source/to-do-list.png'),
};

export type ImageTypes = keyof typeof images;
