const workspace = Blockly.inject('blocklyDiv', {
  toolbox: `
    <xml>
      <block type="number_input"></block>
      <block type="text_input"></block>
      <block type="math_operation"></block>
      <block type="compare"></block>
      <block type="if_else"></block>
      <block type="print"></block>
    </xml>
  `
});

function generateCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('code').textContent = code;
}

function runCode() {
  document.getElementById('output').innerHTML = "";
  try {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);
  } catch (e) {
    document.getElementById('output').innerText = "Error: " + e.message;
  }
}

function output(value) {
  document.getElementById('output').innerHTML += value + "<br>";
}

function clearAll() {
  workspace.clear();
  document.getElementById('code').textContent = "";
  document.getElementById('output').innerHTML = "";
}
