'use client'

import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import AppFooter from './components/shared/AppFooter'
import AppHeader from './components/shared/AppHeader'
import UseScrollToTop from './hooks/useScrollToTop'
import './css/App.css'

const ClientApp = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-secondary-light dark:bg-primary-dark text-center p-4">
        <div className="text-xl">Loading Portfolio...</div>
      </div>
    )
  }
  
  return (
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <AppHeader />
        <AppFooter />
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  )
}

export default ClientApp
