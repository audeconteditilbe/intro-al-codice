class ExercisePageManager {
  form = document.getElementById('exercise-form')
  title = document.getElementById('exercise-title')
  instructions = document.getElementById('exercise-instructions')
  codeblock = document.getElementById('exercise-code-block')
  validationResult = document.getElementById('validation')
  reportResult = document.getElementById('report')
  testResults = document.getElementById('tests')
  resetButton = document.getElementById('reset-button')
  
  init = {}
  validation
  tests = []
  
  constructor () {
    // Use tab inside textarea
    this.codeblock.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault()
        const tab = "  "
        const start = this.selectionStart
        const end = this.selectionEnd
    
        this.value = this.value.substring(0, start) + tab + this.value.substring(end)
        this.selectionStart = this.selectionEnd = start + tab.length
      }
    })
  }

  resetValidation () {
    this.validationResult.classList.remove('error')
    this.validationResult.classList.remove('success')
    this.validationResult.innerText = ''
  }
  
  resetTestResults () {
    this.testResults.innerHTML = null
  }
  
  resetReport () {
    this.reportResult.classList.remove('error')
    this.reportResult.classList.remove('success')
    this.reportResult.innerText = ''
  }
  
  addValidationResult (msg, type) {
    this.validationResult.classList.add(type)  
    this.validationResult.innerText = msg
  }
  
  addTestResult (msg, type) {
    const item = document.createElement('li')
    item.innerText = msg
    item.classList.add(type)
  
    this.testResults.appendChild(item)
  }
  
  addReportItem (msg, type) {
    this.reportResult.classList.add(type)  
    this.reportResult.innerText = msg
  }
  
  onReset(e) {
    e.preventDefault()
    
    const {name, text, initialValue, validation, tests} = this.init
  
    const ok = confirm("Sei sicura di voler rirpistinare i valori iniziali?")
    if (ok) {
      this.loadExercise({name, text, initialValue, validation, tests})
    }
  }
  
  onSubmit (e) {
    e.preventDefault()
  
    this.resetValidation()
    this.resetTestResults()
    this.resetReport()
  
    let validationReport = {}
    try {
      validationReport = this.validation(this.codeblock.value)
    } catch (err) {
      validationReport.error = `Il codice ha lanciato un errore:\n${err}`
    }
  
    const { error, code } = validationReport
  
    if (error) {
      this.addValidationResult(error, 'error')
    }
    // else if (success) {
    //   this.addValidationResult(success, 'success')
    // }
    
    if (code) {
      let passed = 0
      
      this.tests.forEach((test) => {
        
        let testReport = {}
        try {
          testReport = test(code)
        } catch (err) {
          testReport.error = `Il codice ha lanciato un errore:\n${err}`
        }
        const { error, success } = testReport
        
        if (error) {
          this.addTestResult(error, 'error')
        }
        else {
          if (success) {
            this.addTestResult(success, 'success')
          }
          passed += 1
        }
      })
  
      this.addReportItem(
        `Report: ${passed} test passati su ${this.tests.length}`,
        passed === this.tests.length ? 'success' : 'error'
      )
    }
  }
  
  loadExercise ({name, text, initialValue, validation: _validation, tests: _tests}) {
    this.resetValidation()
    this.resetTestResults()
    this.resetReport()
    
    this.title.innerText = name
    this.instructions.innerText = text
    this.codeblock.value = initialValue
    this.validation = _validation
    this.tests = _tests
  
    this.init = { name, text, initialValue, validation, tests }
    
    this.form.addEventListener('submit', this.onSubmit.bind(this))
    this.resetButton.addEventListener('click', this.onReset.bind(this))
  }
}
