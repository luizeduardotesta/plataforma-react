import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from 'react-bootstrap/Alert';

export function SuperHeroi() {

    const { register, handleSubmit } = useForm();
    const [heroi, setHeroi] = useState();

    function onSubmitHeroi(heroi) {
        let cadastroHeroi = `
        Nome: ${heroi.nome}
        Poder: ${heroi.poder}
        Fraqueza: ${heroi.fraqueza}
        História: ${heroi.historia}
        `
        alert(cadastroHeroi)
    }

    return (
        <div className="superheroi">
            <h1>Cadastro de Herois</h1>
            <form onSubmit={handleSubmit(onSubmitHeroi)} noValidate>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" id="nome" {...register("nome")} /><br />

                <label htmlFor="poder">Poder</label><br />
                <input type="text" id="poder" {...register("poder")} /><br />

                <label htmlFor="fraqueza">Fraqueza</label><br />
                <input type="text" id="fraqueza" {...register("fraqueza")} /><br />

                <label htmlFor="historia">História</label><br />
                <textarea id="historia" rows={5} cols={50} {...register("historia")} /><br />

                <button type="submit">Cadastrar</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
}