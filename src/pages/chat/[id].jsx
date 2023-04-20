import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@utils/firebase";
import getRecipientEmail from "@utils/getRecipientEmail";
import ChatScreen from "@components/ChatScreen";
import HeadComp from "@components/HeadComp";
import Sidebar from "@components/Sidebar";

export default function Chat({ chat, messages }) {
    const [user] = useAuthState(auth);

    return (
        <Container>
            <HeadComp
                title={`Chat with ${getRecipientEmail(chat.users, user)} | `}
            />
            <Sidebar />
            <ChatContainer>
                <ChatScreen chat={chat} messages={messages} />
            </ChatContainer>
        </Container>
    );
}

export async function getServerSideProps(context) {
    const ref = db.collection("chats").doc(context.query.id);

    const messagesRes = await ref
        .collection("messages")
        .orderBy("timestamp", "asc")
        .get();

    const messages = messagesRes.docs
        .map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        .map((messages) => ({
            ...messages,
            timestamp: messages.timestamp.toDate().getTime(),
        }));

    const chatRes = await ref.get();
    const chat = {
        id: chatRes.id,
        ...chatRes.data(),
    };

    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat,
        },
    };
}

const Container = styled.div`
    display: flex;
`;

const ChatContainer = styled.div`
    flex: 1;
    overflow: hidden;
    height: 100vh;
    min-width: 250px;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
