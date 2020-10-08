import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/core";

const useThemeMode = () => {
	const { colorMode: theme, toggleColorMode } = useColorMode();

	const isLight = theme === "light";

	const toggleTheme = () => {
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
			? { bg: "gray.200", color: "inherit" }
			: { bg: "gray.900", color: "white" },
	];

	return { theme, toggleTheme, boxColors, isLight };
};

export default useThemeMode;

