//function add to return sum of values//
function add(a,b){
  c=a+b
  return(c);
}
console.log(add(3,5))
//Output-8

//function subract to return difference of two values//
function sub(a,b){
  c=a-b;
  return(c);
}
console.log(sub(8,4))
//output 4

//function mul to return product of two values
function mul(a,b){
  c=a*b;
  return(c);
}
console.log(mul(4,4))
//output 16

//function div to return division of two values
function div(a,b){
  c=a/b;
  return(c);
}
console.log(div(8,4))
//output 2

//function mod to return module of two values
function mod(a,b){
  c=a%b;
  return(c);
}
console.log(mod(9,4))
//output 1

//function power to find the power of a number
function power(a,b){
  c=Math.pow(a,b);
  return(c);
}
console.log(power(5,3))
//output 125

//function to compare string
function compare(a,b){
 return(a===b)
}
console.log(compare("abi","abi"))
//output true

//function to compare two numbers
function cmptwo(a,b){
return(a===b)
}
console.log(cmptwo(4,5))
//output false

//function to compare two values
function cmpval(a,b){
return(typeof(a)==typeof(b)?true:false)
}
console.log(cmpval("aa","aa"))
//output true

//function gradefinder to find the grade which outputs the grade of the mark
function gradeFinder(a){
  if(a>90)
  return "O"
  else if((a<90)&&(a>75))
  return "A"
  else if((a<75)&&(a>60))
  return "B"
  else if((a<60)&&(a>40))
  return "C"
  else if(a<40)
  return "D"
}
console.log(gradeFinder(30))
//outputs D

//function to check vowels and return true 
function checkVowel(a){
  return((a=='a')||(a=='e')||(a=='i')||(a=='o')||(a=='u'))
}
console.log(checkVowel('e'))
//output true

//function primenumber
function primeNumber(n) {       
            var i, f= true; 
            for(i = 2; i <= n - 1; i++) 
                if (n % i == 0) { 
                    f = false; 
                    break; 
                }  
            if (f == true) 
                console.log( " Is prime"); 
            else
                console.log( " Is not prime"); 
        } 
console.log(primeNumber(13))
//output Is prime