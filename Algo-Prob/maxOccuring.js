function maxOccuring(arr){
    const newObj=arr.reduce((acc,item)=>{
        if(!acc[item]){
            acc[item]=1;
        }else{
            acc[item]++;
        }
        return acc;
    },{})
    const [first]=Object.keys(newObj)
    console.log(newObj[first])
}
maxOccuring(["orange","apple","orange","grapes","orange"])