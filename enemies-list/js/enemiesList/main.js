function main() {
  // Put your code here


  determineEnemies = () => {
    console.log("My Enemies List");
    console.log("----------------")

    const enemies = getEnemies();
    enemies.forEach(enemy => {
      enemy.isReallyHated ?
        console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`)
        :
        console.log(`${enemy.firstName} ${enemy.lastName}`)
    })
  }


  const createEnemeies = (firstName, lastName, offenses, isReallyHated) => {
    let obj = {
      firstName,
      lastName,
      offenses,
      isReallyHated
    }

    return obj;
  }

  const getEnemies = () => {
    const enemies = []
    enemies.push(createEnemeies('Joshua', 'Flowers', ["Being a jerk to me in elementary school", "Not being nice to me in elementary school"], true))
    enemies.push(createEnemeies('Darth', 'Vader', ["Cut off Luke's hand",
      "Murdered all those kids",
      "Unkind management practices"], false))
    enemies.push(createEnemeies('Betty', 'Rudelady', [
      "Phone calls in the theater",
      "Phone calls on the bus",
      "Phone calls in line at the grocery store",
      "Poor conversationalist"
    ], true))
    enemies.push(createEnemeies('Leon', 'Peck', [
      "Keeps giving me a hotplate"
    ], false))

    return enemies;

  }

  determineEnemies();

}

main();