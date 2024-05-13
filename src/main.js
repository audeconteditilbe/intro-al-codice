require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }})

class ExercisePageManager {
  form = document.getElementById('exercise-form')
  title = document.getElementById('exercise-title')
  instructions = document.getElementById('exercise-instructions')
  report = document.getElementById('report')
  resetButton = document.getElementById('reset-button')
  
  target
  initialValue
  validation
  test
  randomTest
  
  resetReoport () {
    this.report.innerHTML = null
  }
  
  resetReport () {
    this.reportResult.classList.remove('error')
    this.reportResult.classList.remove('success')
    this.reportResult.innerText = ''
  }

  
  addReportItem (msg, type) {
    const item = document.createElement('li')
    item.innerText = msg
    item.classList.add(type)
  
    this.report.appendChild(item)
  }
  
  onReset(e) {
    e.preventDefault()
    
    const ok = confirm("Sei sicura di voler rirpistinare i valori iniziali?")
    if (ok) {
      this.resetReoport()
      window.editor.setValue(this.initialValue)
    }
  }

  testMeLicia (testResults) {
    const report = testResults.reduce((acc, { msg, status }) => {
      status === 'error' && acc.error.push(msg)
      status === 'success' && acc.success.push(msg)
      status === 'invalid' && acc.invalid.push(msg)
      return acc
    }, { error: [], success: [], invalid: [] })
    let oks = report.success.length
    let kos = report.error.length + report.invalid.length
    let tot = testResults.length
    if (tot !== oks + kos) {
      console.error(`Error: inconsistent report generated: ${oks} tests passed, ${kos} test failed, ${tot} test executed`)
    }
    return { report, oks, kos, tot, success: kos === 0 }
  }

  onSubmit (e) {
    e.preventDefault()
  
    this.resetReoport()
  
    let validationReport = {}
    try {
      validationReport = this.validation(window.editor.getValue())
    } catch (err) {
      validationReport.error = `Il codice ha lanciato un errore:\n${err}`
    }
    const { error: validationError, code } = validationReport
    if (validationError) {
      this.addReportItem(validationError, 'error')
    }
    
    if (!code) {
      return
    }

    const { report, oks, tot, success } = this.testMeLicia(this.test(code))
    
    if (!success) {
      this.addReportItem(`Report: ${oks} test passati su ${tot}`, 'error')
      report.invalid.map((msg) => this.addReportItem(msg, 'error'))
      report.error.map((msg) => this.addReportItem(msg, 'error'))
      this.addReportItem('Test automatici non eseguiti', 'info')
      return
    }
    this.addReportItem(`Report: ${oks} test passati su ${tot}`, 'success')
    this.addReportItem('Test automatici in esecuzione', 'info')

    const { report: rndReport, oks: rndOks, tot: rndTot, success: rndSuccess } = this.testMeLicia(this.randomTest(code))
    this.addReportItem(`Report: ${oks + rndOks} test passati su ${tot + rndTot}`, rndSuccess ? 'success' : 'error')
    rndReport.invalid.map((msg) => this.addReportItem(msg, 'error'))
    rndReport.error.map((msg) => this.addReportItem(msg, 'error'))
  }
  
  loadExercise ({ name, text, initialValue, validation: _validation, test: _test, randomTest: _randomTest, target }) {
    require(["vs/editor/editor.main"], function () {
      window.editor = monaco.editor.create(
        document.getElementById('container'),
        { value: initialValue, language: 'javascript', theme: 'vs-dark', automaticLayout: true, scrollBeyondLastLine: false }
      )
    })
    this.resetReoport()
    this.title.innerText = name
    this.instructions.innerHTML = text
    this.target = target
    this.initialValue = initialValue
    this.validation = _validation
    this.test = _test
    this.randomTest = _randomTest
    
    this.form.addEventListener('submit', this.onSubmit.bind(this))
    this.resetButton.addEventListener('click', this.onReset.bind(this))
  }
}
