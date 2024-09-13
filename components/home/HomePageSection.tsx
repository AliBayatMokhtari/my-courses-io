import { Box, Heading, Text } from "@chakra-ui/react"
import { PropsWithChildren } from "react"

interface HomePageSectionProps {
	title: string
	subtitle: string
}

export function HomePageSection({
	children,
	title,
	subtitle,
}: PropsWithChildren<HomePageSectionProps>) {
	return (
		<Box mt={5}>
			<Heading
				fontSize={20}
				lineHeight={1.3}
			>
				{title}
			</Heading>
			<Text
				color={"black"}
				opacity={0.6}
				mt={1}
			>
				{subtitle}
			</Text>
			{children}
		</Box>
	)
}
