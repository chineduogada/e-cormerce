import Head from "next/head";
import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/core";
import Header from "../components/Header";
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

				<Box flex='1' overflowY='auto' as='main'>
					This is Content
				</Box>

				<Box as='footer'>This is Footer</Box>
			</Flex>
		</>
	);
};

export default Home;

