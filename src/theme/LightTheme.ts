import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const BlueTheme: ThemeTypes = {
  name: 'BlueTheme',
  dark: false,
  variables: {
    'border-color': '#1e88e5',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#0056B3',
    secondary: '#118DFB', //color logo biru
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#C5E2FD', //light user
    //lightsecondary: '#B7DBFD',
    lightsuccess: '#b9f6ca',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkText: '#2C3E50', //font sidebar
    lightText: '#2C3E50', //subfont sidebar
    darkprimary: '#1565c0',
    darksecondary: '#4527a0',
    borderLight: '#BDC3C7', //stroke card
    inputBorder: '#BDC3C7', //stroke search
    containerBg: '#B7DBFD', //Background
    surface: '#fff',
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#fafafa',
    primary200: '#90caf9',
    secondary200: '#b39ddb'
  }
};

export { BlueTheme };
