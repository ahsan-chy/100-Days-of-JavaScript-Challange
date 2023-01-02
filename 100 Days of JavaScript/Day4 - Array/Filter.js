let man = {
	'Students': [{
			"name": "Raj",
			"Age":"15",
			"RollNumber": "123",
			"Marks": "99",
			
		}, {
			"name": "Aman",
			"Age":"14",
			"RollNumber": "223",
			"Marks": "69",
		},
		{
			"name": "Vivek",
			"Age":"13",
			"RollNumber": "253",
			"Marks": "89",
		},
		]
};

let filteredStudent = man.Students.filter((m) => m.Age >=15)
console.log(filteredStudent);
