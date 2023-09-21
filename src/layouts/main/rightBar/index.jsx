import Button from "~/component/Button";
import Premium from "./premium";
import Search from "./search";
import Topics from "~/layouts/main/rightbar/topics";
import Whofollow from "./whofollow";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
      <Whofollow />
    </aside>
  );
}
