import {StackbitConfig} from "@stackbit/sdk";
import {Home} from "./models/home";
import {Prep} from "./models/prep";
import {Success} from "./models/success";

export const models: StackbitConfig["models"] = {
  Home,
  Prep,
  Success,
};
