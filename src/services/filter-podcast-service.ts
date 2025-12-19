import { podcastRepository } from "../repositories/podcasts-repository"
import { PodCastModelDTO } from "../models/podcast-modelDTO"

export const filterPodcastService = async (podcastName: string | undefined): Promise<PodCastModelDTO> => {
    let responseFormat: PodCastModelDTO = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await podcastRepository(queryString)

    responseFormat.statusCode = data.length !== 0 ? responseFormat.statusCode = 200 : responseFormat.statusCode = 204

    responseFormat.body = data
    return responseFormat

}