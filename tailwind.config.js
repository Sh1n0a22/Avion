/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Template01/build/*.html","./Template01/build/js/*.js",],
  theme: {
    
    extend: {
      width:{
        '452':'28.25rem',
        '621':'621px',
        '521':'521px',    
      },
      height:{
        '4*100':'800px',
        '3*200':'600px',
        '125':'32rem',
        '621':'621px',
        '521':'521px',

      },
      flexBasis:{
        '1/10':'10.66667%',
      },
      gridTemplateColumns:{
        'header': '4fr 48px'
      },
      borderWidth:{
        '05':'.5px'
      },
      
      keyframes :{
        
        'open-menu':{
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
        animation : {
          'open-menu' :  'open-menu 0.5s ease-and-out forwards'
        }
      }
    },
  },
  plugins: [],
}
