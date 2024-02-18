import { styled } from "@linaria/react"
import { Button, Input } from "@mantine/core"
import { useWindowEvent } from "@mantine/hooks"
import { useEffect,  useState } from "react"

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    gap: 4px;
`



export const App = () => {
    const [saved, setSaved] = useState(true)
    
    useWindowEvent("beforeundload", () => {
        alert(13)
    })

    useEffect(() => {
        // window.parent.addEventListener("beforeunload", (e) => {
        //     if (!saved) {
        //         console.log(saved)
        //         e.preventDefault()
        //     }
        // })
        console.log(window.parent)
        window.parent.postMessage(saved, "*")
    }, [saved])

    return (
        <Wrapper>
            <Input onChange={() => setSaved(false)} />
            <Button onClick={() => setSaved(true)} disabled={saved}>{saved ? "Сохранено" : "Сохранить"}</Button>
        </Wrapper>
    )
}