export declare class TimeSeries {
    fields: Array<string>;
    samples: Array<Array<number>>;
    min: Array<number>;
    max: Array<number>;
    mean: Array<number>;
    median: Array<number>;
    variance: Array<number>;
    constructor(partial: Partial<TimeSeries>);
}
