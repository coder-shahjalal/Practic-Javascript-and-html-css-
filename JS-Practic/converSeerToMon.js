/*  ============== seerToMon======================================= */

function seerToMon(inputParamiter) {
  const Mon = 40;
  let seerToMonConvert = inputParamiter / Mon;
  return seerToMonConvert;
}

let inputSeer = 1;
const resutlMonValue = seerToMon(inputSeer);
console.log(resutlMonValue);
