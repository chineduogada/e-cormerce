import {
	ThemeProvider as ThemeProviderChakraUI,
	CSSReset,
	ColorModeProvider,
} from "@chakra-ui/core";

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

