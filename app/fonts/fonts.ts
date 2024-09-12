import localFont from "next/font/local"

const gilroy = localFont({
	src: [
		{
			path: "./Gilroy-Regular.woff",
			style: "normal",
			weight: "400",
		},
		{
			path: "./Gilroy-Bold.woff",
			style: "bold",
			weight: "700",
		},
		{
			path: "./Gilroy-ExtraBold.woff",
			style: "normal",
			weight: "900",
		},
	],
	variable: "--font-gilroy",
})

export const fonts = {
	gilroy,
}
