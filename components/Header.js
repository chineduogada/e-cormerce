import { Box, Heading, Flex, Text, Button, IconButton } from "@chakra-ui/core";
import { ImMenu3, ImMenu4 } from "react-icons/im";

import useThemeMode from "../hooks/useThemeMode";
import Brand from "./Brand";

const MenuItems = ({ children }) => (
	<Text mt={{ base: 4, md: 0 }} mr={6} display='block'>
		{children}
	</Text>
);

const Header = (props) => {
	const [show, setShow] = React.useState(false);
	const { toggleThemeMode, isLight, boxColors } = useThemeMode();

	const handleToggleMenu = () => setShow(!show);

	return (
		<Box as='header'>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				wrap='wrap'
				padding='2'
				{...boxColors[0]}
				{...props}
			>
				<Box mr={5} w='fit-content' flex='1'>
					<Heading as='h1'>
						<Brand />
					</Heading>
				</Box>

				<Box
					display={{ base: "block", md: "none" }}
					onClick={handleToggleMenu}
				>
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

				<IconButton
					icon={isLight ? "moon" : "sun"}
					onClick={toggleThemeMode}
				/>
			</Flex>
		</Box>
	);
};

export default Header;


