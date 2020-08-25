function main() {
  // Put your code here
  const doMagic = () => {



    const spellList = []
    spellList.push(createSpell('Turn enemy into a newt', true, 5.1))
    spellList.push(createSpell('Conjure some gold for a local charity', false, 2.99))
    spellList.push(createSpell('Give a deaf person the ability to hear', false, 12.2))
    spellList.push(createSpell('Make yourself emperor of the universe', true, 100.0))
    spellList.push(createSpell('Convince your relatives your political views are correct', false, 2921.5))

    const goodBook = {
      Title: "Good Book",
      Spells: spellList.filter(spell => !spell.evil)
    }

    const badBook = {
      Title: "Evil Book",
      Spells: spellList.filter(spell => spell.evil)
    }

    console.log("Do you believe in magic?");
    console.log("------------------------");
    displayBook(goodBook)
    console.log('')
    displayBook(badBook)

  }

  const createSpell = (name, evil, energyRequired) => {
    obj = {
      name,
      evil,
      energyRequired
    }

    return obj;
  }

  const displayBook = (book) => {
    console.log(book.Title)
    book.Spells.forEach(spell => {
      console.log(spell.name)
    })
  }

  doMagic()

}

main();