import Hangman from '../hangman' // => import for one item only
// import { Hangman, Main } from '../hangman' //object destructoring

describe('Hangman Class', () => {
  let myGame

  beforeEach(() => {
    myGame = new Hangman('Superman')
  })

  test('Hangman constructor exist', () => {
    expect(myGame.constructor).toBeDefined()
  })
  test('Hangman instance has a property called objective', () => {
    expect(myGame).toHaveProperty('objective', 'superman')
  })
  test('Guess a letter on objective to be true', () => {
    expect(myGame.guess('s')).toBeTruthy()
  })
  test('Guess a letter on objective to be false', () => {
    expect(myGame.guess('i')).toBeFalsy()
  })
  test('Guess input is a single character', () => {
    expect(myGame.guess('si')).toMatch('you can only guess one letter at a time')
  })
  test('keep track of the number of incorrect guesses', () => {
    myGame.guess('s')
    myGame.guess('i')
    myGame.guess('l')
    expect(myGame.numOfGuesses).toEqual(2)
  })
  test('loose the game if guesses are greater than 6', () => {
    myGame.guess('v')
    myGame.guess('i')
    myGame.guess('l')
    myGame.guess('w')
    myGame.guess('q')
    expect(myGame.guess('b')).toMatch('x.x')
  })
  test('did the player figure out the word', () => {
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
  test('argument passed to guess() is not a number', () => {
    expect(myGame.guess(1)).toMatch('does not accept a number as an argument')
  })
  test('word argument is not case sensative', () => {
    expect(myGame.guess('S')).toBeTruthy()
    expect(myGame.guess('I')).toBeFalsy()
  })
  // guess the whole word
  test('player wants to guess the entire word', () => {
    expect(myGame.guess('SUPERMAN')).toMatch('you win')
    expect(myGame.guess('superguy')).toBeFalsy()
  })
  test('last guess is a word and player looses', () => {
    myGame.guess('v')
    myGame.guess('i')
    myGame.guess('l')
    myGame.guess('w')
    myGame.guess('q')
    expect(myGame.guess('superguy')).toMatch('you loose')
  })
  test('can guess word with duplicate characters', () => {
    let gameTwo = new Hangman('apple')
    gameTwo.guess('p')
    gameTwo.guess('a')
    gameTwo.guess('l')
    expect(gameTwo.guess('e')).toMatch('you win')
    let gameThree = new Hangman('mississippi')
    gameThree.guess('m')
    gameThree.guess('s')
    gameThree.guess('i')
    gameThree.guess('mississipi')
    expect(gameThree.guess('p')).toMatch('you win')
  })
})
