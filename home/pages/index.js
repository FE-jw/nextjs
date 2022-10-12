import { useState, useEffect } from 'react';
import Head from 'next/head'
import Axios from 'axios';
import ItemList from '../src/component/ItemList';
import { Header, Divider} from 'semantic-ui-react';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
	const [list, setList] = useState([]);

	const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

	function getData(){
		Axios.get(API_URL).then(res => {
			// console.log(res.data);
			setList(res.data);
		});
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<section className='next-container'>
			<Head>
				<title>JW Next | Home</title>
			</Head>
			<Header as="h3">베스트 탑 10</Header>
			<Divider />
			<ItemList list={list.slice(0, 9)} />
			<Header as="h3">나머지</Header>
			<Divider />
			<ItemList list={list.slice(9)} />
		</section>
	)
}