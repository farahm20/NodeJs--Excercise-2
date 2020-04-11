# NodeJs--Excercise-2

Övningar med HTTP och webbserver
Instruktioner
Bygg en webbserver som när man går in på webbsidan (exempelvis localhost:8000) returnerar och visar texten Stop, stop stop! You're going to take someone's eye out. Besides, you're saying it wrong. It's Levi-o-sa, not Levio-sar.

Ändra nu så att istället för ovanstående text så returneras en HTML-fil istället när man går in på webbsidan.

Lägg nu till så att även en css-fil läses in.

Gör det möjligt att navigera på webbsidan mellan olika HTML-sidor.

Lägg till en 404-sida om en användare försöker gå till en url som inte finns.

Ifall man skriver i url:en ?givemesecret så ska webbservern returnera ett slumpat lösenord till klienten. Detta ska man sedan kunna validera mot webbservern genom att skriva /password=DITTLÖSENORD och få ett svar från webbservern om det är korrekt. (Observera att man aldrig ska skriva lösenord i url:en detta är enbart för övning :) ).
