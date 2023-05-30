import requestGet from "../requestGet"
import { useEffect, useState } from "react"

export default function Details ({info}) {
    const [isLoading, setIsLoading] = useState(true)
    const [detail, setDetail] = useState();
    const {id, name} = info 

    const loading = async () => {
        const response = await requestGet(process.env.REACT_APP_USEEFFECT_URL + `/${id}.json`)
        setDetail(response)
        setIsLoading(false);
    }

    useEffect(() => { loading() }, [])

    return (
        <div className="card" style={{width: '18rem'}}>
            {isLoading ? <div>Loading...</div> : 
            <><img src={detail.avatar} className="card-img-top" alt="..." /><div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div><div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{detail.details.city}</li>
                            <li className="list-group-item">{detail.details.company}</li>
                            <li className="list-group-item">{detail.details.position}</li>
                        </ul>
                    </div></>
            }
        </div>
    )
}