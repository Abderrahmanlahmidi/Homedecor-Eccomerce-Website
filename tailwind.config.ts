import type { Config } from 'tailwindcss'
 

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      "black": "#000000",
      "gray": "#6C7275",
      "white": "#fff",
      "blue":"#377DFF",
      "bg-blue":"#F3F5F7",
      "bg-white":"#fff",
      "bg-green":"#38CB89"
    },
    fontFamily:{
      "poppins":['Poppins', 'sans-serif'],
      "Grotesk":['Space Grotesk', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        overlay: 'rgba(0, 0, 0, 0.6)',
      },
    },
   
  },
  plugins: [],
}
export default config
