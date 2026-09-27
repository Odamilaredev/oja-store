import './globals.css';
import { CartProvider } from '@/components/cart';
import { Header } from '@/components/header';
export const metadata={title:'OJA — Good things. No fuss.',description:'Everyday Nigerian goods, properly picked.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="grain"/><CartProvider><Header/>{children}</CartProvider></body></html>}
