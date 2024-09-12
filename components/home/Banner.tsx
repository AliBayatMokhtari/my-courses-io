"use client"

import { Image } from "@chakra-ui/next-js"
import { Box } from "@chakra-ui/react"

export function HomeBanner() {
	return (
		<Box>
			<Image
				src="/home-banner.png"
				width={1920}
				height={1920}
				alt="home-banner"
				sx={{
					width: "100%",
					height: "auto",
				}}
			/>
		</Box>
	)
}
