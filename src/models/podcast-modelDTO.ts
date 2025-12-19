import { PodcastModel } from "./podcast-model";

export interface PodCastModelDTO {
    statusCode: number;
    body: PodcastModel[];
}