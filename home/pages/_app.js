import '../styles/globals.min.css'
import 'semantic-ui-css/semantic.min.css'
import Top from '../src/component/Top';
import Footer from '../src/component/Footer';

import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";

function MyApp({ Component, pageProps }) {
  return (
	<PortfolioProvider value={{ prefix }}>
		<Top />
  		<Component {...pageProps} />
		<Footer />
	</PortfolioProvider>
  );
}

export default MyApp;