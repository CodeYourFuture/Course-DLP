import {Model} from "@stackbit/types";

export const agendaOneModel: Model = {
  name: "Agenda1",
  type: "page",
  extends: ["Page"],
  urlPath: "/weeks/1/agenda/",
  filePath: "/weeks/1/agenda/_index.md",
  fields: [{name: "noRegister", type: "boolean", required: true}],
};
