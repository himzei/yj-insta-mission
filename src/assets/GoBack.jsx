import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function GoBack() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div
      onClick={handleClick}
      className="w-10 h-10 flex justify-center items-center bg-gray-900 rounded-full cursor-pointer"
    >
      <MdArrowBackIosNew color="white" size="20" />
    </div>
  );
}
