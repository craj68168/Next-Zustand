import type { NextPage } from "next";
import { useEffect } from "react";
import Input from "../components/Input";
import People from "../components/People";
import {useStore} from "../store/authStore";

const Home: NextPage = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode); // if you use destructure and get all of it in one then its not a good practise coz anytime anything changes in your state this component will re render but just having this specific selector this component will re render if one of this selector changes
  const dark = useStore((state) => state.dark);

  useEffect(() => {
    if (dark) {
      document.querySelector("body")?.classList.add("dark")
    }else{
      document.querySelector("body")?.classList.remove("dark")
    }
  }, [dark]);

  return (
    <div>
      <button onClick={toggleDarkMode} style={{margin:"10px"}}>Toggle Dark Mode</button>
      <Input />
      <People />
    </div>
  );
};

export default Home;
