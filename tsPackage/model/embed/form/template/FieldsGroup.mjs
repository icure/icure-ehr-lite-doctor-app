export class FieldsGroup {
    constructor(partial) {
        this.fields = undefined;
        this.$ktClass = 'com.icure.cardinal.sdk.model.embed.form.template.FieldsGroup';
        this.group = partial.group;
        if ('fields' in partial)
            this.fields = partial.fields;
    }
}
//# sourceMappingURL=FieldsGroup.mjs.map