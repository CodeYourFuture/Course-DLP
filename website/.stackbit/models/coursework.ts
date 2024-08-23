import {Model} from "@stackbit/types";

export const Coursework1: Model = {
  name: "Coursework1",
  type: "page",
  urlPath: "/weeks/1/coursework/",
  filePath: "content/weeks/1/coursework/index.md",
  fields: [
    {name: "type", type: "string", required: true, hidden: true},
    {name: "title", type: "string", required: true, default: "My New Page"},
    {name: "description", type: "string"},
    {name: "emoji", type: "string", required: false, default: "🤖"},
    {name: "backlog", type: "string", required: true},
    {name: "backlog_filter", type: "string", required: false},
  ],
};
