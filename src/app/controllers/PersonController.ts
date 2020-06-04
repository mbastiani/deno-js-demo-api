import * as ResultCreator from "../shared/ResultCreator.ts"
import { IPerson } from "../models/PersonModel.ts"
import db from "../database/db.ts"

const addPerson = async (context: any) => {
    const body = await context.request.body()
    const person: IPerson = body.value

    var insertId = await db.persons.insertOne(person);
    person._id = insertId;
    return ResultCreator.createOkResult(context, person);
}

const updatePerson = async (context: any) => {
    let person: IPerson | undefined = await db.persons.findOne({ _id: { "$oid": context.params.id } });
    if (!person)
        return ResultCreator.createNotFoundResult(context, "Person not found");

    const body = await context.request.body()
    const updateInfos = body.value

    const { modifiedCount } = await db.persons.updateOne({ _id: { "$oid": context.params.id } }, { $set: updateInfos });
    if (!modifiedCount)
        return ResultCreator.createErrorResult(context, "Error updating person");

    return ResultCreator.createNoContentResult(context);
}

const getPersons = async (context: any) => {
    var persons: Array<IPerson> = await db.persons.find();

    return ResultCreator.createOkResult(context, persons);
}

const getPerson = async (context: any) => {
    let person: IPerson | undefined = await db.persons.findOne({ _id: { "$oid": context.params.id } });

    return ResultCreator.createOkResult(context, person);
}

const deletePerson = async (context: any) => {
    let person: IPerson | undefined = await db.persons.findOne({ _id: { "$oid": context.params.id } });
    if (!person)
        return ResultCreator.createNotFoundResult(context, "Person not found");

    const deleteCount = await db.persons.deleteOne({ _id: { "$oid": context.params.id } });
    if (!deleteCount)
        return ResultCreator.createErrorResult(context, "Error deleting person");

    return ResultCreator.createNoContentResult(context);
}

export { addPerson, updatePerson, deletePerson, getPersons, getPerson }