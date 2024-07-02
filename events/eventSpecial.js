export const id = "MY_EVENT_SPECIAL";

export const name = "S.P.E.C.I.A.L. characteristics from Fallout";
export const groups = ["📦 Compact events"];
export const subGroups = {
  "📦 Compact events": "Variables",
};

export const fields = [
  {
    label: "What makes you SPECIAL?",
  },

  {
    label: "S is for Strength",
  },
  {
    type: "group",
    fields: [
        {
            key: "var_s",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "value_S",
            type: "number",
            defaultValue: 0,
            min: 0,
            max: 10,
        },
    ],
  },

  {
    label: "P is for Perception",
  },
  {
    type: "group",
    fields: [
        {
            key: "var_p",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "value_P",
            type: "number",
            defaultValue: 0,
            min: 0,
            max: 10,
        },
    ],
  },

  {
    label: "E is for Endurance",
  },
  {
    type: "group",
    fields: [
        {
            key: "var_e",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "value_E",
            type: "number",
            defaultValue: 0,
            min: 0,
            max: 10,
        },
    ],
  },

  {
    label: "C is for Charisma",
  },
  {
    type: "group",
    fields: [
        {
            key: "var_c",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "value_C",
            type: "number",
            defaultValue: 0,
            min: 0,
            max: 10,
        },
    ],
  },

  {
    label: "I is for Intelligence",
  },
  {
    type: "group",
    fields: [
        {
            key: "var_i",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "value_I",
            type: "number",
            defaultValue: 0,
            min: 0,
            max: 10,
        },
    ],
  },

  {
    label: "A is for Agility",
  },
  {
    type: "group",
    fields: [
        {
            key: "var_a",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "value_A",
            type: "number",
            defaultValue: 0,
            min: 0,
            max: 10,
        },
    ],
  },

  {
    label: "L is for Luck",
  },
  {
    type: "group",
    fields: [
        {
            key: "var_l",
            type: "variable",
            defaultValue: "LAST_VARIABLE",
        },
        {
            key: "value_L",
            type: "number",
            defaultValue: 0,
            min: 0,
            max: 10,
        },
    ],
  },

  {
    label: "💡 YOU'RE SPECIAL! SHOW YOUR FACE!",
  },
  {
    key: "avatarID",
    type: "avatar",
    defaultValue: "none",
    optional: true,
  },

];

export const compile = (input, helpers) => {

  const {variableSetToValue, wait} = helpers;

  var a = input.avatarID;
  variableSetToValue(input.var_s, input.value_S);
  variableSetToValue(input.var_p, input.value_P);
  variableSetToValue(input.var_e, input.value_E);
  variableSetToValue(input.var_c, input.value_C);
  variableSetToValue(input.var_i, input.value_I);
  variableSetToValue(input.var_a, input.value_A);
  variableSetToValue(input.var_l, input.value_L);
  
};
