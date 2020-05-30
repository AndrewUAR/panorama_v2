const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};


const containerFluid = {
  paddingRight: "1rem",
  paddingLeft: "1rem",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
}

const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
}

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "500",
  lineHeight: "1.5em"
}

const primaryColor = ["#c2185b"]
const secondaryColor = ["#ec407a"]
const dangerColor = ["#f44336"]
const successColor = ["#4caf50"]
const greyColor = ["#616161"]
const whiteColor = ["#fff"]
const blackColor = ["#000000"]
const blueColor = ["#00c6ff"]
const tealColor = ["#1de9b6"]
const peachColor = ["#ff5f6d"]
const indigoColor = ["#1a237e"]

const infoColor = [
  "#00acc1",
  "#26c6da",
  "#00acc1",
  "#00d3ee",
  "#d9edf7",
  "#c4e3f3",
  "#b2ebf2",
  "#4dd0e1"
];

const warningColor = ["#ff9800"];

const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(" +
    hexToRgb(blackColor) +
    ", 0.42), 0 4px 25px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.42), 0 8px 10px -5px rgba(" +
    hexToRgb(blackColor) +
    ", 0.4)"
};

const dropzoneBoxShadow = {
  boxShadow:
    "inset 0 10px 25px -6px rgba(" +
    hexToRgb(blackColor) +
    ", 0.7), inset 0 10px 25px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.3), inset 0 8px 10px -4px rgba(" +
    hexToRgb(blackColor) +
    ", 0.7)"
};

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(whiteColor) +
    ", 0.28), 0 4px 20px 0px rgba(" +
    hexToRgb(whiteColor) +
    ", 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(whiteColor) +
    ", 0.2)"
};
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(infoColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(infoColor[0]) +
    ", 0.2)"
};
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(successColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(successColor[0]) +
    ", 0.2)"
};
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(warningColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(warningColor[0]) +
    ", 0.2)"
};
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(dangerColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(dangerColor[0]) +
    ", 0.2)"
};
const roseBoxShadow = {
  boxShadow:
    "0 4px 20px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.14), 0 7px 10px -5px rgba(" +
    hexToRgb(roseColor[0]) +
    ", 0.4)"
};

export {
  containerFluid,
  container,
  defaultFont,
  hexToRgb,
  dangerColor,
  successColor,
  primaryColor,
  secondaryColor,
  greyColor,
  whiteColor,
  blackColor,
  blueColor,
  tealColor,
  peachColor,
  boxShadow,
  primaryBoxShadow,
  roseBoxShadow,
  dangerBoxShadow,
  warningBoxShadow,
  dropzoneBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  infoColor,
  warningColor,
  roseColor,
  indigoColor
}