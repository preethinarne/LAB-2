//summing a numbers digit
//https://www.codewars.com/kata/52f3149496de55aded000410
sumDigits=n=>[...(n+'')].reduce((a,b)=>a+(b|0),0)