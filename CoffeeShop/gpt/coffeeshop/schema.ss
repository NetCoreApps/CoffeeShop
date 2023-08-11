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
    name: {{ category.products.map(x => x.name.lower()) |> tsUnionStrings }};
{{#if !category.temperatures.isEmpty() }}
    temperature?: {{category.temperatures.map(x => x.lower()) |> tsUnionStrings}};{{category.defaultTemperature ? ` // The default is '${category.defaultTemperature.lower()}'`.raw() : ''}}
{{/if}}
{{#if !category.sizes.isEmpty() }}
    size?: {{category.sizes.map(x => x.lower()) |> tsUnionStrings}};{{category.defaultSize ? ` // The default is '${category.defaultSize.lower()}'`.raw() : ''}}
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
