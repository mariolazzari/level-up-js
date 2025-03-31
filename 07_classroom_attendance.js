function getStudents(classroom) {
  const { hasTeachingAssistant, classList } = classroom;

  if (hasTeachingAssistant) {
    const [, , ...students] = classList;
    return students;
  }

  const [, ...students] = classList;
  return students;
}

console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
  })
);
