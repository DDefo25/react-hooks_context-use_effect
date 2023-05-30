import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { useEffect, useState } from "react";
import requestGet from './requestGet'
import List from './components/List';
import Details from './components/Details';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isShowingDetail, setIsShowingDetail] = useState(false)
  const [detail, setDetail] = useState(null);

  const handlerClick = (item) => {
    setIsShowingDetail(false);
    setTimeout(() => {
      if (detail && detail.id === item.id) {
        setDetail(null)
      } else {
        setDetail(item);
        setIsShowingDetail(true);
      }
    }, 0)
  }

  const loading = async () => {
    const data = await requestGet(process.env.REACT_APP_USEEFFECT_URL + '/users.json');
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => { loading() }, []);

  return (
    <div className="container text-center">
      <div className="row align-items-top">
        <div className="col-3">
          {isLoading ? <div>Loading...</div> : <List list={data} onClick={handlerClick}/>}
        </div>
        <div className="col">
          {isShowingDetail && <Details info={detail} />}
        </div>
      </div>
    </div>
  );
}

export default App;
