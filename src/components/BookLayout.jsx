import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const BookLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={"/books/1"}>Book 1</Link>
          </li>
          <li>
            <Link to={"/books/2"}>Book 2</Link>
          </li>
          <li>
            <Link to={"/books/new"}>New Book</Link>
          </li>
        </ul>
      </div>
      <div>{<Outlet context={{ name: "hello" }} />}</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
};

export default BookLayout;
