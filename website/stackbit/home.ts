import {Model} from "@stackbit/types";

export const homeModel: Model = {
  name: "Home",
  type: "page",
  extends: ["Page"],
  urlPath: "/",
  filePath: "_index.md",
  fields: [
    {name: "map", type: "list", required: false, items: {type: "string"}},
  ],
};
