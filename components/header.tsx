'use client';
import Link from 'next/link'; import {useCart} from './cart';
export function Header(){const {count,open}=useCart();return <><div className="topline">Free Lagos delivery on orders over ₦75,000 · Dispatches Mon–Sat</div><nav className="nav"><Link className="logo" href="/">OJA.</Link><div className="navlinks"><Link href="/shop">Shop</Link><Link href="/#story">Our note</Link><Link href="/account">Account</Link></div><button className="cartbtn" onClick={open}>Bag <span>{count}</span></button></nav></>}
