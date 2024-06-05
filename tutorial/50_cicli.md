<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a href="./40_if">lezione precedente (if)</a>
  <a href="./60_funzioni">lezione successiva (funzioni)</a>
</div>

# Table of content
{:.no_toc}

* TOC
{:toc}

# Operazioni ripetute (cicli)

Nella scrittura di codice, è possibile specificare operazioni da ripetere più volte di seguito, detti "cicli" (o "loop").

Del tipo:

```
finchè [CONDIZIONE], esegui [OPERAZIOINI]
```

Schematicamente (è venuto davvero bene, sono un artista 🎨)

```
  ➡️ ➡️ ➡️ ➡️ ➡️ verifica condizione
  ⬆            ↙️           ↘️
  ⬆          ↙️               ↘️
  ⬆️       risolve a        risolve a
  ⬆️         true             false
  ⬆️           ⬇️                ⬇️
  ⬆️           ⬇️                ⬇️
  ⬆️       esegue le       FINE del ciclo
  ⬆️       operazioni
  ⬆️      specificate
  ⬆️          ⬇️
  ⬆️          ⬇️
  ⬅️ ⬅️ ⬅️ ⬅️ ⬅️ ⬅️
```

Quindi, al termine dell'esecuzione delle operazioni specificate per il ciclo, invece di andare avanti nell'esecuzione
dell'istruzione sottostante, il computer torna a valutare se la condizione del ciclo è ancora valida. Se sì, le operazioni
sono esguite nuovamente, altrimenti il ciclo termina e l'esecuzione del codice prosegue normalmente.


In quasi ogni linguaggio di programmazione esistono due tipi di ciclo, il ciclo `while` e il ciclo `for`.

## Ciclo `while`

```javascript
while ( CONDIZIONE ) // finchè CONDIZIONE si verifica...
{
  // ...fai quello che trovi qui
}
```

> 🔎 NOTA
> 
> come per gli [`if`](./40_if.md), la condizione verificata può essere una variabile booleana o un'espressione
> il cui risultato è un booleano.

### Esempio: flusso completo di un ciclo `while`

```javascript
let iterations = 3
let num = 0

while (num < iterations)
{
  console.log("Iterazione numero " + num)
  num = num + 1
}
```

Flusso:
  - verifico la condizione: `num < iterations`, ovvero `0 < 3`, che risolve al booleano `true`
    - eseguo il codice del ciclo `while`:
      - stampo  "Iterazione numero 0"
      - incremento `num` di 1, che ora vale 1
  - verifico la condizione: `num < iterations`, ovvero `1 < 3`, che risolve al booleano `true`
    - eseguo il codice del ciclo `while`:
      - stampo  "Iterazione numero 1"
      - incremento `num` di 1, che ora vale 2
  - verifico la condizione: `num < iterations`, ovvero `2 < 3`, che risolve al booleano `true`
    - eseguo il codice del ciclo `while`:
      - stampo  "Iterazione numero 2"
      - incremento `num` di 1, che ora vale 3
  - verifico la condizione: `num < iterations`, ovvero `3 < 3`, che risolve al booleano `false`
  - L'esecuzione termina

In altre parole, il codice stampa:

```
Iterazione numero 0
Iterazione numero 1
Iterazione numero 2
```

### Esempio

Prova a scrivere il flusso del codice sottostante, come fatto per l'esempio precedente.

```javascript
let dragonBalls = 7
let found = 4

while (found <= dragonBalls)
{
  console.log("Abbiamo " + found + " sfere del drago su " + dragonBalls)
  found = found + 1
}
```

### Esempio: `if` dentro `while`

Il seguente codice utilizza il costrutto `if` all'interno di un ciclo `while`.

Prova a capire tu stessa come si svolge la sua esecuzione, prima di controllare.

```javascript
let iAmHappy = false
let iAmTired = true
let iAmThirsty = true
let iAmHungry = true

while (!iAmHappy)
{
  if (iAmTired)
  {
    console.log('Sleeping...')
    iAmTired = false
  }
  else if (iAmThirsty)
  {
    console.log('Drinking...')
    iAmThirsty = false
  }
  else if (iAmHungry)
  {
    console.log('Eating...')
    iAmHungry = false
  }
  
  iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired
}

console.log('I am happy now! :)')
```

<details>
  <summary>⚠️ SPOILER ⚠️</summary>
  <div style="border: 1px solid #aaa;border-radius: 5px;padding: 5px;">
    Il codice stampa:
    <pre><code>    Sleeping...
      Drinking...
      Eating...
      I am happy now! :)</code></pre>
    Il flusso è il seguente:
    <ul>
      <li>
        valuto la condizione del while: <code>!iAmHappy</code> è uguale a <code>true</code>,
        quindi entro nel loop (<a href="./20_variabili#booleani">ricorda</a> che <code>!</code> è il NOT logico)
        <ul>
          <li>
            trovo un costrutto
            <a href="./40_if#controllare-più-condizioni-alternative"><code>if ... else if ...</code></a>.
          </li>
          <li>
            valuto la condizione del primo <code>if</code>, ovvero <code>iAmTired</code>,
            che è <code>true</code>, quindi eseguo il codice corrispondente
            <ul>
              <li>stampo "Sleeping..."</li>
              <li>aggiorno <code>iAmTired</code> a <code>false</code></li>
            </ul>
          </li>
          <li>esco dall'<code>if ... else if ...</code></li>
          <li>
            eseguo l'operazione successiva:
            <pre><code>iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired</code></pre>
            che è uguale a
            <pre><code>iAmHappy = true && false && false</code></pre>
            qunidi il valore di <code>iAmHappy</code> rimane <code>false</code>.
            <a href="./20_variabili#booleani">Ricorda</a> che <code>&&</code> indica l'AND logico.
          </li>
        </ul>
      </li>
      <li>
        valuto la condizione del while: : <code>!iAmHappy</code> è uguale a <code>true</code>
        <ul>
          <li>
            valuto la condizione del primo <code>if</code>, che è
            <code>false</code>, quindi passo all'<code>else if</code> successivo
          </li>
          <li>
            ne valuto la condizione, che è <code>true</code>, quindi ne eseguo il codice
            <ul>
              <li>stampo "Drinking..."</li>
              <li>aggiorno <code>iAmThirsty</code> a <code>false</code></li>
            </ul>
          </li>
          <li>esco dall'<code>if ... else if ...</code></li>
          <li>
            eseguo l'operazione successiva:
            <pre><code>iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired</code></pre>
            che è uguale a
            <pre><code>iAmHappy = true && true && false</code></pre>
            qunidi <code>iAmHappy</code> rimane <code>false</code>.
          </li>
        </ul>
      </li>
      <li>
        valuto la condizione del while: <code>!iAmHappy</code> è uguale a
        <code>true</code>
        <ul>
          <li>
            valuto la condizione del primo <code>if</code>, che è <code>false</code>
          </li>
          <li>
            valuto la condizione del primo <code>else if</code>, che è <code>false</code>
          </li>
          <li>
            valuto la condizione del secondo <code>else if</code>, che è <code>true</code>,
            quindi ne eseguo il codice
            <ul>
              <li>stampo "Eating..."</li>
              <li>aggiorno <code>iAmHungry</code> a <code>false</code></li>
            </ul>
          </li>
          <li>esco dall'<code>if ... else if ...</code></li>
          <li>
            eseguo l'operazione successiva:
            <pre><code>iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired</code></pre>
            che è uguale a
            <pre><code>iAmHappy = true && true && true</code></pre>
            qunidi <code>iAmHappy</code> diventa <code>true</code>.
          </li>
        </ul>
      </li>
      <li>
        valuto la condizione del while: <code>!iAmHappy</code> è uguale a
        <code>false</code>, quindi esco dal ciclo <code>while</code>
      </li>
      <li>
        stampo "I am happy now! :)" ...Alla fine per essere felici basta poco
        si direbbe 🧘
      </li>
    </ul>
  </div>
</details>

### Esempio trabocchetto

Considera il seguente esempio, ottenuto modificando leggermente uno sopra:

```javascript
let iterations = 3
let num = 0

while (num < iterations) {
  console.log("Iterazione numero " + num)
}
```

Cosa esegue? Noti qualcosa di strano?

<details>
  <summary>⚠️ SPOILER ⚠️</summary>
  <div style="border: 1px solid #aaa;border-radius: 5px;padding: 5px;">
    <p>
      La condizione del ciclo <code>while</code>, <code>num < iterations</code>, non sarà mai <code>false</code>,
      qundi rimaniamo bloccati nel ciclo indefinitivamente!
    </p>
    <p>
      Quando questo si verifica, il nostro programma muore male 💀, spesso accompagnato da un
      pesante rallentamento dell'intero computer su cui il codice sta girando.
    </p>
    <p>
      Per farla semplice: il computer continua ad eseguire le operazioni specificate all'interno del ciclo
      indefinitivamnete, il chè monopolizza le risorse, e manda in crash l'intero sistema.
    </p>
    <p>Occhio a non cadere in cicli infiniti!</p>
  </div>
</details>

### Occhio ai cicli infiniti

E' un errore molto comune quello di creare un loop la cui condizione non diventa mai `false`,
ed incappare quindi in un ciclo infinito, come quello visto nell'[esempio precedente](#esempio-trabocchetto).

Se ci fai caso, noterai che in tutti gli altri esempi visti fino ad ora all'interno del `while` è presente
l'aggiornamento di una variabile dichiarata fuori dal ciclo.

Negli esempi precedenti questi sono:

```javascript
while (num < iterations)
{
  console.log("Iterazione numero " + num)
  num = num + 1  // <--------- LUI
}
```

```javascript
while (found <= dragonBalls)
{
  console.log("Abbiamo " + found + " sfere del drago su " + dragonBalls)
  found = found + 1  // <--------- LUI
}
```

```javascript
while (!iAmHappy)
{
  // ...
  iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired // <--------- LUI
}
```

Queste operazioni garantiscono che le variabili del programma venga aggiornato ad ogni iterazione del ciclo
`while`, facendo sì che prima o poi si arrivi alla sua fine.

Cicli infiniti possono verificarsi anche a seguito di bug - errori nel codice.
Ad esempio, riesci a spiegare come mai modificando l'[esempio sopra](#esempio-if-dentro-while) come segue si viene a
creare un ciclo infinito?

```javascript
let iAmHappy = false
let iAmTired = true
let iAmThirsty = true
let iAmHungry = true

while (!iAmHappy) {
  if (iAmTired) {
    console.log('Sleeping...')
    iAmTired = false
  }
  else if (iAmThirsty) {
    console.log('Drinking...')
    iAmThirsty = false
  }
  else if (iAmHungry) {
    console.log('Eating...')
    iAmHungry = false
  }
  iAmHappy = iAmHungry && iAmThirsty && iAmTired // <--------- MODIFICATO SOLO QUESTA ISTRUZIONE
}

console.log('I am happy now! :)')
```

In questo caso ci siamo ricordati di aggiornare la variabile `iAmHappy` ad ogni iterazione del ciclo,
ma lo facciamo nel modo sbagliato: `iAmHappy` non sarà mai `true`.

### Esempio: confrontare due array

Nel precedente episodio abbiamo parlato delle difficoltà legate allo stabilire [l'uguaglianza di due strutture dati](./40_if.md#confrontare-strutture-dati).

[Uno degli esmepio](./40_if.md#esempio-confrontare-due-strutture-dati), in particolare,
mostrava come confrontare il contenuto di due array di cui si conosce la lunghezza.

Ma come confrontare due array di cui non sono note a prescindere le lunghezze?
Ora che conosciamo il ciclo `while`, hai tutti gli strumenti per poterlo fare.

```javascript
let names = [/*...*/]
let names2 = [/*...*/]
```

`names` e `names2` sono due array di cui non conosci nulla.
Come potresti capire che sono uguali?

Un approccio iniziale potrebbe essere analogo a quello visto nel precedente episodio:

```javascript
// ... come sopra

let areSame = (names[0] === names2[0])
  && (names[1] === names2[1])
  && (names[2] === names2[2])
  // ...
```

Ma non va bene, perchè non sappiamo quanto a lungo dovremmo andare avanti! Infatti non conosciamo la lunghezza degli array.

Come costruiresti un ciclo `while` per decretare se `names` e `names2` sono uguali

Prova a farci una pensata!

<details>
  <summary>⚠️ SPOILER ⚠️</summary>
  <div style="border: 1px solid #aaa;border-radius: 5px;padding: 5px;">

    ```javascript
    let names = [/*...*/]
    let names2 = [/*...*/]

    let areSame

    if (names.length !== names2.length)
    {
      areSame = false
    } else
    {
      let L = names.length
      let idx = 0
      let areSame = true
      while (idx < L)
      {
        areSame = areSame && (names[idx] === names2[idx])
        idx = idx + 1
      }
    }
    ```

  </div>
</details>

### Esercizio: confrontare due oggetti


<a href="../pages/router.html?topic=50_cicli&exercise=exercise1" target="_blank">...e due oggetti?</a>


## Ciclo `for`

TODO


### *Sexy approfondimento per secchioni* 🤓 Ciclo `for` vs ciclo `while`

> ⚠️ **IMPORTANTE** ⚠️
> 
> se non è tutto chiaro fino a qui, salta il resto di questo *Sexy Approfondimento*, servirebbe solo a fare confusione.
> 
> In questo approfondimento confrontiamo il cilco `while` con il ciclo `for`.
> Sappi però che quelli in questo *Sexy approfondimento* sono discorsi che lasciano il tempo che trovano, per due motivi principalmente:
>  - in generale la scelta migliore è di usare il tipo di ciclo che tu preferisci
>  - come [accenneremo in seguito](#ciclo-for-of), molti linguaggi offrono modi più comodi di scrivere cicli, che probabilmente
>    usarai molto molto più spesso di quelli "tradizionali" trattai in questo *Sexy approfondimento*

L'uso del ciclo `while` può essere spesso riassunto in 4 step:

1. dichiaro una varibile fuori dal ciclo
2. dichiaro il ciclo con la sua condizione, che dipende dalla variabile create allo step \[1]
3. specifico le operazioni del ciclo "vere e propie"
4. al termine del ciclo, aggiorno la variabile creata allo step \[1] per assicurarmi di uscire dal ciclo prima o poi


Ad esempio:
```javascript
let i = 0 // [1]
while (i < 10 ) // [2]
{
  //... [3]
  i++  // [4]
}
```

Il ciclo for invece già include nella sua sintassi sia la dichiarazinoe di una nuova variabile (\[1]), sia la condizione del ciclo (\[2]),
che come aggiornare la variabile al termine di ogni iterazione del ciclo (\[4]):

```javascript
for (let i = 0; i < iterations; i++)
//   ---------  --------------  ----
//      [1]          [2]        [4]
```

Questo fa sì che l'uso del ciclo `for` assuma questa forma:

```javascript
for (let i = 0; i < 10; i++) // [1], [2], [4]
{
  // ...  [3]
}
```

Avendo così le operazioni che ci interessano da sole all'interno delle graffe del ciclo, e quelle necessarie esclusivamente
per usare il ciclo tutte contenute all'interno delle parentesi tonde.

Questo ha due vantaggi principali:

1. rende il codice più ordinato, perchè separa le operazioni specifiche del ciclo (\[1], \[2], \[4]) dalle operazioni che
  vogliamo eseguire per il nostro programma (\[3])
2. rende più difficile incappare in [cicli infiniti](#occhio-ai-cicli-infiniti), in quanto non è possibile dimenticare di
  aggiornare la variabile che si sta usando per ciclare, poichè questo step è richiesto dalla sintassi stessa del ciclo `for` (\[4])

Quindi, se ti trovi nelle condizioni di dichiarare una nuova variabile SOLO per usarla nel ciclo (\[1]), probabilmente ha senso usare un
ciclo `for` invece che un ciclo `while`.

## Ciclo `for of`

TODO

## Comandi `break` e `continue`

TODO

## *Sexy approfondimento per secchioni* 🤓 Cicli avanzati (specifico per JavaScript)

TODO

<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a href="./40_if">lezione precedente (if)</a>
  <a href="./60_funzioni">lezione successiva (funzioni)</a>
</div>