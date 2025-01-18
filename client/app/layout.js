'use client'
import '../styles/globals.css'
import Header from '@/components/header/Header'
import { Toaster } from 'react-hot-toast'
import { store } from '@/store/store'
import { Provider } from 'react-redux'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hanouti TN </title>
        <meta name="description" content="Description" />
      </head>
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
