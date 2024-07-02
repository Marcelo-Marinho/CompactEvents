export const id = "MY_EVENT_RNG_TIMER_SECONDS";

export const name = "Random timer (seconds)";
export const groups = ["📦 Compact events"];
export const subGroups = {
  "📦 Compact events": "Timer",
};

export const fields = [
  {
    label: "Wait random time in seconds between:",
  },
  {
    type: "group",
    fields: [
        {
            label: "Min:",
            key: "min_t",
            type: "number",
            min: 0,
            max: 60,
            step: 0.1,
            defaultValue: 0.5,
        },
        {
            label: "Max:",
            key: "max_t",
            type: "number",
            min: 0,
            max: 60,
            step: 0.1,
            defaultValue: 1.0,
        },
    ],
  },
  
];

export const compile = (input, helpers) => {

  const { wait } = helpers;

  var timer = 0;
  if (input.max_t > input.min_t) {
    timer = (Math.random() * (input.max_t - input.min_t) ) + input.min_t;
  } else {
    timer = (Math.random() * (input.min_t - input.max_t) ) + input.max_t;
  }
  var frames = Math.ceil(timer * 60);
  if (frames > 0) {
    wait(frames);
  }
};