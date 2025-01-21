'use client'

import '../styles/globals.css'
import Header from '@/components/header/Header'
import { Toaster } from 'react-hot-toast'
import { store, persistor } from '@/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hanouti TN </title>
        <meta name="description" content="Description" />
      </head>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            {children}
            <Toaster />
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
