import Search from "../component/search";
import List from "../component/cocktails_list";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Cocktails";
  }, []);
  return (
    <section>
      <Search />
      <List />
    </section>
  );
}
