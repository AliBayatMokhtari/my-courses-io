"use client"

import { Grid, GridItem, Skeleton } from "@chakra-ui/react"
import { CourseGridItem } from "./CourseGridItem"
import { HomePageSection } from "./HomePageSection"
import { useEffect, useState } from "react"

const trendingCourses = [
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

export function TrendingCourses() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(false)
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
			templateColumns="repeat(4, 1fr)"
			gap={5}
			mt={4}
		>
			{trendingCourses.map((course, idx) => (
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
		<HomePageSection
			title="Trending Course"
			subtitle="We know the best things for You.  Top picks for You."
		>
			{content}
		</HomePageSection>
	)
}
