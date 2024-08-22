import {Model} from "@stackbit/types";

export const Prep: Model = {
  name: "Prep",
  type: "page",
  urlPath: "/prep",
  filePath: "content/prep/index.md",
  fields: [
    {name: "type", type: "string", required: true, hidden: true},
    {name: "title", type: "string", required: true, hidden: true},
    {name: "description", type: "string"},
    {name: "emoji", type: "string", required: false, default: "🤖"},
    {name: "weight", type: "number", required: false, hidden: true},
    {name: "menu", type: "list", items: {type: "string"}},
    {name: "menu_level", type: "list", items: {type: "string"}, hidden: true},
    {
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
