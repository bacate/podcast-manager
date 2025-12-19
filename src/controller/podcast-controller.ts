import { IncomingMessage, ServerResponse } from "http"
import { listEpisodesService } from "../services/list-episodes-service"
import { filterPodcastService } from "../services/filter-podcast-service"
import { StatusCode } from "../utils/status-code"
import { ContentType } from "../utils/content-type"
import { PodCastModelDTO } from "../models/podcast-modelDTO"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodCastModelDTO = await listEpisodesService()

    res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON })
    res.write(JSON.stringify(content.body))
    res.end()
}

export const filterEpisode = async (req: IncomingMessage, res: ServerResponse) => {
    const content: PodCastModelDTO = await filterPodcastService(req.url)

    res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON })
    res.write(JSON.stringify(content.body))
    res.end()
}