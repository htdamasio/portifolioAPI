// import { TechnologiesModel } from '~/dtos/models/technologies-model'
import technologiesFile from '../database/technologies.json'
import jobsFile from '../database/jobs.json'
import { WorkPlacesModel } from '../dtos/models/workplaces-model'
import { TechnologiesModel } from '../dtos/models/technologies-model'

export function getTechnologies(): TechnologiesModel[] {
    let result: TechnologiesModel[] = []
    Object.entries(technologiesFile).forEach((el) => {
        let technology: TechnologiesModel = new TechnologiesModel(
            Number(el[0]),
            el[1].name,
            el[1].url
        )
        result.push(technology)
    })
    return result;
}

export function getJobs(): WorkPlacesModel[] {
    let result: WorkPlacesModel[] = []

    Object.entries(jobsFile).forEach((el, i) => {
        let job: WorkPlacesModel = new WorkPlacesModel(
            i, new Date(el[1].date), el[1].title, el[1].company, el[1].location, el[1].range, el[1].url, el[1].experience
        );
        result.push(job)
    })

    // order form most recent to older one
    result.sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
    })

    return result
}