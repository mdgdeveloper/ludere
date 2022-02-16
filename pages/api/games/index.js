import { getMultipleGames } from '../../../utils/gameUtils';

export default async function handler(req, res) {
	const { method } = req;

	if (method === 'POST') {
		try {
			const result = await getMultipleGames(JSON.parse(req.body));
			res.status(201).json(result);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
