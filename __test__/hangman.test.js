import Hangman from '../hangman' // => import for one item only
// import { Hangman, Main } from '../hangman' //object destructoring

describe('Hangman Class', () => {
  test('Hangman constructor exist', () => {
    let myGame = new Hangman()
    expect(myGame.constructor).toBeDefined()
  })
  test('Hangman instance has a property called objective', () => {
    let myGame = new Hangman('superman')
    expect(myGame).toHaveProperty('objective', 'superman')
  })
  test('Guess a letter on objective to be true', () => {
    let myGame = new Hangman('superman')
    expect(myGame.guess('s')).toBeTruthy()
  })
  test('Guess a letter on objective to be false', () => {
    let myGame = new Hangman('superman')
    expect(myGame.guess('i')).toBeFalsy()
  })
  test('Guess input is a single character', () => {
    let myGame = new Hangman('superman')
    expect(myGame.guess('si')).toMatch('you can only guess one letter at a time')
  })
  test('keep track of the number of incorrect guesses', () => {
    let myGame = new Hangman('superman')
    myGame.guess('s')
    myGame.guess('i')
    myGame.guess('l')
    expect(myGame.numOfGuesses).toEqual(2)
  })
  test('loose the game if guesses are greater than 6', () => {
    let myGame = new Hangman('superman')
    myGame.guess('v')
    myGame.guess('i')
    myGame.guess('l')
    myGame.guess('w')
    myGame.guess('q')
    expect(myGame.guess('b')).toMatch('x.x')
  })
  test('did the player figure out the word', () => {
    let myGame = new Hangman('superman')
    myGame.guess('s')
    myGame.guess('i')
    myGame.guess('u')
    myGame.guess('p')
    myGame.guess('e')
    myGame.guess('r')
    myGame.guess('m')
    myGame.guess('n')
    expect(myGame.guess('a')).toMatch('you win')
  })

  // will not allow numbers
  // is not case sensative
  // guess the whole word
})
