---
author: Lektion 4
date: MMMM dd, YYYY
paging: "%d / %d"
---

# Teams lektion 4

Hej och välkommen!

## Agenda

1. Frågor och repetition
2. Genomgång av övningar
3. Styling och CSS i React
4. Övning med handledning
5. Projektbygge - ehandel

<https://salinaka-ecommerce.web.app/>

---

# Fråga

Kan du ge några exempel på inlämningsuppgift 2? Det är så svårt att veta hur stort projektet ska vara

# Svar

Jag visar sidan som vi skall bygga tillsammans, då den är passande storlek.

---

# Fråga

Skulle du kunna ge exempel på när det kan vara bra att använda "props" istället för "destructuring"? 

Alltså:
`const Component = (props) => { ... }`

Istället för:
`const Component = ( {prop1, prop2} ) => { ... }`

# Svar

Föredra alltid destructuring.

`(props)` kan användas i en enda situation: när props inte är (för-)bestämda. Detta är dock extremt ovanligt.

---

# Fråga

I inlämningsuppgift 1 så finns det en fråga där man ska nämna minst en nackdel med React jämfört med Vanilla Javascript, HTML och CSS. Ska detta baseras på egna erfarenheter? 

(frågan innehöll originellt mycket mer text)

# Svar

Det är valfritt hur man ser på frågan. Kort sagt: om man kan dra upp ett visst argument, oavsett om det är egen erfarenhet eller någon annans erfarenhet, så räknas det som svar.

Mycket (av nackdelar) är subjektivt. Om man tycker att React är jobbigare att jobba med (på grund av X och Y) så är det en valid åsikt.

Det finns dock vissa mätbara värden som är objektiva. Jag nämner dem inte.

---

# Fråga

Ska man styla i index.css eller App.css filen? Vad är skillnaden?

# Svar

Styla per komponent, eller i index.css om det är något globalt (`*` selector exempelvis).
