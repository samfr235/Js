phrase1 = "Je m'appelle Sam "
phrase2 = " Comment vous appelez vous?"
phrase3 = " Où sont les toilettes?"
phrase4 = " & Je ne parle pas binaire"
phrase5 = " est-ce que le micro fonctionne ?"

for(i=1 ; i <=100 ; i++)
{

    affichage = i + " " + phrase1 ;

    if(i%2 == 0)
        affichage += phrase2
    else
        affichage += phrase3

    if(i%3 == 0)

        affichage += phrase4

    if(i <= 2)
            affichage += phrase5

    console.log(affichage)
    
}


