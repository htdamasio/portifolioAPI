import { Field, ObjectType } from "type-graphql"
import { TechnologiesModel } from "./technologies-model";

@ObjectType({ description: "Type of object to be consumed for the Projects" })
export class ProjectsModel {
    @Field()
    date: Date;

    @Field()
    title: String;

    @Field()
    github: String;

    @Field()
    external: String;

    @Field(type => [TechnologiesModel])
    tech: TechnologiesModel[];

    @Field()
    company: String;

    // have a showInProjects boolean that will be used to filter information
}