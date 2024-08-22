import {Model} from "@stackbit/types";

export const weeksAllModel: Model = {
  name: "WeeksAll",
  type: "page",
  extends: ["Page"],
  urlPath: "/weeks/",
  filePath: "weeks/_index.md",
};
export const weeksOneModel: Model = {
  name: "Week1",
  type: "page",
  extends: ["Page"],
  urlPath: "/weeks/1/",
  filePath: "weeks/1/_index.md",
};
