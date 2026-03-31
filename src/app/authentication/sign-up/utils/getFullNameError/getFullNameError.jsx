import getError from "../../../utils/getError";
import { isEmpty } from "validator";
const getFullNameError = (fullName) =>
  getError(fullName, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your full name",
    },
  ]);

export default getFullNameError;
