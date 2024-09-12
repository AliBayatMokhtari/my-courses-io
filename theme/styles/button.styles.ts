import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const buttonBaseStyle = defineStyle({
	borderRadius: "12px",
})

const buttonSizes = {
	sm: defineStyle({
		height: "32px",
		px: "16px",
		lineHeight: "1.3px",
		fontWeight: "bold",
	}),
}

export const Button = defineStyleConfig({
	baseStyle: buttonBaseStyle,
	sizes: buttonSizes,
	defaultProps: {
		colorScheme: "brand",
	},
})
