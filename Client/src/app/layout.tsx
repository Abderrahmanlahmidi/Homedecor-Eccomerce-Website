"use client"
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./State";
import './globals.css';
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

const store = configureStore({
  reducer: cartReducer
})



type ReduxProviderProps = {
  children: React.ReactNode;
}

function ReduxProvider({children}: ReduxProviderProps){
  return <Provider store={store} >{children}</Provider>
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

return (
    <html lang="en"> 
      <ReduxProvider>
        <body className={inter.className}>{children}</body>   
      </ReduxProvider>
    </html>
  )
}


