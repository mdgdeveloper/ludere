import NavBar from './NavBar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
