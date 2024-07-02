export const id = "MY_EVENT_ASCII_SAVE";

export const name = "Save ASCCI characters";
export const groups = ["📦 Compact events"];
export const subGroups = {
  "📦 Compact events": "Variables",
};

export const fields = [
  {
    label: "Easy save ASCII (Max: 1 - 6 characters):",
    key: "text_in",
    type: "text",
    defaultValue: "ABCDEF",
    optional: true,
  },
  {
    label: "Variables to save characters",
  },
  {
    type: "group",
    label: "Variables to save characters",
    fields: [
        {
            key: "variable0",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "variable1",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
    ],
  },
  {
    type: "group",
    fields: [
        {
            key: "variable2",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "variable3",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
    ],
  },
  {
    type: "group",
    fields: [
        {
            key: "variable4",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "variable5",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
    ],
  },
  {
    label: "💡 You can use this to set many variables at once",
  },

];

export const compile = (input, helpers) => {

  const {variableSetToScriptValue, variableAddFlags, variableSetToValue, wait} = helpers;

  var size = 0
  try { 
    size = input.text_in.length 
  }
  catch(error) { 
    size = 0 
  }
  
  var value0 = 0
  var value1 = 0
  var value2 = 0
  var value3 = 0
  var value4 = 0
  var value5 = 0


  if (size >= 1) value0 |= input.text_in.charCodeAt(0);
  if (size >= 2) value1 |= input.text_in.charCodeAt(1);
  if (size >= 3) value2 |= input.text_in.charCodeAt(2);
  if (size >= 4) value3 |= input.text_in.charCodeAt(3);
  if (size >= 5) value4 |= input.text_in.charCodeAt(4);
  if (size >= 6) value5 |= input.text_in.charCodeAt(5);
  
  variableAddFlags(input.variable0, value0)
  variableAddFlags(input.variable1, value1)
  variableAddFlags(input.variable2, value2)
  variableAddFlags(input.variable3, value3)
  variableAddFlags(input.variable4, value4)
  variableAddFlags(input.variable5, value5)
  
};