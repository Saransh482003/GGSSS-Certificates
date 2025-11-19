// API route to serve placeholder certificate data
// Structure: { "Teacher Name": [ { studentObject }, ... ] }
export default function handler(req, res) {
	const { teacher } = req.query;

	const data = {
		"Ms. Sharma": [
			{
				id: 1,
				name: "Aarav Gupta",
				fatherName: "Rakesh Gupta",
				class: "VIII",
				section: "A",
				event: "Volcano Model",
				driveLink: "https://drive.google.com/placeholder1",
				teacher: "Ms. Sharma"
			},
			{
				id: 2,
				name: "Ishika Verma",
				fatherName: "Sanjay Verma",
				class: "VIII",
				section: "B",
				event: "Solar System Display",
				driveLink: "https://drive.google.com/placeholder2",
				teacher: "Ms. Sharma"
			}
		],
		"Mr. Singh": [
			{
				id: 3,
				name: "Rohan Mehta",
				fatherName: "Anil Mehta",
				class: "IX",
				section: "A",
				event: "Robotics Basics",
				driveLink: "https://drive.google.com/placeholder3",
				teacher: "Mr. Singh"
			},
			{
				id: 4,
				name: "Sneha Patel",
				fatherName: "Mahesh Patel",
				class: "IX",
				section: "C",
				event: "Physics Experiments",
				driveLink: "https://drive.google.com/placeholder4",
				teacher: "Mr. Singh"
			}
		],
		"Mrs. Khan": [
			{
				id: 5,
				name: "Devansh Rao",
				fatherName: "Prakash Rao",
				class: "X",
				section: "A",
				event: "Chemistry Reactions",
				driveLink: "https://drive.google.com/placeholder5",
				teacher: "Mrs. Khan"
			},
			{
				id: 6,
				name: "Meera Jain",
				fatherName: "Vikram Jain",
				class: "X",
				section: "B",
				event: "Environmental Conservation",
				driveLink: "https://drive.google.com/placeholder6",
				teacher: "Mrs. Khan"
			}
		]
	};

	if (teacher) {
		if (data[teacher]) {
			return res.status(200).json({ [teacher]: data[teacher] });
		}
		return res.status(404).json({ error: "Teacher not found" });
	}

	res.status(200).json(data);
}

