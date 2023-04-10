/* function givedata(){

    settime(()=>{
        console.log('processing')
        return 'india;'
    },2000)
}
ingo=givedata()
console.log('something else')
console.log(info)

//resolve'india'
return new promise{
    function(resolve,reject){

    }
}

function givedata(){
    return new promise{
        function (resolve,reject){
            settime{()=>
            console.log('processing')
            resolve('india')
        }
        }
    }

}
result=givedata()
result.then(
    [sucess]=>console.log('data is',sucess)
    [error]=> console.log{error}

)
console.log('something else') */
function givedata(){
    return new promise{
        function (resolve,reject){
            settime{()=>
            console.log('processing')
            resolve('india')
        }
        }
    }

}
async function  caller(){
    data=await fivedata()
    console.log('data is',data)
}



console.log('something else')
