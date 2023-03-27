import { useForm } from "react-hook-form";
import "./Programadores.css"
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export function Programadores() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [programadores, setProgramadores] = useState({});

    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmitProgramadores(data) {
        setProgramadores(data);
        setShow(true);
    }

    return (
        <div className="programadores">
            <h1>Cadastro de Programadores</h1>
            <form onSubmit={handleSubmit(onSubmitProgramadores)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control {...register("nome", { required: true, maxLength: 255 })} />
                    {errors.nome && <Alert variant="danger" className="py-1 mt-2">Nome inválido!</Alert>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control {...register("email", { required: true, maxLength: 255, pattern: patternEmail })} />
                    {errors.email && <Alert variant="danger" className="py-1 mt-2">E-mail inválido!</Alert>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control {...register("telefone")} />
                    {errors.telefone && <Alert variant="danger" className="py-1 mt-2">Telefone inválido!</Alert>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control {...register("estado", { required: true, maxLength: 255 })} />
                    {errors.estado && <Alert variant="danger" className="py-1 mt-2">Estado inválido!</Alert>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control {...register("cidade", { required: true, maxLength: 255 })} />
                    {errors.cidade && <Alert variant="danger" className="py-1 mt-2">Cidade inválida!</Alert>}
                </Form.Group>
                <Form.Label>Interesses</Form.Label>
                <Form.Group className="mb-3" controlId="back">
                    <Form.Check type="checkbox" label="Back-end" {...register("back")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="front">
                    <Form.Check type="checkbox" label="Front-end" {...register("front")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                    <Form.Check type="checkbox" label="Mobile-end" {...register("mobile")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nível de experiência</Form.Label>
                    <Form.Select {...register("nivel", { required: true, maxLength: 255 })}>
                        <option>Júnior</option>
                        <option>Pleno</option>
                        <option>Sênior</option>
                    </Form.Select>
                    {errors.nivel && <Alert variant="danger" className="py-1 mt-2">Nível de experiência inválido!</Alert>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Portfólio</Form.Label>
                    <Form.Control {...register("portfolio")} />
                    {errors.portfolio && <Alert variant="danger" className="py-1 mt-2">Endereço do portfólio inválido!</Alert>}
                </Form.Group>
                <Form.Label>Habilidades</Form.Label>
                <Form.Group className="mb-3" controlId="html">
                    <Form.Check type="checkbox" label="HTML" {...register("html")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="css">
                    <Form.Check type="checkbox" label="CSS" {...register("css")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="js">
                    <Form.Check type="checkbox" label="JavaScript" {...register("js")} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Formação acadêmica</Form.Label>
                    <Form.Control {...register("academico")} />
                    {errors.academico && <Alert variant="danger" className="py-1 mt-2">Formação acadêmica inválida!</Alert>}
                </Form.Group>
                <Button variant="dark">Enviar</Button>
            </form>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Informações do Dev</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>{programadores.nome}</li>
                        <li>{programadores.email}</li>
                        <li>{programadores.telefone}</li>
                        <li>{programadores.estado}</li>
                        <li>{programadores.cidade}</li>
                        <li>{programadores.nivel}</li>
                        <li>{programadores.academico}</li>
                        <li>{programadores.portfolio}</li>
                        <li>
                            Habilidades
                            <ul>
                                <li>{programadores.js ? "Possuo" : "Não possuo"} habilidade em JavaScript</li>
                                <li>{programadores.html ? "Possuo" : "Não possuo"} habilidade em HTML</li>
                                <li>{programadores.css ? "Possuo" : "Não possuo"} habilidade em CSS</li>
                            </ul>
                        </li>
                        <li>
                            Interesses
                            <ul>
                                <li>{programadores.back ? "Possuo" : "Não possuo"} interesse em Back-End</li>
                                <li>{programadores.front ? "Possuo" : "Não possuo"} interesse em Front-End</li>
                                <li>{programadores.mobile ? "Possuo" : "Não possuo"} interesse em Mobile</li>
                            </ul>
                        </li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

<form>


</form>