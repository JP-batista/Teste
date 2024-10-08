'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <header className="bg-white dark:bg-darkBackground text-gray-900 dark:text-darkText py-4 shadow-sm border-b border-gray-200 dark:border-darkBorder">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Fullstack Blog</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/admin">Admin</Link></li>
            <li><Link href="/posts">Posts</Link></li>
            <li><Link href="/sair">Login</Link></li>
          </ul>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-6 bg-gray-200 dark:bg-darkBorder text-gray-900 dark:text-darkText px-3 py-1 rounded"
        >
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </div>
    </header>
  )
}
