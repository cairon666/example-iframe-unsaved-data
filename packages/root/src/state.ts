import {makeAutoObservable} from "mobx"
export type TabType = "first" | "second" | "iframe"

class GlobalState {
    public iframeSaved: boolean = true

    public setIframeSaved(data: boolean) {
        this.iframeSaved = data
    }

    public tab: TabType = "first"

    public setTab = (tab: TabType) => {
        this.tab = tab
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export const gstate = new GlobalState()