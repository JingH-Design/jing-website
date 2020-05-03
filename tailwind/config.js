module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#e6e9eb',
          '200': '#ccd2d7',
          '300': '#b3bcc2',
          '400': '#99a5ae',
          '500': '#808f9a',
          '600': '#677886',
          '700': '#4d6272',
          '800': '#344b5d',
        },
        primary: '#011e35',
        secondary: '#c94215',
        tertiary: '#d46844',
      },
      boxShadow: {
        sm: '0 2px 16px 0 rgba(79, 83, 86, 0.04)',
        light: '0 0 10px 0 rgba(230, 233, 235, 0.7)',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '5/7': '71.4%',
        '3/4': '75%',
      },
      fontFamily: {
        'merriweather-bold': 'Merriweather-Bold, Cambria, "Times New Roman", Times, serif',
        'merriweather-regular': 'Merriweather-Regular, Cambria, "Times New Roman", Times, serif',
        'sourcesanspro-semibold': 'SourceSansPro-SemiBold, Cambria, "Times New Roman", Times, serif',
        'sourcesanspro-regular': 'SourceSansPro-Regular, Cambria, "Times New Roman", Times, serif',
        'sourcesanspro-light': 'SourceSansPro-Light, Cambria, "Times New Roman", Times, serif',
      },
    },
  },
  variants: {},
  plugins: [],
};
