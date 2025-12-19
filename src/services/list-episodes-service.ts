import { PodCastModelDTO } from "../models/podcast-modelDTO"
import { podcastRepository } from "../repositories/podcasts-repository"

export const listEpisodesService = async (): Promise<PodCastModelDTO> => {
    let responseFormat: PodCastModelDTO = {
        statusCode: 0,
        body: []
    }

    const data = await podcastRepository()

    responseFormat.statusCode = data.length !== 0 ? responseFormat.statusCode = 200 : responseFormat.statusCode = 204
    responseFormat.body = data
    return responseFormat
}