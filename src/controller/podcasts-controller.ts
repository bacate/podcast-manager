import { IncomingMessage, ServerResponse } from "http"
import { serviceListEpisodes } from "../services/list-episodes-service"
import { serviceFilterPodcast } from "../services/filter-podcast-service"

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes()

    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(content))
}

export const filterEpisode = async (req: IncomingMessage, res: ServerResponse) => {
    const content = await serviceFilterPodcast("1")
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(content))

}
