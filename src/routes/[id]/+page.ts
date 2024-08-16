import { load_ActiveOrder } from '$houdini';
import type { PageLoad } from '../$houdini';

export const load: PageLoad = async (event) => {
	console.log('Called', event.url.pathname);
	const { ActiveOrder } = await load_ActiveOrder({
		blocking: true,
		event,
		variables: { amount: 1000 }
	});

	return { ActiveOrder };
};
