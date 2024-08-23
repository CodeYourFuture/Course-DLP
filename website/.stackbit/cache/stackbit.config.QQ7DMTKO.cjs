var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");

// .stackbit/models/base.ts
var Base = {
  name: "Base",
  type: "object",
  fieldGroups: [
    { name: "Content", label: "Content", icon: "content" },
    { name: "Settings", label: "Settings", icon: "gear" }
  ],
  fields: [
    {
      group: "Settings",
      name: "type",
      type: "string",
      required: true,
      hidden: true
    },
    { group: "Settings", name: "title", type: "string", required: true },
    { group: "Settings", name: "description", type: "string", required: false },
    {
      group: "Settings",
      name: "emoji",
      type: "string",
      required: false,
      default: "\u{1F916}"
    },
    { group: "Settings", name: "weight", type: "number", required: false },
    {
      group: "Content",
      name: "blocks",
      type: "list",
      required: false,
      items: {
        type: "object",
        fields: [
          { name: "name", type: "string", required: true },
          { name: "src", type: "string", required: true },
          { name: "caption", type: "string", required: false },
          { name: "time", type: "number", required: false }
        ]
      }
    }
  ]
};

// .stackbit/models/home.ts
var Home = {
  extends: ["Base"],
  name: "Home",
  label: "Home Page",
  type: "page",
  urlPath: "/",
  filePath: "content/_index.md",
  fields: [{ name: "map", type: "list", items: { type: "string" } }]
};

// .stackbit/models/prep.ts
var Prep = {
  name: "Prep",
  type: "page",
  urlPath: "/prep",
  filePath: "content/prep/index.md",
  fields: [
    { name: "type", type: "string", required: true, hidden: true },
    { name: "title", type: "string", required: true, hidden: true },
    { name: "description", type: "string" },
    { name: "emoji", type: "string", required: false, default: "\u{1F916}" },
    { name: "weight", type: "number", required: false, hidden: true },
    { name: "menu", type: "list", items: { type: "string" } },
    { name: "menu_level", type: "list", items: { type: "string" }, hidden: true },
    {
      name: "blocks",
      type: "list",
      required: false,
      items: {
        type: "object",
        fields: [
          { name: "name", type: "string", required: true },
          { name: "src", type: "string", required: true },
          { name: "caption", type: "string", required: false },
          { name: "time", type: "number", required: false }
        ]
      }
    }
  ]
};
var Prep1 = {
  name: "Prep1",
  type: "page",
  urlPath: "/weeks/1/prep",
  filePath: "content/weeks/1/prep/index.md",
  fields: [
    { name: "type", type: "string", required: true, hidden: true },
    { name: "title", type: "string", required: true, hidden: true },
    { name: "description", type: "string" },
    { name: "emoji", type: "string", required: false, default: "\u{1F916}" },
    { name: "weight", type: "number", required: false, hidden: true },
    { name: "menu", type: "list", items: { type: "string" } },
    { name: "menu_level", type: "list", items: { type: "string" }, hidden: true },
    {
      name: "blocks",
      type: "list",
      required: false,
      items: {
        type: "object",
        fields: [
          { name: "name", type: "string", required: true },
          { name: "src", type: "string", required: true },
          { name: "caption", type: "string", required: false },
          { name: "time", type: "number", required: false }
        ]
      }
    }
  ]
};

// .stackbit/models/success.ts
var Success = {
  name: "Success",
  type: "page",
  urlPath: "/success",
  filePath: "content/success/index.md",
  fields: [
    { name: "type", type: "string", required: true, hidden: true },
    { name: "title", type: "string", required: true, hidden: true },
    { name: "description", type: "string" },
    { name: "emoji", type: "string", required: false, default: "\u{1F916}" },
    { name: "menu", type: "list", items: { type: "string" } },
    { name: "menu_level", type: "list", items: { type: "string" }, hidden: true }
  ]
};
var Success1 = {
  name: "Success1",
  type: "page",
  urlPath: "/weeks/1/success",
  filePath: "content/weeks/1/success/index.md",
  fields: [
    { name: "type", type: "string", required: true, hidden: true },
    { name: "title", type: "string", required: true, hidden: true },
    { name: "description", type: "string" },
    { name: "emoji", type: "string", required: false, default: "\u{1F916}" },
    { name: "menu", type: "list", items: { type: "string" } },
    { name: "menu_level", type: "list", items: { type: "string" }, hidden: true }
  ]
};

// .stackbit/models/weeks.ts
var WeeksHome = {
  name: "WeeksHome",
  type: "page",
  urlPath: "/weeks/",
  filePath: "content/weeks/_index.md",
  fields: [
    {
      name: "type",
      type: "string",
      required: true,
      default: "WeeksHome",
      hidden: true
    },
    { name: "title", type: "string", required: true, hidden: true },
    { name: "description", type: "string" },
    { name: "emoji", type: "string", required: false, default: "\u{1F916}" }
  ]
};
var Week1Home = {
  name: "Week1Home",
  type: "page",
  urlPath: "/weeks/1/",
  filePath: "content/weeks/1/_index.md",
  fields: [
    { name: "type", type: "string", required: true, hidden: true },
    { name: "title", type: "string", required: true, hidden: true },
    { name: "description", type: "string" },
    { name: "emoji", type: "string", required: false, default: "\u{1F916}" }
  ]
};

// .stackbit/models/agenda.ts
var Agenda1 = {
  name: "Agenda1",
  type: "page",
  urlPath: "/weeks/1/agenda",
  filePath: "content/weeks/1/agenda/index.md",
  fields: [
    { name: "noRegister", type: "boolean", required: true },
    { name: "type", type: "string", required: true, hidden: true },
    { name: "title", type: "string", required: true, default: "My New Page" },
    { name: "description", type: "string" },
    { name: "emoji", type: "string", required: false, default: "\u{1F916}" },
    { name: "weight", type: "number", required: false },
    {
      name: "blocks",
      type: "list",
      required: false,
      items: {
        type: "object",
        fields: [
          { name: "name", type: "string", required: true },
          { name: "src", type: "string", required: true },
          { name: "caption", type: "string", required: false },
          { name: "time", type: "number", required: false }
        ]
      }
    }
  ]
};

// .stackbit/models/slides.ts
var Slides1 = {
  name: "Slides1",
  type: "page",
  urlPath: "/weeks/1/slides/",
  filePath: "weeks/1/slides/_index.md",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "description", type: "string", required: false },
    { name: "weight", type: "number", required: false },
    { name: "emoji", type: "string", required: false },
    {
      name: "menu_level",
      type: "list",
      required: false,
      items: { type: "string" },
      hidden: true
    },
    {
      name: "outputs",
      type: "list",
      required: false,
      items: { type: "string" },
      hidden: true
    }
  ]
};
var Slides1Partial = {
  name: "Slides1Partial",
  type: "object",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "description", type: "string", required: false },
    { name: "weight", type: "number", required: true }
  ]
};

// .stackbit/models/coursework.ts
var Coursework1 = {
  name: "Coursework1",
  type: "page",
  urlPath: "/weeks/1/coursework/",
  filePath: "content/weeks/1/coursework/index.md",
  fields: [
    { name: "type", type: "string", required: true, hidden: true },
    { name: "title", type: "string", required: true, default: "My New Page" },
    { name: "description", type: "string" },
    { name: "emoji", type: "string", required: false, default: "\u{1F916}" },
    { name: "backlog", type: "string", required: true },
    { name: "backlog_filter", type: "string", required: false }
  ]
};

// .stackbit/models.ts
var models = {
  Base,
  Home,
  Prep,
  Success,
  WeeksHome,
  Week1Home,
  Prep1,
  Agenda1,
  Slides1,
  Slides1Partial,
  Coursework1,
  Success1
};

// stackbit.config.ts
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "hugo",
  nodeVersion: "20",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/Users/lim/CYF/Repos/Course-DLP/website",
      contentDirs: ["content"],
      models: [
        models.Base,
        models.Home,
        models.Prep,
        models.Success,
        models.WeeksHome,
        models.Week1Home,
        models.Prep1,
        models.Agenda1,
        models.Slides1,
        models.Slides1Partial,
        models.Coursework1,
        models.Success1
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "static",
        uploadDir: "uploads",
        publicPath: "/"
      }
    })
  ],
  devCommand: "npm run start:dev"
});
//# sourceMappingURL=stackbit.config.QQ7DMTKO.cjs.map
