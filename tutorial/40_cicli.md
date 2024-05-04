[<- lezione precedente (if)](./30_if.md)

[-> lezione successiva (funzioni)](./50_funzioni.md)
____

# Operazioni ripetute (cicli)

Nella scrittura di codice, è possibile specificare operazioni da ripetere più volte di seguito, detti "cicli" (o "loop").

Del tipo:

```
finchè [CONDIZIONE], esegui [OPERAZIOINI]
```

Schematicamente (è venuto davvero bene, sono un artista 🎨)

```
  ➡️➡️➡️➡️➡️ verifica condizione
  ⬆️            ↙️         ↘️
  ⬆️          ↙️             ↘️
  ⬆️       risolve a        risolve a
  ⬆️         true             false
  ⬆️          ⬇️               ⬇️
  ⬆️          ⬇️               ⬇️
  ⬆️        esegue        FINE del ciclo
  ⬆️      operazioni      
  ⬆️          ⬇️
  ⬆️          ⬇️
  ⬅️⬅️⬅️⬅️⬅️⬅️
```

In quasi ogni linguaggio di programmazione esistono due tipi di ciclo, il ciclo `while` e il ciclo `for`.

## Ciclo `while`

```javascript
while ( CONDIZIONE ) { // finchè CONDIZIONE si verifica...
  // ...fai quello che trovi qui
}
```

> 🔎 NOTA
> 
> come per gli [`if`](./30_if.md), la condizione verificata può essere una variabile booleana o un'espressione
> il cui risultato è un booleano.

### Esempio: flusso completo

```javascript
let iterations = 3
let num = 0

while (num < iterations) {
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
  - l'esecuzione termina

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
let found = 2

while (found <= dragonBalls) {
  console.log("Abbiamo " + found + " sfere del drago su " + dragonBalls)
  found = found + 1
}
```

### Esempio: if + while

Il seguente codice utilizza il costrutto `if` all'interno di un ciclo `while`.

Prova a capire tu stessa come si svolge la sua esecuzione.

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
  iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired
}

console.log('I am happy now! :)')
```

<details>
  <summary>⚠️ SPOILER ⚠️</summary>

Il codice stampa:

```
Sleeping...
Drinking...
Eating...
I am happy now! :)
```

Il flusso è il seguente:
- valuto la condizione del while: `!iAmHappy` è uguale a `true`,
quindi entro nel loop ([ricorda](./20_variabili.md#booleani) che `!` è il NOT logico)
  - trovo un costrutto [`if ... else if ... `](./30_if.md#controllare-più-condizioni-alternative).
  - valuto la condizione del primo `if`, ovvero `iAmTired`, che è `true`, quindi eseguo il codice corrispondente
    - stampo "Sleeping..."
    - aggiorno `iAmTired` a `false`
  - esco dall' `if ... else if ...`
  - eseguo l'operazione successiva: `iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired`
  che è uguale a `iAmHappy = true && false && false`, qunidi il valore di `iAmHappy` rimane `false`.
  Ricorda che `&&` indica l'AND logico.
- valuto la condizione del while: : `!iAmHappy` è uguale a `true`
  - valuto la condizione del primo `if`, che è `false`, quindi passo all'`else if` successivo
  - valuto la condizione del primo `else if`, che è `true`, quindi se eseguo il codice
    - stampo "Drinking..."
    - aggiorno `iAmThirsty` a `false`
  - esco dall' `if ... else if ...`
  - eseguo l'operazione successiva: `iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired`,
  che è uguale a `iAmHappy = true && true && false`, qunidi `iAmHappy` rimane `false`.
- valuto la condizione del while: : `!iAmHappy` è uguale a `true`
  - valuto la condizione del primo `if`, che è `false`
  - valuto la condizione del primo `else if`, che è `false`
  - valuto la condizione del secondo `else if`, che è `true`, quindi ne eseguo il codice
    - stampo "Eating..."
    - aggiorno `iAmHungry` a `false`
  - esco dall' `if ... else if ...`
  - eseguo l'operazione successiva: `iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired`,
  che è uguale a `iAmHappy = true && true && true`, qunidi `iAmHappy` diventa `true`.
- valuto la condizione del while: : `!iAmHappy` è uguale a `false`, quindi esco dal ciclo `while`
- stampo "I am happy now! :)" Alla fine per essere felici basta poco si direbbe 🧘
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

La condizione del ciclo `while`, `num < iterations`, non sarà mai `false`,
qundi rimaniamo bloccati nel ciclo indefinitivamente!

Quando questo si verifica, il nostro programma muore male 💀, spesso accompagnato da un
pesante rallentamento dell'intero computer su cui il codice sta girando.

Per farla semplice: il computer continua ad eseguire le operazioni specificate all'interno del ciclo
indefinitivamnete, il che monopolizza le risorse, e manda in crush l'intero sistema.

</details>

### Occhio ai cicli infiniti

E' un errore molto comune quello di creare un loop che la cui condizione non diventa mai `false`,
ed incappare quindi in un ciclo infinito, come quello visto nell'esempio precedente.

Se ci fai caso, noterai che in tutti gli altri esempi visti fino ad ora, all'interno del `while` è presente
l'aggiornamento di una variabile dichiarata fuori dal ciclo.

Negli esempi precedenti questi sono:

```javascript
// ...
while (num < iterations) {
  console.log("Iterazione numero " + num)
  num = num + 1  // <--------- LUI
}
```

```javascript
// ...

while (found <= dragonBalls) {
  console.log("Abbiamo " + found + " sfere del drago su " + dragonBalls)
  found = found + 1  // <--------- LUI
}
```

```javascript
// ...
while (!iAmHappy) {
  // ...
  iAmHappy = !iAmHungry && !iAmThirsty && !iAmTired // <--------- LUI
}
// ...
```

Queste operazioni garantiscono che lo stato del programma venga aggiornato ad ogni iterazione del ciclo
`while`, cosicchè prima o poi si arrivi alla sua fine.

Cicli infiniti possono verificarsi anche a seguito di bug - errori nel codice.
Ad esempio, riesci a vedere come mai modificando l'[esempio sopra](#esempio-if--while) come segue si viene a
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

### *Sexy approfondimento per secchioni* 🤓 Comando `break`

## Ciclo `for`

TODO

____

[<- lezione precedente (if)](./30_if.md)

[-> lezione successiva (funzioni)](./50_funzioni.md)