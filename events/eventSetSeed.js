export const id = "MY_EVENT_SET_SEED";

export const name = "Set seed for RNG";
export const groups = ["📦 Compact events"];
export const subGroups = {
  "📦 Compact events": "Random",
};

export const fields = [
  {
    label: "New seed",
    key: "seed",
    type: "variable",
    defaultValue: "LAST_VARIABLE",
  },
  {
    label: "❕ Only works with Global Variables.",
  },
];

export const compile = (input, helpers) => {

  const { appendRaw, variableSetToValue, wait } = helpers;
  
  console.log(input.seed);

  appendRaw(`VM_INIT_RNG    ${input.seed}`);
};