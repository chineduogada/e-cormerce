import React from "react";
import { Box, Heading, Flex, Text, Button, IconButton } from "@chakra-ui/core";
import { ImMenu3, ImMenu4 } from "react-icons/im";

import useThemeMode from "../hooks/useThemeMode";

const MenuItems = ({ children }) => (
	<Text mt={{ base: 4, md: 0 }} mr={6} display='block'>
		{children}
	</Text>
);

const Header = (props) => {
	const [show, setShow] = React.useState(false);
	const { toggleTheme, isLight, boxColors } = useThemeMode();

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

				<Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
					<Button>
						{show ? <ImMenu4 size='25' /> : <ImMenu3 size='25' />}
					</Button>
				</Box>

				<Box
					display={{ base: show ? "block" : "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems='center'
					flexGrow={1}
				>
					<MenuItems>Docs</MenuItems>
					<MenuItems>Examples</MenuItems>
					<MenuItems>Blog</MenuItems>
				</Box>

				<Box
					display={{ base: show ? "block" : "none", md: "block" }}
					mt={{ base: 4, md: 0 }}
				>
					<Button bg='transparent' border='1px'>
						Create account
					</Button>
				</Box>

				<IconButton icon={isLight ? "moon" : "sun"} onClick={toggleTheme} />
			</Flex>
		</Box>
	);
};

export default Header;

