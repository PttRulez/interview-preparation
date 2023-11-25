// https://www.codewars.com/kata/proof-read/train/javascript

function proofread (str) { 
	return str.toLowerCase().replaceAll('ie', 'ei').split('. ').map(c => c.slice(0,1).toUpperCase() + c.slice(1,)).join('. ').trim();
}

function proofread(str) { 
  return str.toLowerCase()
    .replace(/ie/g, "ei")
    .replace(/(^|\. )(.)/g, (_, a, b) => a + b.toUpperCase())
}