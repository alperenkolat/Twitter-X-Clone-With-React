import Button from "~/component/Button";
import Premium from "./premium";
import Search from "./search";
import Topics from "~/layouts/main/rightbar/topics";

import Footer from "~/layouts/main/rightbar/footer";
import WhoFollow from "./who-follow";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
      <WhoFollow />
      <Footer />
    </aside>
  );
}
