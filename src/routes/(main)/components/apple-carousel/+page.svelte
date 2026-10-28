<script lang="ts">
	import ComponentDocPage from "#lib/components/docs/base/main/component-doc-page.svelte";
	import { data } from "./data";
</script>

<ComponentDocPage
	id={data.id}
	title={data.title}
	description={data.description}
	seo={data.seo}
	preview={data.preview_config?.component}
	previewCode={data.preview_config?.code}
	previewClass={data.preview_config?.class}
	installCodeBlocks={data.install_block?.install_code}
	installPackages={data.install_block?.packages}
	installFolderStructure={data.install_block?.folder_structure}
	installTailwindCode={data.install_block?.tailwind}
	features={data.features}
	examples={data.examples}
	propsTables={data.props}
/>
