"use client"

import { Box, Grid, GridItem, Skeleton } from "@chakra-ui/react"
import { CourseGridItem } from "./CourseGridItem"
import { useEffect, useState } from "react"
import { HomePageSection } from "./HomePageSection"
import { Swiper, SwiperSlide } from "swiper/react"

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
			{interestCourses.map((course, idx) => (
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
			title="Based on your interest"
			subtitle="We know the best things for you. Top picks for you."
		>
			<Box hideBelow={"md"}>{content}</Box>
			<Box
				hideFrom={"md"}
				mt={4}
			>
				<Swiper
					spaceBetween={8}
					slidesPerView={1.2}
					breakpoints={{
						576: {
							slidesPerView: 2.5,
						},
					}}
					slidesPerGroup={2}
					freeMode
				>
					{interestCourses.map((course, idx) => (
						<SwiperSlide key={idx}>
							<CourseGridItem {...course} />
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</HomePageSection>
	)
}
