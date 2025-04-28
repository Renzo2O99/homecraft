import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // JSX factory
  jsxFramework: "react",
  jsxStyleProps: "all",
  jsxFactory: "jsx",

  // Where to look for your css declarations
  include: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './styled-system/**/*.{js,jsx,ts,tsx}',
  ],
  
  // Files to exclude
  exclude: [],
  
  // The output directory for your css system
  outdir: "styled-system",
})