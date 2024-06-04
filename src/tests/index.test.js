const reportResult = document.getElementById('test-report')
const startButton = document.getElementById('start-button')

const tests = []
const addTest = ({title, test}) => {
  tests.push({title, test})
}

const start = () => {
  reset()

  tests.forEach(({ title, test }, id) => {
    addReportSection(title, id)
    try {
      const reports = test().map(({ status, msg, }) => ({msg, status, id}))
      addReportItem(`Executed ${reports.length} test cases`, 'info', id)      
      const fails = reports.filter(({ status }) => status !== 'success')
      
      addReportItem(
        `${reports.length - fails.length}/${reports.length} test cases passed`, fails.length > 0 ? 'error' : 'success', id
      )
      
      if (fails.length > 0) {
        fails.forEach(({ msg, status, id }) => addReportItem(msg, status, id))
      }
    } catch (err) {
      addReportItem(`Error executing ${title}: ${err}`, 'error', id)
    }
  })
}

const reset = () => {
  reportResult.classList.remove('error')
  reportResult.classList.remove('success')
  reportResult.innerText = ''
}

const addReportSection = (title, id) => {
  const sectionTitle = document.createElement('h2')
  sectionTitle.classList.add('test-section-title')
  sectionTitle.innerText = title

  const list = document.createElement('ul')
  list.id = id

  reportResult.appendChild(sectionTitle)
  reportResult.appendChild(list)
}

const addReportItem = (msg, type, id) => {
  const item = document.createElement('li')
  item.classList.add(type)
  item.innerText = msg
  
  document.getElementById(id).appendChild(item)
}

startButton.addEventListener('click', start)
