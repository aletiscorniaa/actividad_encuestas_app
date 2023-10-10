const Elegir = ({ opciones }) => {
    return (
        <ul>
        {opciones.map((opcion, index) => (
            <li key={index}>
                {opcion}
            </li>
        ))}
    </ul>
    )
}

export default Elegir;