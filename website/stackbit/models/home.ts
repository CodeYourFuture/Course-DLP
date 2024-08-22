import {Model} from "@stackbit/types";

export const Home: Model = {
  name: "Home",
  label: "Home Page",
  type: "page",
  urlPath: "/",
  filePath: "content/_index.md",
  fields: [
    {name: "map", type: "list", items: {type: "string"}},
    {name: "type", type: "string", required: true, hidden: true},
    {name: "title", type: "string", required: true, default: "My New Page"},
    {name: "description", type: "string"},
    {name: "emoji", type: "string", required: false, default: "🤖"},
    {name: "weight", type: "number", required: false, hidden: true},
  ],
};
