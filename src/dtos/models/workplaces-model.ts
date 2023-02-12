import { Field, ObjectType } from "type-graphql"

@ObjectType({ description: "Type of object to be consumed for the Workplaces" })
export class WorkPlacesModel {
    @Field()
    id: Number;

    @Field()
    date: Date;

    @Field()
    title: String;

    @Field()
    company: String;

    @Field()
    location: String;

    @Field()
    range: String;

    @Field()
    url: String;

    @Field(type => [String])
    experience: String[];

    constructor(id: Number, date: Date, title: string, company: string, location: string, range: string, url: string, experience: string[]) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.company = company;
        this.location = location;
        this.range = range;
        this.url = url;
        this.experience = experience;
    }
}