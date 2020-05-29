// Global Scope
var a=1;
let b=2;
const c=3;

// Function Scope
function test(){
  var a=1;
  let b=2;
  const c=3;
  console.log(`Function Scope: ${a}, ${b}, ${c}`);
}
test();

// Block Scope
if(true){
  var a=1;
  let b=2;
  const c=3;
  console.log(`Block Scope: ${a}, ${b}, ${c}`);
}

// Loop Scope
for(var a=0; a<10; a++){
  console.log(`Loop Scope: ${a}`);
}

console.log(`Global Scope: ${a}, ${b}, ${c}`);