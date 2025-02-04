import { BaseFilterOptions, FilterOptions } from '../cardinal-sdk-ts.mjs';
import { Topic } from '../model/Topic.mjs';
interface TopicFiltersFactory {
    allTopicsForDataOwner(dataOwnerId: string): BaseFilterOptions<Topic>;
    allTopicsForSelf(): FilterOptions<Topic>;
    byParticipant(participantId: string): FilterOptions<Topic>;
}
export declare const TopicFilters: TopicFiltersFactory;
export {};
