function filterthis(arrayFilter,array){
    result=[]
    for(let x of array)
    if (arrayFilter(x))
        result.push(x)
    return result
}
/*
fresult =filterthis(function(x){
    return x%2==0? false: true
},[22,44,43,2123,1443,21331,1123])
console.log(fresult)
fresult2=filterthis(function(x){
    if(x.length>5)
       return true
    return false
},['asdf','afdsfdasf','adfsfdfsd'])
console.log(fresult2)
*/
result3= filterthis(function(candidate){
    for(let x of candidate.skills)
    if(x.toUpperCase()=='ANGULAR'||x.toUpperCase()=='C#')
        return true
    return false
},candidate = [

     {sno:1,name:"Jose",skills:['C++','Java','Javascript']},
    
     {sno:2,name:"Kiran",skills:['C++','C#','Javascript','CSS','SQL']},
    
     {sno:3,name:"Mohit",skills:['C++','Java','Javascript','Angular','React']},
    
     {sno:4,name:"Vinay",skills:['C++','Java','Javascript','Android','IOS','Angular']},
    
     {sno:5,name:"Arjun",skills:['C++','Java','Javascript','angular','IOS','MongoDB']},
    
    ])

console.log(result3)