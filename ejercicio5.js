nums=[3, 5, 6, 7, 3, 5, 6, 7];
let impares=0;
for (let i=0;i<(nums.length);i++){
    if(nums[i]%2!=0){
        impares++;
    }
}
console.log("Existe: "+impares+" numero impares");