import Link from 'next/link'
import React, { ReactNode } from 'react'

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export const Navbar: React.FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/mypage/account">Account</Link>
				</li>
				<li>
					<Link href="/mypage/profile">Profile</Link>
				</li>
			</ul>
		</>
	)
}

export const Footer: React.FC<{ children?: ReactNode }> = ({ children }) => {
	return <>Footer</>
}
