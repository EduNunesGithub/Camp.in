import GlobalStyles from "@mui/material/GlobalStyles";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Home } from "./pages/Home/Home";

import { pxToRem } from "./utils/unitConverter";
import { theme } from "./themes/mainTheme";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				styles={(theme) => ({
					"*": {
						boxSizing: "border-box",
						margin: 0,
						padding: 0,
						wordWrap: "break-word",
						"::-webkit-scrollbar": {
							width: pxToRem(12),
							height: pxToRem(12)
						},
						"::-webkit-scrollbar-button": {
							width: 0,
							height: 0
						},
						"::-webkit-scrollbar-corner": {
							background: "transparent"
						},
						"::-webkit-scrollbar-thumb": {
							background: "#FFC6327F",
							border: "0px none #FFFFFF",
							borderRadius: pxToRem(100),
							":hover": {
								background: "#FFC632BF"
							},
							":active": {
								background: "#FFC632"
							}
						},
						"::-webkit-scrollbar-track": {
							background: "#191816",
							border: "0px none #FFFFFF",
							borderRadius: pxToRem(100),
							":hover": {
								background: "#191816"
							},
							":active": {
								background: "#191816"
							}
						}
					},
					body: {
						background: "#191816",
						overflowX: "hidden"
					},
					[theme.breakpoints.down("sm")]: {
						html: {
							fontSize: `${(16 / 375) * 100}vw`
						}
					}
				})}
			/>

			<Box
				sx={{
					margin: "auto",
					width: "100%",
					maxWidth: pxToRem(1440),
					minHeight: "100vh"
				}}
			>
				<Home />
			</Box>
		</ThemeProvider>
	);
};