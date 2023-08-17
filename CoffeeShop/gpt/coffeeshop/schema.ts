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

export type Product = BakeryProducts | LatteDrinks | EspressoDrinks | CoffeeDrinks;

export interface BakeryProducts {
    type: 'BakeryProducts';
    name: 'apple bran muffin' | 'blueberry muffin' | 'lemon poppy seed muffin' | 'bagel';
    options?: (BakeryOptions | BakeryPreparations)[];
}

export interface LatteDrinks {
    type: 'LatteDrinks';
    name: 'cappuccino' | 'flat white' | 'latte' | 'latte macchiato' | 'mocha' | 'chai latte';
    temperature?: 'iced' | 'warm' | 'hot' | 'extra hot'; // The default is 'hot'
    size?: 'short' | 'tall' | 'grande' | 'venti'; // The default is 'grande'
    options?: (Milks | Sweeteners | Syrups | Toppings | Caffeines | LattePreparations)[];
}

export interface EspressoDrinks {
    type: 'EspressoDrinks';
    name: 'espresso' | 'lungo' | 'ristretto' | 'macchiato';
    temperature?: 'iced' | 'warm' | 'hot' | 'extra hot'; // The default is 'hot'
    size?: 'solo' | 'doppio' | 'triple' | 'quad'; // The default is 'doppio'
    options?: (Creamers | Sweeteners | Syrups | Toppings | Caffeines | LattePreparations)[];
}

export interface CoffeeDrinks {
    type: 'CoffeeDrinks';
    name: 'americano' | 'coffee';
    temperature?: 'iced' | 'warm' | 'hot' | 'extra hot'; // The default is 'hot'
    size?: 'short' | 'tall' | 'grande' | 'venti'; // The default is 'grande'
    options?: (Creamers | Sweeteners | Syrups | Toppings | Caffeines | LattePreparations)[];
}


export interface BakeryOptions {
    type: 'BakeryOptions';
    name: 'butter' | 'strawberry jam' | 'cream cheese';
}

export interface BakeryPreparations {
    type: 'BakeryPreparations';
    name: 'warmed' | 'cut in half';
}

export interface Milks {
    type: 'Milks';
    name: 'whole milk' | 'two percent milk' | 'nonfat milk' | 'coconut milk' | 'soy milk' | 'almond milk' | 'oat milk';
}

export interface Sweeteners {
    type: 'Sweeteners';
    name: 'equal' | 'honey' | 'splenda' | 'sugar' | 'sugar in the raw' | 'sweet n low';
    optionQuantity?: OptionQuantity;
}

export interface Syrups {
    type: 'Syrups';
    name: 'almond syrup' | 'buttered rum syrup' | 'caramel syrup' | 'cinnamon syrup' | 'hazelnut syrup' | 'orange syrup' | 'peppermint syrup' | 'raspberry syrup' | 'toffee syrup' | 'vanilla syrup';
    optionQuantity?: OptionQuantity;
}

export interface Toppings {
    type: 'Toppings';
    name: 'cinnamon' | 'foam' | 'ice' | 'nutmeg' | 'whipped cream' | 'water';
}

export interface Caffeines {
    type: 'Caffeines';
    name: 'regular' | 'two thirds caf' | 'half caf' | 'one third caf' | 'decaf';
    optionQuantity?: OptionQuantity;
}

export interface LattePreparations {
    type: 'LattePreparations';
    name: 'for here cup' | 'lid' | 'with room' | 'to go' | 'dry' | 'wet';
}

export interface Creamers {
    type: 'Creamers';
    name: 'whole milk creamer' | 'two percent milk creamer' | 'one percent milk creamer' | 'nonfat milk creamer' | 'coconut milk creamer' | 'soy milk creamer' | 'almond milk creamer' | 'oat milk creamer' | 'half and half' | 'heavy cream';
}


export type OptionQuantity = 'no' | 'light' | 'regular' | 'extra' | number;
