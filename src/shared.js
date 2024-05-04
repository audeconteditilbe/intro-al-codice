class ExercisePage extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
      <header>
        <h1>Tocca a lei cara</h1>
        <p>Scrivi il codice nell'editor e premi "Conferma" per verificarne la correttezza</p>
      </header>
      <section class="exercise">
        <h1 id="exercise-title"></h1>
        <div class="instructions">
          <p id="exercise-instructions"></p>
          <div>

            <div id="reset-button" title="Reset">
              <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
              <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                <path d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0" fill-rule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
        <form id="exercise-form">
          
          <textarea id="exercise-code-block"></textarea>
          
          <input class="btn" type="submit" value="Conferma">
        </form>
      </section>
      
      <div class="result">
        <div id="validation"></div>
        <div id="report"></div>
        <ul id="tests"></ul>
      </div>
    `
  }
}
customElements.define('exercise-page', ExercisePage)