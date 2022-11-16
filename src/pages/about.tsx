import React from 'react'
import Image from 'next/image'

import vercelLogoSvg from '../../public/vercel.svg'

const AboutPage: React.FC<{}> = () => {
	const imgUrl = 'https://cdn.solvook.com/static/assets/images02.jpg'
	return (
		<div style={{ padding: 30 }}>
			<div>
				<img src={'/vercel.svg'} />
			</div>
			<div>
				<Image src={'/vercel.svg'} alt={'vercel-logo'} width={283} height={64} />
			</div>
			<div>
				<Image
					src={vercelLogoSvg}
					alt={'vercel-logo'}
					// width={283} height={64}
				/>
			</div>
			<div>
				<img src={'https://unsplash.it/640/425'} />
			</div>
			<div>
				<Image
					src={'https://unsplash.it/640/425'}
					alt={'cover-img'}
					width={640}
					height={425}
				/>
			</div>
		</div>
	)
}

export default AboutPage
