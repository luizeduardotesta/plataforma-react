import { Container, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export function Usuarios() {
    return (
        <div className="usuarios">
            <h1>Usuários</h1>
            <Container>
                <Button variant="link">
                    <Link to="/usuarios/3245">ID</Link>
                </Button>
                <Outlet />
            </Container>
        </div>
    );
}