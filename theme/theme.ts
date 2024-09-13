import { extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { Button } from "./styles/button.styles"
import { Container } from "./styles/container.styles"
import { Input } from "./styles/input.styles"

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false
}

export const theme = extendTheme({
	config,
	breakpoints: {
		base: '0em',
		sm: '375px',
		md: '1024px',
		lg: '1440px',
		xl: '1920px',
	},
	fonts: {
		heading: "var(--font-gilroy)",
		body: "var(--font-gilroy)",
	},
	colors: {
		white: {
			90: "#F9F9F9",
		},
		black: '#1B1B1B',
		brand: {
			"500": "#3DCBB1",
		},
		yellow: {
			500: "#FFD130"
		}
	},
	components: {
		Container,
		Button: Button,
		Input: Input,
	},
})
