export const theme = {
  shadow: "0 0 10px 0 rgba(0,0,0,0.15)",
  white: "main",
  red: "red",
  bg: "#E5E5E5",
  waterBlue: "#217BF4",
  dirtyBlack: "#2F2C4A",
  blueGradientBg: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%);",
  burnBlack: "rgba(101, 100, 100, 1)",
  lightBlack: "rgba(0,0,0,0.1)",

  lightBlue: "#d4e7fe",
};

export const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "826px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(max-width: ${breakpoints.mobileS})`,
  mobileM: `(max-width: ${breakpoints.mobileM})`,
  mobileL: `(max-width: ${breakpoints.mobileL})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  tabletL: `(max-width: ${breakpoints.tabletL})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  laptopL: `(max-width: ${breakpoints.laptopL})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
};
