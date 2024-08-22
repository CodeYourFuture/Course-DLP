// stackbit.config.ts
import {defineStackbitConfig} from "@stackbit/types";
import {GitContentSource} from "@stackbit/cms-git";
import {pageModel} from "./stackbit/page";
import {homeModel} from "./stackbit/home";
import {slideModel, slideSectionModel} from "./stackbit/slides";
import {agendaOneModel} from "./stackbit/agenda";
import {weeksAllModel, weeksOneModel} from "./stackbit/weeks";
import {prepAllModel, prepOneModel} from "./stackbit/prep";
import {successAllModel, successOneModel} from "./stackbit/success";
import {courseworkOneModel} from "./stackbit/coursework";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "hugo", // replace with your SSG name
  nodeVersion: "22",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        pageModel,
        homeModel,
        slideModel,
        slideSectionModel,
        agendaOneModel,
        weeksAllModel,
        weeksOneModel,
        prepAllModel,
        prepOneModel,
        successAllModel,
        successOneModel,
        courseworkOneModel,
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "static",
        uploadDir: "uploads",
        publicPath: "/",
      },
    }),
  ],
});
