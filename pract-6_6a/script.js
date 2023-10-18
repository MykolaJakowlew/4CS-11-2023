document.getElementsByTagName('button'); // => [Button, Button, ...]
document.querySelector('.container > button'); // => Button | null
document.querySelectorAll('.container > button'); // => [Button,Button, ... ]

/**
 * ==  - 
 *  34 == 34   => true
 *  34 == "34" => true  
 * === -
 *  34 === 34   => true
 *  34 === "34" => false  
 */


const buttonNode = document.querySelector('.container > button');

/**
 * 
 * @param {Object} params 
 * @param {"mock" | "api"} params.mode 
 * @returns {Promise<{fact:string, length: number }>}
 */
const getFact = async (params) => {
 switch (params.mode) {
  case "api": {
   const response = await fetch(
    'https://catfact.ninja/fact',
    { method: 'GET' }
   );
   const result = await response.json();
   console.log('params.mode api', result);
   return result;
  }

  case 'mock': {
   console.log('params.mode mock');
   return {
    fact: "Cats have 3 eyelids.",
    length: 20
   };
  }
  default: {
   throw new Error(`getFact get wrong mode:${params.mode}`);
  }
  // if (params.mode === 'api') {
  //  // send request
  // } else if (params.mode === 'mock') {
  //  return {
  //   "fact": "Cats have 3 eyelids.",
  //   "length": 20
  //  };
  // } else {
  //  throw new Error(`getFact get wrong mode:${params.mode}`);
  // }
 }
};

const factNode = document.getElementById('fact');

buttonNode.addEventListener('click', async () => {
 console.log('click 1');
 const result = await getFact({ mode: 'api' });
 console.log('click 2');
 factNode.innerText = result.fact;
 console.log('click 3');
});