import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { AnimatePresence } from 'framer-motion'
import normalizeCss from 'stitches-normalize'

import { globalCss } from './styles/stiches.config'

import type { MetaFunction } from '@remix-run/node'

const globalStyles = globalCss(
  // @ts-ignore-next-line
  ...normalizeCss({
    systemFonts: true,
    webkitPrefixes: true,
    mozPrefixes: true,
  }),
  {
    body: {
      fontFamily: "'Verdana', sans-serif",
      minHeight: '100vh',
    },
    '@import': '/resets.css',
  }
)

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'SWAPI Tabs',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  globalStyles()

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
