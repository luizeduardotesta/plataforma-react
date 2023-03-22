import { Container, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export function Id() {
    return (
        <div className="id">
            <h1>ID</h1>
            <Container>
                <Button variant="link">
                    <Link to="/usuarios/3245/perfil">Perfil</Link>
                </Button>
                <Outlet />
            </Container>
        </div>
    );
}