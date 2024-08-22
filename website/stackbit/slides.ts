import {Model} from "@stackbit/types";

export const slideModel: Model = {
  name: "Slide",
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
    },
    {name: "outputs", type: "list", required: false, items: {type: "string"}},
  ],
};

export const slideSectionModel: Model = {
  name: "SlideSection",
  type: "object",
  fields: [
    {name: "title", type: "string", required: true},
    {name: "description", type: "string", required: false},
    {name: "weight", type: "number", required: false},
  ],
};
