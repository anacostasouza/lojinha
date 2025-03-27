function Evento() {
    function meuEvento() {
        console.log("Evento disparado!");
    }

    return (
        <>
            <p>Clique para disparar o evento</p>
            <button onClick={meuEvento}>Ativar!</button>
            
        </>)
}

export default Evento;