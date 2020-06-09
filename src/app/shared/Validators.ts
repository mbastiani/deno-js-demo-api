import * as validator from "https://deno.land/x/validator/mod.ts";

const isNumeric = (data: string) => {
    return validator.isNumeric(data);
}

export { isNumeric }