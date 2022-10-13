import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';
import Item from '../../src/component/Item';
import { Loader } from 'semantic-ui-react';

const productDetail = ({ item }) => {	//getServerSideProps에서 return한 item을 받아올 수 있다.
	// const router = useRouter();	//서버사이드렌더링을 적용해서 필요없어짐
	// const id = Number(router.query.id);

	// const [item, setItem] = useState({});
	// const [isLoading, setIsLoading] = useState(true);

	// const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline'`

	/*
	function getDate(){
		Axios.get(API_URL).then(res => {
			// console.log(res.data);
			setItem(res.data);
			setIsLoading(false);
		});
	}
	*/

	/*
	useEffect(() => {
		if(id && id > 0){
			getDate();
		}
	}, []);
	*/

	return(
		<div>
			{/* 
			{
				isLoading && (
					<Loader inline="centered" active>
						Loading
					</Loader>
				)
			}
			{
				!isLoading && (
					<Item item={item} />
					)
				}
			*/}
			 {
				item && (
					<>
						<Head>
							<title>{item.name}</title>
							<meta name='description' content={item.description}></meta>
						</Head>
						<Item item={item} />
					</>
				)
			 }
		</div>
	);
}

export const getServerSideProps = async (ctx) => {
	const id = ctx.params.id;
	const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline'`
	const res = await Axios.get(apiUrl);
	const data = res.data;

	return {
		props:{
			item: data
		}
	}
}

export default productDetail;