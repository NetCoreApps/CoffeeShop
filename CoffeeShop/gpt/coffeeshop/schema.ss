{{* Type Aliases *}}
{{ var coffeeTemperatures = ['Iced','Warm','Hot','Extra Hot'] }}
{{ var coffeeSizes        = ['Short','Tall','Grande','Venti'] }}
{{ var espressoSizes      = ['Solo','Doppio','Triple','Quad'] }}

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

{{ var generatedOptionTypes = [] }}
{{#each category in categories}}
export interface {{category.name}} {
    type: '{{category.name}}';
    name: {{ category.products.map(x => x.name.lower()) |> tsUnionStrings }};
{{#if coffeeTemperatures.equivalentTo(category.temperatures) }}
    temperature?: CoffeeTemperature;{{category.defaultTemperature ? `  // The default is '${category.defaultTemperature.lower()}'`.raw() : ''}}
{{else if !category.temperatures.isEmpty() }}
    temperature?: {{category.temperatures.map(x => x.lower()) |> tsUnionStrings}};{{category.defaultTemperature ? `  // The default is '${category.defaultTemperature.lower()}'`.raw() : ''}}
{{/if}}
{{#if coffeeSizes.equivalentTo(category.sizes) }}
    size?: CoffeeSize;{{category.defaultSize ? `  // The default is '${category.defaultSize.lower()}'`.raw() : ''}}
{{else if espressoSizes.equivalentTo(category.sizes) }}
    size?: EspressoSize;{{category.defaultSize ? `  // The default is '${category.defaultSize.lower()}'`.raw() : ''}}
{{else if !category.sizes.isEmpty() }}
    size?: {{category.sizes.map(x => x.lower()) |> tsUnionStrings}};{{category.defaultSize ? `  // The default is '${category.defaultSize.lower()}'`.raw() : ''}}
{{/if}}
{{#if options.count > 0}}
    options?: ({{ options.map(x => x.type) |> tsUnionTypes }})[];
{{/if}}
}

{{ var options = category.categoryOptions.map(x => optionsMap[x.optionId]) }}
{{#each option in options.where(x => !generatedOptionTypes.contains(x.type)) }}
{{ generatedOptionTypes.push(option.type) |> ignore }}
export interface {{option.type}} {
    type: '{{option.type}}';
    name: {{ option.names.map(x => x.lower()) |> tsUnionStrings }};
{{#if option.allowQuantity}}
    optionQuantity?: OptionQuantity;
{{/if}}
}
{{/each}}

{{/each}}

export type CoffeeTemperature = {{coffeeTemperatures.map(x => x.lower()) |> tsUnionStrings}};

export type CoffeeSize = {{coffeeSizes.map(x => x.lower()) |> tsUnionStrings}};

export type EspressoSize = {{espressoSizes.map(x => x.lower()) |> tsUnionStrings}};

export type OptionQuantity = {{optionQuantities.map(x => x.name.lower()) |> tsUnionStrings}} | number;
