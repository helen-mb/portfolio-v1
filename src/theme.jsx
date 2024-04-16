import { createTheme } from '@mantine/core';

const myBlue = [
  '#0A2D9D',
  '#1437B2',
  '#1C3DC6',
  '#2A4BDE',
  '#3B62E3',
  '#5187E4',
  '#78A3EB',
  '#A8C4F3',
  '#D3E3FC',
  '#E8F3FF',
];

const myGreen = [
  '#318025',
  '#3F9432',
  '#4BA73C',
  '#5BBE4B',
  '#8CE129',
  '#B5F200',
  '#CFF66C',
  '#DFFA9E',
  '#EFFDCD',
  '#F7FFE2',
];

export const theme = createTheme({
  // theme override
  fontFamily: 'Noto Sans, Open Sans, sans-serif',
  headings: {
    fontFamily: 'Alumni Sans, Noto Sans, Open Sans, sans-serif',
  },
  colors: {
    myBlue,
    myGreen,
  },
  primaryColor: 'myBlue',
  primaryShade: 3,
  respectReducedMotion: true,
});
