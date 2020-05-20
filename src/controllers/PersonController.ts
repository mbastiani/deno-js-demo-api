import * as ResultCreator from "../shared/ResultCreator.ts"
import { IPerson } from "../models/PersonModel.ts"
import db from "../database/db.ts"

const addPerson = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body()
    const person: IPerson = body.value

    var insertId = await db.persons.insertOne(person);
    person._id = insertId;
    return ResultCreator.createOkResult(response, person);
}

const updatePerson = async ({ params, request, response }: { params: { id: string }; request: any; response: any }) => {
    let person: IPerson | undefined = await db.persons.findOne({ _id: { "$oid": params.id } });
    if (!person)
        return ResultCreator.createNotFoundResult(response, "Person not found");

    const body = await request.body()
    const updateInfos = body.value

    const { modifiedCount } = await db.persons.updateOne({ _id: { "$oid": params.id } }, { $set: updateInfos });
    if (!modifiedCount)
        return ResultCreator.createErrorResult(response, "Error updating person");

    return ResultCreator.createNoContentResult(response);
}

const getPersons = async ({ request, response }: { request: any; response: any }) => {
    var persons: Array<IPerson> = await db.persons.find();
    
    return ResultCreator.createOkResult(response, persons);
}

export { addPerson, getPersons, updatePerson }