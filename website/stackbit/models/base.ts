import {Model} from "@stackbit/types";
// this doesn't work in Stackbit and I have no idea why
// and neither do they apparently
// so we cannot inherit this model in other models
export const Base: Model = {
  name: "Base",
  description: "Base model for all pages containing all common fields",
  type: "object",
  fields: [
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
