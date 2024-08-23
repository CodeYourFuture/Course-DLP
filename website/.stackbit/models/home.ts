import {ObjectModel, PageModel} from "@stackbit/types";
import {Base} from "./base";

export const Home: PageModel = {
  extends: ["Base"],
  name: "Home",
  label: "Home Page",
  type: "page",
  urlPath: "/",
  filePath: "content/_index.md",
  fields: [{name: "map", type: "list", items: {type: "string"}}],
};
