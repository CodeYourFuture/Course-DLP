// stackbit.config.ts
import {defineStackbitConfig} from "@stackbit/types";
import {GitContentSource} from "@stackbit/cms-git";
import {models} from "./.stackbit/models/";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "hugo",
  nodeVersion: "20",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
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
        models.Success1,
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "static",
        uploadDir: "uploads",
        publicPath: "/",
      },
    }),
  ],
  devCommand: "npm run start:dev",
});
