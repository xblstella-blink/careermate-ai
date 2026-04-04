import getError from "../../../utils/getError";
import { isEmpty } from "validator";
import isEmail from "validator/lib/isEmail";

const getEmailError = (email) =>
  getError(email, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your email",
    },
    {
      match: (value) => !isEmail(value),
      message: "Please enter a valid email address",
    },
  ]);

export default getEmailError;
