import getError from "@/app/authentication/utils/getError";
import { isEmpty } from "validator";

const getFullnameError = (fullname) =>
  getError(fullname, [
    {
      match: (value) => isEmpty(value, { ignore_whitespace: true }),
      message: "Full name is required",
    },
  ]);

export default getFullnameError;
