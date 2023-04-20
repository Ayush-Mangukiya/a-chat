import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Avatar } from "@material-ui/core";
import { auth, db } from "@utils/firebase";
import getRecipientEmail from "@utils/getRecipientEmail";

export default function Chat({ id, users }) {
    const router = useRouter();

    const [user] = useAuthState(auth);
    const recipientEmail = getRecipientEmail(users, user);

    const [recipientSnapshot] = useCollection(
        db.collection("users").where("email", "==", recipientEmail)
    );
    const recipient = recipientSnapshot?.docs?.[0]?.data();

    const enterChat = () => {
        router.push(`/chat/${id}`);
    };

    return (
        <Container onClick={enterChat}>
            {recipient ? (
                <UserAvatar src={recipient?.photoURL} />
            ) : (
                <UserAvatar>{recipientEmail[0].toUpperCase()}</UserAvatar>
            )}
            <p>{recipientEmail}</p>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 1rem;
    word-break: break-word;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition-property: background-color, box-shadow, border;
    transition-duration: 250ms, 250ms, 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
        cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);
    transition-delay: 0ms, 0ms, 0ms;
    border-radius: 0.25rem;

    :hover,
    :focus {
        background-color: #f5f5f5;
    }
`;

const UserAvatar = styled(Avatar)`
    margin: 0.25rem;
    margin-right: 1rem;
`;
