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
    this.numOfGuesses = 0
    this.correctGuesses = 0
  }
  guess (letter) {
    if (letter.length > 1) return 'you can only guess one letter at a time'
    let isMatch = this.objective.includes(letter)
    if (isMatch) {
      this.correctGuesses++
    } else {
      this.numOfGuesses++
    }

    if (this.numOfGuesses >= 6) return 'x.x you loose'
    if (this.correctGuesses == this.objective.length) return ':) you win!'
    return isMatch
  }
}

export default Hangman // => export only one item
