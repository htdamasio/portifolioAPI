import { Resolver } from "type-graphql";
import { Query } from "type-graphql/dist/decorators";
import { TechnologiesModel } from "../dtos/models/technologies-model";
import { WorkPlacesModel } from "../dtos/models/workplaces-model";
import { ProjectsModel } from "../dtos/models/projects-model";
import { getJobs, getTechnologies } from "../utils/resume-utils";

@Resolver()
export class ResumeResolver {
    m_arJobsData: WorkPlacesModel[];
    m_arTechnologiesData: TechnologiesModel[];

    constructor() {
        this.m_arJobsData = getJobs();
        this.m_arTechnologiesData = getTechnologies();
    }

    @Query(() => String)
    async helloWorld() {
        return 'Hello world';
    }

    // Technologies
    @Query(() => [TechnologiesModel],
        { description: "Query to get most recent utilized technologies, retrieved from github page projects + Work experiences" })
    async technologies() {
        return this.m_arTechnologiesData.filter((el, i) => i < 6);
    }

    // Places I've worked
    @Query(() => [WorkPlacesModel])
    async workPlaces() {
        return this.m_arJobsData;
    }

    // Projects
    @Query(() => [ProjectsModel])
    async projects() {
        return [];
    }
}