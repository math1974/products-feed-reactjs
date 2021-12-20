import axios from 'axios';
import lodash from 'lodash';

export const get = async ({ params, url }) => {
	const response = await axios.get(url, {
		...params
	});

	return lodash.get(response, 'data');
};
