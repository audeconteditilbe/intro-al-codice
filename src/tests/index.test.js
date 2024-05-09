const reportResult = document.getElementById('test-report')
const startButton = document.getElementById('start-button')

const tests = []
function addTest ({title, test}) {
  tests.push({title, test})
}

function start () {
  reset()

  tests.forEach(({ title, test }, id) => {
    addReportSection(title, id)
    try {
      const res = test()
      res.map(({ success, error }) => {
        if (error) {
          addReportItem(error, 'error', id)
        } else if (success) {
          addReportItem(success, 'success', id)
        } else {
          addReportItem('Encountered a test which is not "success" not "error"!', 'info', id)
        }
      })
      addReportItem(`Executed ${res.length} test cases`, 'info', id)
    } catch (err) {
      addReportItem(`Error executing ${title}: ${err}`, 'error', id)
    }
  })
}

function reset () {
  reportResult.classList.remove('error')
  reportResult.classList.remove('success')
  reportResult.innerText = ''
}

function addReportSection (title, id) {
  const sectionTitle = document.createElement('h2')
  sectionTitle.classList.add('test-section-title')
  sectionTitle.innerText = title

  const list = document.createElement('ul')
  list.id = id

  reportResult.appendChild(sectionTitle)
  reportResult.appendChild(list)
}

function addReportItem (msg, type, id) {
  const item = document.createElement('li')
  item.classList.add(type)
  item.innerText = msg
  
  document.getElementById(id).appendChild(item)
}

startButton.addEventListener('click', start)
