import CategorySlider from "@/components/home/CategorySlider"

const CATEGORY_ITEMS = [
	{ title: "All Recommendations", href: "#" },
	{ title: "Adobe Illustrator", href: "#" },
	{ title: "Adobe Photoshop", href: "#" },
	{ title: "UI Design", href: "#" },
	{ title: "Web Programming", href: "#" },
	{ title: "Mobile Programming", href: "#" },
	{ title: "Backend Development", href: "#" },
	{ title: "React JS", href: "#" },
	{ title: "Vue JS", href: "#" },
	{ title: "Svelte JS", href: "#" },
	{ title: "Solid JS", href: "#" },
	{ title: "Dev Ops", href: "#" },
	{ title: "Machine Learning", href: "#" },
	{ title: "Data Science", href: "#" },
	{ title: "Data Structure and Alogrithm", href: "#" },
	{ title: "Python", href: "#" },
	{ title: "Typescript", href: "#" },
]

export default function Home() {
	return (
		<main>
			<CategorySlider items={CATEGORY_ITEMS} />
		</main>
	)
}
