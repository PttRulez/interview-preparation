// https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript

function convertHashToArray(hash){
  return Object.entries(hash).sort((a, b) => a[0].localeCompare(b[0]))
}