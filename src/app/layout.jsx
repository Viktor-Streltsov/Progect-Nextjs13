import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from "../app/components/navBar/NavBar";
import Footer from "../app/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
            <header><NavBar/></header>
            {children}
            <footer><Footer/></footer>
        </div>
      </body>
    </html>
  )
}
