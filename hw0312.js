// 1-ex
const city = {
  name: "Алматы",
  population: 2000000,
  districts: [
    { name: "Медеу", population: 3000000 },
    { name: "Бесағаш", population: 2500000 },
  ],
};

console.log(city.districts);

// 2-ex
const schools = [
  {
    name: "172-school",
    district: "Bolashak",
    students: 3000,
  },
  {
    name: "32-school",
    district: "Almaly",
    students: 2000,
  },
  {
    name: "HaileyBury",
    district: "Almaly",
    students: 1200,
  },
];

function totalStudents(schools) {
  var sum = 0;
  schools.forEach((school) => {
    sum += school.students;
  });
  return sum;
}

console.log(totalStudents(schools));

// 3-ex
