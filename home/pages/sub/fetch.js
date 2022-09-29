import { useState, useEffect } from 'react';

export default function Fetch(){
	const [user, setUser] = useState({name: null});

	useEffect(() => {
		fetch(process.env.NEXT_PUBLIC_API_URL + 'api/hello')
			.then(type => type.json())
			.then(result => {
				console.log(result);
				setUser(result);
			})
	});

	return(
		<div>
			<h1>/pages/sub/fetch.js 입니다.</h1>
			<div>유저 이름은 {user.name} 입니다.</div>
			<a href="/">홈으로 이동</a>
		</div>
	);
}