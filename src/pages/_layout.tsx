import "@/styles/globals.css"
import type { ReactNode } from "react"
import { Provider } from "@/components/provider"

export default function RootLayout({ children }: { children: ReactNode }) {
	const metadata = {
		title: "Orbit",
		description:
			"Find delicious, easy, and affordable recipes for your health goals. " +
			"This collection focuses on high-protein, satisfying meals that make weight loss enjoyable.",
	}

	return (
		<Provider>
			<title>{metadata.title}</title>
			<link rel="icon" type="image/png" href="/icon.png" />
			<meta name="description" content={metadata.description} />
			{children}
		</Provider>
	)
}
