function flattenArray(arr){
    var ans=[]
    function flatten(passedArray){
        let count=0;
        while(count<passedArray.length){
            if(Array.isArray(passedArray[count])){
                flatten(passedArray[count])
            }else{
                ans.push(passedArray[count])
                
            }
            count++;
        }
    }
    flatten(arr)
    return ans;
}

console.log(flattenArray([1,2,3,[9,10,54],[1,3,[3,5,67,[4,7,8,9]]]]))
// THIS IS USING A RECCURSIVE APPROACH


