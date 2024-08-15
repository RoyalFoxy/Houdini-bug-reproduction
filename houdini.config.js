/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'http://localhost:4000/graphql'
	},
	plugins: {
		'houdini-svelte': {
			framework: 'kit'
		}
	},
	scalars: {
		Money: {
			type: 'number'
		},
		DateTime: {
			type: 'string'
		}
	}
};

export default config;
