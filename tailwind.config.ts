import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contactobackground': 'linear-gradient(rgba(33, 37, 41, 0.477), rgba(33, 37, 41, 0.85)), url("/img/home/contacto.jpg")',
        'grisgradiente': 'linear-gradient(to bottom, #40444b 0%, #25292d 30%, #282d32 40%, #21252a 60%, #282c31 80%, #343a41 100%)',
        'grishome': 'linear-gradient(to bottom, #40444b 0%, #25292d 30%, #282d32 40%, #21252a 60%, #282c31 80%, #343a41 100%)',
        'introhome': 'linear-gradient(rgba(33, 37, 41, 0.85), rgba(33, 37, 41, 0.85)), url("/img/home/intro.jpg")',
        'login-gradient': 'linear-gradient(rgba(255, 255, 255, 0.123), rgba(33, 37, 41, 0.85)), url("/img/login/fondoLogin.jpg")',
        'registro-gradient': 'linear-gradient(rgba(255, 255, 255, 0.123), rgba(33, 37, 41, 0.85)), url("/img/registro/fondoRegistro.jpg")'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Aquí puedes agregar tu media query personalizado
        'xs': {'raw': '(max-width: 550px)'},
        '2xs': {'raw': '(max-width: 540px)'},
      }
    },
  },
  extend: {
   
  },
  plugins: [

    
  ],
};
export default config;
