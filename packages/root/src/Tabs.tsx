import { styled } from "@linaria/react";
import { observer } from "mobx-react";
import { gstate, TabType } from "./state";
import { ComponentProps, forwardRef, useEffect, useRef, useState } from "react";
import { useForceUpdate } from "@mantine/hooks";
import { Button } from "@mantine/core";


const StyledIframe = styled.iframe`
    border: 2px red solid;
`;

const FirstTab = () => {
    return (
        <div>
            <h1>First tab</h1>
        </div>
    )
}

const SecondTab = () => {
    return (
        <div>
            <h1>Second tab</h1>
        </div>
    )
}

const IframeTabs = forwardRef<HTMLIFrameElement, ComponentProps<"iframe">>((props, forwardRef) => {
    return <StyledIframe ref={forwardRef} src="http://localhost:8081" {...props} />
})


export const Tabs = observer(() => {
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const tab = gstate.tab;


    const tabMap: Record<TabType, JSX.Element> = {
        "first": <FirstTab />,
        "second": <SecondTab />,
        "iframe": <IframeTabs ref={iframeRef} />,
    }


    return <>
        {tabMap[tab]}
    </>
})
