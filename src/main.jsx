import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ThemeProvider} from "styled-components";
import theme from "@/shared/theme.js";
import {GlobalStyle} from "@/shared/global.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <App/>
      </ThemeProvider>
  </StrictMode>,
)
