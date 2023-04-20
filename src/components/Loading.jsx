import { Circle } from "better-react-spinkit";
import Logo from "@assets/letter.svg";

export default function Loading() {
    return (
        <center
            style={{ display: "grid", placeItems: "center", height: "100vh" }}
        >
            <div>
                <Logo
                    alt="Logo"
                    style={{ marginBottom: "1rem", height: "7rem" }}
                />
                <Circle color="#555" size={"3rem"} />
            </div>
        </center>
    );
}
