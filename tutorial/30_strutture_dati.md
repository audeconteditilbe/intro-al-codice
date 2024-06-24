
<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a href="./20_variabili">lezione precedente (variabili)</a>
  <a href="./40_if">lezione successiva (if)</a>
</div>

# Table of content

{:.no_toc}

* TOC
{:toc}

# Strutture dati

Come [brevemente accennato](./10_intro.md#dati), i dati possono essere raggruppati / organizzati in modi utili.
Questi raggruppamenti sono chiamati _strutture dati_.

Ne esistono vari tipi, per ora ci concentreremo su due: array e mappe.

> DISCLAIMER
>
> Alcune delle cose che ti dirò qui sono imprecise. Non ho voluto andarci troppo pesante con la teoria, ma darti quanto
> basta per renderti operativa nei primi passi.
> Se vorrai un approfondimento teorico, sono a disposizione. Ti farò pagare solo un piccolo sovrapprezzo.

## Array

Gli array consistono in una lista ordinata di dati.

```javascript
let ages = [2, 4, 16, 5, 10]
```

> 💬 _Come dire..._
>
> Computer, usa parte della tua memoria per salvare questi numeri in questo ordine.\
> D'ora in poi per referenziare (usare) questa lista (array) usaerò il nome `ages`.

Per accedere ai dati di un array, puoi usare la sintassi:

```javascript
ages[0] // -> primo valore, 2
ages[1] // -> secondo valore, 4
// ...
```

> 🔎 NOTA
>
> si inizia a contare da 0! Per accedere (leggere) al primo valore si sua <b>ages\[0]</b> e NON <s>ages\[1]</s>
> Questa è fonte di errore quando inizia a codare le prime volte, posso già dirti che ci andrai a sbattere 😊

### Esempio: accedere a (ie, leggere) un elemento di un array

Dato il seguente esempio, la variabile `firstName` vale "Arianna".

```javascript
let names = ["Arianna", "Claudio", "Ginger"]
let firstName = names[0]
```

### Caratteristiche specifiche degli array

Molti linguaggi di programmazione permettono di indagare alcune proprietà degli array con espressioni specifiche.

Ad esempio, in JavaScript, è possibile conoscere la lunghezza di un array tramite la parola `length`.

```javascript
let names = ["Arianna", "Claudio", "Ginger"]
console.log(names.length) // -> stampa "3"
```

> 🔎 NOTA
>
> La lettrice attenta 🤓 avrà notato che a differenza delle altre parole chiave incontrate fino ad ora, `length` va
> "appesa" dopo la variabile che contiene l'array usando un punto come saparatore. Questo perchè `length` non è una
> vera e propria parola chiave, bensì una "proprietà" degli array. Per ora accettalo così come viene.

E' inoltre possibile, in JavaScript, inserire un nuovo dato alla fine di un array usando `push`.

```javascript
let names = ["Arianna", "Claudio", "Ginger"]
names.push("Giacomino")
console.log(names) // -> stampa "['Arianna', 'Claudio', 'Ginger', 'Gaicomino']"
```

Al termine di questo esempio, `names` varrebbe `['Arianna', 'Claudio', 'Ginger', 'Gaicomino']`. E' quindi stato aggiunto
un dato al termine dell'array.

> 🔎 NOTA
>
> Anche `push`, come `length`, è una parola chiave specifica per gli array - infatti anch'essa va post-posta alla
> variable, con un punto come separatore. In questo caso è necessario aggiungere fra parentesi tonde il valore da
> aggiungere all'array. Questo perchè `push` è una "funzione". Vedremo le [funzioni](./60_funzioni.md) fra un paio di
> episodi - per ora accetta dai per buono quanto vedi.

Per ora mi limito a citare `length` e `push`, ma ci sono molte altre proprietà / funzioni predefinite a disposizione
quando si lavora con gli array. Se andando avanti dovessimo incappare in altre di essere, o se fossi curiosa di
conoscerne alcune, te le spiegherò volentieri.

Nota infine che `length` e `push` sono termini specifici di JavaScript - altri linguaggi di programmazione ne usano
altri, ma il funzionamento è lo stesso in pressochè ogni lunguaggio.

Il succo🧃 del discorso è: gli array (le strutture dati in generale) vengono già con delle proprietà specifiche che lo
sviluppatore può usare nel suo programma.

#### _Sexy approfondimento per secchioni_ 🤓 Funzioni e proprietà specifiche per tipo (parte I)

> ⚠️ **IMPORTANTE** ⚠️
>
> se non è tutto chiaro fino a qui, salta il resto di questo _Sexy Approfondimento_, servirebbe solo a fare confusione.

Non sono solo gli array, o le strutture dati, ad avere proprietà o funzioni specifiche, ma in generale vale per qulunque
"entità" (potremmo dire, qualunque variable di qualunque tipo). Ad esempio, forse ricorderai che
[abbiamo visto](./20_variabili.md#stringhe) che una stringa può essere capitalizzata usando `toUpperCase`:

```javascript
let name = "arianna"
let screamed = name.toUpperCase() // "ARIANNA"
```

Ebbene, `toUpperCase` è una funzione propria delle stringhe, così come `push` lo è per gli array.

La proprietà `length` è supportata sia dagli array che dalle stringhe - nel secondo caso rappresenta il numero di
caratteri nella stringa.

```javascript
let name = "Arianna"
let foods = ["Chicken", "Salad", "Ragù"]
console.log(name.length) // -> stampa "7"
console.log(foods.length) // -> stampa "3"
```

Allo stesso modo, altri tipi di dato hanno funzioni e proprietà specifiche.

Ad esempio, in JavaScript, i numeri hanno la funzione `toPrecision`, per regolare la precisione decimale.

```javascript
let price = 5.234
let priceDimes = price.toPrecision(2) // -> uguale a "5.2"
let priceCents = price.toPrecision(3) // -> uguale a "5.23"
```

Non devi imparare queste funzioni, l'idea di questo approfondimento è:
  
* informarti che praticamente ogni linguaggio di programmazione viene con strumenti molto utili che puoi usare a piacimento
  (non devi reinventare l'acqua calda insomma)
* sottolineare ancora una volta come il tipo di un dato condiziona le operazioni disponibili su di esso

#### _Sexy approfondimento per secchioni_ 🤓 Funzioni e proprietà specifiche per tipo (parte II)

<!-- > ⚠️ **IMPORTANTE** ⚠️
>
> se non è tutto chiaro fino a qui, salta il resto di questo _Sexy Approfondimento_, servirebbe solo a fare confusione. -->
<!-- anche operazioni quali 3+3 o "a"+"b" sono / possono essere viste come abbreviazioni per funzioni -->

Ancora non ho deciso se scrivere questo pezzo, rischierei davvero di mettere troppa carne al fuoco... Magari vieni da me
quando arrivi a questo punto e dimmi se è tutto super mega iper chiaro, o magari dopo che hai fatto un po' di pratica,
e in caso scrivo due righe. 😘

### Esempio: accedere a una posizione che non esiste all'interno di un array

Può accadere di provare ad accedere a un elemento di un array ad una posizione maggiore della lunghezza dell'array. Ad esempio:

```javascript
let names = ["Arianna", "Claudio", "Bruce"]
let element = names[5]
```

Diversi linguaggi di programmazione reagiscono diversamente a casi simili.
Alcuni lanciano un errore, potenzialmente facendo crashare l'intero programma, altri sono più clementi.
JavaScript appartiene alla categoria dei clementi, ed in particolare restituisce il valore [`undefined`](./20_variabili.md#variabili-non-definite).
Nell'esempio, quindi, `element` ha valore `undefined`.

In generale è comunque sempre bene controllare che un numero non superi la lunghezza dell'array prima di usarlo per
accedere allo stesso, e gestire opportunamente il caso in cui non sia così. Come fare questo controllo... vedremo nel
[prossimo episodio](./40_if.md#esempio-controllare-la-lunghezza-di-un-array) 🙃

### Esempio: pooplare un array vuoto

Il seguente esempio inizializza un array vuoto, per poi inserirvi due stringhe.

```javascript
let names = []
names.push("Claudio")
names.push("Arianna")
```

quanto vale a questo punto `names.length`?

### Esempio: perchè usare un array

TODO

## Mappe / Oggetti

Le mappe, in generale, rappresentano l'associazione 1 a 1 fra identificativi arbitrari (detti "chiave") e valori.

Con le mappe vai normalmente a modellare quegli insiemi di dati che potrebbero essere efficacemente rappresentati
tramite una singola riga di una tabella.

Ad esempio, dati come questi:

| name    | lastname    |
| ------- | ----------- |
| Arianna | Tutta panna |

possono essere modellati in JavaScript tramite una mappa ("oggetto") con la seguente sintassi:

```javascript
let person = {
  name: "Arianna",
  lastName: "Tutta panna",
}
```

<!-- TODO -->

> 💬 _Come dire..._
>
> Computer, usa parte della tua memoria per salvare una variable composta da due associazioni:\
> l'associazione "name"-"Arianna" e "lastName"-"Tutta panna".\
> D'ora in poi per referenziare (usare) questa associaizone (mappa) (oggetto, vedi soto) usaerò il nome `person`.

In JavaScript, le mappe si chiamano <b>oggetti</b>. D'ora in poi useremo per lo più questo termine.
JavaScript supporta un'altra struttura dati, che non tratteremo qui, di nome `Map`. Questa è molto simile a quella di
cui parleremo in questo capitolo, ma presenta alcune differenze su cui non vale la pena dilungarsi ora. Il termine "oggetto"
dunque è anche utile per distinguere la struttura dati in esame da quella di `Map`.\
Il motivo per cui finora ho parlato di "mappa" è che nella maggior parte dei linguaggi di programmazione si usa
tendenzialmente questo termine per indicare quella struttura dati che associa id ("chiavi") a valori. In questo caso
JavaScript rappresenta un'eccezione rispetto allo standard.

TODO

### Esempio: perchè usare un oggetto

TODO

<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a href="./20_variabili">lezione precedente (variabili)</a>
  <a href="./40_if">lezione successiva (if)</a>
</div>
