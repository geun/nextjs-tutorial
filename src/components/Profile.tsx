import { useEffect, useState } from 'react'

export const Profile: React.FC<{}> = () => {
	const [data, setData] = useState<{ name: string; bio: string } | null>(null)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('/api/profile-data')
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	}, [])

	if (isLoading) return <p>Loading...</p>
	if (!data) return <p>No profile data</p>

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.bio}</p>
		</div>
	)
}
