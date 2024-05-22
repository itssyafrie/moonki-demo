import Image from "next/image";

export default function FeaturedServices() {
  return (
    <div className="my-10 mx-4">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-2xl font-light py-5">
          No fluff. Just real systems, strategies, and community.
        </h1>
        <div className="w-full flex flex-col gap-y-5">
          <div className="flex-flex-col px-5 py-5 bg-neutral-100 rounded-md mt-11">
            <p className="text-center text-[32px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 pt-3 pb-1 font-extrabold">
              Maverick
            </p>
            <p className="text-center text-[14px] pb-3">PROGRAM</p>
            <p className="text-center text-[14px] py-5">
              Proven systems for rapidly growing your brand, audience & revenue
            </p>
            <div className="flex flex-row justify-center items-center py-5">
              <button className="bg-blue-500 rounded-md px-3 py-1 text-[14px] text-white">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex-flex-col px-5 py-5 bg-neutral-100 rounded-md">
            <p className="text-center text-[32px] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 pt-3 pb-1 font-extrabold">
              Monarch
            </p>
            <p className="text-center text-[14px] pb-3">PROGRAM</p>
            <p className="text-center text-[14px] py-5">
              Get the systems and connections to become an 8-figure founder
            </p>
            <div className="flex flex-row justify-center items-center py-5">
              <button className="bg-blue-500 rounded-md px-3 py-1 text-[14px] text-white">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
