const Adagrams = {
  drawLetters() {
    const letters = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T','T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];
    let hand = [];
    for (let i = 0; i < 10; i++) {
       let index = Math.floor(Math.random() * letters.length)
       hand.push(letters[index]);
       letters.splice(index, 1);
    }
    return hand;
  }, // drawLetters function

  usesAvailableLetters(input, lettersInHand) {
    let result = true
    input.split("").forEach(function (letter) {
      if (!lettersInHand.includes(letter)) {
        result = false;
      }
      else {
        let index = lettersInHand.indexOf(letter)
        lettersInHand.splice(index, 1)
      }
    });
    return result
  }, // userAvailable function

  scoreWord(word) {
    let sum = 0

    if (word.length >= 7) {
      sum += 8
    }

    const points = {
        "AEIOULNRST" : 1,
        "DG" : 2,
        "BCMP" : 3,
        "FHVWY" : 4,
        "K" : 5,
        "JX" : 8,
        "QZ" : 10
      }

    word.split("").forEach( function (letter) {
      for (let key in points) {
        if (key.includes(letter.toUpperCase())) {
          sum += points[key]
        }
      }
    })
    return sum
  }, // ends word split function



  highestScoreFrom(words) {
    const winner = {word: "", score: 0}
    words.forEach( word => {
      const score = (this.scoreWord(word))
      if (score > winner.score) {
        winner.score = score
        winner.word = word
      }
      else if (score === winner.score) {
        if (winner.word.length !== word.length
          && winner.word.length !== 10
          && (word.length === 10
          || word.length < winner.word.length)) {
          winner.score = score
          winner.word = word
        }
      }
    })
    return winner

  } //end of highestScoreFrom

} // ends the methods






console.log(Adagrams.highestScoreFrom(['AAAAAAAAAA', 'BBBBBB']));
// console.log(Adagrams.scoreWord("ABEA"));
// console.log(Adagrams.usesAvailableLetters("ABEA",["B","A","D"]));
// console.log(Adagrams.drawLetters());





// Do not remove this line or your tests will break!
export default Adagrams;
