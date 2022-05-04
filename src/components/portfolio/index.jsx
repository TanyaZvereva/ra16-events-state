import Toolbar from "./Toolbar"
import { list } from "./cardList"
import ProjectList from "./Projectlist"
import { useState } from "react"
function Portfolio() {
    const [filtred, setFiltered] = useState("All")
    return (
        <>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={filtred}
                onSelectFilter={setFiltered}
            />
            <ProjectList
                filtred={filtred}
                cardList={list}
            />
        </>
    )
}
export default Portfolio