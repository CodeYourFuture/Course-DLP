import {ObjectModel} from "@stackbit/types";

// this doesn't work in Stackbit and I have no idea why
// and neither do they apparently
// so we cannot inherit this model in other models
export const Base = {
  name: "Base",
  type: "object",
  fieldGroups: [
    {name: "Content", label: "Content", icon: "content"},
    {name: "Settings", label: "Settings", icon: "gear"},
  ],
  fields: [
    {
      group: "Settings",
      name: "type",
      type: "string",
      required: true,
      hidden: true,
    },
    {group: "Settings", name: "title", type: "string", required: true},
    {group: "Settings", name: "description", type: "string", required: false},
    {
      group: "Settings",
      name: "emoji",
      type: "string",
      required: false,
      default: "🤖",
    },
    {group: "Settings", name: "weight", type: "number", required: false},
    {
      group: "Content",
      name: "blocks",
      type: "list",
      required: false,
      items: {
        type: "object",
        fields: [
          {name: "name", type: "string", required: true},
          {name: "src", type: "string", required: true},
          {name: "caption", type: "string", required: false},
          {name: "time", type: "number", required: false},
        ],
      },
    },
  ],
};
