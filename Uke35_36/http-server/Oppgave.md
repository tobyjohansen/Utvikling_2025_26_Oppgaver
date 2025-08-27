
# Oppgave Uke35/36

I denne oppgaven er det **2** **Alternativer**. Dere skal bare velge **1** alternativ. Alternativ 1 jobber videre på http serveren vi gikk gjennom i klassen, mens alternativ 2 krever at du setter deg inn i React. Vurderingskriteriene til oppgaven er det samme uavhengig hvilket alternativ du velger.

<br>
<br>

# Alternativ 1

Dere skal i denne oppgaven lage en fagpresentasjon nettside.
Hvert fagtema skal være sin egen html side.

<br>

**NB! Sjekk Måloppnåelse for ekstra krav**

<br>


I tilegg til faginnholdet skal nettsiden ha lik stil/utseende på alle sider.
Nettsiden skal også bruke følgende Semantiske elementer:

<br>

|Html Semantic Element|Kommentar|
|:--------------------|--------:|
|`<Header>`|Logo/Navn på nettsiden|
|`<Nav>`|Linker til de andre sidene|
|`<Article>`|Faginformasjonen som skal skrives|
|`<Footer>`|Informasjon på bunnen av nettsiden|


![alt text](image.png)

<br>

## Sider som nettsiden **SKAL** ha med

Sidene og faginnholdet som skal være med er følgende:
- Hjem
- Grunnlegende Programmerings Prinsipper NB! 1 Side per følgende konsept: (Variabler, Datatyper/Operatorer, Kontrollflyt, Løkker, Funksjoner, Arrays, Objekter, Arrow Funksjoner)
- HTTP og HTTPS
- NodeJS
- [React](https://react.dev/learn)
- [Vite](https://vite.dev/guide)
- About Me

NB! Fagsidene skal inneholde **Hva** det er. **Hvordan** det brukes. og **Hvorfor** bruker vi det.


<br>
<br>
<br>

# Alternativ 2

I alternative 2 så gjør dere samme oppgave som over, men dere gjør oppgaven i React og Vite i stedenfor. Under er en liten guide på hvordan React Fungerer.


### Oppskrift:
1. Lag en ny prosjektmappe for denne oppgaven med et godt navn

2. Kjør følgende skript i terminalen i prosjektmappen:
    - npm create vite@latest

3. Følg bruksanvisningen og husk å skrive prosjektnavn, huke av for React, og huke av for javascript. NB! bare huk av for javascript IKKE javascript +.

4. Når den er ferdig får du svar i terminalen at du skal skrive følgende i terminalen (gjør dette):
    - cd "NAVN PÅ DITT PROSJEKT"
    - npm install
    - npm run dev

5. Du vil deretter få en http://localhost:5173 link eller lignende. Shift + trykk på linken i terminalen. Eller skriv dette inn i nettleseren.

6. Du skal deretter se en nettside med React logoen som roterer.

4. Lag en ny mappe som du kaller "Components" i src mappen.

5. Opprett en ny fil i Components som du kaller Home.jsx

6. Skriv følgende kode i Home.jsx filen:


```javascript
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

export default Home;
```
<br>

6. Endre App.jsx filen slik at den ser slik ut:

<br>

```javascript
import './App.css'

import Home from './Components/Home'

function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
```
<br>

7. Videre kan du legge til css ved å linke til filen øverst i komponente og bruke className="" i stedenfor class som i vanlig css. Opprett en ny fil under Components som heter Home.css og endre Home.jsx til under:

<br>

```javascript
import '/Home.css';

function Home() {
  return (
    <div>
      <h1 className="title">Welcome to the Home Page</h1>
    </div>
  );
}

export default Home;
```

8. Gjør filen index.css blank. NB! ikke slett filen. Bare fjern all koden i filen for nå. Det samme kan du gjøre for App.css

9. Videre nå så kan du utvide Home.jsx og Home.css for å lage frontsiden. Når du følger deg komfortabel så kan du gå videre til å lage de andre sidene skrevet i oppgaven under. Hver side blir sin egen jsx fil med sin egen .css fil.

10. Når du vill teste de andre komponente så kan du linke til dem i app.jsx og bytte ut <Home /> linjen med de andre komponente en og en og teste hvordan den ser ut. I senere oppgaver så skal vi lære hvordan vi kan bytte sider men for nå så er det slik vi tester dette.

<br>
<br>

# Måloppnåelse


|Lav|Middels|Høy|
|:--|:------|--:|
|Har tatt i bruk semantiske elementer|Har brukt semantiske elementer riktig og konsist på alle sider|I tilegg har riktig nested de semantiske elementene|
|Har laget en side og skrevet teori rundt hvert fagord|Har i tilegg lagt til bilde/diagram og forklarer hved bruk av dette| I tilegg lagt til et eksempel scenario eller begrunnet hvorfor vi bruker det|
|Brukt grunnlegende css for å endre farge,font,størelse osv på elementer|Har i tilegg brukt flexboks til å aligne elementer riktig på siden| Har i tilegg brukt grid sammen med flexboks for å gjøre siden mer mobilvennlig|
|Alle sidene i kravene er skrevet|Alle sidene er i tilegg navigerbare og har et helhetlig bilde | Alle sidene er intuitive og oversiktlig å navigere. Nettsiden er også brukervennlig |


