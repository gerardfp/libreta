import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
            define: {
                'process.env': process.env,
            },
        },
	}
};

export default config;
