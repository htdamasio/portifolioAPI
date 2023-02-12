import { Field, ObjectType } from "type-graphql"

@ObjectType({ description: "Type of object to be consumed for the technologies" })
export class TechnologiesModel {
    @Field({ description: "Unique identifier for the technology" })
    id: number;

    @Field({ description: "Name for the technology" })
    name: String;

    @Field({ description: "Website url for the technology" })
    url: String;

    constructor(id: number, name: string, url: string) {
        this.id = id;
        this.name = name;
        this.url = url;
    }
}