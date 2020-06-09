import axiod from "https://deno.land/x/axiod/mod.ts";

const getAddress = async (cep: string) => {
    try {
        var response = await axiod.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw Error("Cep service internal error");
    }
};

export { getAddress }