import { Button } from "@mantine/core"
import { observer } from "mobx-react"
import { TabType, gstate } from "./state"
import { styled } from "@linaria/react"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px
`

export const TabsButtons = observer(() => {
    const iframeSaved = gstate.iframeSaved

    const setTab = (tab: TabType) => () => {
        if (!iframeSaved && !confirm("Данные не сохранены! Уверены что хотите покинуть  iframe?")) {
            return;
        }
        gstate.setIframeSaved(true)
        gstate.setTab(tab)
    }

    return <Wrapper>
        <Button onClick={setTab("first")}>Tab 1</Button>
        <Button onClick={setTab("iframe")}>Iframe</Button>
        <Button onClick={setTab("second")}>Tab 3</Button>
    </Wrapper>
})