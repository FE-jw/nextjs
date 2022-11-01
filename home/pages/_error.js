const _error = ({ statusCode }) => {
	console.log(statusCode);
	
	return (
		<div>
			500 server error
		</div>
	);
}

export default _error;