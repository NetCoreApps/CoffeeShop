// The following is a schema definition for ordering lattes.

export interface Cart {
    items: (LineItem | UnknownText)[];
}

// Use this type for order items that match nothing else
export interface UnknownText {
    type: 'unknown',
    text: string; // The text that wasn't understood
}

export interface LineItem {
    type: 'lineitem',
    product: Product;
    quantity: number;
}

export type Product = {{categories.map(x => x.name) |> tsUnionTypes}};

{{#each category in categories}}
{{ var options = category.categoryOptions.map(x => optionsMap[x.optionId]) }}
export interface {{category.name}} {
    type: '{{category.name}}';
    name: {{ category.skus.map(x => x.name.lower()) |> tsUnionStrings }};
{{#if !category.temperature.isEmpty() }}
    temperature?: {{category.temperature.map(x => x.lower()) |> tsUnionStrings}};
{{/if}}
{{#if !category.size.isEmpty() }}
    size?: {{category.size.map(x => x.lower()) |> tsUnionStrings}};{{category.defaultSize ? ` // The default is '${category.defaultSize.lower()}'`.raw() : ''}}
{{/if}}
{{#if options.count > 0}}
    options?: ({{ options.map(x => x.type) |> tsUnionTypes }})[];
{{/if}}
}

{{/each}}

{{#each option in options}}
export interface {{option.type}} {
    type: '{{option.type}}';
    name: {{ option.names.map(x => x.lower()) |> tsUnionStrings }};
{{#if option.allowQuantity}}
    optionQuantity?: OptionQuantity;
{{/if}}
}

{{/each}}

export type OptionQuantity = {{optionQuantities.map(x => x.name.lower()) |> tsUnionStrings}};
