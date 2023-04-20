import './globals.css'; 
import { Open_Sans } from 'next/font/google'; 
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ToasterProvider from '@/providers/ToasterProvider';

const openSans = Open_Sans({
  subsets: ['latin']
})

export const metadata = {
  title: 'Salman Blog',
  description: 'This is AI Generated Blog App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
