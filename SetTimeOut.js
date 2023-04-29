const printName= (Myname,income,age) =>{
    console.log(`Welcome My name is ${Myname} . age is ${age} and income is $${income} `);
}; 

//setTimeout(printName("purushottam"),2000); 
// instant due to i called function instatnt

const id1=setTimeout(printName,3000,"Purushottam",2000,21) // after 3 sec


//or we can Write
const id2=setTimeout((Myname,income,age) =>{
    console.log(`Welcome My name is ${Myname} . age is ${age} and income is $${income} `);
},
5000,
"Pj",
2000,
21)

const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    console.log(id1,id2,id3);
    clearTimeout(id1); // it takes id
   clearInterval(id3);
})

// setInterval() ssame as this but it call after every interval
const seeTime=()=>{
    console.log(new Date(Date.now()));
  }
const id3=setInterval(seeTime,2000);

