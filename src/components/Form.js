function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log('Usuário cadastrado com sucesso!') // Exibe no console do navegador
        alert('Usuário cadastrado com sucesso!') // Exibe um alerta na tela
    }
    return (
        <div>
            <h1>Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;