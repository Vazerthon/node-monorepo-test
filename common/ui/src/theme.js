const theme = {
  color: {
    primary: 'red',
    secondary: 'blue',
  }
};

const buildTheme = (custom = {}) => ({
  ...theme,
  ...custom,
});

export default buildTheme;
