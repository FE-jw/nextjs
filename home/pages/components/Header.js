import React from 'react';

const Header = () => {
	return (
		<header className="header-wrap">
			<div className="header">
				<h1 className="main-tit">
					<a href="/">JW</a>
				</h1>
				<nav className="nav">
					<a href="/sub/1">Menu 1</a>
					<a href="/sub/2">Menu 2</a>
					<a href="/sub/3">Menu 3</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;