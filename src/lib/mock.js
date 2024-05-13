
const rndBool = (prob = 0.5) => Math.random() < prob

const rndFloat = (min = 0, max = 100) => ((Math.random() * (max - min)) + min).toFixed()
const rndInt = (min = 0, max = 100) => parseInt(rndFloat(min, max))

const extract = (arr) => arr[rndInt(0, arr.length-1)]

const rndString = () => (Math.random() + 1).toString(36).substring(7)

const rndFloadStr = (min  = 0, max = 100) => JSON.stringify(rndFloat(min, max))
const rndIntStr = (min = 0, max = 100) => JSON.stringify(rndInt(min, max))
const rndBoolStr = (prob = 0.5) => JSON.stringify(rndBool(prob))

const rndFirstName = () => extract(FIRST_NAMES)
const rndLastName = () => extract(LAST_NAMES)
const rndFullName = () => `${rndFirstName()} ${rndLastName()}`
const rndCity = () => extract(CITIES)
const rndAnimal = () => extract(ANIMALS)
const rndPetName = () => extract(PET_NAMES)
const rndCar = () => extract(CARS)
const rndText = () => extract(TEXTS)
const rndAddress = () => `${extract(['Via', 'Piazza', 'Viale'])} ${rndLastName()} ${rndInt()}`
const rndWeekday = () => extract(WEEK_DAYS)
const rndMonth = () => extract(MONTHS)
const rndDate = (day, month, year, separator) => {
  const m = month ?? rndInt(1, 12)
  const d = day ?? rndInt(1, DAYS_PER_MONTH[m])
  const y = year ?? rndInt(1970, 2024)
  const s = separator ?? extract(['/', '-', ' '])
  return [d, m, y].join(s)
}

const rndObject = (nesting = 0, maxNesting = 2) => {
  const obj = {}
  
  let key = 'nome'
  if (rndBool()) {
    obj[key] = rndFirstName()
    if (rndBool()) {
      obj['cognome'] = rndLastName()
    }
  }
  else if (rndBool()) {
    obj[key] = rndFullName()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }
  
  key = extract(['città', 'località', 'provenienza'])
  if (rndBool()) {
    obj[key] = rndBool() ? rndCity() : rndAddress()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['cane', 'gatto', 'pesce', 'pappagallo'])
  if (rndBool()) {
    obj[key] = rndPetName()
  }
  else if (rndBool()) {
    obj['animale'] = rndAnimal()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['automobile', 'auto', 'marca'])
  if (rndBool()) {
    obj[key] = rndCar()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['testo', 'discorso'])
  if (rndBool()) {
    obj[key] = rndText()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['indirizzo', 'provenienza'])
  if (rndBool()) {
    obj[key] = rndText()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['compleaano', 'appuntamento', 'scadenza'])
  if (rndBool()) {
    obj[key] = rndDate()
  }
  else if (rndBool()) {
    obj['giorno'] = rndWeekday()
  }
  else if (rndBool()) {
    key = extract(['mese', 'scadenza'])
    obj[key] = rndMonth()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['età', 'peso'])
  if (rndBool()) {
    obj[key] = rndInt()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['prezzo', 'distanza'])
  if (rndBool()) {
    obj[key] = rndFloat()
  }
  else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = rndString()
  if (rndBool()) {
    obj[key] = rndString()
  } else if (rndBool()) {
    obj[key] = rndInt()
  } else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['sposato/a', 'pensionato/a', 'simpatico/a'])
  if (rndBool()) {
    obj[key] = rndBool()
  } else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['partner'])
  if (nesting <= maxNesting && rndBool(0.2)) {
    obj[key] = rndObject(nesting++, maxNesting)
  } else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  key = extract(['colleghi', 'amici'])
  if (nesting <= maxNesting && rndBool(0.2)) {
    const arrType = nesting <= maxNesting ? extract(['string', 'object', 'array']) : 'string'
    obj[key] = rndArray(arrType, nesting++, maxNesting)
  } else if (rndBool(0.2)) {
    obj[key] = undefined
  }

  return obj
}

const rndArray = (type, nesting = 0, maxNesting = 2) => {
  const n = rndInt(0, 10)
  let _type = type
  if (!_type && nesting <= maxNesting) {
    _type = extract(['string', 'integer', 'float', 'boolean', 'object', 'array'])
  }
  else if (!_type) {
    _type = extract(['string', 'integer', 'float', 'boolean'])
  }
  const gen = TYPE_TO_GEN[_type]
  if (_type === 'object') {
    return Array(n).fill(0).map(() => gen(nesting++, maxNesting))
  }
  if (type === 'array') {
    return Array(n).fill(0).map(() => gen(undefined, nesting++, maxNesting))
  }
  return Array(n).fill(0).map(() => gen())
}

const TYPE_TO_GEN = {
  string: extract([
    rndFirstName, rndLastName, rndFullName,
    rndCity, rndAnimal, rndPetName, rndCar,
    rndText, rndAddress, rndWeekday, rndMonth,
    rndDate, rndFloadStr, rndIntStr, rndBoolStr
  ]),
  integer: rndInt,
  float: rndFloat,
  boolean: rndBool,
  object: rndObject,
  array: rndArray
}


const rnd = (type, ...args) => {
  type = type ?? extract(['string', 'integer', 'float', 'boolean', 'object', 'array'])
  const gen = TYPE_TO_GEN[type]
  return gen(...args)
}
