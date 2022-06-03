import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "@mui/material";
import thema from "../ui/themes/thema";
import {Header} from "../ui/components/Header/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={thema}>
          <Header/>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
