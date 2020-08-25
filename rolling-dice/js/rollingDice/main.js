function main() {
  // Put your code here
  const rollSomeDice = () => {
    console.log("Let's roll some dice, baby!")
    console.log("---------------------------")

    for (let i = 0; i < 10; i++) {
      let die1 = roll()
      let die2 = roll()

      let text = `${dieFace(die1)} + ${dieFace(die2)} = ${die1 + die2} `
      die1 === die2 ? text += ' DOUBLES! ' : ' '

      console.log(text)
    }

  }

  const roll = () => {
    return Math.floor((Math.random() * 6) + 1)
  }

  const dieFace = (int) => {
    let string = ``
    switch (int) {
      case 1:
        string = `\u2680`
        break;
      case 2:
        string = `\u2681`
        break;
      case 3:
        string = `\u2682`
        break;
      case 4:
        string = `\u2683`
        break;
      case 5:
        string = `\u2684`
        break;
      case 6:
        string = `\u2685`
        break;

    }

    return string;
  }

  rollSomeDice()

}

main();