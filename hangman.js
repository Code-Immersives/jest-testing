//
// export let Hangman = 'Hangman'
// export let Main = 'Main'
// export default = {
//   Hangman,
//   Main
// }

class Hangman {
  constructor (word) {
    this.objective = word
  }
  guess (letter) {
    let isMatch = this.objective.includes(letter)
    return isMatch
  }
}

export default Hangman // => export only one item
