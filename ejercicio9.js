let nums = [0, 0, 0, 0];
let x=2;
let j=0;
for(let i=nums.length-1;i>=0;i--){
    nums[j]=x*2**i;
    j++;
}
console.log(nums);