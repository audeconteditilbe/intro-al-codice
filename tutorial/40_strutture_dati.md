<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a href="./30_if.md">lezione precedente (variabili)</a>
  <a href="./50_cicli">lezione successiva (cicli)</a>
</div>

# Strutture dati

Come [brevemente accennato](./10_intro.md#dati), i dati possono essere raggruppati / organizzati in modi utili.
Questi raggruppamenti sono chiamati *strutture dati*.

Ne esistono vari tipi, per ora ci concentreremo su due: array e mappe.

> DISCLAIMER
>
> Alcune delle cose che ti dirò qui sono un po' imprecise. Non ho voluto andarci troppo pesante con la teoria, ma darti quanto
> basta per renderti operativa nei primi passi.
> Se vorrai un approfondimento teorico, sono a disposizione. Ti farò pagare solo un piccolo sovrapprezzo.

## Array

Gli array consistono in una lista ordinata di dati.

```javascript
let ages = [2, 4, 16, 5, 10]
```

> 💬 *Come dire...*
> 
> Computer, usa parte della tua memoria per salvare questi numeri in questo ordine.\
> D'ora in poi per referenziare (usare) questa lista (array) usaerò il nome `ages`.\

Per accedere ai dati di un'array, puoi usare la sintassi:

```javascript
ages[0] // -> primo valore
ages[1] // -> secondo valore
// ...
```

> 🔎 NOTA
> 
> si inizia a contare da 0! Per accedere al primo valore si sua <b>ages[0]</b> e NON <s>ages[1]</s>
> Questa è fonte di errore quando inizia a codare le prime volte, posso già dirti che ci andrai a sbattere 😊

### Esempio

Dato il seguente esempio, la variabile `firstName` vale "Arianna".

```javascript
let names = ['Arianna', 'Claudio', 'Ginger']
let firstName = names[0]
```



<div style="display: flex;justify-content: space-between;font-size: 12px;">
  <a href="./30_if.md">lezione precedente (variabili)</a>
  <a href="./50_cicli">lezione successiva (cicli)</a>
</div>