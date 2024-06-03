<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a href="./10_intro">lezione precedente (intro)</a>
  <a href="./30_strutture_dati">lezione successiva (strutture dati)</a>
</div>

# Table of content
{:.no_toc}

* TOC
{:toc}

# Dichiarare (creare) una variabile

```javascript
let age = 45
```

> 💬 *Come dire...*
> 
> Computer, usa una cella di memoria per salvare il valore 45.\
> D'ora in poi per referenziare (usare) questo dato usaerò il nome `age`.\

Si dice allora che `age` é una **variabile**.


> 🔎 NOTA
> 
> `let` è una parola chiave che si usa in alcuni linguaggi, ad esempio JavaScript, per indicare che stai creando una nuova variabile


> 🔎 NOTA
> 
> Non abbiamo specificato il [**tipo**](./10_intro.md#dati) di questo dato.
>
>
> Alcuni linguaggi, come JavaScript, non permettono di assegnare un tipo alle variabili: la macchina "indovina" il tipo per te.\
> Altri linguaggi, come ad esempio C, *obbligano* a specificare il tipo di ogni dato.\
> Ci sono poi linguaggi democristiani, come TypeScript (versione con i tipi di JavaScript), che *permettono* di specificare il tipo.


# Cambiare il valore di una variabile

```javascript
age = 50
```

> 💬 *Come dire...*
> 
> Computer, il dato `age` non vale più quello che era prima, ora vale 50.

> 🔎 NOTA
> 
> La parola chiave `let`, vista nell'esempio precedente, informa il computer che una NUOVA variabile deve essere creata.\
> In questo caso, non stiamo creando una variabile, stiamo aggiornando una <u>che già esiste</u>,
> quindi `let` va omesso.\
> Se prima di questa istruzione non avessimo mai dichiarato la variabile che stiamo modificando (`let age = ...`), allora il codice
> andrebbe in errore.

# Assegnare valori a variabili

In generale, in espressioni del tipo `[variabile] = ...`, la parte a destra dell'uguale è eseguita per prima.
Il risultato delle operazioni specificate a destra dell'uguale viene poi assegnato come valore alla variabile specificata
a sinistra.

Rileggendo i due esempi precedenti in quest'ottica:

```javascript
let age = 45
```
- il computer legge prima la parte a destra dell'uguale. In questo caso è banalmente il numero 45
- la parte a sinistra dell'uguale indica che una variabile di nome `age` va creata
- il computer assegna a questa variabile il valore a destra dell'uguale, ovvero il numero 45

```javascript
age = age + 1
```
- il computer esegue prima: `age + 1`. A questo punto `age` vale 45, quindi `age + 1` è risolto a 46
- la parte a sinistra dell'uguale indicata che la variabile `age` va aggiornata
- il computer assegna il valore ottenuto alla variabile, che in questo caso è sempre `age`, portando quindi ad aggiornare il valore di `age`

`age = age + 1` consiste quindi nell'aumentare il valore di `age` di 1.

## Esempio: creazione di una variabile a partire da un'altra variabile

Come si comporta il computer leggendo la seguente espressione? `age` è una variabile che contiene il valore 46.

Cerca di rispondere tu stessa prima di controllare la risposta.
Sii prolissa, spiega ogni passaggio (come negli esempi sopra) e assicurati di aver capito!

```javascript
let another_age = age + 5
```

<details>
  <summary>⚠️ SPOILER ⚠️</summary>
  <div style="border: 1px solid #aaa;border-radius: 5px;padding: 5px;">
    <ul>
      <li>il computer risolve prima la parte a destra dell'uguale. L'espressione <code>age + 5</code> è risolta al numero 51</li>
      <li>la parte a sinistra dell'uguale indica che una variabile di nome <code>another_age</code> va creata</li>
      <li>il computer assegna a questa variabile il valore a destra dell'uguale, ovvero il numero 51</li>
    </ul>
    Quindi, abbiamo creato una nuova variabile, chiamata <code>another_age</code>, che contiene il valore 51.
  </div>
</details>

## Esempio: dichiarare variabili di vario tipo

Gli esempi visti fino a qui trattano solamente dati numerici, ma ovviamente valgono anche per dati di altri tipi.

```javascript
let name1 = "Arianna"
let name2 = "Claudio"
```

> 💬 *Come dire...*
> 
> Computer, usa due celle di memoria per salvare i valori "Arianna" e "Claudio".\
> D'ora in poi per referenziare (usare) questi dati usaerò i nomi `name1` e `name2`.


```javascript
let isAriannaRich = true
```

> 💬 *Come dire...*
> 
> Computer, usa una celle di memoria per salvare il valore `true`.\
> D'ora in poi per referenziare (usare) questi dati usaerò il nome `isAriannaRich`.


# Operazioni e tipi

Le operazioni disponibili dipendono dal tipo dei dati su cui si sta operando.

## Numeri

Nel caso di **valori numerici**, le operazioni disponibili sono tendenzialmente quelle aritmetiche,
indicate con i simboli classici: `+`, `-`, `*`, `/`

```javascript
let age = 40
let sum = age + 1 // 41
let sub = age - 1 // 39
let mul = age * 10 // 400
let div = age / 10 // 4
```

Molti linguaggi offrono ulterioti operatori, i cui simboli possono cambiare. Ad esempio, in `JavaScript`:

```javascript
let squared = age ** 2 // 40 elevato alla potenza del 2 = 1600
let modu = age % 3 // 40 modulo 3 = 1
...
```

> 🔎 NOTA
> 
> L'operatore `%` nella maggior parte dei linguaggi rappresenta l'operazione di modulo.
> Questa indica il resto dato dalla divisione intera fra i due numeri.
> Ad esempio, la divisione intera fra 40 e 3 è 13 con il resto di 1. Quindi, 40 % 3 = 1
> 
> In informatica, questa operazione è spesso usata per capire velocemente se una variabile numerica
> contiene un valore pari. Infatti, i numeri pari in modulo 2 sono uguali a 0 <s>(a parte zero stesso 🤓👆 ...)</s>:
> ```
> 2 % 2 = 0
> 4 % 2 = 0
> ...
>  ```

## Stringhe

Nel caso di valori di tipo **stringa**, l'operazione più comune è la concatenazione.

In JavaScript uno dei modi per eseguire la concatenazione fra stringhe è con il simbolo `+`:

```javascript
let name = "Arianna"
let text = name + " studia molto" // Arianna studia molto
```

### Esempio: concatenazione di stringhe

```javascript
let study = name1 + " e " + name2 + " studiano l'informatica"
```

Questo esempio crea una variabile di nome `study` dal valore: "Arianna e Claudio studiano l'informatica".

> 🔎 NOTA
> 
> Nota dagli esempi precedenti come l'operatore `+` applicato a dati di tipo numero ne comporta la somma,
> mentre nel caso di stringhe ne comporta la concatenazione.\
> Ancora una volta: le operazioni che si possono eseguire dipendono dal tipo dei dati che si sta trattando.

### Esempio

Come sono eseguiti i seguenti esempi? Nota come cambia il significato di `+` a seconda del tipo di dato.

```javascript
let num = 1
num = num + 1
```

```javascript
let name = "Arianna"
name = name + " è la CFO di Mia"
```

> 🔎 NOTA (un po' avanzata, ne parleremo più avanti)
> 
> Molti linguaggi offrono ulteriori operazioni che possono essere eseguite su stirnghe,
> ma normalmente la loro sintassi è un po' diversa da quella vista fino a questo punto.
> 
> Ad esempio:
> 
> ```javascript
> let name = "arianna"
> let screamed = name.toUpperCase() // "ARIANNA"
> ```
> In questo esempio `screamed` vale "ARIANNA".
> 
> `toUpperCase` si chiama "funzione". Parleremo delle funzioni [in seguito](./60_funzioni.md).

## Booleani

Nel caso di valori di tipo **boolean**, le operazioni normalmente disponibili nei vari linguaggi sono quelle
delle espressioni logiche, indicate normalmente con gli operatori:
- `!` (detto "bang"): rappresenta il NOT logico
- `&&`: rappresenta l'AND logico
- `||`: rappresenta l'OR logico

Ad esempio:

```javascript
let bool = true
let bool2 = true

let notBool = !bool // NOT true = false
let boolAnd = bool && bool2 // true AND false = false
let bool = bool || bool2 // true OR false = true
```

Se le variabili booleane ora ti sembrano oscure, tranquilla - vedremo presto [come utilizzarli con profitto](./40_if.md).

> 🔎 NOTA
> 
> Gli operatori logici NOT, AND, OR sono riassunti dalle seguenti tabelle:
> 
> | a     | b     | a && b |
> | ----- | ----- | ------ |
> | true  | true  | true   |
> | true  | false | false  |
> | false | true  | false  |
> | false | false | false  |
> 
> | a     | b     | a \|\| b |
> | ----- | ----- | -------- |
> | true  | true  | true     |
> | true  | false | true     |
> | false | true  | true     |
> | false | false | false    |
> 
> | a    | !a    |
> | ---- | ----- |
> | true | true  |
> | true | false |

## Espressioni - parentesi

E' concesso in pressochè ogni linguaggio di programmazione concatenare più operazioni.
Se necessaio, è possibile usare parentesi tonde, che saranno risolte a partire dalle più nestate (come da regole della matematica).

Ad esempio:

```javascript
let num = (3 + 4) * 5 + (10 / 2)
let str = "Arianna" + " " + "studia"
let bool = !((true && false) || false)
...
```

## Variabili non definite

In molti linguaggi di programmazione possibilè e creare una variabile senza inizializzare il suo valore.

```javascript
let name
```
> 💬 *Come dire...*
> 
> Computer, metti da parte una cella di memoria. Non ti dico ancora che valore metterci, ma tu tienila da parte.\
> D'ora in poi per referenziare (usare) qualunque dato metterò nella cella userò il nome `name`.

Quindi la variabile `name` non è ancora stata "inizializzata" - ovvero, non le è ancora stato assegnato un valore.

In molti linguaggi esiste un valore speciale per indicare che una variabile non è ancora stata inizializzata.
In JavaScript questo valore è `undefined`.

In JavaScript, come si è detto, non sta a te specificare il tipo delle variabili, è la macchina ad "indovinarlo".
Ma la macchina non può indovinare il tipo di una variabile non inizializzata!\
Per ora diciamo che le varibili non inizializzate non hanno ancora un tipo... è una piccola bugia, ma va bene così 😊

## *Sexy approfondimento per secchioni* 🤓 Operazioni su dati di diverso tipo

> ⚠️ **IMPORTANTE** ⚠️
> 
> se non è tutto chiaro fino a qui, salta il resto di questo *Sexy Approfondimento*, servirebbe solo a fare confusione.

Operazioni fra dati di diverso tipo sono gestite diversamente dai vari linguaggi.
La sperimentazione è incoraggiata!

Comincia eseguendo i senguenti esempi in JavaScript:

```javascript
let num = 5
let text1 = "I have"
let text2 = "coins"

let concatTextAndNumbers = text1 + " " + num + " " + text2 // -> This is a string: "I have 5 coins"
```

In questo caso, per calcolare il valore da assegnare a `concatTextAndNumbers`, `num` è automaticamente convertito a stringa.
Nota che questo **non** cambia il valore di `num`!

Infatti, eseguendo subito dopo:

```javascript
num = num + 1 // -> Note that `num` is still a number!
```

il valore di `num` viene aggiornato a 6, ad indicare che è ancora un numero.

<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a href="./10_intro">lezione precedente (intro)</a>
  <a href="./30_strutture_dati">lezione successiva (strutture dati)</a>
</div>
