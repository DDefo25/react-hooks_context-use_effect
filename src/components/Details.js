import requestGet from "../requestGet"
import { useEffect, useState } from "react"

export default function Details ({info}) {
    const {id, name} = info
    const [isLoading, setIsLoading] = useState(true)
    const [detail, setDetail] = useState();
    const loading = () => {
        const detailedInfo = requestGet(process.env.REACT_APP_USEEFFECT_URL + `/${id}.json`)
        setDetail(detailedInfo)
        setIsLoading(false);
    }

    useEffect(() => { loading() }, [])
    const {avatar, details: {city, company, position}} = detail
    return ( !isLoading &&
        <div className="card" style="width: 18rem;">
            <img src={avatar} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{city}</li>
                    <li className="list-group-item">{company}</li>
                    <li className="list-group-item">{position}</li>
                </ul>
            </div>
        </div>
    )
}