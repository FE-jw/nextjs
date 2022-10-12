import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';
import Item from '../../src/component/Item';

export default function productDetail(){
	const router = useRouter();
	const id = Number(router.query.id);

	const [item, setItem] = useState({});

	const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?brand=maybelline'`

	function getDate(){
		Axios.get(API_URL).then(res => {
			// console.log(res.data);
			setItem(res.data);
		});
	}

	useEffect(() => {
		if(id && id > 0){
			getDate();
		}
	}, []);

	return(
		<div>
			<Item item={item} />
		</div>
	);
}