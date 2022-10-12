import { Button, Divider } from "semantic-ui-react";

const Item = ({ item }) => {
	// console.log(item);
	const { image_link, name, price, description } = item;
	
	return (
		<>
			<div>
				<img src={image_link} alt={name} />
			</div>
			<div>
				<strong>{name}</strong>
				<strong>${price}</strong>
			</div>
			<Button color="black">구매하기</Button>
			<Divider />
			<div>
				<p>{description}</p>
			</div>
		</>
	);
}

export default Item;