import { useRouter } from 'next/router';

export default function subId(){
	const router = useRouter();
	const id = Number(router.query.id);

	return(
		<div>
			<h1>/pages/sub/[id].js 입니다.</h1>
			<p>파라미터 id값은 {id} 입니다.</p>
			<a href="/">홈으로 이동</a>
		</div>
	);
}