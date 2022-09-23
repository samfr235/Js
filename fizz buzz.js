
fizz = "Fizz"
buzz = "Buzz"
fizzbuzz = "Fizz Buzz"

for(i = 1 ; i <= 100; i++)

{
    var mot = ""

    if(i%5 == 0)
        
    {
        mot += buzz
    }

    if(i%3 == 0)
        
    {
        mot += fizz
    }

    if(i%6 == 0)
        
    {
        mot = "tapioca" ;
    }

    if(mot)
        console.log(mot) ;
    else
        console.log(i)
    
    
}


console.log("The end")