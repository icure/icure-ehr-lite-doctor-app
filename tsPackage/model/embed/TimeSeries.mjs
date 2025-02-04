// auto-generated file
export class TimeSeries {
    constructor(partial) {
        this.fields = [];
        this.samples = [];
        this.min = [];
        this.max = [];
        this.mean = [];
        this.median = [];
        this.variance = [];
        if ('fields' in partial && partial.fields !== undefined)
            this.fields = partial.fields;
        if ('samples' in partial && partial.samples !== undefined)
            this.samples = partial.samples;
        if ('min' in partial && partial.min !== undefined)
            this.min = partial.min;
        if ('max' in partial && partial.max !== undefined)
            this.max = partial.max;
        if ('mean' in partial && partial.mean !== undefined)
            this.mean = partial.mean;
        if ('median' in partial && partial.median !== undefined)
            this.median = partial.median;
        if ('variance' in partial && partial.variance !== undefined)
            this.variance = partial.variance;
    }
}
//# sourceMappingURL=TimeSeries.mjs.map