import Head from "next/head";
import { Box, Flex } from "@chakra-ui/core";
import Header from "../components/Header";
import { createRangeLite } from "../utils/createRange";
import Products from "../components/Products";
import Hero from "../components/Hero";

const Home = () => {
	const cards = createRangeLite(12);

	return (
		<>
			<Head>
				<title>e-commerce template</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex height='100vh' direction='column' maxWidth={1024} mx='auto'>
				<Header />

				<Flex direction='column' flex='1' overflowY='auto'>
					
					<Box
						flex='1'
						as='main'
					>
					<Hero />

						
						<Products data={cards} />
						<br />
						<Products data={cards} />
						<br />
						<Products data={cards} />
						<br />
						<Products data={cards} />
						<br />
						<br />
						<br />
						<Products data={cards} lg />

					</Box>

					<Box as='footer'>This is Footer</Box>
				</Flex>
			</Flex>
		</>
	);
};

export default Home;












