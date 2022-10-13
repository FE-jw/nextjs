import { Grid } from 'semantic-ui-react';
import Link from 'next/link';

const ItemList = ({ list }) => {
	return (
		<div>
			<Grid columns={3}>
				<Grid.Row>
					{
						list.map((item) => (
							<Grid.Column key={item.id}>
								<Link href="/view/[id]" as={`/view/${item.id}`}>
									<a href="">
										<img src={item.image_link} alt={item.name} />
										<div>
											{item.category}
											{item.product_type}
										</div>
										<div><strong>{item.name}</strong></div>
										<div><strong>${item.price}</strong></div>
									</a>
								</Link>
							</Grid.Column>
						))
					}
				</Grid.Row>
			</Grid>
		</div>
	);
}

export default ItemList;