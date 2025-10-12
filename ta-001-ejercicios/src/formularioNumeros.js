function FormularioNumeros(propiedades) {
    return (
        <form onSubmit={propiedades.onSumar}>
                <p>Ingrese su primer valor:
                    <input type="text" name="valor1"/>
                </p>
                <p>Ingrese su segundo valor:
                    <input type="text" name="valor2"/>
                </p>
                <input type='submit' value='Sumar'/>
            </form>
    );            
}

export default FormularioNumeros;