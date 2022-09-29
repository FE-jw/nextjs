import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<h1>/pages/index.js 입니다.</h1>
			<ul>
				<li><a href="/sub">/pages/sub/index.js 으로 이동</a></li>
				<li><a href="/sub/about">/pages/sub/about.js 으로 이동</a></li>
				<li><a href="/sub/1">/pages/sub/[id].js 으로 이동</a></li>
				<li><a href="/sub/2">/pages/sub/[id].js 으로 이동</a></li>
				<li><a href="/sub/fetch">/pages/sub/fetch.js 으로 이동</a></li>
			</ul>
		</div>
	)
}
