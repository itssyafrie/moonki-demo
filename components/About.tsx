import Image from "next/image";

export default function About() {
  return (
    <div className="w-full px-4 py-4">
      <div className="flex flex-col items-center pt-14">
        <h1 className="w-3/4 text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 leading-[40px] text-center">
          Transforming good founders to great
        </h1>
        <p className="py-7 w-3/4 font-light text-center">
          We exist to create the worlds greatest founder community
        </p>
        <button className="bg-blue-500 rounded-md px-3 py-1 text-[14px] text-white">
          Join now
        </button>
        <p className="py-7 font-light text-2xl text-center">Our Mission</p>
        <div className="flex flex-col gap-y-5">
          <div className="flex-flex-col px-5 py-5 border border-neutral-200 rounded-md">
            <div className="flex items-center justify-center">
              <Image
                src="/christian-buehner.webp"
                alt="team up image"
                width={251}
                height={181}
              />
            </div>
            <p className="text-center text-[18px] text-blue-500 py-3 font-normal">
              Christian Buehner
            </p>
            <p className="text-center text-[14px] pb-3">
              Founder, Moonki President
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex-flex-col px-5 py-5 border border-neutral-200 rounded-md mt-11">
            <div className="flex items-center justify-center">
              <Image
                src="/christina-ditomassi.webp"
                alt="team up image"
                width={251}
                height={181}
              />
            </div>
            <p className="text-center text-[18px] text-blue-500 py-3 font-normal">
              Christina di Tomassi
            </p>
            <p className="text-center text-[14px] pb-3">
              Founder, Moonki Vice President
            </p>
          </div>
        </div>
        <p className="py-5 font-light text-[14px] text-center">
          Founder OS was born in 2021 when Christian & Christina brainstormed
          their calling in life.
        </p>
        <p className="py-5 font-light text-[14px] text-center">
          Amidst the Red Rocks in Sedona, this led to the pursuit of helping
          founders, growing a community of 2 million, and building automations
          to put businesses on autopilot - and bring more fun to the founder
          journey.
        </p>
        <div className="flex flex-col">
          <p className="py-7 font-light text-2xl text-center">Our Milestones</p>
          <div className="flex flex-row items-center justify-between px-5 py-3">
            <div className="w-1/2 text-3xl text-blue-500 font-extrabold">
              3423
            </div>
            <div className="w-1/2 text-[14px]">
              Founders transformed through our products
            </div>
          </div>
          <div className="flex flex-row items-center justify-between px-5 py-3">
            <div className="w-1/2 text-3xl text-blue-500 font-extrabold">
              120X
            </div>
            <div className="w-1/2 text-[14px]">
              Average reported ROI of Founder OS Program
            </div>
          </div>
          <div className="flex flex-row items-center justify-between px-5 py-3">
            <div className="w-1/2 text-3xl text-blue-500 font-extrabold">
              $20M
            </div>
            <div className="w-1/2 text-[14px]">
              Average revenue per Mastermind member
            </div>
          </div>
        </div>
        <p className="pt-14 pb-14 font-light text-2xl text-center">
          Our Values
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/magic.svg"
            alt="lead generation image"
            width={90}
            height={90}
          />
        </div>
        <p className="pt-5 font-normal text-[16px] text-center">
          Make Magic Possible
        </p>
        <p className="pt-2 pb-14 font-light text-[14px] text-center">
          We create exceptional founder experiences
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/diamond.svg"
            alt="lead generation image"
            width={90}
            height={90}
          />
        </div>
        <p className="pt-5 font-normal text-[16px] text-center">
          Obsess Over Quality
        </p>
        <p className="pt-2 pb-14 font-light text-[14px] text-center">
          We go above and beyond to help founders
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/beach.svg"
            alt="lead generation image"
            width={90}
            height={90}
          />
        </div>
        <p className="pt-5 font-normal text-[16px] text-center">Have Fun</p>
        <p className="pt-2 pb-14 font-light text-[14px] text-center">
          We connect and enjoy achieving mastery
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/robot.svg"
            alt="lead generation image"
            width={90}
            height={90}
          />
        </div>
        <p className="pt-5 font-normal text-[16px] text-center">Automate</p>
        <p className="pt-2 pb-14 font-light text-[14px] text-center">
          We evolve our systems to grow on autopilot
        </p>
      </div>
    </div>
  );
}
