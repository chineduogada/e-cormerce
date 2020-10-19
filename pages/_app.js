import cookies from "next-cookies";
// import "react-rapid-carousel/dist/index.css";

import ThemeProvider from "../context/ThemeProvider";

function MyApp({ Component, pageProps, initialColorMode }) {
	return (
		<ThemeProvider initialColorMode={initialColorMode}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	const { isDarkMode = "false" } = cookies(ctx);
	return {
		pageProps,
		initialColorMode: isDarkMode === "true" ? "dark" : "light",
	};
};

export default MyApp;

