export const id = "MY_EVENT_RNG_TIMER_FRAMES";

export const name = "Random timer (frames)";
export const groups = ["📦 Compact events"];
export const subGroups = {
  "📦 Compact events": "Timer",
};

export const fields = [
  {
    label: "Wait random time in frames between:",
  },
  {
    type: "group",
    fields: [
        {
            label: "Min:",
            key: "min_t",
            type: "number",
            min: 0,
            max: 3600,
            step: 1,
            defaultValue: 30,
        },
        {
            label: "Max:",
            key: "max_t",
            type: "number",
            min: 0,
            max: 3600,
            step: 1,
            defaultValue: 60,
        },
    ],
  },
  
];

export const compile = (input, helpers) => {

  const { wait } = helpers;

  var frames = 0;
  if (input.max_t > input.min_t) {
    frames = (Math.random() * (input.max_t - input.min_t) ) + input.min_t;
  } else {
    frames = (Math.random() * (input.min_t - input.max_t) ) + input.max_t;
  }

  if (frames > 0) {
    wait(frames);
  }
};