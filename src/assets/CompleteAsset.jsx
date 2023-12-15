import Completed from "./png/complete.png";

export default function CompleteAsset() {
  return (
    <div className="h-10 w-10 flex flex-col justify-center items-center">
      <h2 className="text-[10px] text-pink-500">미션완료</h2>
      <img src={Completed} alt="Completed" className="" />
    </div>
  );
}
