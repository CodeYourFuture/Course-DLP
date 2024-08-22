import {Model} from "@stackbit/types";

export const WeeksHome: Model = {
  name: "WeeksHome",
  type: "page",
  urlPath: "/weeks/",
  filePath: "content/weeks/_index.md",
  fields: [
    {
      name: "type",
      type: "string",
      required: true,
      default: "WeeksHome",
      hidden: true,
    },
    {name: "title", type: "string", required: true, hidden: true},
    {name: "description", type: "string"},
    {name: "emoji", type: "string", required: false, default: "🤖"},
  ],
};
export const Week1Home: Model = {
  name: "Week1Home",
  type: "page",
  urlPath: "/weeks/1/",
  filePath: "content/weeks/1/_index.md",
  fields: [
    {name: "type", type: "string", required: true, hidden: true},
    {name: "title", type: "string", required: true, hidden: true},
    {name: "description", type: "string"},
    {name: "emoji", type: "string", required: false, default: "🤖"},
  ],
};
