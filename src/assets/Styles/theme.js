export const theme = {
    colors:{
        dark: '#0B0D17', 
        lightBlue: '#D0D6F9',
        white: '#FFFFFF'
    },
    fontFamily: {
        bellefair: 'Bellefair',
        barlow: 'Barlow',
        barlowCondensed: 'Barlow Condensed'
    },
    fontSize: {
        heading1: '150px',
        heading2: '100px',
        heading3: '56px',
        heading4: '32px',
        heading5: '28px',
        subheading1: '28px',
        subheading2: '14px',
        navText: '16px',
    },
    letterSpacing: {
        heading5: '4.75px',
        subheading1: '2.35px',
        navText: '2.7px'
    },
}
const size = {
    tablet: '768px',
    desktop: '1440px'
  }
export const device = {
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`
  };