import { useForm } from "react-hook-form";
import "./Eletronicos.css"

export function Eletronicos() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmitEletronicos(data) {
        let cadastroEletronicos = `
        Marca e modelo do equipamento: ${data.marca}
        Número de série: ${data.numeroDeSerie}
        Descrição do problema: ${data.descriçãoDoProblema}
        Data de entrada: ${data.dataDeEntrada}
        Previsão de entrega: ${data.previsãoDeEntrega}
        Status: ${data.status}
        `
        alert(cadastroEletronicos)
    }

    return (
        <div className="eletronicos">
            <h1>Cadastro de Equipamentos Eletrônicos</h1>
            <form onSubmit={handleSubmit(onSubmitEletronicos)}>
                <label htmlFor="marca">Marca e modelo do equipamento</label><br />
                <input type="text" id="marca" {...register("marca", { required: true, maxLength: 255 })} /><br />
                {errors.marca && <span className="invalid">Digite uma marca válida</span>}<br />

                <label htmlFor="numeroDeSerie">Número de série</label><br />
                <input type="text" id="numeroDeSerie" {...register("numeroDeSerie", { required: true, maxLength: 255 })} /><br />
                {errors.numeroDeSerie && <span className="invalid">Digite um Número de série válido</span>}<br />

                <label htmlFor="descriçãoDoProblema">Descrição do problema</label><br />
                <input type="text" id="descriçãoDoProblema" {...register("descriçãoDoProblema", { required: true, maxLength: 255 })} step="0.01" /><br />
                {errors.descriçãoDoProblema && <span className="invalid">Digite uma Descrição do problema válida</span>}<br />

                <label htmlFor="dataDeEntrada">Data de entrada</label><br />
                <input type="text" id="dataDeEntrada" {...register("dataDeEntrada", { required: true, maxLength: 255 })} /><br />
                {errors.dataDeEntrada && <span className="invalid">Digite uma Data de entrada válida</span>}<br />

                <label htmlFor="previsãoDeEntrega">Previsão de entrega</label><br />
                <input type="text" id="previsãoDeEntrega" {...register("previsãoDeEntrega", { required: true, maxLength: 255 })} /><br />
                {errors.previsãoDeEntrega && <span className="invalid">Digite uma Previsão de entrega válida</span>}<br />

                <label htmlFor="status">Status</label><br />
                <select id="status" {...register("status", { required: true })}><br />
                    <option value="defeito1">Instalar Windows</option>
                    <option value="defeito2">Instalar mais mémoria RAM</option>
                    <option value="defeito3">Tirar Virus</option>
                    <option value="defeito4">Não liga</option>
                    <option value="defeito5">Instalar Plca de Video</option>
                </select><br />
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

<form>


</form>