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
})
