const indexController = {
    viewCadastro:(req,res) =>{
        return res.render("index")
    },
    salvarCadastro:(req,res) =>{
        console.log(req.file)
        return res.send("Dados enviados com sucesso!")
    }
}

module.exports = indexController