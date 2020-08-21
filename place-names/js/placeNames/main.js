function main() {
  // Put your code here
  const names = ["Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China"]

  //prints a list of each place name
  console.log("All Place Names:")
  names.forEach(name => {
    console.log(name)
  })

  console.log('')

  //filters names starting with the into a new array
  const theNames = names.filter(name => name.startsWith("The"))
  console.log("'The' Place Names:")
  theNames.forEach(name => {
    console.log(name)
  })


}

main();