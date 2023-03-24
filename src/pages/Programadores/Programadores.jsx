import { useForm } from "react-hook-form";
import "./Programadores.css"
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

export function Programadores() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [programadores, setProgramadores] = useState();

    function onSubmitProgramadores(data) {
        setProgramadores(data);
    }

    return (
        <div className="programadores">
            <h1>Cadastro de Programadores</h1>
            <form onSubmit={handleSubmit(onSubmitProgramadores)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control {...register("nome")} />
                    {errors.nome && <span className="invalid">Digite um nome válido!</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control {...register("email")} />
                    {errors.email && <span className="invalid">Digite um email válido!</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control {...register("telefone")} />
                    {errors.telefone && <span className="invalid">Digite um telefone válido!</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control {...register("estado")} />
                    {errors.estado && <span className="invalid">Digite um estado válido!</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control {...register("cidade")} />
                    {errors.cidade && <span className="invalid">Digite um cidade válido!</span>}
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
                    <Form.Select {...register("nivel")}>
                        <option>Júnior</option>
                        <option>Pleno</option>
                        <option>Sênior</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Portfólio</Form.Label>
                    <Form.Control {...register("portfolio")} />
                    {errors.portfolio && <span className="invalid">Digite um portfolio válido!</span>}
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
                    {errors.academico && <span className="invalid">Digite uma formação academica válida!</span>}
                </Form.Group>
                <Button variant="dark">Enviar</Button>
            </form>


            {
                programadores &&
                < div className="modal show" style={{ display: 'block', position: 'initial' }}>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Cadastro</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>
                                Nome completo: {programadores.nome}<br />
                                E-mail: {programadores.email}<br />
                                Telefone: {programadores.telefone}<br />
                                Cidade de residência: {programadores.cidade}<br />
                                Estado de residência: {programadores.estado}<br />
                                Áreas de Interesse: {programadores.back}<br />
                                Nível de experiência: {programadores.nivel}<br />
                                Portfólio: {programadores.portfolio}<br />
                                Habilidades técnicas: {programadores.html}<br />
                                Formação acadêmica: {programadores.academico}<br />
                            </p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div >
            }
        </div>
    );
}

<form>


</form>