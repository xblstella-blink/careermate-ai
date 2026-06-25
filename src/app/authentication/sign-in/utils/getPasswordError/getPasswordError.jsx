import getError from "../../../utils/getError";
import { isEmpty } from "validator";

const getPasswordError = (password) =>
  getError(password, [
    { match: (value) => isEmpty(value), message: "Please enter your password" },
  ]);

export default getPasswordError;
