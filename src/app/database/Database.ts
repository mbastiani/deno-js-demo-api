import { MongoClient, Database, Collection } from "https://deno.land/x/mongo/mod.ts";

class DB {
  public client: MongoClient;
  public database: Database;
  constructor(public dbName: string, public dbUrl: string) {
    this.client = new MongoClient();
    this.client.connectWithUri(dbUrl);
    this.database = this.client.database(dbName);
  }
  get persons():Collection {
    return this.database.collection("persons");
  }
}

const dbUrl = Deno.env.get("ENV_DB_URL") || "mongodb://localhost:27017"; 
const dbName = Deno.env.get("ENV_DB_NAME") || "deno_demo";
const db = new DB(dbName, dbUrl);

export default db;