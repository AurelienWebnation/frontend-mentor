const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  tabletOnly: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem) and (max-width: ${BREAKPOINTS.laptopMin / 16 - 1 / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
};
