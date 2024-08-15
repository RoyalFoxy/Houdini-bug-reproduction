import { load_ActiveOrder } from '$houdini';
import type { PageLoad } from './$houdini';

export const load: PageLoad = async (event) => {
	const { ActiveOrder } = await load_ActiveOrder({ blocking: true, event });

	return { ActiveOrder };
};
