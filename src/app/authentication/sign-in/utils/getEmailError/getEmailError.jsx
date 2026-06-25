import getError from "../../../utils/getError";
import { isEmpty } from "validator";

const getEmailError = (email) =>
  getError(email, [
    {
      match: (value) => isEmpty(value),
      message: "Please enter your email",
    },
  ]);

export default getEmailError;
