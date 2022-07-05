module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'mobile': '375px',
      'desktop': '720px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'darkCyan': 'hsl(158, 36%, 37%)',
        'cream': 'hsl(30, 38%, 92%)',
        'veryDarkBlue': 'hsl(212, 21%, 14%)',
        'darkGrayishBlue': 'hsl(228, 12%, 48%)'
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}