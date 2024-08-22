import {Model} from "@stackbit/types";

export const pageModel: Model = {
  name: "Page",
  type: "object",
  fields: [
    {name: "title", type: "string", required: true},
    {name: "description", type: "string", required: false},
    {name: "emoji", type: "string", required: false},
    {name: "weight", type: "number", required: false},
    {name: "type", type: "string", required: true},
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
