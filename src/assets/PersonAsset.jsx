import { RxPerson } from "react-icons/rx";

export default function PersonAsset({ color }) {
  return (
    <div className="w-12 h-12 flex justify-center items-center">
      <RxPerson size={20} color={color} />
    </div>
  );
}
