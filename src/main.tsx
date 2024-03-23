import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { GlobalStyleProps } from '@chakra-ui/theme-tools';
import { BrowserRouter } from 'react-router-dom'

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("#f1f4f7", "black")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
