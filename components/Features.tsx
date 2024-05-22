import Image from "next/image";

export default function Features() {
  return (
    <div className="w-full h-full px-4 py-4">
      <div className="flex flex-col items-center">
        <p className="py-5 w-full font-light text-center text-2xl">
          Moonki is your go-to community for online growth systems
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
            <p className="text-center text-[18px] text-blue-700 py-3 font-normal">
              Curated Community
            </p>
            <p className="text-center text-[14px] pb-3">
              It doesn’t have to be lonely at the top. Community is a
              foundational component of our entire system. Connect with fellow
              entrepreneurs, learn, and level up together.
            </p>
          </div>
          <div className="flex-flex-col px-5 py-5 border border-neutral-200 rounded-md">
            <div className="flex items-center justify-center">
              <Image
                src="/Goals.png"
                alt="goals image"
                width={251}
                height={181}
              />
            </div>
            <p className="text-center text-[18px] text-blue-500 py-3 font-normal">
              Gain Massive Clarity
            </p>
            <p className="text-center text-[14px] pb-3">
              Get clear on your goals, identify your perfect niche, and
              determine the steps you need to take to make your vision a
              reality.
            </p>
          </div>
          <div className="flex-flex-col px-5 py-5 border border-neutral-200 rounded-md">
            <div className="flex items-center justify-center">
              <Image
                src="/Social.png"
                alt="lead generation image"
                width={251}
                height={181}
              />
            </div>
            <p className="text-center text-[18px] text-blue-500 py-3 font-normal">
              Lead Generation & Conversion
            </p>
            <p className="text-center text-[14px] pb-3">
              Feast or famine is a thing of the past. Leverage proven lead
              generation and conversion systems that print money while you
              sleep.
            </p>
          </div>
          <div className="flex-flex-col px-5 py-5 border border-neutral-200 rounded-md">
            <div className="flex items-center justify-center">
              <Image
                src="/Experts.png"
                alt="illustration of experts"
                width={251}
                height={181}
              />
            </div>
            <p className="text-center text-[18px] text-blue-500 py-3 font-normal">
              Expert Guidance
            </p>
            <p className="text-center text-[14px] pb-3">
              Eliminate any guesswork with real-time feedback from successful
              founders that have been there before.
            </p>
          </div>
          <div className="flex-flex-col px-5 py-5 border border-neutral-200 rounded-md">
            <div className="flex items-center justify-center">
              <Image
                src="/Community.png"
                alt="illustration of community"
                width={251}
                height={181}
              />
            </div>
            <p className="text-center text-[18px] text-blue-500 py-3 font-normal">
              Raving Fans
            </p>
            <p className="text-center text-[14px] pb-3">
              Build an audience of raving fans with a proven content creation
              system. Maximize your reach and impact.
            </p>
          </div>
          <div className="flex-flex-col px-5 py-5 border border-neutral-200 rounded-md">
            <div className="flex items-center justify-center">
              <Image
                src="/PlugAndPlay.png"
                alt="illustration of plug and play systems"
                width={251}
                height={181}
              />
            </div>
            <p className="text-center text-[18px] text-blue-500 py-3 font-normal">
              Plug & Play Systems
            </p>
            <p className="text-center text-[14px] pb-3">
              A founder’s most valuable asset is their time. Implement systems
              that maximize efficiency and automate tasks - and remove yourself
              from operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
