import Image from "next/image";

export default function Team() {
  return (
    <div className="w-full h-full px-4 py-4">
      <div className="flex flex-col items-center pt-20">
        <h1 className="w-1/2 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 leading-[40px] text-center">
          By leaders, for leaders
        </h1>
        <p className="py-5 w-3/4 font-light text-center">
          Our team of experts will help you weather the stormy landscape of
          business
        </p>
        <div className="flex flex-col gap-y-5">
          <div className="flex-flex-col px-5 py-5 border border-neutral-200 rounded-md mt-11">
            <div className="flex items-center justify-center">
              <Image
                src="/Team_up.png"
                alt="team up image"
                width={251}
                height={181}
              />
            </div>
            <p className="text-center text-[18px] text-blue-500 py-3 font-normal">
              Curated Community
            </p>
            <p className="text-center text-[14px] pb-3">
              It doesnt have to be lonely at the top. Community is a
              foundational component of our entire system. Connect with fellow
              entrepreneurs, learn, and level up together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
