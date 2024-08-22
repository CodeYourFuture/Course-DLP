import {Model} from "@stackbit/types";

export const Success: Model = {
  name: "Success",
  type: "page",
  urlPath: "/success",
  filePath: "content/success/index.md",
  fields: [
    {name: "type", type: "string", required: true, hidden: true},
    {name: "title", type: "string", required: true, hidden: true},
    {name: "description", type: "string"},
    {name: "emoji", type: "string", required: false, default: "🤖"},
    {name: "menu", type: "list", items: {type: "string"}},
    {name: "menu_level", type: "list", items: {type: "string"}, hidden: true},
  ],
};
