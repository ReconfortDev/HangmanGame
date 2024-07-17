/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'lg-background': "url('/assets/images/background-desktop.svg')",
        'md-background': "url('/assets/images/background-tablet.svg')",
        'sm-background': "url('/assets/images/background-mobile.svg')",
        'rectangleBg': "url('/assets/images/rectangle.png')",
      }),
    },
  },
  plugins: [],
}

