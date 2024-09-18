import React from "react";
import { flushSync } from "react-dom";
import { useState } from "react";

const Batching = () =>{
const [RandomNumber ,setRandomNumber] =useState();   
const [isEven,setIsEven]=useState();
const [isPrime,setIsPrime]=useState();
const [isPalindrome,setIspalindrome] =useState();
const [count,setCount] =useState();


const generateNumber =()=>{
    var theRandomNumber = Math.floor(Math.random() * 1000) + 1;
    setRandomNumber(theRandomNumber);
    
   
    flushSync(()=>{
        checklPrime(theRandomNumber) ? setIsPrime("True") : setIsPrime("False")
    })
    flushSync(()=>{
        checkEven(theRandomNumber) ? setIsEven("True") : setIsEven("False");
    })    

    // for(let i = 0; i < 1000000000; i++){
    //     // console.log(i);
    // }

    fetch("https://api.publicapis.org/entries")
    .then(response => response.json())
    .then(result => setCount(result?.count))
    .catch(error => console.log('error', error));
    
    fetch("https://api.publicapis.org/entries")
    .then(response => response.json())
    .then(result => setCount(result?.count))
    .catch(error => console.log('error', error));

    checkPalindrome(theRandomNumber) ? setIspalindrome("True") : setIspalindrome("False");    
}

const checkEven =(num)=> num % 2 === 0 

const checklPrime=(num)=>{
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
    if(num % i === 0) return false; 
    return num > 1;
}

const checkPalindrome =(nbr)=>{
        var tmp=0, x, y;
        y = nbr;
        while(nbr > 0)
        {
          //Compare the first digit with the last digit
          x = nbr%10;
          nbr = parseInt(nbr/10);
          tmp = tmp*10+x;
        }
        //Check whether tmp and y are the same or not.
        if(tmp == y)
        {
           return true;
        }
        else
        {
           return false;
        }
}
console.warn("rendered");

    return(
        <div className="batching">
            <div>
              <h2>Generate a Random no. btw 0 to 1000</h2>
            </div>
           
            <div>
                <h1>{RandomNumber}</h1>
                <h1>{count}</h1>
                <button type="button" className="generate-button" onClick={() => generateNumber()}>
                  Generate
                </button>
            </div>
            <div>
                <div>
                    <h3>{isEven}</h3>
                    <p>Even No.</p>
                </div>
                <div>
                    <h3>{isPrime}</h3>
                    <p>Prime No.</p>
                </div>
                 
                <div>
                    <h3>{isPalindrome}</h3>
                    <p>Palindrome No.</p>
                </div>
            </div>
            
        </div>
    );
}

export default Batching;
