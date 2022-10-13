import '../styles/globals.min.css'
import 'semantic-ui-css/semantic.min.css'
import Top from '../src/component/Top';
import Footer from '../src/component/Footer';

function MyApp({ Component, pageProps }) {
  return (
	<>
		<Top />
  		<Component {...pageProps} />
		<Footer />
	</>
  );
}

export default MyApp;