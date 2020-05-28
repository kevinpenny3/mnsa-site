import React from "react"
import { TeamProvider } from "../Team/TeamProvider";
import { PlayerProvider } from "../Player/PlayerProvider";

export default props => {
    return (
        <>
            <TeamProvider>
                <PlayerProvider>
                    {props.children}
                </PlayerProvider>
            </TeamProvider>
        </>
    );
};