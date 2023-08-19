/* Options:
Date: 2023-08-19 18:30:15
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
export class Recording {
    /** @param {{id?:number,path?:string,transcript?:string,transcriptConfidence?:number,transcriptResponse?:string,createdDate?:string,transcribeStart?:string,transcribeEnd?:string,transcribeDurationMs?:number,durationMs?:number,ipAddress?:string,error?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    path;
    /** @type {?string} */
    transcript;
    /** @type {?number} */
    transcriptConfidence;
    /** @type {?string} */
    transcriptResponse;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    transcribeStart;
    /** @type {?string} */
    transcribeEnd;
    /** @type {?number} */
    transcribeDurationMs;
    /** @type {?number} */
    durationMs;
    /** @type {?string} */
    ipAddress;
    /** @type {?string} */
    error;
}
export class Chat {
    /** @param {{id?:number,request?:string,prompt?:string,chatResponse?:string,createdDate?:string,chatStart?:string,chatEnd?:string,chatDurationMs?:number,ipAddress?:string,error?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    request;
    /** @type {string} */
    prompt;
    /** @type {?string} */
    chatResponse;
    /** @type {string} */
    createdDate;
    /** @type {?string} */
    chatStart;
    /** @type {?string} */
    chatEnd;
    /** @type {?number} */
    chatDurationMs;
    /** @type {?string} */
    ipAddress;
    /** @type {?string} */
    error;
}
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
    /** @param {{id?:number,name?:string,description?:string,temperatures?:string[],defaultTemperature?:string,sizes?:string[],defaultSize?:string,imageUrl?:string,products?:Product[],categoryOptions?:CategoryOption[]}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    name;
    /** @type {string} */
    description;
    /** @type {?string[]} */
    temperatures;
    /** @type {?string} */
    defaultTemperature;
    /** @type {?string[]} */
    sizes;
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
    /** @param {{id?:number,name?:string,value?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    name;
    /** @type {number} */
    value;
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
export class PageStats {
    /** @param {{label?:string,total?:number}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    label;
    /** @type {number} */
    total;
}
export class StringsResponse {
    /** @param {{results?:string[],meta?:{ [index: string]: string; },responseStatus?:ResponseStatus}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string[]} */
    results;
    /** @type {{ [index: string]: string; }} */
    meta;
    /** @type {ResponseStatus} */
    responseStatus;
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
    /** @param {{request?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    request;
    getTypeName() { return 'CoffeeShopPrompt' }
    getMethod() { return 'POST' }
    createResponse() { return '' }
}
export class CoffeeShopPhrases {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'CoffeeShopPhrases' }
    getMethod() { return 'POST' }
    createResponse() { return new StringsResponse() }
}
export class CreateCoffeeShopPhrases {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'CreateCoffeeShopPhrases' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class CreateCoffeeShopRecognizer {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'CreateCoffeeShopRecognizer' }
    getMethod() { return 'POST' }
    createResponse() { }
}
export class CreateCoffeeShopRecording {
    /** @param {{path?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    path;
    getTypeName() { return 'CreateCoffeeShopRecording' }
    getMethod() { return 'POST' }
    createResponse() { return new Recording() }
}
export class CreateCoffeeShopChat {
    /** @param {{request?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    request;
    getTypeName() { return 'CreateCoffeeShopChat' }
    getMethod() { return 'POST' }
    createResponse() { return new Chat() }
}
export class AdminData {
    constructor(init) { Object.assign(this, init) }
    getTypeName() { return 'AdminData' }
    getMethod() { return 'GET' }
    createResponse() { return new AdminDataResponse() }
}
export class Authenticate {
    /** @param {{provider?:string,state?:string,oauth_token?:string,oauth_verifier?:string,userName?:string,password?:string,rememberMe?:boolean,errorView?:string,nonce?:string,uri?:string,response?:string,qop?:string,nc?:string,cnonce?:string,accessToken?:string,accessTokenSecret?:string,scope?:string,meta?:{ [index: string]: string; }}} [init] */
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
export class QueryRecordings extends QueryDb {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryRecordings' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class QueryChats extends QueryDb {
    /** @param {{skip?:number,take?:number,orderBy?:string,orderByDesc?:string,include?:string,fields?:string,meta?:{ [index: string]: string; }}} [init] */
    constructor(init) { super(init); Object.assign(this, init) }
    getTypeName() { return 'QueryChats' }
    getMethod() { return 'GET' }
    createResponse() { return new QueryResponse() }
}
export class CreateCategory {
    /** @param {{name?:string,description?:string,sizes?:string[],temperatures?:string[],defaultSize?:string,defaultTemperature?:string,imageUrl?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {string} */
    name;
    /** @type {string} */
    description;
    /** @type {?string[]} */
    sizes;
    /** @type {?string[]} */
    temperatures;
    /** @type {?string} */
    defaultSize;
    /** @type {?string} */
    defaultTemperature;
    /** @type {?string} */
    imageUrl;
    getTypeName() { return 'CreateCategory' }
    getMethod() { return 'POST' }
    createResponse() { return new Category() }
}
export class UpdateCategory {
    /** @param {{id?:number,name?:string,description?:string,sizes?:string[],temperatures?:string[],defaultSize?:string,defaultTemperature?:string,imageUrl?:string}} [init] */
    constructor(init) { Object.assign(this, init) }
    /** @type {number} */
    id;
    /** @type {string} */
    name;
    /** @type {string} */
    description;
    /** @type {?string[]} */
    sizes;
    /** @type {?string[]} */
    temperatures;
    /** @type {?string} */
    defaultSize;
    /** @type {?string} */
    defaultTemperature;
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

