// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i+1) 
  var string = `${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  return array
  
 function johnLennonFacts(facts) {
  var arr = [], i = 0;
   while (i < facts.length) {
    arr.push(facts[i] + "!!!")
    i++
  }
  return arr;
}
 function iLoveTheBeatles(number) {
  var arr = [];
   do {
    arr.push("I love the Beatles!")
    number++
  } while (number < 15);
  return arr;
} 