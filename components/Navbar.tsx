import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full px-4 py-4 fixed bg-white border-b border-neutral-300">
      <div className="flex flex-row items-center justify-between bg-white px-3 py-3">
        <Image
          src="/Moonki-logo.png"
          alt="moonki logo"
          width={80}
          height={80}
        />
        <div className="text-[14px]">Menu</div>
      </div>
    </div>
  );
}
