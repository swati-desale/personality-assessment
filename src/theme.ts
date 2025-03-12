import { createTheme } from "@mui/material"

const theme = createTheme({
	palette: {
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#dc004e',
		},
		background: {
			default: '#f5f5f5',
		},
	},
	typography: {
		fontFamily: 'Arial, sans-serif',
	},
})

export default theme
