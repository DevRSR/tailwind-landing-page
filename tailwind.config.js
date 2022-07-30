module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
     sm:'480px',
     md:'768px',
     lg:'978px',
     xl:'1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12,88%,59%)', 
        brightRedLight: 'hsl(12,88%,69%)', 
        brightRedSupLight: 'hsl(12,88%,98%)',
        darkBlue: 'hsl(228,38%,23%)',
        darkGrayishBlue: 'hsl(227,12%,61%)',
        veryDarkBlue: 'hsl(233,12%,13%)',
        veryPaleRed: 'hsl(13,100%,96%)',
        veryLightGray: 'hsl(12,8%,98%)',
        red: 'rgb(255,0,0)',
      },
    },
  },
  plugins: [],
}
