"use client"

import { theme } from "@/theme/theme"
import { ChakraProvider } from "@chakra-ui/react"
import { CacheProvider } from "@chakra-ui/next-js"
import { PropsWithChildren } from "react"

export function Providers({ children }: PropsWithChildren) {
	return (
		<CacheProvider>
			<ChakraProvider theme={theme}>{children}</ChakraProvider>
		</CacheProvider>
	)
}
