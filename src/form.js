 function Formulario({message, showMessage, calcular, occurrences, duration}) {
    let formulario = <form>
        <div className="row">
        <h4 className="title">
            Insira um número
            inteiro k e calcule o número de inteiros positivos n menores que k, para os quais
            n e n + 1 têm o mesmo número de divisores positivos.
        </h4>

        </div>
        <div className="row">
            <div className="col-10">
                <input className="form-control" 
                        id="numero"
                        name="numero" 
                        type="number" 
                        placeholder="Número"
                        />
                {
                showMessage?<div id="message" className="alert alert-danger" >{message}</div>:<div></div>
                }
            </div>
            <div className="col-2 btn-full-width" >
                <input type="button" 
                        className="btn btn-success" 
                        value="Calcular"
                        onClick={calcular} />
            </div>
        </div>
        <span>Resultado: </span><span className="occurrences">{occurrences}</span>
        <br />
        <span>Duração: </span><span className="duration">{duration}</span>

    </form>

    return( formulario );
 }

 export default Formulario;
