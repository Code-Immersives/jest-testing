//
// export let Hangman = 'Hangman'
// export let Main = 'Main'
// export default = {
//   Hangman,
//   Main
// }

class Hangman {
  constructor (word) {
    this.objective = word.toLowerCase()
    this.numOfGuesses = 0
    this.correctGuesses = 0
  }
  guess (letter) {
    if (typeof letter === 'number' && typeof letter !== 'string') return 'does not accept a number as an argument'
    let letterLC = letter.toLowerCase()
    if (letterLC.length === this.objective.length) {
      if (letterLC === this.objective) {
        return 'you win!'
      } else {
        this.numOfGuesses++
        return this.numOfGuesses >= 6 ? 'you loose' : false
      }
    }
    if (letter.length > 1) return 'you can only guess one letter at a time'

    let count = 0
    let isMatch = false
    this.objective.split('').forEach(e => {
      if (e === letterLC) {
        count++
      }
    })
    if (count > 0) {
      this.correctGuesses += count
      isMatch = true
    } else {
      this.numOfGuesses++
    }
    // console.log('number of correct guesses', this.correctGuesses)
    if (this.numOfGuesses >= 6) return 'x.x you loose'
    if (this.correctGuesses == this.objective.length) return ':) you win!'
    return isMatch
  }
}

export default Hangman // => export only one item
