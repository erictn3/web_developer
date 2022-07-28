const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)

exams.some(score => score === 77)

function allEvens(numbers) {
    return numbers.every(num => num % 2 === 0)
}