import * as ResultCreator from "../shared/ResultCreator.ts"
import * as CepService from "../services/ViaCep.ts"
import * as Validator from "../shared/Validators.ts"

const getAddress = async (context: any) => {
    try {

        const { cep } = context.params;

        if (!cep || cep.length != 8)
            return ResultCreator.badRequest(context, "Cep deve ter 8 caracteres");

        if (!Validator.isNumeric(cep))
            return ResultCreator.badRequest(context, "Cep deve conter somente números");

        const result = await CepService.getAddress(cep);
        return ResultCreator.ok(context, result);
    } catch (error) {
        return ResultCreator.error(context, error.message);
    }
}

export { getAddress }