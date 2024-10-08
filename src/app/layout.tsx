// src/app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Fullstack Blog',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
