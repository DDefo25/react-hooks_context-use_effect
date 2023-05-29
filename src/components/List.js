export default function List ({list, onClick}) {
    return (
        <div className="list-group">
            { list.map(el => <button type="button" className="list-group-item list-group-item-action" onClick={() => onClick(el)} key={el.id}>{el.name}</button> )}
      </div>
    )
}