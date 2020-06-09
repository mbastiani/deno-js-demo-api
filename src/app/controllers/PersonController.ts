import * as ResultCreator from "../shared/ResultCreator.ts"
import { IPerson } from "../models/PersonModel.ts"
import db from "../database/Database.ts"

const addPerson = async (context: any) => {
    const body = await context.request.body()
    const person: IPerson = body.value

    var insertId = await db.persons.insertOne(person);
    person._id = insertId;
    return ResultCreator.ok(context, person);
}

const updatePerson = async (context: any) => {
    let person: IPerson | undefined = await db.persons.findOne({ _id: { "$oid": context.params.id } });
    if (!person)
        return ResultCreator.notFound(context, "Person not found");

    const body = await context.request.body()
    const updateInfos = body.value

    const { modifiedCount } = await db.persons.updateOne({ _id: { "$oid": context.params.id } }, { $set: updateInfos });
    if (!modifiedCount)
        return ResultCreator.error(context, "Error updating person");

    return ResultCreator.noContent(context);
}

const getPersons = async (context: any) => {
    var persons: Array<IPerson> = await db.persons.find();

    return ResultCreator.ok(context, persons);
}

const getPerson = async (context: any) => {
    let person: IPerson | undefined = await db.persons.findOne({ _id: { "$oid": context.params.id } });

    return ResultCreator.ok(context, person);
}

const deletePerson = async (context: any) => {
    let person: IPerson | undefined = await db.persons.findOne({ _id: { "$oid": context.params.id } });
    if (!person)
        return ResultCreator.notFound(context, "Person not found");

    const deleteCount = await db.persons.deleteOne({ _id: { "$oid": context.params.id } });
    if (!deleteCount)
        return ResultCreator.error(context, "Error deleting person");

    return ResultCreator.noContent(context);
}

export { addPerson, updatePerson, deletePerson, getPersons, getPerson }