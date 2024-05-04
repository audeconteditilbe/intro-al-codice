[<- lezione precedente (cicli)](./40_cicli.md)

____

# Funzioni

Le funzioni possono essere viste come pezzi di codice che si possono riusare più volte.

Anche le funzioni possono essere schematizzate con la stessa struttura di interi programmi [già accennata](./10_intro.md):

```
[dati input] -> operazioni sui dati -> [dati di output]
```

Diversi linguaggi hanno diversi modi di rappresentare le funzioni, ma pressochè tutti mettono permettono di:
  - dare un nome alla funzione
  - specificare degli input
  - fare delle operazioni basate sugli input
  - restituire un output

Ad esempio:

```javascript
function addText (name, sentence)
{
  let output = name + " dice che: '" + sentence + "'. Che ne pensi?"
  return output
}
```

> 💬 *Come dire...*
> 
> Computer, d'ora in poi con la parola `addText` indicherò le istruzioni contenute fra graffe:
> 
> ```javascript
> let output = name + " dice che: '" + sentence + "'. Che ne pensi?"
> return output
> ```
>
> ogni volta che vorrò eseguire queste istruzioni, sarò io a darti valori appropriati per `name` e `sentence`

Il codice di una funzione può essere usato tutte le volte che lo si desidera e serve ad evitare di dover specificare lo stesso codice più volte, il chè comporta vari benefici (al di là del dover scrivere meno codice) 😄

Nella maggior parte dei linguaggi di programmazione la parola chiave `return` indica il valore restituito dalla funzione.

Fra le parentesi tonde sono specificati gli input della funzione.
Questi hanno nomi arbitrari, e all'interno del "corpo" della tua funzione puoi usare questi input come fossero normali variabili.

## Usare il codice di una funzione

Per eseguire il codice assegnato ad una funzione (in gergo: *chiamare* la funzione), virtualmente ogni linguaggio di programmazione rispetta la sintassi mostrata nel seguente esempio:

```javascript
let sentence = addText("Arianna", "Ginger è bella!!") // "Arianna dice: 'Ginger è bella!'. Che ne pensi?"
```

Si scrive quindi il nome della funzione seguito da parentesi tonde. All'interno delle tonde, vanno specificati i valori
da attribuire agli input della funzione, usati nell'esecuzione del codice della funzione.

Quello che si trova a destra del `return` è il risultato della funzione, e può essere usato per salvare il risultato di una funzione
in una variable. Tutto quello che si trova a destra del `return` è valutato e restituito a dalla funzione.

### Esempio

Prendiamo l'esempio sopra:

```javascript
let sentence = addText("Arianna", "Ginger è bella!!") // "Arianna dice: 'Ginger è bella!'. Che ne pensi?"
```

Questo codice crea una variabile di nome `sentence` di tipo stringa e valore: "Arianna dice: 'Ginger è bella!'. Che ne pensi?".
Il bloco di codice specificato per `addText` viene eseguito prendendo come input ciò che viene messo fra parantesi, e restituendo
come output ciò che segue alla parola chiave `return`.

### Esempio: Flusso completo

Prendiamo di nuovo lo stesso esempio:

```javascript
let sentence = addText("Arianna", "Ginger è bella!!")
```

[Stando alle regole con cui si assegnano valori alle variabili](./20_variabili.md#assegnare-valori-a-variabili),
viene prima valutata la parte destra dell'uguale, poi assegnata alla variabile a sinistra.

A destra dell'uguale troviamo:

```javascript
addText("Arianna", "Ginger è bella!!")
```

che equivale a eseguire il codice della funzione con gli input `name` e `sentence` uguali alle due stringhe
"Arianna" e "Ginger è bella!!" rispettivamente, quindi:

```javascript
let output = "Arianna" + " dice che: '" + "Ginger è bella!!" + "'. Che ne pensi?"
return output
```

quello che sta a destra del `return` è il risultato fornito dalla funzione - in questo caso la variabile `output`, che vale "Arianna dice che: 'Ginger è bella!!'. Che ne pensi?".
Quindi, dopo aver eseguito la funzione, il codice di partenza è equivalente a:

```javascript
let sentence = "Arianna dice che: 'Ginger è bella!!'. Che ne pensi?"
```

Ovvero, la variabile `sentence` è inizializzata con la stirnga "Arianna dice che: 'Ginger è bella!!'. Che ne pensi?".

Schematicamente (vediamo se ci riesco): 

```javascript
let sentence = addText("Arianna", "Ginger è bella!!")
               ---------------------------------------
                                ⬇️                             
                                ⬇️ // la funzione viene eseguita con input "Arianna" e "Ginger è bella!!"
                                ⬇️
          |------------------------------------------------------------------------------------|
          | let output = "Arianna" + " dice che: '" + "Ginger è bella!!" + "'. Che ne pensi?"  |
          | return output                                                                      |
          |------------------------------------------------------------------------------------|
                                       ⬇️
                                       ⬇️ // quello che sta a destra di `return` è il risultato
                                       ⬇️
              |-------------------------------------------------------|
              | "Arianna dice che: 'Ginger è bella!!'. Che ne pensi?" |
              |-------------------------------------------------------|

let sentence = "Arianna dice che: 'Ginger è bella!!'. Che ne pensi?"
```

> 🔎 NOTA
> 
> L'atto usare il codice di una funzione si dice in gergo *chiamare* la funzione.
> L'atto di assegnare certi valori agli input di una funzione si dice in gergo: *passare* certi *argomenti* alla funzione.

Gli argomenti passati ad una funzione possono essere delle variabili:

```javascript
let name = "Arianna"
// la variabile `name` e la stringa "Ginger è bella!!" sono passati alla funzione `addText`
let sentence = addText(name, "Ginger è bella!!")
```

o espressioni:

```javascript
let name = "Arianna"
// la variabile `name` e l'espression `"Ginger" + "è bella!!"` sono passati alla funzione `addText`
// l'espressione viene risolta prima di essere passata alla funzione
let sentence = addText(name, "Ginger " + "è bella!!")
```

In questo caso, l'espressione viene eseguita, ed il risultato passato alla funzione.

> 🔎 NOTA
> 
> La funzione `addText` potrebbe essere scritta più brevemente così:
> 
> ```javascript
> function addText (name, sentence) {
>   return name + " dice che: '" + sentence + "'. Che ne pensi?"
> }
> ```
> 
> Ancora una volta: quello che è a destra del `return` è il risultato della funzione, indipendentemente che sia una variabile o un'espressione.
> Qualora sia un'espressione, questa viene risolta prima di essere restituita dalla funzione.

### Esempio (un po' del 🫢)

Qual è il valore assegnato a `text2` nel seguente esempio?

```javascript
let text1 = addText("Arianna", "Ginger è bella!!")
let text2 = addText("Claudio", text1)
```

### Esempio: utilità delle funzioni

Per capire come *funzionano le funzioni*, e la loro utilità, può essere utile scrivere un breve esempio di codice con e senza di esse.

Il seguente codice non usa funzioni:

```javascript
let name1 = 'Arianna'
let name2 = 'Claudio'
let num = 5
let sentence = name1 + 'e' + name2 + 'sono simpatici e spiritosi'
sentence = sentence + '...e bevono' + num + 'birre'

name1 = 'Giovanna'
name2 = 'Riccardo'
num = 3
let sentence2 = name1 + 'e' + name2 + 'sono simpatici e spiritosi'
sentence2 = sentence2 + '...e bevono' + num + 'birre'

name1 = 'Gianni'
name2 = 'Pinotto'
num = 6
let sentence3 = name1 + 'e' + name2 + 'sono simpatici e spiritosi'
sentence3 = sentence3 + '...e bevono' + num + 'birre'
```

Il seguente codice è identico al precedente, ma usa una funzione:

```javascript
function asd (name1, name2, num) {
  let sentence = name1 + 'e' + name2 + 'sono simpatici e spiritosi'
  sentence = sentence + '...e bevono' + num + 'birre'
  return sentence
}

let name1 = 'Arianna'
let name2 = 'Claudio'
let num = 5
let sentence = asd(name1, name2, num)

name1 = 'Giovanna'
name2 = 'Riccardo'
num = 3
let sentence = asd(name1, name2, num)

name1 = 'Gianni'
name2 = 'Pinotto'
num = 6
let sentence = asd(name1, name2, num)
```

La lettrice <s>secchiona 🤓</s>attenta avrà notato che nelle frasi mancano degli spazi.
Ad esempio, `sentence1` vale:
```
'AriannaeClaudiosono simpatici e spiritosi...e bevnon5birre'
```
blah 🤮. Sistemiamo entrambi gli esempi.

Quello senza funzioni:

```javascript
let name1 = 'Arianna'
let name2 = 'Claudio'
let num = 5
let sentence = name1 + ' e ' + name2 + ' sono simpatici e spiritosi'
sentence = sentence + ' ...e bevono ' + num + ' birre'

name1 = 'Giovanna'
name2 = 'Riccardo'
num = 3
let sentence2 = name1 + ' e ' + name2 + ' sono simpatici e spiritosi'
sentence2 = sentence2 + '...e bevono ' + num + ' birre'

name1 = 'Gianni'
name2 = 'Pinotto'
num = 6
let sentence3 = name1 + ' e ' + name2 + ' sono simpatici e spiritosi'
sentence3 = sentence3 + ' ...e bevono ' + num + ' birre'
```

e la versione con la funzione:

```javascript
function makeSentence (name1, name2, num) {
  let sentence = name1 + ' e ' + name2 + ' sono simpatici e spiritosi'
  sentence = sentence + ' ...e bevono ' + num + ' birre'
  return sentence
}

let name1 = 'Arianna'
let name2 = 'Claudio'
let num = 5
let sentence = makeSentence(name1, name2, num)

name1 = 'Giovanna'
name2 = 'Riccardo'
num = 3
let sentence = makeSentence(name1, name2, num)

name1 = 'Gianni'
name2 = 'Pinotto'
num = 6
let sentence = makeSentence(name1, name2, num)
```

**Nota** che nel primo caso è stato necessario modificare il codice in vari punti, mentre nell'esempio con la funzione è bastato modificare la funzione.

Questo è uno dei vantaggi delle funzioni: se ci sono delle istruzioni che sai già eseguirai più volte, incapsularle in una funzione
ti permette di modificarle (correggerle, estenderle, ...) immediatamente, toccando un unico punto il tuo codice.

### Esempio: console.log

La segute funzione prende in input due stringhe, e produce in output la frase
"[nameA] e [nameB] sono meno belli di Arianna e Claudio"

```javascript
function makeSentence (nameA, nameB) // nome della funzione + dati in input
{
  let sentence = nameA + " e " + nameB + "sono meno belli di Arianna e Claudio" // operazioni da fare -> hai a disposizione nameA e nameB
  return sentence // -> output
}
```

esempio di utilizzo: 

```javascript
let sentence1 = makeSentence("Bruce", "Chetta") // -> "Bruce e Chetta sono meno belli di Arianna e Claudio"
let sentence2 = makeSentence("Gino", "Pino") // -> "Gino e Pino sono meno belli di Arianna e Claudio"

// `console.log` è una funzione speciale per scrivere testo all'utente
// quello che dai in input alla funzione `console.log` viene "stampato" (mostrato all'utente)
console.log(sentence1)
console.log("--------")
console.log(sentence2)
```

> 🔎 NOTA
> 
> `console.log` è una funzione speciale per mostrare testo all'utente (in gergo: *stampare*)

### Esempio: funzione senza input / output

Il seguente esempio mostra funzioni senza input e/o senza output.

```javascript
// senza input, senza output
function printDanger () {
  console.log('#### !!!!!! ####')
  console.log('DANGER')
  console.log('Sei sicuro di voler proseguire?')
  console.log('#### !!!!!! ####')
}

// senza output
function printDangerMessage (message) {
  console.log('#### !!!!!! ####')
  console.log('DANGER')
  console.log(message)
  console.log('#### !!!!!! ####')
}

// senza input
function getDangerMessage () {
  return 'DANGER: Sei sicuro di voler proseguire?'
}
```

### Esempio trabocchetto

Qual è il valore di `val`, di seguito?

```javascript
function askConfirmation () {
  console.log('Sei sicuro di voler proseguire?')
}

let val = askConfirmation()
```
<details>
  <summary>⚠️ SPOILER ⚠️</summary>

La risposta è... nessun valore! Se hai pensato che `val` sia uguale a "Sei sicuro di voler proseguire?", ti meno.
Scherzo, è comprensibile.
Ma ricorda che l'output di una funzione è specificato dalla parola chiave `return`.

[Il concetto di "nessun valore"](./20_variabili.md#variabili-non-definite) in JavaScript è indicato da `undefined`, ed indica che alla variabile non è (ancora) stato assegnato alcun un valore.

</details>

### Esempio: funzioni in funzioni

Nella maggior parte dei programmi praticamente tutto il codice è all'interno di funzioni, che si chiamano fra di loro dove serve.

Puoi immaginare le funzioni come i mattoni che costituiscono un programma.

E' quindi molto comune che una funzione chiami altre funzioni.

```javascript
function concatStrings (str1, str2) {
  return str1 + ' e ' + str2
}

function compareCouples (man1, woman1, man2, woman2) {
  let couple1 = concatStrings(man1, woman1)
  let couple2 = concatStrings(man2, woman2)
  return couple1 + ' sono più belli di ' + couple2
}

let res = compareCouples('Cla', 'Ari', 'Bruce', 'Chetta')
```

quanto vale `res`?

> Lo so che lo sai perchè mentre scrivo siamo insieme <img src="../assets/cuties.jpg" alt="cuties" width="80"/> e me lo hai appena detto, quindi non fare la furba.

### *Sexy approfondimento per secchioni* 🤓 Funzioni "generiche"

> ⚠️ **IMPORTANTE** ⚠️
> 
> se non è tutto chiaro fino a qui, salta il resto di questo *Sexy Approfondimento*, servirebbe solo a fare confusione.
>
> Concetti come quelli trattati in questo approfondimento sono difficili da afferrare nella teoria,
> ed in genere richiedono un po' di pratica per essere apprezzati in pieno.
>
> Tu per ora non hai alcun bisogno di preoccuparti di quanto segue.
> Quando arriveremo a preoccuparci di metterlo in pratica saremo un pezzo avanti. 👴👵
>
>
> - 👱🏻‍♀️ "Perchè hai scritto cose che poi mi dici di non leggere?"
> - 🧑🏻 "Ormai le ho scritte, le lascio qui, non rompere"

La funzione `concatStrings` ha lo scopo di concatenare due stringhe, mettendo una 'e' fra di loro.

Nel nostro esempio l'abbiamo usata solo con nomi di persone, ma questo non è necessariamente il suo unico scopo.

Considera ad esempio questa funzione:

```javascript
function newConcatStrings (str1, str2, str3) {
  let concat1 = concatStrings(str1, str2)
  return concatStrings(concat1, str3)
}
```

hai capito cosa fa?

<details>
  <summary>⚠️ SPOILER ⚠️</summary>

Unisce tre stringhe mettendo 'e' fra loro. In altre parole, è la versione con tre argomenti di `concatStrings`.

Più avanti vedremo come creare una funzione analoga che permetta di concatenare un numero arbitrario di stringhe.

</details>

<br/>

La funzione `concatStrings` è usata sia in `compareCouples`, nell'[esempio precedente](#esempio-funzioni-in-funzioni),
che in `newConcatStrings`, nonostante queste svolgano compiti molto diversi fra loro.
Questo è possibile in quanto `concatStrings` è una funzione semplice e, cosa più importante,
"generica" - ovvero, si presta ad essere usata in vari contesti.

Funzioni generiche, che si prestano ad essere usate in vari contesti, sono spesso utili.

## Variabili all'interno di una funzione

In generale, una funzione smette di esistere quando si chiude la graffe del blocco di codice in cui è stata dichiarata.

L'esempio seguente è ❌ **SBAGLIATO** ❌

```javascript
function fun () {
  let name = 'Arianna'
} // ----> qui `name` smette di esistere

name = 'Claudio' // ERRORE! ❌ `name` non esiste più!
```

la variabile `name` dichiarata dentro la funzione `fun` smette di esiste dopo la graffa che chiude la funzione, quindi
l'operazione `name = "Claudio"` causa un erroe: stai dicendo al computer di aggiornare una variabile, `name`, che però per lui non esiste più!

L'esempio seguente invece è **corretto** ✅,

```javascript
function fun () {
  let name = 'Arianna'
}

let name = 'Claudio' // OK ✅
```

### Esempio: funzione con operatori logici (numeri)

Il seguente esempio prende spunto da un
[esempio visto precedentemente](./30_if.md#esempio-combinare-operatori-di-confronto)
per costruire una funzione.

Qual è il valore di `person1`, `person2`, `person3`?

```javascript
function canRide (age, height) {
  return (age > 12) && (height > 150)
}

let person1 = canRide(15, 180)
let person2 = canRide(10, 160)
let person3 = canRide(12, 150)
```

### Esempio: funzione con operatori logici (stringhe)

```javascript
function isHot (name1) {
  return( name === "Claudio") || (name === "Arianna")
}

let person1 = isHot("Arianna") // true 🔥
let person2 = isHot("Bruce") // false
let person3 = isHot("Chetta") // false
let person4 = isHot("Claudio") // true 🔥
```

### Esempio: funzione con if all'interno

Poichè il valore degli argomenti di una funzine non sono noti a prescindere,
il costrutto `if` è spesso usato per verificarne la forma.

```javascript
function checkEquality (num1, num2) {
  if (num1 === num2) {
    console.log("Due gocce d'acqua")
  }
  else (num1 !== num2) {
    console.log("Come il giorno e la notte")
  }
}

checkEquality("Arianna", "Claudio") // -> stampa: "Come il giorno e la notte"
checkEquality(7, 7) // -> stampa: "Due gocce d'acqua"
```

### Esempio: funzione con cicli all'interno

E' naturalmente possibile usare [cicli](./40_cicli.md) all'interno delle funzioni.
Il seguente esempio usa un ciclo per stampare il contenuto dell'array passata come argomento.

```javascript
function printNames (names) {
  for (name of names) {
    console.log('Hi! My name is' + name)
  }
}
```

### Esempio: somma dei numeri in input

Il seguente esempio usa un ciclo per sommare i numeri contenuti nell'array passata come argomento.

```javascript
function sumNumbers (nums) {
  let total = 0
  for (num of nums) {
    total = total + num
  }
  return total
}
```

E' chiaro come *funziona questa funzione*? Forse può essere utile confrontarlo con [questo esempio](./40_cicli.md#esempio-flusso-completo).

Se non ti è chiaro, prova a scrivere a fare del [rubber ducking](https://en.wikipedia.org/wiki/Rubber_duck_debugging) con te stessa!

Prova a scrivere ad esempio cosa succede se chiami la funzione con certi input:
```javascript
sumNumbers([1, 5, 7])
```

Se ancora non ti è chiaro, tranquilla: vieni pure da me, vediamo di capirlo bene insieme.
<u>Dico davvero!</u> Cicli di questo tipo sono il pane quotidiano di praticamente tutti i programmi.

... poi una volta che ci sei [sporcati un po' le mani](#esercizi---vari) 😙

### Esercizio - funzione

<a href="../src/catalogue/50_funzioni/exercise1/index.html" target="_blank">Ora prova tu!</a>
Questo esercizio ti chiederà di completare una funzione di modo che esegua certe operazioni.


## Return dentro if

All'interno di una funzione si può invocare il comando `return` ovunque lo si voglia, non per forza solo alla fine.
Capita spesso, ad esempio, di scrivere funzioni che abbiamo dei `return` all'interno di `if`.

Quando una funzione arriva al `return`, il flusso di operazioni viene interrotto,
la funzione restutisce come outout qualunque cosa sia seguita dal `return`, e termina
senza eseguire eventuali comandi successivi.

Ad esempio:

```javascript
function greetFriend (name, isFriend) {
  if (!isFriend) {
    return "Con te non ci parlo!"
  } else {
    let greeting = "Ciao " + name + "!"
    return greeting
  }
}

const message1 = greet("Arianna", true)
const message2 = greet("Bruce", false)
```

Questo esempio, `message1` è uguale a "Ciao Arianna!", mentre `message2` è uguale a "Con te non ci parlo!".

### *Sexy approfondimento per secchioni* 🤓 Esercizio

> ⚠️ **IMPORTANTE** ⚠️
> 
> se non è tutto chiaro fino a qui, salta il resto di questo *Sexy Approfondimento*, servirebbe solo a fare confusione.

C'è differenza fra la funzione `greetFriend` scritta come nell'esempio e come segue?

```javascript
function greetFriend (name, isFriend) {
  if (!isFriend) {
    return "Con te non ci parlo!"
  }

  let greeting = "Ciao " + name + "!"
  return greeting
}
```

<details>
  <summary>⚠️ SPOILER ⚠️</summary>

Non c'è differenza. Il return all'interno dell'`if` fa in modo che il codice seguente non sia comunque eseguito, rendendo l'`else` inutile.
Ma metterlo non fa certo male! Se ritieni che renda il codice più chiaro, mettilo pure cara.

</details>

## Controllare gli argomenti

Poichè il valore degli argomenti di una funzine non sono noti a prescindere,
il costrutto `if` è spesso usato per verificare che questi abbiano la forma
che ci si aspetta.

### Controllare se un valore è definito

In particolare, è spesso utile controllare che i valori passati come argomenti a una funzione siano
definiti, e non [undefined](./20_variabili.md#variabili-non-definite).

#### Esempio

Modifichiamo uno degli esempi precedenti per controlllare che i valori ricevuti in input dalla nostra funzione siano definiti.

```javascript
function greetFriend (name, isFriend) {
  if (isFriend === undefined && name === undefined) {
    return "Non ci coosciamo! Piacere!"
  }
  else if (name === undefined) {
    return "Non ricordo il tuo nome"
  }
  else if (isFriend === undefined) { // NOTA che a questo punto sono sicuro che "name" sia definito, altrimenti saremmo entrati nell'if precedente
    return name + "Frank, sei un amico o nemico?"
  }
  else if (!isFriend) {
    return "Con te non ci parlo!"
  }
  else {
    return "Ciao " + name + "!"
  }
}

const message1 = greet("Arianna", true)
console.log(message1) // stmapa: "Ciao Arianna!"

const message2 = greet("Bruce", false)
console.log(message2) // stmapa: "Con te non ci parlo!"

const message3 = greet(undefined, false)
console.log(message3) // stmapa: "Non ricordo il tuo nome"

const message4 = greet("Frank", undefined)
console.log(message4) // stmapa: "Frank, sei un amico o nemico?"

const message4 = greet(undefined, undefined)
console.log(message4) // stmapa: "Non ci coosciamo! Piacere!"
```

### Controllare il tipo di una variabile (JavaScript)

Poichè JavaScript non permette di specificare esplicitamente il tipo di una variabile, l'input di una funzione potrebbe essere di tipo sbagliato.

E' possibile controllare il tipo di un dato usando il costrutto `typeof [variabile]`, che può valere:

- `undefined`
- `string`
- `boolean`
- `number`
- `object` 👈 vedremo in seguito
- `array` 👈 vedremo in seguito

```javascript
let num = 5
console.log(typeof num) // stampa: "number"

let str = "Ciao"
console.log(typeof str) // stampa: "string"

let bool = true
console.log(typeof bool) // stampa: "boolean"
```

#### Esempio

Questo esempio verifica che gli argomenti della funzione siano del tipo che ci si aspetta
(`string` e `boolean` rispettivamente). Qualora questo non sia il caso, la funzione ritorna
senza restituire alcun valore.

```javascript
function greetFriend (name, isFriend) {
  if (typeof name !== 'string' || typeof isFriend !== 'boolean') {
    return // uguale a `return undefined`
  }
  else if (!isFriend) {
    return "Con te non ci parlo!"
  }
  else {
    return "Ciao " + name + "!"
  }
}

const message1 = greet("Arianna", true)
console.log(message1) // stmapa: "Ciao Arianna!"

const message2 = greet("Bruce", false)
console.log(message2) // stmapa: "Con te non ci parlo!"

const message3 = greet(0, false)
console.log(message3) // non stampa nulla, perchè message3 è `undefined`

const message4 = greet("Arianna", 0)
console.log(message4) // non stampa nulla, perchè message4 è `undefined`

const message5 = greet("Arianna", undefined)
console.log(message5) // non stampa nulla, perchè message5 è `undefined`
```

> 🔎 NOTA
> 
> In JavaScript, usare `return` da solo, senza specificare alcun valore da restituire,
> è come scrivere `return undefined`


### Esercizio - validazione argomenti

<a href="../src/catalogue/50_funzioni/exercise2/index.html" target="_blank">Ora prova tu!</a>
Questo esercizio è simile al [precedente](#esercizio---funzione), ma questa volta per completarlo correttamente
dovrai verificare la correttezza degli argomenti in input.

## Return dentro cicli

Come già detto [sopra](#return-dentro-if), all'interno di una funzione si può invocare il comando `return` ovunque lo si voglia,
non per forza solo alla fine.

Basandoti su quanto detto fino ad ora sulle funzioni, cosa ritieni accada quando durante l'esecuzione di un [ciclo](./40_cicli.md) all'interno
di una funzione si arriva ad un comando di `return`?

Quello che succede ogni volta che una funzione trova un `return`: questa termina, e qualunque cosa sia a destra del
`return` è il risultato.

### Esempio

```javascript

function findWaldo() {
TODO
}

```


## *Breve digressione inutile* Graffe nelle funzioni

Dai due esempi sopra puoi notare che di come metti le graffe non frega a nessuno.
La maggior parte dei linguaggi di programmazione ti lascia libera di indentare il codice come preferisci.

Di solito per le funzioni si usa:

```javascript
function name () {
  // ...
}
```

e per gli `if`:

```javascript
if () {
  // ...
} else {
  // ...
}
```

Ma non c'è obbligo.

Ad esempio a mio padre piace:

```javascript
function name ()
{

}
```

(in realtà anche a me non dispiace affatto).

Inoltre a me piace scrivere gli `if` - `else` così:

```javascript
if () {
  ...
}
else {
  ...
}
```
...ognuno è matto a modo suo.

____

[<- lezione precedente (cicli)](./40_cicli.md)
