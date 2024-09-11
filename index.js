const { select } = require("@inquirer/prompts");
const { log } = require("console");

const start = async () => {
    let count = 0
    while(true){
        
        const option = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastra meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })


        switch(option) {
            case "cadastrar" :
                console.log("vamos cadastrar");
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("vlw parceiro")
                return
                
        }
            }
    
}
start()