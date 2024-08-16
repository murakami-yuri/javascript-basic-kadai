//変数の宣言
let num = 15;

//条件文
if (Math.floor(num/3)*3 == num && Math.floor(num/5)*5 == num) {
  console.log('3と5の倍数です');
}
else if (Math.floor(num/3)*3 == num) {
  console.log('3の倍数です');
}
else if(Math.floor(num/5)*5 == num) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}