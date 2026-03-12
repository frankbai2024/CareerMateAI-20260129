import Image from "next/image";
import logo from "./assets/logo@2x.png";
const Header = () => {
  return (
    // base=4,32就是：内边距8
    <div className="fixed p-8 bg-white left-0 right-0 top-0">
      <Image src={logo} alt="CareerAI LOGO" width={184} height={24} />

    </div>
  )
}

export default Header;