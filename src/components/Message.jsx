import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import moment from "moment";
import { auth } from "@utils/firebase";

export default function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth);

    const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

    return (
        <Container>
            <TypeOfMessage>
                {message.message}
                <Timestamp>
                    {message.timestamp
                        ? moment(message.timestamp).format("LT")
                        : "..."}
                </Timestamp>
            </TypeOfMessage>
        </Container>
    );
}

const Container = styled.div``;

const MessageElement = styled.p`
    width: fit-content;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    min-width: 4rem;
    padding-bottom: 1.5rem;
    position: relative;
    text-align: right;
    word-break: break-word;
`;

const Sender = styled(MessageElement)`
    margin-left: auto;
    background-color: #dcf8c6;
`;

const Receiver = styled(MessageElement)`
    text-align: left;
    background-color: whitesmoke;
`;

const Timestamp = styled.span`
    color: gray;
    padding: 0.5rem;
    font-size: 0.675rem;
    position: absolute;
    bottom: 0;
    text-align: right;
    right: 0;
`;
