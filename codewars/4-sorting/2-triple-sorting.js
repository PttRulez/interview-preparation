// https://www.codewars.com/kata/5829c2c8ef8d4474300000fa/train/javascript

function sort(students) {
  return students.sort((a, b) => {
    if (a.gpa === b.gpa) {
			const aLastName = a.fullName.split(' ')[1][0]
			const bLastName = b.fullName.split(' ')[1][0]

			if (bLastName.localeCompare(aLastName) === 0) {
				return a.age - b.age
			}
			return aLastName.localeCompare(bLastName)
		}
		return b.gpa - a.gpa;
  }).map(s => s.fullName).join(',')
};

function sort(students) {
  return students.sort((a, b) => {
    const gpaDiff = b.gpa - a.gpa;
    const nameDiff = (a.fullName.split(' ')[1][0].charCodeAt(0) - b.fullName.split(' ')[1][0].charCodeAt(0));
    const ageDiff = a.age - b.age
    return gpaDiff || nameDiff || ageDiff;
  })
    .map(s => s.fullName)
    .join(',')
};
