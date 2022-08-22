function pluralToSingular(word) {
  if (word[word.length - 1] === 's') {
    const newWord = word.slice(0, (word.length - 1));
    return newWord;
  }
}
// https://flexiple.com/javascript/javascript-capitalize-first-letter/
export default function captalizeFristLetter(word) {
  const wordSingular = pluralToSingular(word);
  const newWord = word.charAt(0).toUpperCase() + wordSingular.slice(1);
  return newWord;
}
