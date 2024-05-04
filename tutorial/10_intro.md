[-> lezione successiva (variabili)](./20_variabili.md)

____


# DISCLAIMER iniziale

Alcune cose dipendono dal linguaggio che stai usando (esempio: la sintassi).

Gli esempi usano JavaScript, a meno che non sia specificato diversamente, ma ciò che è specifico di JavaScript
viene presentato come tale.

Sinceramente sticazzi, i concetti sono generali, cheè l'importante.


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
altri permettono di non specificare il tipo (lo "indovinano dal contesto")

Linguaggi diversi hanno tipi diversi, ma in generale si possono riassumere così

Tipi Primitivi
  - numeri (con o senza virgola)
  - testo (stringhe) (`""`)
  - booleani (true / false)

Strutture dati -> dati raggruppati / organizzati in qulche modo... utile si spera
  - array: lista di dati ( `[]` )
  - mappe: associazione di una chiave a un valore (`{ [chiave] : [valore] }`) (la chiave è univoca!)
  - ... quando sarai più grande

Tipi custom
  - ... quando sarai più grande

Il tipo determina quali operazioni si possono fare su di essi. Ad esempio, ha senso sommare due numeri ma non sommarli.

## Input / Output
```
dati input [ -> ] operazioni sui dati [ -> ] dati di output
           ------                     ------
```
Interazione col mondo
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

- operazioni legate al tipo di dato (dipendono dal lungugaggio di programmazione!). Di solito:
    - numeri -> op aritmetiche (`+`, `-`, `*`, `/`, ...)
    - stringhe -> op specifiche per stringhe
      (esempio: concatenare due stringhe: "ciao", " arianna" -> "ciao arianna")
    - ...
- operaioni condizionali (se [CONDIZIONE] allora [OPERAZIONI] altrimenti [OPERAZIONI])
- operazioni ripetute (finchè [CONDIZINE] fai [OPERAZINOI])

____

[-> lezione successiva (variabili)](./20_variabili.md)
