import Button from "~/component/Button";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <div className="mb-4 bg-[#16181c] rounded-2xl border-solid  overflow-hidden ">
        <aside className="gap-3  grid px-4 py-3">
          <div>
            <span className=" text-[20px]  font-extrabold">
              Premium'a Abone Ol
            </span>
          </div>
          <div>
            <span className=" text-[15px]  leading-5 font-bold ">
              Yeni özellikleri açmak için abone ol ve uygun olman durumunda
              reklam geliri payı kazan
            </span>
          </div>
          <div className="flex mx-0">
            <Button>Abone ol</Button>
          </div>
        </aside>
      </div>
    </aside>
  );
}
