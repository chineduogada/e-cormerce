import { useEffect, useState } from "react";
import { useColorMode } from "@chakra-ui/core";

const useThemeMode = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		toggleColorMode();
	};

	useEffect(() => {
		const isDark = colorMode === "dark" ? true : false;

		const mode = isDark ? "dark" : "light";

		setTheme(mode);
	}, [colorMode]);

	return { theme, toggleTheme };
};

export default useThemeMode;

