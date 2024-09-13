import { Box, Stack, Text } from "@chakra-ui/react"

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
	return (
		<Box position={"relative"}>
			<Box
				position={"relative"}
				display={"inline-block"}
				borderRadius={30}
				width={285}
				height={400}
				sx={{
					background: `linear-gradient(to top, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${imgUrl}")`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
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
