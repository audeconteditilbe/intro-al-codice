require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }})

// TODO implement (and call 😊) unmount

const getEditor = (name) => {
  if (name === 'base') {
    return new BaseEditor()
  }
  return new MonacoEditor()
}

class MonacoEditor {
  mount (container, options) {
    require(["vs/editor/editor.main"], function () {
      window.editor = monaco.editor.create(container, options)
    })
  }
  get value () { return window.editor.getValue() }
  set value (value) { window.editor.setValue(value) }
}

class BaseEditor {
  id = (Math.random() + 1).toString(36).substring(7)

  mount (container, options) {
    const textArea = document.createElement('textarea')
    
    textArea.setAttribute('id', this.id)
    textArea.style.width = '100%'
    textArea.style.height = '100%'
    textArea.style.resize = 'none'
    textArea.style.border = '5px solid #f0f0f0'
    textArea.style.padding = '1px'

    // Use tab inside textarea
    textArea.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        e.preventDefault()
        const tab = "  "
        const start = this.selectionStart
        const end = this.selectionEnd
    
        this.value = this.value.substring(0, start) + tab + this.value.substring(end)
        this.selectionStart = this.selectionEnd = start + tab.length
      }
    })

    container.appendChild(textArea)
    options.value && (window[this.id].value = options.value)
  }
  get value () { return window[this.id].value }
  set value (value) { window[this.id].value = value }
}
