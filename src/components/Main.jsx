import { Box } from "@mui/joy";

const Main = ({children}) => (
	<Box
		component="main"
		sx={theme => ({
			height: "100vh",
			width: "100vw",
			background: theme.palette.neutral[800],
			display: "flex",
			flexDirection: "column"
		})}
	>
		{children}
	</Box>
)

export default Main
