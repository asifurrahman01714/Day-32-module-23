//break
const nums = [1,2,3,4,5,6,7,9];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > 5) {
        break;
    }
    console.log(element);
    
}

//continue

const nums1 = [1,2,3,4,5,6,7,9];
for (let i = 0; i < nums1.length; i++) {
    const element = nums1[i];
    if (element < 5) {
        continue;
    }
    console.log(element);
    
}