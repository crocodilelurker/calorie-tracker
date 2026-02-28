import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-amber-500">
      <div className="flex flex-col p-2">
        <div className="flex flex-row justify-center gap-3 mt-3">
          <div className="bg-green-400 h-fit w-fit border-2 border-black p-2 rounded-xl text-[20px] font-bold">
            Calorie Tracker
          </div>
        </div>
        <div className="flex flex-row justify-center gap-3 mt-3">
          <div className="underline text-[18px] font-semibold">
            By Swagat sahu
          </div>
        </div>
      </div>
    </div>
  );
}
