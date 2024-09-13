import { Box, Stack, Text, useBreakpointValue } from "@chakra-ui/react"

interface PopularInstructorGridItemProps {
	imgUrl: string
	title: string
	expertise: string
}

export function PopularInstructorGridItem({
	imgUrl,
	title,
	expertise,
}: PopularInstructorGridItemProps) {
	const width = useBreakpointValue({ base: "100%", md: 285 })

	return (
		<Box position={"relative"}>
			<Box
				borderRadius={30}
				width={width}
				height={400}
				sx={{
					background: `url("${imgUrl}")`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			/>
			<Stack
				position={"absolute"}
				bottom={4}
				left={0}
				right={0}
				width={"100%"}
				alignItems={"center"}
				color={"white"}
				gap={0}
			>
				<Text
					fontWeight={"bold"}
					fontSize={24}
					lineHeight={1.3}
				>
					{title}
				</Text>
				<Text>{expertise}</Text>
			</Stack>
		</Box>
	)
}
