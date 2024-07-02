export const id = "MY_EVENT_HISTORY_DIALOGUE";
export const l10n = require("../helpers/l10n").default;

export const name = "Dialogue with avatars";
export const groups = ["📦 Compact events"];
export const subGroups = {
  "📦 Compact events": "Actor",
};

export const fields = [
  {
    label: "📖",
  },
  {
    label: "Actor: ",
    key: "actorId",
    type: "actor",
    defaultValue: "self",
  },

  {
    label: "1",
    type: "group",
    fields: [
        {
            label: "Part 1:",
        },
        {
            key: "part_1",
            type: "textarea",
            placeholder: "TxT",
            defaultValue: "",
            multiple: true,
            optional: true,
            flexBasis: "100%",
        },/*
        {
            key: "emote_1",
            type: "emote",
            defaultValue: "",
            toggleLabel: "Add Emote",
            optional: true,
        },*/
        {
            key: "avatar_1",
            type: "avatar",
            defaultValue: "",
            toggleLabel: "Add Avatar",
            optional: true,
        },
    ],
  },

  {
    label: "2",
    type: "group",
    fields: [
        {
            label: "Part 2:",
        },
        {
            key: "part_2",
            multiple: true,
            optional: true,
            type: "textarea",
            placeholder: "TxT",
            defaultValue: "",
            flexBasis: "100%",
        },/*
        {
            key: "emote_2",
            type: "emote",
            defaultValue: "",
            toggleLabel: "Add Emote",
            optional: true,
        },*/
        {
            key: "avatar_2",
            type: "avatar",
            defaultValue: "",
            toggleLabel: "Add Avatar",
            optional: true,
        },
    ],
  },

  {
    label: "3",
    type: "group",
    fields: [
        {
            label: "Part 3:",
        },
        {
            key: "part_3",
            multiple: true,
            optional: true,
            type: "textarea",
            placeholder: "TxT",
            defaultValue: "",
            flexBasis: "100%",
        },/*
        {
            key: "emote_3",
            type: "emote",
            defaultValue: "",
            toggleLabel: "Add Emote",
            optional: true,
        },*/
        {
            key: "avatar_3",
            type: "avatar",
            defaultValue: "",
            toggleLabel: "Add Avatar",
            optional: true,
        },
    ],
  },

  {
    label: "4",
    type: "group",
    fields: [
        {
            label: "Part 4:",
        },
        {
            key: "part_4",
            multiple: true,
            optional: true,
            type: "textarea",
            placeholder: "TxT",
            defaultValue: "",
            flexBasis: "100%",
        },/*
        {
            key: "emote_4",
            type: "emote",
            defaultValue: "",
            toggleLabel: "Add Emote",
            optional: true,
        },*/
        {
            key: "avatar_4",
            type: "avatar",
            defaultValue: "",
            toggleLabel: "Add Avatar",
            optional: true,
        },
    ],
  },

  {
    label: "5",
    type: "group",
    fields: [
        {
            label: "Part 5:",
        },
        {
            key: "part_5",
            multiple: true,
            optional: true,
            type: "textarea",
            placeholder: "TxT",
            defaultValue: "",
            flexBasis: "100%",
        },/*
        {
            key: "emote_5",
            type: "emote",
            defaultValue: "",
            toggleLabel: "Add Emote",
            optional: true,
        },*/
        {
            key: "avatar_5",
            type: "avatar",
            defaultValue: "",
            toggleLabel: "Add Avatar",
            optional: true,
        },
    ],
  },

  {
    label: "📘",
  },
  
];

export const compile = (input, helpers) => {

  const { actorSetActive, textDialogue, actorEmote, _actorEmote, getActorIndex, _stackPushReference, _stackPop, wait } = helpers;

  var actor = getActorIndex(input.actorId);

  actorSetActive(input.actorId);
  //actorEmote(input.emote_1);
  //_actorEmote(input.actorId, input.emote_1);
  if(input.part_1 != "") textDialogue(input.part_1 || "", input.avatar_1);
    
  actorSetActive(input.actorId);
  //actorEmote(input.emote_2);
  if(input.part_2 != "") textDialogue(input.part_2 || "", input.avatar_2);
  
  actorSetActive(input.actorId);
  //actorEmote(input.emote_3);
  if(input.part_3 != "") textDialogue(input.part_3 || "", input.avatar_3);
  
  actorSetActive(input.actorId);
  //actorEmote(input.emote_4);
  if(input.part_4 != "") textDialogue(input.part_4 || "", input.avatar_4);
  
  actorSetActive(input.actorId);
  //actorEmote(input.emote_5);
  if(input.part_5 != "") textDialogue(input.part_5 || "", input.avatar_5);
};