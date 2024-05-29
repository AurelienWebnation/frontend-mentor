const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

export const theme = {
  spacing: {
    100: 8,
    150: 12,
    200: 16,
    300: 24,
    400: 32,
    500: 40,
    1600: 128,
  },
  fontSizes: {
    body: {
      sm: 16,
      md: 18,
    },
    heading: 32,
  },
};
