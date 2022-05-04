function ProjectList({ cardList, filtred }) {
    return (<div className="list">{cardList.filter((f) => {
        if (filtred === "All") {
            return true
        }
        return f.category === filtred
    }).map((item, key) => <img src={item.img} key={item.img + key} />)}</div>)
}
export default ProjectList