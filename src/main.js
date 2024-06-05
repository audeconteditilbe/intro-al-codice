class ExercisePageManager {
  form = document.getElementById('exercise-form')
  title = document.getElementById('exercise-title')
  instructions = document.getElementById('exercise-instructions')
  report = document.getElementById('report')
  resetButton = document.getElementById('reset-button')
  solutionButton = document.getElementById('solution-button')
  editor = getEditor(searchValues().editor)
  solution
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
  
  onReset (e) {
    e.preventDefault()
    
    const ok = confirm("Sei sicura di voler rirpistinare i valori iniziali?")
    if (ok) {
      this.resetReoport()
      this.editor.value = this.initialValue
    }
  }

  onShowSolution (e) {
    e.preventDefault()
    
    const ok = confirm("Sei sicura di voler vedere la soluzione?")
    if (ok) {
      this.resetReoport()
      const current = this.editor.value
      const commented = current.split('\n').map((line) => `// ${line}`).join('\n')
      this.editor.value = `${this.solution}\n${commented}`
    }
  }

  evaluateReport (testResults) {
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
      validationReport = this.validation(this.editor.value)
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

    const { report, oks, tot, success } = this.evaluateReport(this.test(code))
    if (!success) {
      this.addReportItem(`Report: ${oks} test passati su ${tot}`, 'error')
      report.invalid.map((msg) => this.addReportItem(msg, 'error'))
      report.error.map((msg) => this.addReportItem(msg, 'error'))
      this.addReportItem('Test automatici non eseguiti', 'info')
      return
    }
    
    const { report: rndReport, oks: rndOks, tot: rndTot, success: rndSuccess } = this.evaluateReport(this.randomTest(code))
    if (!rndSuccess) {
      this.addReportItem(`Report: ${oks + rndOks} test passati su ${tot + rndTot}`, 'error')
      rndReport.invalid.map((msg) => this.addReportItem(msg, 'error'))
      rndReport.error.map((msg) => this.addReportItem(msg, 'error'))
      return
    }
    
    this.addReportItem(`Report: ${oks + rndOks} test passati su ${tot + rndTot}`, 'success')
  }
  
  loadExercise ({ name, text, initialValue, validation: _validation, test: _test, randomTest: _randomTest, solution: _solution }) {
    this.editor.mount(
      document.getElementById('container'),
      { value: initialValue, language: 'javascript', theme: 'vs-dark', automaticLayout: true, scrollBeyondLastLine: false }
    )
    this.resetReoport()
    this.title.innerText = name
    this.instructions.innerHTML = text
    this.initialValue = initialValue
    this.solution = _solution
    this.validation = _validation
    this.test = _test
    this.randomTest = _randomTest
    
    this.form.addEventListener('submit', this.onSubmit.bind(this))
    this.resetButton.addEventListener('click', this.onReset.bind(this))
    this.solutionButton.addEventListener('click', this.onShowSolution.bind(this))
  }
}
