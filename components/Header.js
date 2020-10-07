import React from "react";
import {
	Box,
	Heading,
	Flex,
	Text,
	Button,
	Icon,
	useColorMode,
} from "@chakra-ui/core";

const MenuItems = ({ children }) => (
	<Text mt={{ base: 4, md: 0 }} mr={6} display='block'>
		{children}
	</Text>
);

const Header = (props) => {
	const [show, setShow] = React.useState(false);

	const { colorMode, toggleColorMode } = useColorMode();

	const handleThemeToggle = () => {
		toggleColorMode();
		document.cookie = `isDarkMode=${colorMode === "light"}`;
	};

	const isDark = colorMode === "dark";

	const boxColors = [
		isDark
			? { bg: "gray.600", color: "white" }
			: { bg: "gray.200", color: "inherit" },

		isDark
			? { bg: "gray.700", color: "white" }
			: { bg: "gray.300", color: "inherit" },
	];

	const handleToggle = () => setShow(!show);

	return (
		<Box as='header'>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				wrap='wrap'
				padding='1.5rem'
				{...boxColors[0]}
				{...props}
			>
				<Flex align='center' mr={5} flex='1'>
					<Heading as='h1'>e-commerce</Heading>
				</Flex>

				<Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
					<Button>
						<svg
							fill='white'
							width='12px'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</Button>
				</Box>

				<Box
					display={{ sm: show ? "block" : "none", md: "flex" }}
					width={{ sm: "full", md: "auto" }}
					alignItems='center'
					flexGrow={1}
				>
					<MenuItems>Docs</MenuItems>
					<MenuItems>Examples</MenuItems>
					<MenuItems>Blog</MenuItems>
				</Box>

				<Box
					display={{ sm: show ? "block" : "none", md: "block" }}
					mt={{ base: 4, md: 0 }}
				>
					<Button bg='transparent' border='1px'>
						Create account
					</Button>
				</Box>

				<Button>
					<Icon
						name={isDark ? "sun" : "moon"}
						onClick={handleThemeToggle}
					/>
				</Button>
			</Flex>
		</Box>
	);
};

export default Header;

