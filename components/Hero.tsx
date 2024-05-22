import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-full px-4 py-4">
      <div className="flex flex-col items-center pt-20">
        <h1 className="w-3/4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 leading-[40px] text-center">
          Upscale your online business
        </h1>
        <p className="py-5 w-3/4 font-light text-center">
          Get proven systems to grow your audience and revenue
        </p>
        <button className="bg-blue-700 rounded-md px-3 py-1 text-[14px] text-white">
          Join now
        </button>
        <p className="py-5 font-light text-[14px] text-center">
          Join 107,000+ founders and get instant access to the 50 Systems to
          Generate $1M Per Month guide
        </p>
      </div>
      <div className="my-5 grid grid-cols-3 gap-3 px-4 py-4 bg-neutral-100 rounded-md">
        <Image
          src="/CompanyGoodwell.png"
          alt="Goodwell logo"
          width={90}
          height={40}
        />
        <Image
          src="/CompanyKintsugi.png"
          alt="Kintsugi logo"
          width={90}
          height={40}
        />
        <Image
          src="/CompanyLightspeed.png"
          alt="Lightspeed logo"
          width={90}
          height={40}
        />
        <Image
          src="/CompanyPowersurge.png"
          alt="Powersurge logo"
          width={90}
          height={40}
        />
        <Image
          src="/CompanyLuckycharm.png"
          alt="gLuckycharm logo"
          width={90}
          height={40}
        />
        <Image
          src="/CompanyPeregrin.png"
          alt="Peregrin logo"
          width={90}
          height={40}
        />
        <Image
          src="/CompanyRailspeed.png"
          alt="Railspeed logo"
          width={90}
          height={40}
        />
        <Image
          src="/CompanyVisionwork.png"
          alt="Visionwork logo"
          width={90}
          height={40}
        />
        <Image
          src="/CompanyWarpspeed.png"
          alt="Warpspeed logo"
          width={90}
          height={40}
        />
      </div>
    </div>
  );
}
