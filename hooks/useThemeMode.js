import { useColorMode } from "@chakra-ui/core";

const useThemeMode = () => {
	const { colorMode: themeMode, toggleColorMode } = useColorMode();

	const isLight = themeMode === "light";

	const toggleThemeMode = () => {
		toggleColorMode();
		document.cookie = `isDarkMode=${isLight}`;
	};

	const boxColors = [
		isLight
			? { bg: "gray.50", color: "inherit" }
			: { bg: "gray.600", color: "white" },

		isLight
			? { bg: "gray.100", color: "inherit" }
			: { bg: "gray.700", color: "white" },

		isLight
			? { bg: "transparent", color: "inherit" }
			: { bg: "gray.900", color: "white" },
	];

	return { themeMode, toggleThemeMode, boxColors, isLight };
};

export default useThemeMode;

