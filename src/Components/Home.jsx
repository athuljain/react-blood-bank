import { Link,useNavigate } from "react-router-dom";

export default function Home() {
    const nav=useNavigate()
    return (
      <div>
        <h2>Home</h2>
        <button onClick={(()=>nav('/donate'))}>Donate</button>
        <button onClick={(()=>nav('/recieve'))}>Receive</button>
        <Link to={'/register'}>Register</Link>
      </div>
    );
  }
  





