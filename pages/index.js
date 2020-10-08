import Head from "next/head";
import { Box, Flex } from "@chakra-ui/core";
import Header from "../components/Header";
import Card from "../components/Card";
// import useDarkMode from "../hooks/useDarkMode";

const Home = () => {
	// const { isDark, toggleTheme } = useDarkMode();

	return (
		<>
			<Head>
				<title>e-commerce template</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex direction='column' height='100vh' maxWidth={900} mx='auto'>
				<Header />

				<Flex
					wrap='wrap'
					justifyContent='space-around'
					flex='1'
					overflowY='auto'
					as='main'
				>
					{Array(10)
						.fill("")
						.map((_, index) => (
							<Card key={index} size='sm' />
						))}
				</Flex>

				<Box as='footer'>This is Footer</Box>
			</Flex>
		</>
	);
};

export default Home;

