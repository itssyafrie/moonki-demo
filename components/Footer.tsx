import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-10 px-6 py-16 bg-neutral-900">
      <div className="flex flex-col gap-y-5">
        <div className="text-white text-[18px] font-extrabold px-3">MOONKI</div>
        <div className="flex flex-col gap-y-3 text-[14px] text-neutral-100 font-light">
          <div className="hover:bg-blue-700 hover:rounded-md flex justify-between py-3 px-3">
            <p>About Us</p>
            <Image
              src="/chevron-right.svg"
              alt="about us"
              width={24}
              height={24}
            />
          </div>
          <div className="hover:bg-blue-700 hover:rounded-md flex justify-between py-3 px-3">
            <p>Services</p>
            <Image
              src="/chevron-right.svg"
              alt="about us"
              width={24}
              height={24}
            />
          </div>
          <div className="hover:bg-blue-700 hover:rounded-md flex justify-between py-3 px-3">
            <p>Pricing</p>
            <Image
              src="/chevron-right.svg"
              alt="about us"
              width={24}
              height={24}
            />
          </div>
          <div className="hover:bg-blue-700 hover:rounded-md flex justify-between py-3 px-3">
            <p>Our Team</p>
            <Image
              src="/chevron-right.svg"
              alt="about us"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex flex-row gap-x-3 mx-3 pt-10 pb-3 text-[12px] text-neutral-200 justify-between font-light">
          <div className="hover:text-blue-700">Twitter</div>
          <div className="hover:text-blue-700">LinkedIn</div>
          <div className="hover:text-blue-700">YouTube</div>
          <div className="hover:text-blue-700">Instagram</div>
          <div className="hover:text-blue-700">TikTok</div>
        </div>
      </div>
    </div>
  );
}
