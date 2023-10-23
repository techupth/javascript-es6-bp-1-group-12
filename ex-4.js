let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here

function mergeHobbies(hobbies,additionalHobbies){
  let newHobbies = [...hobbies,...additionalHobbies]
  let hob = {
    hobbies: newHobbies
  }
  return hob
}
let allHobbies = mergeHobbies(studentProfile.hobbies,additionalHobbies)
let newStudentProfile = {...studentProfile,...allHobbies}
console.log(newStudentProfile)