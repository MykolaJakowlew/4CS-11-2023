const textNode = document.getElementById('text-source');

const text = textNode.innerText;

// console.log('text:', text);

// const sentences = text.split(/[\.,!?]/);
// // console.log('sentences:', sentences);

// /**
//  * trim -- видаляє пробіли на початку і в кінці
//  * "   str str str  " => "str str str"
//  */
// const trimmedSentences = sentences.map(str => str.trim());
// // console.log('trimmedSentences:', trimmedSentences);

// const filteredTrimmedSentences = trimmedSentences.filter(str => str.length);
// console.log('filteredTrimmedSentences:', filteredTrimmedSentences);


const sentences = text
  .split(/[\.,!?]/) // => string[]
  .map(str => str.trim()) // => string[]
  .filter(str => str.length); // => string[]
// console.log('sentences:', sentences);

const words = sentences.map(el => el.split(' '));
console.log('words:', words);

let index = 0;
const result = words.map(sentence => {
  const updatedWords = sentence.map(word => {
    index += 1;
    if (index % 2 == 0) {
      return `<span>${word}</span>`;
    }
    return word;
  });
  // console.log("updatedWords:", updatedWords);
  return updatedWords.join(' ');
});

console.log("result:", result.join('. '));

textNode.innerHTML = result.join('. ');