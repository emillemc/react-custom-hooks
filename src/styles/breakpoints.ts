export const sizes = {
  smaller: "380px",
  phone: "576px",
  tablet: "768px",
  desktop: "992px",
  widescreen: "1200px",
  large: "1440px",
  biggest: "1689px",
};

export const breakpoints = {
  lessThan: (max: any) => {
    return `(max-width: ${max})`;
  },
  greaterThan: (min: any) => {
    return `(min-width: ${min})`;
  },
  between: (min: any, max: any) => {
    return `(min-width: ${min}) and (max-width: ${max})`;
  },
};
