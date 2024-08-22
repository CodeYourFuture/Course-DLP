import {Model} from "@stackbit/types";

export const courseworkOneModel: Model = {
  name: "Coursework1",
  type: "page",
  extends: ["Page"],
  urlPath: "/weeks/1/coursework/",
  filePath: "/weeks/1/coursework/index.md",
  fields: [
    {name: "backlog", type: "string", required: true},
    {name: "backlog_filter", type: "string", required: false},
  ],
};
