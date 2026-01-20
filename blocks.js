Blockly.defineBlocksWithJsonArray([
// numbder
  {
    "type": "number_input",
    "message0": "number %1",
    "args0": [
      { "type": "field_number", "name": "NUM", "value": 0 }
    ],
    "output": "Number",
    "colour": 230
  },
// text
  {
    "type": "text_input",
    "message0": "text %1",
    "args0": [
      { "type": "field_input", "name": "TEXT", "text": "hello" }
    ],
    "output": "String",
    "colour": 160
  },
// operation
  {
    "type": "math_operation",
    "message0": "%1 %2 %3",
    "args0": [
      { "type": "input_value", "name": "A" },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["+", "+"],
          ["-", "-"],
          ["*", "*"],
          ["/", "/"]
        ]
      },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Number",
    "colour": 230
  },
// compare
  {
    "type": "compare",
    "message0": "%1 %2 %3",
    "args0": [
      { "type": "input_value", "name": "A" },
      {
        "type": "field_dropdown",
        "name": "CMP",
        "options": [
          [">", ">"],
          ["<", "<"],
          ["==", "=="]
        ]
      },
      { "type": "input_value", "name": "B" }
    ],
    "output": "Boolean",
    "colour": 210
  },
// condition
  {
    "type": "if_else",
    "message0": "if %1 then %2 else %3",
    "args0": [
      { "type": "input_value", "name": "COND" },
      { "type": "input_statement", "name": "IF" },
      { "type": "input_statement", "name": "ELSE" }
    ],
    "colour": 120
  },
// print
  {
    "type": "print",
    "message0": "print %1",
    "args0": [
      { "type": "input_value", "name": "TEXT" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 65
  }

]);
