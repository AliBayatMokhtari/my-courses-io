"use client"

import {
	Box,
	Grid,
	GridItem,
	Heading,
	Skeleton,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react"
import { CourseGridItem } from "./CourseGridItem"
import { useEffect, useState } from "react"

const interestCourses = [
	{
		imgUrl: "/home-banner.png",
		title: "Adobe Illustrator Scretch Course",
		instructor: "Kitani Studio",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto numquam tempore vero nisi nobis quam quae quo perferendis autem! Nulla aperiam iusto asperiores deserunt magnam aspernatur rem sint voluptates.",
		rating: 4,
		total: 1200,
		price: 24.92,
		originalPrice: 32.9,
	},
	{
		imgUrl: "/home-banner.png",
		title: "Adobe Illustrator Scretch Course",
		instructor: "Kitani Studio",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto numquam tempore vero nisi nobis quam.",
		rating: 4,
		total: 1200,
		price: 24.92,
		originalPrice: 32.9,
	},
	{
		imgUrl: "/home-banner.png",
		title: "Adobe Illustrator Scretch Course",
		instructor: "Kitani Studio",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto numquam tempore vero nisi nobis quam quae quo perferendis autem! Nulla aperiam iusto asperiores deserunt magnam aspernatur rem sint voluptates.",
		rating: 4,
		total: 1200,
		price: 24.92,
		originalPrice: 32.9,
	},
	{
		imgUrl: "/home-banner.png",
		title: "Adobe Illustrator Scretch Course",
		instructor: "Kitani Studio",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto numquam tempore vero nisi nobis quam quae quo perferendis autem! Nulla aperiam iusto asperiores deserunt magnam aspernatur rem sint voluptates.",
		rating: 4,
		total: 1200,
		price: 24.92,
		originalPrice: 32.9,
	},
]

export function BasedOnYourInterest() {
	const cols = useBreakpointValue({ base: 3, lg: 4 })
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 200)
	}, [])

	const content = loading ? (
		<Grid
			templateColumns="repeat(3, 1fr)"
			gap={5}
			mt={4}
		>
			{Array.from({ length: 3 }).map((_, idx) => (
				<GridItem
					w="100%"
					key={idx}
				>
					<Skeleton
						width="100%"
						height={181}
						borderRadius={23}
					/>
				</GridItem>
			))}
		</Grid>
	) : (
		<Grid
			templateColumns={`repeat(${cols}, 1fr)`}
			gap={5}
			mt={4}
		>
			{interestCourses.slice(0, cols).map((course, idx) => (
				<GridItem
					w="100%"
					key={idx}
				>
					<CourseGridItem {...course} />
				</GridItem>
			))}
		</Grid>
	)

	return (
		<Box>
			<Heading
				fontSize={20}
				lineHeight={1.3}
			>
				Based on your interest
			</Heading>
			<Text
				color={"black"}
				opacity={0.6}
				mt={1}
			>
				We know the best things for you. Top picks for you.
			</Text>
			{content}
		</Box>
	)
}
