import { isStrongPassword } from "validator";
import getError from "../getError";
import { isEmpty } from "validator";
const getPasswordError = (password) =>
  getError(password, [
    { match: (value) => isEmpty(value), message: "Please enter your password" },
    {
      match: (value) => !isStrongPassword(value),
      message: "Password must be at least 8 character long",
    },
  ]);

export default getPasswordError;
