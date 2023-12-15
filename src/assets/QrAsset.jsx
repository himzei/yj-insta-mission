import Qr from "./svg/qrscan.svg";
export default function QrAsset() {
  return (
    <div className="w-12 h-12">
      <img src={Qr} alt="qr code scan" />
    </div>
  );
}
