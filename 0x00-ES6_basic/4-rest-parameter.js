/*Rest parameter syntax for functions*/
export default function returnHowManyArguments(...x) {
let result = 0;
for (let i = 0; i < x.length; i++){
result++;
}
return result
}