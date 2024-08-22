import {Model} from "@stackbit/types";

export const prepAllModel: Model = {
  name: "PrepAll",
  type: "page",
  extends: ["Page"],
  urlPath: "prep",
  filePath: "prep/index.md",
};
export const prepOneModel: Model = {
  name: "Prep1",
  type: "page",
  extends: ["Page"],
  urlPath: "weeks/1/prep/",
  filePath: "weeks/1/prep/index.md",
};
