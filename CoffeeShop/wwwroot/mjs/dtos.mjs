/* Options:
Date: 2023-08-11 15:41:26
Version: 6.101
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//AddServiceStackTypes: True
//AddDocAnnotations: True
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/

"use strict";
export class QueryBase {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {?number} */
    skip;
    /** @type {?number} */
    take;
    /** @type {string} */
    orderBy;
    /** @type {string} */
    orderByDesc;
    /** @type {string} */
    include;
    /** @type {string} */
    fields;
    /** @type {{ [index: string]: string; }} */
    meta;
}
/** @typedef T {any} */
export class QueryDb extends QueryBase {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
}
export class CategoryOption {
    /** @param {{id?:number,categoryId?:number,optionId?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    categoryId;
    /** @type {number} */
    optionId;
}
export class Category {
    /** @param {{id?:number,name?:string,description?:string,temperature?:string[],size?:string[],defaultSize?:string,imageUrl?:string,products?:Product[],categoryOptions?:CategoryOption[]}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    name;
    /** @type {string} */
    description;
    /** @type {?string[]} */
    temperature;
    /** @type {?string[]} */
    size;
    /** @type {?string} */
    defaultSize;
    /** @type {?string} */
    imageUrl;
    /** @type {Product[]} */
    products;
    /** @type {CategoryOption[]} */
    categoryOptions;
}
export class Product {
    /** @param {{id?:number,categoryId?:number,name?:string,category?:Category,cost?:number,imageUrl?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {number} */
    categoryId;
    /** @type {string} */
    name;
    /** @type {Category} */
    category;
    /** @type {number} */
    cost;
    /** @type {?string} */
    imageUrl;
}
export class Option {
    /** @param {{id?:number,type?:string,names?:string[],allowQuantity?:boolean,quantityLabel?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    type;
    /** @type {string[]} */
    names;
    /** @type {?boolean} */
    allowQuantity;
    /** @type {?string} */
    quantityLabel;
}
export class OptionQuantity {
    /** @param {{id?:number,name?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    name;
}
export class ProductOption {
    /** @param {{type?:string,name?:string,temperature?:string,size?:string,optionQuantity?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    type;
    /** @type {string} */
    name;
    /** @type {string} */
    temperature;
    /** @type {string} */
    size;
    /** @type {string} */
    optionQuantity;
}
export class ProductItem {
    /** @param {{type?:string,name?:string,options?:ProductOption[]}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    type;
    /** @type {string} */
    name;
    /** @type {ProductOption[]} */
    options;
}
export class LineItem {
    /** @param {{type?:string,product?:ProductItem,text?:string,quantity?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    type;
    /** @type {ProductItem} */
    product;
    /** @type {string} */
    text;
    /** @type {number} */
    quantity;
}
export class PageStats {
    /** @param {{label?:string,total?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    label;
    /** @type {number} */
    total;
}
export class ResponseError {
    /** @param {{errorCode?:string,fieldName?:string,message?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    errorCode;
    /** @type {string} */
    fieldName;
    /** @type {string} */
    message;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class ResponseStatus {
    /** @param {{errorCode?:string,message?:string,stackTrace?:string,errors?:ResponseError[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    errorCode;
    /** @type {string} */
    message;
    /** @type {string} */
    stackTrace;
    /** @type {ResponseError[]} */
    errors;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class Cart {
    /** @param {{items?:LineItem[]}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {LineItem[]} */
    items;
}
export class AdminDataResponse {
    /** @param {{pageStats?:PageStats[]}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {PageStats[]} */
    pageStats;
}
export class AuthenticateResponse {
    /** @param {{userId?:string,sessionId?:string,userName?:string,displayName?:string,referrerUrl?:string,bearerToken?:string,refreshToken?:string,profileUrl?:string,roles?:string[],permissions?:string[],responseStatus?:ResponseStatus,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userId;
    /** @type {string} */
    sessionId;
    /** @type {string} */
    userName;
    /** @type {string} */
    displayName;
    /** @type {string} */
    referrerUrl;
    /** @type {string} */
    bearerToken;
    /** @type {string} */
    refreshToken;
    /** @type {string} */
    profileUrl;
    /** @type {string[]} */
    roles;
    /** @type {string[]} */
    permissions;
    /** @type {ResponseStatus} */
    responseStatus;
    /** @type {{ [index: string]: string; }} */
    meta;
}
export class AssignRolesResponse {
    /** @param {{allRoles?:string[],allPermissions?:string[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string[]} */
    allRoles;
    /** @type {string[]} */
    allPermissions;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class UnAssignRolesResponse {
    /** @param {{allRoles?:string[],allPermissions?:string[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string[]} */
    allRoles;
    /** @type {string[]} */
    allPermissions;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class RegisterResponse {
    /** @param {{userId?:string,sessionId?:string,userName?:string,referrerUrl?:string,bearerToken?:string,refreshToken?:string,roles?:string[],permissions?:string[],responseStatus?:ResponseStatus,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userId;
    /** @type {string} */
    sessionId;
    /** @type {string} */
    userName;
    /** @type {string} */
    referrerUrl;
    /** @type {string} */
    bearerToken;
    /** @type {string} */
    refreshToken;
    /** @type {string[]} */
    roles;
    /** @type {string[]} */
    permissions;
    /** @type {ResponseStatus} */
    responseStatus;
    /** @type {{ [index: string]: string; }} */
    meta;
}
/** @typedef T {any} */
export class QueryResponse {
    /** @param {{offset?:number,total?:number,results?:T[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    offset;
    /** @type {number} */
    total;
    /** @type {T[]} */
    results;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
}
export class CoffeeShopSchema {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'CoffeeShopSchema' }
    getMethod() { return 'POST' }
    createResponse() { return '' }
}
export class CoffeeShopPrompt {
    /** @param {{request?:string,execute?:boolean}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    request;
    /** @type {boolean} */
    execute;
    getTypeName() { return 'CoffeeShopPrompt' }
    getMethod() { return 'POST' }
    createResponse() { return '' }
}
export class SaveCart {
    /** @param {{cart?:Cart}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {Cart} */
    cart;
    getTypeName() { return 'SaveCart' }
    getMethod() { return 'PUT' }
    createResponse() { }
}
export class GetCart {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'GetCart' }
    getMethod() { return 'GET' }
    createResponse() { return new Cart() }
}
export class AdminData {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'AdminData' }
    getMethod() { return 'GET' }
    createResponse() { return new AdminDataResponse() }
}
export class Authenticate {
    /** @param {{provider?:string,state?:string,oauth_token?:string,oauth_verifier?:string,userName?:string,password?:string,rememberMe?:boolean,errorView?:string,nonce?:string,uri?:string,response?:string,qop?:string,nc?:string,cnonce?:string,accessToken?:string,accessTokenSecret?:string,scope?:string,returnUrl?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /**
     * @type {string}
     * @description AuthProvider, e.g. credentials */
    provider;
    /** @type {string} */
    state;
    /** @type {string} */
    oauth_token;
    /** @type {string} */
    oauth_verifier;
    /** @type {string} */
    userName;
    /** @type {string} */
    password;
    /** @type {?boolean} */
    rememberMe;
    /** @type {string} */
    errorView;
    /** @type {string} */
    nonce;
    /** @type {string} */
    uri;
    /** @type {string} */
    response;
    /** @type {string} */
    qop;
    /** @type {string} */
    nc;
    /** @type {string} */
    cnonce;
    /** @type {string} */
    accessToken;
    /** @type {string} */
    accessTokenSecret;
    /** @type {string} */
    scope;
    /** @type {string} */
    returnUrl;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'Authenticate' }
    getMethod() { return 'POST' }
    createResponse() { return new AuthenticateResponse() }
}
export class AssignRoles {
    /** @param {{userName?:string,permissions?:string[],roles?:string[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string[]} */
    permissions;
    /** @type {string[]} */
    roles;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'AssignRoles' }
    getMethod() { return 'POST' }
    createResponse() { return new AssignRolesResponse() }
}
export class UnAssignRoles {
    /** @param {{userName?:string,permissions?:string[],roles?:string[],meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string[]} */
    permissions;
    /** @type {string[]} */
    roles;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'UnAssignRoles' }
    getMethod() { return 'POST' }
    createResponse() { return new UnAssignRolesResponse() }
}
export class Register {
    /** @param {{userName?:string,firstName?:string,lastName?:string,displayName?:string,email?:string,password?:string,confirmPassword?:string,autoLogin?:boolean,errorView?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    userName;
    /** @type {string} */
    firstName;
    /** @type {string} */
    lastName;
    /** @type {string} */
    displayName;
    /** @type {string} */
    email;
    /** @type {string} */
    password;
    /** @type {string} */
    confirmPassword;
    /** @type {?boolean} */
    autoLogin;
    /** @type {string} */
    errorView;
    /** @type {{ [index: string]: string; }} */
    meta;
    getTypeName() { return 'Register' }
    getMethod() { return 'POST' }
    createResponse() { return new RegisterResponse() }
}
export class QueryCategories extends QueryDb {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryCategories' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryProducts extends QueryDb {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryProducts' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryOptions extends QueryDb {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryOptions' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryOptionQuantities extends QueryDb {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryOptionQuantities' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class CreateCategory {
    /** @param {{name?:string,description?:string,defaultSize?:string,size?:string[],temperature?:string[],imageUrl?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    name;
    /** @type {string} */
    description;
    /** @type {?string} */
    defaultSize;
    /** @type {?string[]} */
    size;
    /** @type {?string[]} */
    temperature;
    /** @type {?string} */
    imageUrl;
    getTypeName() { return 'CreateCategory' }
    getMethod() { return 'POST' }
    createResponse() { return new Category() }
}
export class UpdateCategory {
    /** @param {{id?:number,name?:string,description?:string,defaultSize?:string,size?:string[],temperature?:string[],imageUrl?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?string} */
    name;
    /** @type {?string} */
    description;
    /** @type {?string} */
    defaultSize;
    /** @type {?string[]} */
    size;
    /** @type {?string[]} */
    temperature;
    /** @type {?string} */
    imageUrl;
    getTypeName() { return 'UpdateCategory' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Category() }
}
export class DeleteCategory {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteCategory' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class CreateProduct {
    /** @param {{categoryId?:number,name?:string,cost?:number,imageUrl?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    categoryId;
    /** @type {string} */
    name;
    /** @type {number} */
    cost;
    /** @type {?string} */
    imageUrl;
    getTypeName() { return 'CreateProduct' }
    getMethod() { return 'POST' }
    createResponse() { return new Product() }
}
export class UpdateProduct {
    /** @param {{id?:number,categoryId?:number,name?:string,cost?:number,imageUrl?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?number} */
    categoryId;
    /** @type {?string} */
    name;
    /** @type {?number} */
    cost;
    /** @type {?string} */
    imageUrl;
    getTypeName() { return 'UpdateProduct' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Product() }
}
export class DeleteProduct {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteProduct' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class CreateOption {
    /** @param {{type?:string,names?:string[],allowQuantity?:boolean,quantityLabel?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    type;
    /** @type {string[]} */
    names;
    /** @type {?boolean} */
    allowQuantity;
    /** @type {?string} */
    quantityLabel;
    getTypeName() { return 'CreateOption' }
    getMethod() { return 'POST' }
    createResponse() { return new Option() }
}
export class UpdateOption {
    /** @param {{id?:number,type?:string,names?:string[],allowQuantity?:boolean,quantityLabel?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    type;
    /** @type {string[]} */
    names;
    /** @type {?boolean} */
    allowQuantity;
    /** @type {?string} */
    quantityLabel;
    getTypeName() { return 'UpdateOption' }
    getMethod() { return 'PATCH' }
    createResponse() { return new Option() }
}
export class DeleteOption {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteOption' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}
export class CreateOptionQuantity {
    /** @param {{name?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    name;
    getTypeName() { return 'CreateOptionQuantity' }
    getMethod() { return 'POST' }
    createResponse() { return new OptionQuantity() }
}
export class UpdateOptionQuantity {
    /** @param {{id?:number,name?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {?string} */
    name;
    getTypeName() { return 'UpdateOptionQuantity' }
    getMethod() { return 'PATCH' }
    createResponse() { return new OptionQuantity() }
}
export class DeleteOptionQuantity {
    /** @param {{id?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    getTypeName() { return 'DeleteOptionQuantity' }
    getMethod() { return 'DELETE' }
    createResponse() { }
}

