import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const containerBaseStyle = defineStyle({
	maxWidth: "8xl",
	px: {
		lg: "7rem",
	},
})

export const Container = defineStyleConfig({
	baseStyle: containerBaseStyle,
})
