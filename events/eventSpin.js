export const id = "MY_EVENT_DANCE";

export const name = "Actor Spin";
export const groups = ["📦 Compact events"];
export const subGroups = {
  "📦 Compact events": "Actor",
};

export const fields = [
  {
    label: "You spin me right round, baby",
  },
  {
    key: "actorId",
    type: "actor",
    defaultValue: "player",
  },
  {
    label: "Turns:",
    key: "turns",
    type: "number",
    defaultValue: 4,
  },
];

const directions = ["up", "right", "down", "left"];

export const compile = (input, helpers) => {

  const { actorSetActive, actorSetDirection, wait } = helpers;
  actorSetActive(input.actorId);
  const turns = input.turns || 0;
  for (let i = 0; i < turns; i++) {
    actorSetDirection(directions[i % directions.length]);
    wait(10);
  }
  
};