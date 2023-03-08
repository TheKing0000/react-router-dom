import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./components/BookLayout";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"} replace>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/books"}>Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<Books />} />
          <Route path="new" element={<NewBook />} />
          <Route path=":id" element={<SingleBook />} />
        </Route>
        {/* SHARE LAYOUT BETWEEN DIFFERENT URL PATHS */}
        <Route element={<BookLayout />}>
          <Route path="/alma" element={<Books />} />
          <Route path="/korte" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
// A hard coded path az "erősebb" ha ugyan az lenne az url
export default App;
