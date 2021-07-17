const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.1 },
    { name: 'Emma', score: 9.5 },
    { name: 'Peter', score: 5.6 },
]

// media dos melhores estudantes
const greatStudent = student => student.score > 9
const getScore = el => el.score

const avg = (acumulador, el, i, array) => {
    if (i === array.length - 1) {
        return (acumulador + el) / array.length
    } else {
        return acumulador + el
    }
}

console.log(
    students
        .filter(greatStudent)
        .map(getScore)
        .reduce(avg)
);
