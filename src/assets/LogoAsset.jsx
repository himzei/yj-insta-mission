import Logo from "./png/logo.png";
export default function LogoAsset() {
  return (
    <div className="w-28 flex justify-center items-center">
      <img src={Logo} alt="logo" />
    </div>
  );
}
