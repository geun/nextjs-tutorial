import useSWR from 'swr'
import { useEffect, useState } from 'react'

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const Profile: React.FC<{}> = () => {
	// const [data, setData] = useState<{ name: string; bio: string } | null>(null)
	// const [isLoading, setLoading] = useState(false)

	const { data, error } = useSWR('/api/profile-data', fetcher)
	//
	// useEffect(() => {
	// 	setLoading(true)
	// 	fetch('/api/profile-data')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setData(data)
	// 			setLoading(false)
	// 		})
	// }, [])

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>

	// if (isLoading) return <p>Loading...</p>
	// if (!data) return <p>No profile data</p>

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.bio}</p>
		</div>
	)
}
