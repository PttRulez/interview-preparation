// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    let curPopulation = p0;
    let multiplier = percent / 100 + 1;
    let years = 0;
  
    while (curPopulation < p) {
      curPopulation = Math.floor(curPopulation * multiplier) + aug;
      years++;
    }
  
    return years;
}
