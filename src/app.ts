import * as http from "http"
import { getListEpisodes, filterEpisode } from "./controller/podcast-controller"
import { Routes } from "./routes/routes"
import { HttpMethods } from "./utils/http-methods"

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]

    if (request.method === HttpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response)
    }

    if (request.method === HttpMethods.GET && baseUrl === Routes.EPISODE) {
        await filterEpisode(request, response)
    }
}