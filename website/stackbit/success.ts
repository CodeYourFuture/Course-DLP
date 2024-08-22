import {Model} from "@stackbit/types";

export const successAllModel: Model = {
  name: "Success",
  type: "page",
  extends: ["Page"],
  urlPath: "/success/",
  filePath: "success/index.md",
  fields: [
    {
      name: "objectives",
      type: "list",
      required: false,
      items: {type: "string"},
    },
  ],
};

export const successOneModel: Model = {
  name: "Success1",
  type: "page",
  extends: ["Page"],
  urlPath: "/weeks/1/success",
  filePath: "weeks/1/success/index.md",
};
