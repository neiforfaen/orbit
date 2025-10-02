import defaultMdxComponents from "fumadocs-ui/mdx"
import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle,
} from "fumadocs-ui/page"
import type { PageProps } from "waku/router"
import { source } from "@/lib/source"

export default function DocPage({ slugs }: PageProps<"/docs/[...slugs]">) {
	const page = source.getPage(slugs)
	const pageName = `${page?.data.title === "Welcome" ? "" : `| ${page?.data.title ?? "Page Not Found"}`}`
	const title = `Orbit ${pageName}`

	if (!page) {
		return (
			<div className="text-center py-12">
				<h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
					Page Not Found
				</h1>
				<p className="text-gray-600 dark:text-gray-400">
					The page you are looking for does not exist.
				</p>
			</div>
		)
	}

	const MDX = page.data.body
	return (
		<>
			<title>{title}</title>
			<DocsPage toc={page.data.toc}>
				<DocsTitle>{page.data.title}</DocsTitle>
				<DocsDescription>{page.data.description}</DocsDescription>
				<DocsBody>
					<MDX
						components={{
							...defaultMdxComponents,
						}}
					/>
				</DocsBody>
			</DocsPage>
		</>
	)
}

export async function getConfig() {
	const pages = source
		.generateParams()
		.map((item) => (item.lang ? [item.lang, ...item.slug] : item.slug))

	return {
		render: "static" as const,
		staticPaths: pages,
	} as const
}
