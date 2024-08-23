import {Model} from "@stackbit/types";

export const Agenda1: Model = {
  name: "Agenda1",
  type: "page",
  urlPath: "/weeks/1/agenda",
  filePath: "content/weeks/1/agenda/index.md",
  fields: [
    {name: "noRegister", type: "boolean", required: true},
    {name: "type", type: "string", required: true, hidden: true},
    {name: "title", type: "string", required: true, default: "My New Page"},
    {name: "description", type: "string"},
    {name: "emoji", type: "string", required: false, default: "🤖"},
    {name: "weight", type: "number", required: false},
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
