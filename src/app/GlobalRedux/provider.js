'use client'

import React from 'react'
import { Provider } from 'react-redux';
import store from '../GlobalRedux/store';

export default function providers({ children }) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}