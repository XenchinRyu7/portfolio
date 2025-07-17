'use client'

import { lazy, Suspense } from 'react'
import AppFooter from '../../components/shared/AppFooter'
import AppHeader from '../../components/shared/AppHeader'
import UseScrollToTop from '../../hooks/useScrollToTop'
import { AnimatePresence } from 'framer-motion'

const Contact = lazy(() => import('../../pages/Contact'))

export default function ContactPage() {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <AppHeader />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-secondary-light dark:bg-primary-dark text-center p-4">
            <div className="text-xl">Loading Contact...</div>
          </div>
        }>
          <Contact />
        </Suspense>
        <AppFooter />
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  )
}
