document.addEventListener('DOMContentLoaded', () => {
    const editor = CodeMirror(document.getElementById('editor'), {
      value: 'console.log("Hello, world!");',
      mode: 'javascript',
      lineNumbers: true,
      theme: 'default'
    });
  
    const runButton = document.getElementById('runButton');
    const output = document.getElementById('output');
  
    runButton.addEventListener('click', () => {
      const code = editor.getValue();
      output.innerHTML = '';
  
      try {
        const result = eval(code);
        output.innerHTML = String(result);
      } catch (error) {
        output.innerHTML = `<span style="color: red;">Error: ${error}</span>`;
      }
    });
  });
  