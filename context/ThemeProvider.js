import {
	ThemeProvider as ThemeProviderChakraUI,
	CSSReset,
	ColorModeProvider,
	// useColorMode,
} from "@chakra-ui/core";

// import { darkTheme, lightTheme } from "../theme";
// import useThemeMode from "../hooks/useThemeMode";

const ThemeProvider = ({ children, initialColorMode }) => {
	return (
		<ThemeProviderChakraUI>
			<ColorModeProvider value={initialColorMode}>
				<CSSReset />
				{children}
			</ColorModeProvider>
		</ThemeProviderChakraUI>
	);
};

export default ThemeProvider;

