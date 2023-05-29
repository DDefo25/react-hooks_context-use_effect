import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { useEffect, useState, useRef } from "react";
import requestGet from './requestGet'
import List from './components/List';
import Details from './components/Details';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [showDetail, setShowDetail] = useState(false)
  const detailedInfo = useRef();

  const handlerClick = (item) => {
    detailedInfo.current = item;
    setShowDetail(true);
  }

  const loading = async () => {
    const data = await requestGet(process.env.REACT_APP_USEEFFECT_URL + '/users.json');
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => { loading() }, []);

  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col">
          {isLoading ? <div>Loading...</div> : <List list={data} onClick={handlerClick}/>}
        </div>
        <div className="col">
          {!showDetail && <Details info={detailedInfo.current} />}
        </div>
      </div>
    </div>
  );
}

export default App;
