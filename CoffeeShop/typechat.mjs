import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createLanguageModel, createJsonTranslator } from 'typechat'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const model = createLanguageModel(process.env)
//const schema = await fs.readFile(path.join(__dirname, "coffeeShopSchema.ts"), "utf8")
const schema = await fs.readFile(path.join(__dirname, process.argv[2]), "utf8")

const translator = createJsonTranslator(model, schema, process.argv[4])

const response = await translator.translate(process.argv[3])
if (!response.success) {
    console.log(response.message)
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
