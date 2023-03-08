import { useOutletContext } from "react-router-dom";
const Books = () => {
  const { name } = useOutletContext();
  return (
    <div>
      <h1>Books : shared context : {name}</h1>
    </div>
  );
};

export default Books;
