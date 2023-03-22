import { usuarios } from "../../data/usuarios"
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap"


export function Perfil() {

    let { id } = useParams();
    const usuario = usuarios.find(usuario => {
        return usuario.id === Number(id);
    });

    return (
        <div className="perfil">
            <h2>Perfil de {usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade}</span><br />
            <Button variant="dark"><Link to={`/usuarios`}>Voltar</Link></Button>
        </div>
    );
}