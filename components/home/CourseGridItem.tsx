"use client"

import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { MdOutlinePerson } from "react-icons/md"
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md"
import { Image, Link } from "@chakra-ui/next-js"
import { roundRating } from "@/utils/rating"

interface CourseGridItemProps {
	imgUrl: string
	title: string
	instructor: string
	description: string
	rating: number
	total: number
	price: number
	originalPrice: number
}

const ratingIconProps = {
	size: 16,
	color: "var(--chakra-colors-yellow-500)",
}

export function CourseGridItem({
	imgUrl,
	title,
	instructor,
	description,
	rating,
	total,
	price,
	originalPrice,
}: CourseGridItemProps) {
	return (
		<Box>
			<Box>
				<Image
					src={imgUrl}
					width={285}
					height={181}
					alt="something"
					borderRadius={23}
				/>
			</Box>
			<Box mt={1}>
				<Text
					fontWeight={"bold"}
					lineHeight={1.3}
				>
					{title}
				</Text>
			</Box>
			<Flex
				gap={1}
				alignItems={"center"}
				mt={1}
			>
				<MdOutlinePerson
					size={18}
					color="black"
					opacity={0.6}
				/>
				<Link
					href={"#"}
					fontSize={14}
					color={"brand.500"}
				>
					{instructor}
				</Link>
			</Flex>
			<Box mt={1}>
				<Text
					fontSize={14}
					color={"black"}
					opacity={0.9}
					overflow={"hidden"}
					textOverflow={"ellipsis"}
					display={"-webkit-box"}
					sx={{
						["-webkit-line-clamp"]: "3",
						["-webkit-box-orient"]: "vertical",
					}}
				>
					{description}
				</Text>
			</Box>
			<Flex
				alignItems={"center"}
				gap={1}
				mt={1}
			>
				<Flex gap={0.5}>
					{Array.from({ length: 5 }).map((_, idx) =>
						idx + 1 <= rating ? (
							<MdOutlineStar
								key={idx}
								fill="var(--chakra-colors-yellow-500)"
								{...ratingIconProps}
							/>
						) : (
							<MdOutlineStarBorder
								key={idx}
								{...ratingIconProps}
							/>
						),
					)}
				</Flex>
				<Text
					fontSize={14}
					color={"black"}
					opacity={0.6}
				>
					({roundRating(total)})
				</Text>
			</Flex>
			<Flex
				gap={1}
				mt={1}
			>
				<Text
					fontWeight={"bold"}
					lineHeight={1.3}
					fontSize={20}
					color={"black"}
				>
					${price}
				</Text>
				<Text
					color={"black"}
					opacity={0.6}
				>
					${originalPrice}
				</Text>
			</Flex>
		</Box>
	)
}
