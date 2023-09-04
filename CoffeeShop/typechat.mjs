import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createLanguageModel, createJsonTranslator, createProgramTranslator } from 'typechat'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const useProgram = process.argv[2].toLowerCase() === "program"
const model = createLanguageModel(process.env)
const schema = await fs.readFile(path.join(__dirname, process.argv[3]), "utf8")

let schemaName = ""
if (!useProgram) {
    const firstInterfacePos = schema.indexOf('export interface ')
    const firstTypePos = schema.indexOf('export type ')
    const endPos = schema.indexOf('{', firstInterfacePos)
    schemaName = firstInterfacePos !== -1 && firstInterfacePos < firstTypePos
        ? schema.substring(firstInterfacePos + 'export interface '.length, endPos).trim()
        : schema.substring(firstTypePos + 'export type '.length, endPos).trim()
}

const translator = useProgram
    ? createProgramTranslator(model, schema)
    : createJsonTranslator(model, schema, schemaName)

const response = await translator.translate(process.argv[4])

if (!response.success) {
    console.log(JSON.stringify({
        responseStatus: { 
            errorCode: 'Error',
            message: response.message 
        }
    }, undefined, 2))
} else {
    const cart = response.data
    console.log(JSON.stringify(cart, undefined, 2))
    /*
    if (cart.items.some(item => item.type === "unknown")) {
        console.log("I didn't understand the following:");
        for (const item of cart.items) {
            if (item.type === "unknown") {
                console.log(item.text);
            }
        }
    }
    */
}
