/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({opacityValue}) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}),${opacityValue})`;
  };
}

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  // important: true,
  theme: {
    extend: {
      colors: {
        primary: withOpacityValue('--color-primary'),
        main: withOpacityValue('--color-main'),
        'gray-950': withOpacityValue('--gray-950'),
        'gray-800': withOpacityValue('--gray-800'),
        'gray-600': withOpacityValue('--gray-600'),
        'gray-400': withOpacityValue('--gray-400'),
        'gray-50': withOpacityValue('--gray-50'),
        white: '#FFFFFF',
        'div-col': withOpacityValue('--divider-color'),
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto:['Roboto']
      },

      height: {
        'head-ph': 'var(--header-height-primary-desktop)',
        'head-sh': 'var(--header-height-secondary-desktop)',
        ipad: 'var(--header-height-ipad)',
        mob: 'var(--header-height-mobile)',
        'nav-mob': 'var(--mobile-nav-content-height)',
        26: '7.5rem',
        25: '6.25rem',
        'feat-col': 'var(--featured-collection-height)',
        70: '17.75rem',
        34: '8.37',
        5.5: '2.12rem',
        85: '21.25rem',
        62: '16.25rem',
        fo: '3.1875rem',
        22:'5.75rem',
      },

      spacing: {
        logo: 'var(--logo-left-padding)',
        'logo-xl': 'var(--logo-left-padding-xl)',
        "11.5":""
      },

      width: {
        cs: 'var(--currency-selector-width-2xl)',
        'logo-con': 'var(--logo-container-width)',
        logo: 'var(--logo-width)',
        'logo-con-desk-pri': 'var(--logo-container-width-xl)',
        'col-list': 'var(--homepage-collection-list-width)',
        25: '6.25rem',
        15: '3.75rem',
        'col-list-desk':
          'var(--homepage-collection-list-width-desktop-secondary)',
        'col-list-ipad': 'var(--homepage-collection-list-width-ipad)',
        'col-list-mobile': 'var(--homepage-collection-list-width-mobile)',
        118.5: '29.625rem',
        22: '5.62rem',
        34:'8.75rem'
      },
      screens: {
        // '2xl': {min: '1920px'},
        // '-2xl': {max: '1920px'},
        // '2xl-mx-mi': {
        //   // min: '1920px',
        //   min: '1920px',
        //   max:'3500px'
        // },

        // // => @media (max-width: 1600px) { ... }

        // xl: {min: '1440px'},
        // '-xl': {max: '1440px'},
        // 'xl-mx-mi': {
        //   min: '1440px',
        //   max: '1920px',
        // },

        // // => @media (max-width: 1400px) { ... }

        // lg: {min: '1023px'},
        // '-lg': {max: '1023px'},

        // // => @media (max-width: 1023px) { ... }

        // md: {min: '768px'},
        // '-md': { max: '768px' },
        // 'md-mx-mi': {
        //   min: '768px',
        //   max: '767px',
        // },

        // // => @media (max-width: 767px) { ... }

        // sm: {min: '639px'},
        // '-sm': {max: '639px'},

        // // => @media (max-width: 639px) { ... }
        // '-medium': {max: '360px'},

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'desk-sec': {
          min: '1441px',
          max: '5000px',
        },
        // desktop secondary screen size

        'desk-pri': {
          min: '769px',
          max: '1440px',
        },

        // desktop primary screen size

        tablet: {
          min: '361px',
          max: '768px',
        },
        // tablet screen size

        mobile: {
          min: '200px',
          max: '360px',
        },

        // mobile screen size

        xs: {max: '360px'},
        xxs: {min: '50px'},
        // => @media (max-width: 420px) { ... }
      },

      fontSize: {
        h1: ['2.37rem','2.78rem'],
        h2: ['1.5rem', '1.81rem'],
        h3: ['1.25rem','1.51rem'],
        h4: ['1.125rem','1.35rem'],
        h5: ['1rem', '1.21rem'],
        h6: ['0.875rem', '1rem'],
        p1: ['1.12rem','1.36rem'],
        p2:['1rem','1.21rem'],
        p3:['0.87rem','1.05rem'],
        label: ['0.75rem', '0.875rem'],
        'h1-mob': ['1.25rem','1.5rem'],
        'h2-mob': ['1.12rem','1.35rem'],
        'h3-mob': ['1rem','1.21rem'],
        'h4-mob': ['0.875rem','1.05rem'],
        'h5-mob': ['0.75rem', '1rem'],
        'p1-mob': ['1rem','1.5rem'],
        'p2-mob':['0.875rem','1.05rem'],
        'p3-mob': ['0.75rem','0.90rem'],
        'label-mob': ['0.75rem','0.875rem'],
        'banner-txt': ['1.875rem', '2.19rem'],
        'heading': ['2.40rem', '2.91rem'],
        'heading-pri': ['4.18rem', '5.06rem'],
        'heading-sec':['3.45rem','4.17rem'],
        
      },
    },
  },
  plugins: [],
};
