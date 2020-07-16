class MonacoEditorElement extends HTMLElement {
  constructor() {
    super();
    this.style = 'display: block;';
    const shadow = this.attachShadow({ mode: 'open' });
    const iframe = document.createElement('iframe');
    iframe.src = new URL('iframe.html', import.meta.url).href;
    iframe.style = `width: 100%; height: 100%;`;
    shadow.appendChild(iframe);
  }
}

customElements.define('monaco-editor', MonacoEditorElement);
