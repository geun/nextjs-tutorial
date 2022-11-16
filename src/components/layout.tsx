import Link from 'next/link'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	)
}

export const NavbarWrapper = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	padding-top: 16px;
	align-content: center;
	ul {
		list-style: none;
		margin: 0 auto;
		padding: 0;
		li {
			float: left;
			display: inline-block;
			margin: 0 8px;
			padding: 0;

			&:last-child {
				float: none;
			}
		}
	}
`

export const Navbar: React.FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<NavbarWrapper>
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
		</NavbarWrapper>
	)
}

export const Footer: React.FC<{ children?: ReactNode }> = ({ children }) => {
	return <>Footer</>
}
