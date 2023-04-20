import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "@utils/firebase";
import HeadComp from "@components/HeadComp";
import Logo from "@assets/letter.svg";
import Google from "@assets/google.svg";

export default function Login() {
    const logIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <Container>
            <HeadComp title="Login | " />
            <LoginContainer>
                <h1>LOGIN TO ACHAT</h1>
                <Logodiv />
                <Button onClick={logIn} variant="outlined">
                    <Googlediv />
                    Login with Google
                </Button>
            </LoginContainer>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.75rem -0.25rem rgba(0, 0, 0, 0.7);
    min-width: 200px;
    margin: 0 1rem;

    h1 {
        margin: 0;
        text-align: center;
    }

    @media (max-width: 700px) {
        padding: 2rem 2rem;

        h1 {
            font-size: 1.75rem;
        }
    }
`;

const Logodiv = styled(Logo)`
    width: 7rem;
    height: 7rem;
    margin: 1.5rem 0;
`;

const Googlediv = styled(Google)`
    margin-right: 0.5rem;
`;
