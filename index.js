let meta = {
    value: "ler um livro por mes",
    checked: false,
    log: (info) => {
        console.log(info)
    }
    
}
meta.value = "nao eh mais um livro"
meta.log(meta.value)