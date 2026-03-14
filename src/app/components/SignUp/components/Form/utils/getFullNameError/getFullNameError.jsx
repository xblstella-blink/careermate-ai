import getError from "../getError";
import { isEmpty } from "validator";
const fullNameError = (fullName) =>
  getError(fullName, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your full name",
    },
  ]);

export default fullNameError;
