import { Header } from 'semantic-ui-react'
import Gnb from './Gnb';

export default function Top(){
	return(
		<header className='header'>
			<Header as="h1" className='main-tit'>JW <img src="images/logo_next.svg" alt="Next.js" className='logo-img' /></Header>
			<Gnb />
		</header>
	);
}