// API route to serve certificate data from JSON file
// Structure: { "Teacher Name": [ { studentObject }, ... ] }
import data from '../../JSON/all_data.json';

export default function handler(req, res) {
	const { teacher } = req.query;

	if (teacher) {
		if (data[teacher]) {
			return res.status(200).json({ [teacher]: data[teacher] });
		}
		return res.status(404).json({ error: "Teacher not found" });
	}

	res.status(200).json(data);
}

