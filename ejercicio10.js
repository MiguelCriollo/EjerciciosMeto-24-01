binaryNumber=[0, 1, 0, 1]
let decimal=0;
let j=0;
for(let i=binaryNumber.length-1;i>=0;i--){
    console.log(i);
    decimal+=binaryNumber[j]*2**i;
    j++;
}
console.log(decimal);