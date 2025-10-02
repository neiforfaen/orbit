import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

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
	}
}
