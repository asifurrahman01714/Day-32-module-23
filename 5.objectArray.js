const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaa'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Deepjal'}
];

const students2 = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const nameProperty = element.name;
    students2.push(nameProperty);
}
console.log(students2);



const names1 = students.map(studentsName => studentsName.name);
console.log(names1);

const ids = students.map(id => id.id);
console.log(ids);

const bigger = students.filter(s => s.id >30);
console.log(bigger);

const findBigger = students.find(s => s.id > 30);
console.log(findBigger);