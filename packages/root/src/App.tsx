import {styled} from "@linaria/react";
import { TabsButtons } from "./TabsButtons";
import { Tabs } from "./Tabs";
import { useWindowEvent } from "@mantine/hooks";
import { gstate } from "./state";
import { useEffect } from "react";
import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`

const handler = (e: BeforeUnloadEvent) => {
    if (!gstate.iframeSaved) {
        e.preventDefault() 
    }
}

export const App = observer(() => {

    useWindowEvent("message", (e: MessageEvent<boolean>) => {
        if (typeof e.data === "boolean") {
            gstate.setIframeSaved(e.data)
        }
    })

    const iframeSaved = gstate.iframeSaved
    useWindowEvent("beforeunload", handler)

    return (
        <div>
            <h1>Root app</h1>
            <Wrapper>
                <TabsButtons />
                <Tabs />
            </Wrapper>
            {iframeSaved ? <div></div> : <div>Locking</div>}
        </div>
    )
})