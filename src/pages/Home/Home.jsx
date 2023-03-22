import { Container, Button } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

export function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <Container>
                <Button variant="link">
                    <Link to="/produtos">Produtos</Link>
                </Button>
                <Button variant="link">
                    <Link to="/info">Info</Link>
                </Button>
                <Button variant="link">
                    <Link to="/vendas">Vendas</Link>
                </Button>
                <Outlet />
            </Container>
        </div>
    );
}