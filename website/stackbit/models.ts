import {StackbitConfig} from "@stackbit/sdk";
import {Home} from "./models/home";
import {Prep, Prep1} from "./models/prep";
import {Success, Success1} from "./models/success";
import {WeeksHome, Week1Home} from "./models/weeks";
import {Agenda1} from "./models/agenda";
import {Slides1, Slides1Partial} from "./models/slides";
import {Coursework1} from "./models/coursework";

export const models: StackbitConfig["models"] = {
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
  Success1,
};
