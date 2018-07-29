// EVALUATING DATA AS CODE
const x = 1;
function evalAndReturnX(code) {
  eval(code);
  return x;
}
console.log(evalAndReturnX("var x = 2"));
console.log(x);

//---------------------------------------------------
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4)); // 5
