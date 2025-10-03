import { GithubInfo } from "fumadocs-ui/components/github-info"
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"
import { Issue } from "@/components/issue-icon"

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: "Orbit",
			transparentMode: "always",
		},
		githubUrl: "https://github.com/neiforfaen/orbit",
		themeSwitch: {
			mode: "light-dark-system",
		},
		links: [
			{
				type: "custom",
				children: (
					<GithubInfo
						owner="neiforfaen"
						repo="orbit"
						className="mx-[1px]"
						token={process.env.GITHUB_TOKEN}
					/>
				),
			},
			{
				text: "Report an issue",
				label: "Report an issue on GitHub",
				url: "https://github.com/neiforfaen/orbit/issues",
				icon: <Issue />,
				external: true,
			},
		],
	}
}
