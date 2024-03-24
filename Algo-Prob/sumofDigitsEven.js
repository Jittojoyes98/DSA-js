// Sum of digits at even places of a number.

function getSum(x){
    let ans=x;
    let res=0;
    let arr=[]
    while(ans>0){
        arr.push(ans%10)
        ans=Math.floor(ans/10)
    }
    console.log(arr)
    const n=arr.length
    for(let i=0;i<n;i++){
        if((n-1-i)%2!=0){
            res=res+arr[i];
        }
    }
    return res;
}

console.log(getSum(2936798))