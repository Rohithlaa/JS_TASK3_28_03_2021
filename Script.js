var req = new XMLHttpRequest()
req.open('GET',"https://restcountries.eu/rest/v2/all",true)
req.send()


/*
***** Get all the countries from Asia continent /region using Filter function *****

req.onload = ()=>{
    var data = JSON.parse(req.response)
    var res = data.filter((ele)=>{
        return (ele.region == "Asia" ? console.log(ele.name): '')
    })
    console.log(res)
}*/

/* 
***** Get all the countries with population of less than 2 lacs using Filter function ******

req.onload = ()=>{
    var dat = JSON.parse(req.response)
    var res = dat.filter((ele)=>{
        if(ele.population <= 200000){
            return console.log(ele.name)
        }
    })
    console.log(res)
} */

/*
 ****** Print the following details name, capital, flag using forEach function ******
req.onload = ()=>{
    var data = JSON.parse(req.response)
    var res = data.forEach((ele)=>{
        console.log(ele.name,ele.capital,ele.flag)
    })
    console.log(res)
}
 */

/*
 ****** Print the total population of countries using reduce function ******
req.onload = ()=>{
    var data = JSON.parse(req.response)
    var res = data.reduce((accum,ele)=>{
        return accum + ele.population
    },0)
    console.log(res)
}
*/


/*
*****  Print the country which use US Dollars as currency *****
req.onload = ()=>{
    var data = JSON.parse(req.response)
    var res = data.map((ele)=>{
        if(ele.currencies[0].code == "USD"){
            return console.log(ele.name)

        }
    })
    console.log(res)
}
*/
