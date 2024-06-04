<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a></a>
  <a href="./20_variabili">lezione successiva (variabili)</a>
</div>

# Table of content
{:.no_toc}

* TOC
{:toc}

# DISCLAIMER iniziale

Alcune cose dipendono dal linguaggio che stai usando (esempio: la sintassi).

Gli esempi usano JavaScript, a meno che non sia specificato diversamente, ma ciò che è specifico di JavaScript
viene presentato come tale.

Sinceramente sticazzi, i concetti sono generali, che è l'importante.


# Mi piaci

Un pezzo di codice può essere tendenzialmente riassunto nel seguente flusso:
  
```
dati input -> operazioni sui dati -> dati di output
```

## Dati
```
  [dati input] -> operazioni sui dati -> [dati di output]
  ------------                           ----------------
```

Ogni dato ha un tipo.

Alcuni linguaggi obbligano a specificare il tipo di ogni dato,
altri permettono di ometterlo (la macchina "indovina" il tipo dal contesto)

Linguaggi diversi usano tipi diversi, ma in generale si possono riassumere così:

- Tipi Primitivi
  - numeri (con o senza virgola)
  - testo (stringhe) (`""`)
  - booleani (`true` / `false`)
- Strutture dati, ovvero: dati raggruppati / organizzati in qulche modo ...di utile si spera
  - array: lista di dati ( `[ dato 1, dato 2, ... ]` )
  - mappe: associazione di una chiave a un valore (`{ chiave 1 : valore 1, chiave 2 : valore 2, ... }`) (la chiave è univoca!)
  - ... quando sarai più grande

Il tipo do un tdato determina quali operazioni si possono fare su di esso all'interno del proprio codice.
Ad esempio, ha senso sommare due numeri, ma non due stringhe.

## Input / Output
```
dati input [ -> ] operazioni sui dati [ -> ] dati di output
           ------                     ------
```

Il programma deve poter comunicare con "il resto del mondo" perchè non sia fine a sè stesso.

Interazione con l'esterno
  - con l'utente
  - con una pagina web
  - con un altro programma
  - con la memoria della macchina
  - ...

## Operazioni
```
dati input -> [operazioni sui dati] -> dati di output
              ---------------------
```

Il codice "vero e proprio". L'input è manipolato di modo da produrre un output.

Semplificando, possiamo per ora elencare questi tipi di operazioni:
- operazioni legate al tipo di dato (dipendono dal lungugaggio di programmazione!). Di solito:
    - **numeri**:
      
      su dati numerici è possibile eseguire operazioni aritmetiche (`+`, `-`, `*`, `/`, ...)
    
    - **stringhe**:
    
      anche su dati testuali è possibile eseguire certe operazioni specifiche.\
      Esempio: concatenazione. Concatenare "ciao" e " Arianna" produce: "ciao Arianna"
    
    - ...
      
    Vedremo presto più nel dettaglio quali operazioni sono comunemente eseguite sui dati dei vari tipi,
    così come su alcune strutture dati. Tu per ora tieni a mente che il tipo di ogni dato è importante perchè
    determina quali operazioni puoi eseguire sullo stesso.

- operaioni condizionali:
  ```
  se [CONDIZIONE] allora fai [OPERAZIONI]
  ```

- operazioni ripetute:
  ```
  finchè [CONDIZINE] fai [OPERAZINOI]
  ```

<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a></a>
  <a href="./20_variabili">lezione successiva (variabili)</a>
</div>
