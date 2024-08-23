import {ObjectModel, PageModel, Model} from "@stackbit/types";

export const Slides1: PageModel = {
  name: "Slides1",
  type: "page",
  urlPath: "/weeks/1/slides/",
  filePath: "weeks/1/slides/_index.md",
  fields: [
    {name: "title", type: "string", required: true},
    {name: "description", type: "string", required: false},
    {name: "weight", type: "number", required: false},
    {name: "emoji", type: "string", required: false},
    {
      name: "menu_level",
      type: "list",
      required: false,
      items: {type: "string"},
      hidden: true,
    },
    {
      name: "outputs",
      type: "list",
      required: false,
      items: {type: "string"},
      hidden: true,
    },
  ],
};

export const Slides1Partial: ObjectModel = {
  name: "Slides1Partial",
  type: "object",
  fields: [
    {name: "title", type: "string", required: true},
    {name: "description", type: "string", required: false},
    {name: "weight", type: "number", required: true},
  ],
};
