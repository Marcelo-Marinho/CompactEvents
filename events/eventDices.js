export const id = "MY_EVENT_DICES";

export const name = "Dices 🎲";
export const groups = ["📦 Compact events"];
export const subGroups = {
  "📦 Compact events": "Random",
};

export const fields = [
  {
    label: "Select the dice!",
    key: "diceType",
    type: "select",
    defaultValue: "1x6",
      options: [
        ["1x2", "Coin flip"],
        ["1x4", "1d4"],
        ["1x6", "1d6"],
        ["1x8", "1d8"],
        ["1x10", "1d10"],
        ["1x%10", "Tens dice (1d%)"],
        ["1x12", "1d12"],
        ["1x20", "1d20"],
        ["1x100", "1d100"],
      ],
  },
  {
  type: "group",
  fields: [
                {
                    label: "Save in:",
                },
                {
                    key: "save_var",
                    type: "variable",
                    defaultValue: "LAST_VARIABLE",
                },
    ],
  },
];

export const compile = (input, helpers) => {

  const { variableSetToRandom, variableSetToValue, appendRaw, wait } = helpers;
  
  if (input.diceType == "1x2") {
    variableSetToRandom(input.save_var, 1, 2);
  }
  if (input.diceType == "1x4") {
    variableSetToRandom(input.save_var, 1, 4);
  }
  if (input.diceType == "1x6") {
    variableSetToRandom(input.save_var, 1, 6);
  }
  if (input.diceType == "1x8") {
    variableSetToRandom(input.save_var, 1, 8);
  }
  if (input.diceType == "1x10") {
    variableSetToRandom(input.save_var, 1, 10);
  }
  if (input.diceType == "1x%10") {
   appendRaw(`; Tens dice
VM_RAND .ARG0, 0, 9

VM_RPN
.R_REF  .ARG0
.R_INT16  10
.R_OPERATOR .MUL
.R_REF_SET  ${input.save_var}
.R_STOP`);
  }
  if (input.diceType == "1x12") {
    variableSetToRandom(input.save_var, 1, 12);
  }
  if (input.diceType == "1x20") {
    variableSetToRandom(input.save_var, 1, 20);
  }
  if (input.diceType == "1x100") {
    variableSetToRandom(input.save_var, 1, 100);
  }
  
};