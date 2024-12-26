import { useEffect,useState } from "react";
import axios from "axios"

function App() {

  const  API_URL = "http://localhost:1000/";

  const [formData, setFormData] = useState({
    user: ""
    
  });
  const [name,setName] = useState("") 

  useEffect(() => {
    const getData = async () => {
        try {
            const res = await axios.get(API_URL);
            setName(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    getData();
  }, []);

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL+"user", formData);
      console.log("Result:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">Server data - {name}
     <form onSubmit={handleSubmit}>
      <input type="text" name="user" value={formData.user} onChange={handleChange} />
      <button type="submit" name="submit"  >Submit</button>
     </form>
    </div>
  );
}

export default App;
