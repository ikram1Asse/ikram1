import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

const Somme1 = () => {
    const[a, setA]= useState(Math.floor(Math.random()*101));
    const[b, setB]= useState(Math.floor(Math.random()*101));
    return(
        <h1> {a} + {b} = {a + b} </h1>
    );
}
export default Somme1;


// Somme 2 :

// const Somme2 = () => {
//     var[a, SetA] = useState(null);
//     var[b, SetB] = useState(null);
//     var[s, SetS] = useState(null);
//     const handleCalcul = () => {
//         setS(parseFloat(a) + parseFloat(b));
//     }
//     return(
//         <>
//             <input type="number" value={a} onChange={(e) => {setA(e.target.value)}}/> +
//             <input type="number" value={b} onChange={(e) => {setB(e.target.value)}}/> =
//             <input type="text" value={s} disabled/> 
//             <button type="button" onClick={handleCalcul}>calc</button>
//         </>
//     );
// }

// export default Somme2;

































