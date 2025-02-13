import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect } from "react";
//import axios from "axios" ;

function Timer() {
  var [cp, setCp]= useState(0);
  var [time, setTime]=useState("00 : 00 : 00");
  //covertion de n secodes en format hh : mm : ss
  function changeFormat (n) {
    var rh = n % 3600;
    var h = (n - rh)/3600;
    var s = rh % 60 ;
    var m = (rh - s)/60;
    return ((h<=9 ? "0" + h:h) + ":" + ( m<=9 ? "0" + m:m) + ":" (s<=9 ? "0" +s:s));
  }
  const handleClick = () => {
    setCp(++cp);
  }
  useEffect( () => {
    document.title = "Computer :" + cp;
  }, [cp])

  // changement de DOM reel
  useEffect( () => {
    var s = 0
    setInterval( () =>{
      s++;
      setTime(changeFormat(s));
    }, 1000)
  }, [])
  //var[data, setData] = useState ([]) ;
  /*const fetchData = () => {
    axios.get("https://api.themoviedb.org..." )
    .then(reponse => {
      setData(reponse.data.results);
    })
    .catch(err => {
      console.log(err)
    })
  }*/
  //utilisation des resourses reseures reseaux a l' aide du protocoles http(s)
  var[isLoading, setIsloading] = useState(0);
  useEffect( () => {
    setIsloading(1);
  }, [isLoading])


  return (
    <>
      <h1>Utilisation des effects de : useEffect </h1>
      <div className='offset-4 col-4'>
          <div className='row'> copteur est : {cp}</div>
          <button className='form-control btn btn-sm btn-outline-danger' onClick={handleClick}>+</button>
          <div className='row'>
               Timer : {time}
          </div>
          <div className='row'>
              
          </div>
      </div>
    </>

  );
}

export default Timer;

