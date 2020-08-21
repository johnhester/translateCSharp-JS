function main() {
  // Put your code here
  const rollSomeDice = () => {
    console.log("Let's roll some dice, baby!")
    console.log("---------------------------")

    for (let i = 0; i < 10; i++) {
      console.log(roll())
    }

  }

  const roll = () => {
    return Math.floor((Math.random() * 6) + 1)
  }

  rollSomeDice()

}

main();