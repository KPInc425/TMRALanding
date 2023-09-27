import type { Theme } from 'theme-ui'
import '../assets/fonts/OldStandardTT-Regular.ttf'


// example base theme from @theme-ui/presets
export const theme: Theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
    link: 'Karla, sans-serif',
    subHeading: 'Old Standard TT',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    lightGreyText: 'rgb(180, 180, 180)',
    darkGreyText: 'rgb(71,71,71)',
    background: 'rgb(235, 235, 235)',
    primary: '#07c',
    secondary: '#30c',
    error: 'rgb(204,0,0)',
    muted: '#f6f6f6',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    subHeading: {
      fontFamily: 'subHeading',
      lineHeight: 'body',
      fontWeight: 'body',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
  links: {
    default: {
      fontFamily: 'link',
      color: 'background',
      fontWeight: 'heading',
      fontSize: 3,
      textDecoration: 'none',
      cursor: 'pointer',
      ':hover': {
          color: 'lightGreyText',
      },
    },
  }, 
  buttons: {
    primary: {
      fontFamily: 'link',
      color: 'background',
      backgroundColor: 'transparent',
      border: '4px solid',
      fontWeight: 'heading',
      cursor: 'pointer',
      borderRadius: '32px',
      padding: '14px',
      ':hover': {
        backgroundColor: 'background',
        color: 'text',
        borderColor: 'background',
      },
    },
    secondary: {
      fontFamily: 'link',
      color: 'text',
      backgroundColor: 'transparent',
      border: '3px solid',
      fontWeight: 'heading',
      cursor: 'pointer',
      borderRadius: '32px',
      padding: '14px',
      ':hover': {
        backgroundColor: 'text',
        color: 'background',
        borderColor: 'text',
      },
    },
    basic: {
      fontFamily: 'link',
      color: 'text',
      backgroundColor: 'transparent',
      border: 'none',
      fontWeight: 'heading',
      cursor: 'pointer',
      borderRadius: '32px',
      padding: '14px',
      ':hover': {
        // backgroundColor: 'text',
        color: 'secondary',
        // borderColor: 'text',
      },
    },
  },
  forms: {
    input: {
      fontFamily: 'link',
      color: 'text',
      backgroundColor: 'background',
      border: 'none',
      borderBottom: '1px solid',
      borderRadius: '0',
      fontWeight: 'heading',
      cursor: 'pointer',
      padding: '14px',
      ':hover': {
        color: 'secondary',
      },
    },
    textarea: {
      fontFamily: 'link',
      color: 'text',
      backgroundColor: 'background',
      border: 'none',
      borderBottom: '1px solid',
      borderRadius: '0',
      fontWeight: 'heading',
      cursor: 'pointer',
      padding: '14px',
      ':hover': {
        color: 'primary',
      },
    },
  },
}