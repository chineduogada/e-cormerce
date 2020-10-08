import Head from "next/head";
import { Box, Flex } from "@chakra-ui/core";
import Header from "../components/Header";
import Card from "../components/Card";
import { createRangeLite } from "../utils/createRange";

const Home = () => {
	const cards = createRangeLite(12);

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
					alignItems='baseline'
					flex='1'
					overflowY='auto'
					as='main'
				>
					{cards.map((_, index) => (
						<Card key={index} size='sm' />
					))}
				</Flex>

				<Box as='footer'>This is Footer</Box>
			</Flex>
		</>
	);
};

export default Home;

