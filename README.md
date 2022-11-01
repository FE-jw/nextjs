# **Next.js**
[Next.js](https://nextjs.org/)는 쉽게 이야기하면 **"React + Express.js + React-Router-Dom + Server Side Rendering(SSR)"** 이다.

## **프로젝트 설치**
```
npx create-next-app@latest
# or
yarn create next-app
```

### **기본 실행 방법**
* npm run dev: 개발 환경 실행
* npm run build: 배포 파일 생성(.next 폴더 내부)
* npm run start: 서비스 시작

### **Route**
* https://jw.com => /pages/index.js
* https://jw.com/about => /pages/about/index.js
* https://jw.com/about/sub => /pages/about/sub.js
* https://jw.com/posts => /pages/posts/index.js
* https://jw.com/posts/295749 => /pages/posts/[id].js
* https://jw.com/posts/282762 => /pages/posts/[id].js

#### **router를 이용해서 파라미터 가져오기**
```jsx
import { useRouter } from 'next/router';

//파라미터 id값 가져오기
const router = useRouter();
const id = router.query.id;
```

### **API Route**
* https://jw.com/api => /pages/api/index.js
* https://jw.com/api/1 => /pages/api/[id].js
* https://jw.com/api/2 => /pages/api/[id].js

#### **사용자가 요청한 파라미터 보내주기**
```jsx
//pages/api/
export default function handler(req, res) {
  res.status(200).json({ id: req.query.id })
}
```

### **getServerSideProps**
```js
const productDetail = ({ item }) => {	//getServerSideProps에서 return한 props(item)를 받아올 수 있다.
	return(
		...
	);
}

export const getServerSideProps = async (ctx) => {
	const id = ctx.params.id;
	const apiUrl = `test.json'`
	const res = await Axios.get(apiUrl);
	const data = res.data;

	return{
		props: {
			item: data
		}
	};
}
```

### **환경변수**
접근 가능한 변수는 접두어 'NEXT_PUBLIC_' 붙인다.
```
NEXT_PUBLIC_API_URL=http://localhost:3000/
```
```jsx
fetch(process.env.NEXT_PUBLIC_API_URL + 'api/hello')
	.then(type => type.json())
	.then(result => {
		console.log(result);
	})
```

### **에러 해결**
Parsing error: Cannot find module 'next/babel'
* 루트 경로에 `.babelrc`파일 생성 후 코드 추가
```js
{
	"presets": ["next/babel"],
	"plugins": []
}
```
* 루트 경로의 `.eslintrc.json` 파일 수정
```js
{
	"extends": ["next/babel","next/core-web-vitals"]
}
```
* useEffect 2번 실행될 때
```js
//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,	//false로 변경
  swcMinify: true,
}

module.exports = nextConfig

```

### **에러 페이지**
* 404
	* pages/ 경로에 404.js 생성
	```jsx
	const Error404 = () => {
		return (
			<div>
				404 에러...
			</div>
		);
	}

	export default Error404;
	```
* 500(서버 에러)
	* pages/ 경로에 _error.js 생성
	```jsx
	const _error = ({ statusCode }) => {
		console.log(statusCode);
		
		return (
			<div>
				500 server error
			</div>
		);
	}

	export default _error;
	```