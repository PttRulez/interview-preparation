// https://www.codewars.com/kata/56a28c30d7eb6acef700004d/train/javascript

function isPerfect(n) {
  if (n===1) return false;
  
 let result = 0; 
 
    for (let i=2; i<=Math.sqrt(n); i++) 
    { 
        if (n%i==0) 
        { 
            if (i==(n/i)) 
                result += i; 
            else
                result += (i + n/i); 
        } 
    } 
 
 
    return (result + 1) === n; 
  
}