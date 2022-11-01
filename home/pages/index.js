import { useState, useEffect } from 'react';
import Head from 'next/head'
import Axios from 'axios';
import ItemList from '../src/component/ItemList';
import { Header, Divider, Loader} from 'semantic-ui-react';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
	const [list, setList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
	const API_URL = process.env.NEXT_PUBLIC_API_URL;

	function getData(){
		Axios.get(API_URL).then(res => {
			// console.log(res.data);
			setList(res.data);
			setIsLoading(false);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<section className='next-container'>
			<Head>
				<title>JW Next | Home</title>
				<meta name="description" content="홈입니다"></meta>
			</Head>
			{
				isLoading && (
					<Loader inline="centered" active>
						Loading
					</Loader>
				)
			}
			{
				!isLoading && (
					<>
						<Header as="h3">베스트 탑 10</Header>
						<Divider />
						<ItemList list={list.slice(0, 9)} />
						<Header as="h3">나머지</Header>
						<Divider />
						<ItemList list={list.slice(9)} />
					</>
				)
			}
		</section>
	)
}