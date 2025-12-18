import { repositoryPodcast } from "../repositories/podcasts-repository"

export const serviceFilterPodcast = async (podcastName: string) => {
    const data = await repositoryPodcast()

    return data

}