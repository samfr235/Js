positionX = 10 ;
positionY = 10 ;
grandeurX = 2 ;
grandeurY = 2 ;

tresorX = 10 ;
tresorY = 11 ;

tresorTrouve = false ;

for( x = 0 ; x <= positionX ; x++)
    {
        for( y = 0 ; y <= positionY ; y++)
        {
        currentPointX = x + positionX ;
        currentPointY = y + positionY ;     
        console.log("je suis sur : " + currentPointX + " - " + currentPointY)

        
        if( currentPointX == tresorX && currentPointY == tresorY)
        console.log("Trésor! " + x + " - " + y)
        
        }
    }