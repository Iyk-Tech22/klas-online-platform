import React from "react";
import Link from "next/link";

interface CallToActionProps {
  heading: String
  paragraph: String
  buttonText: String
}

const CallToAction = ({heading, paragraph, buttonText} : CallToActionProps) => {
  return (
    <section className="container mb-[160px]">
      <div>
        <div className="py-[50px] text-center max-w-[1000px] my-0 mx-auto px-[24px] md:py-[120px] flex flex-col items-center gradient rounded-[18px]">
          <div className="mb-[40px]">
            <h1 className="font-bold md:text-5xl mb-4 md:leading-[62px] text-[28px] leading-[36px] text-white">
              {heading}
            </h1>
            <p className="md:text-2xl text-gray-300 leading-[24px] text-base">
             {paragraph}
            </p>
          </div>
          <Link
            className="md:text-[20px] font-medium rounded-[8px] py-[14px] px-[28px] text-brand-purple-100 md:leading-[28px] md:py-[16px] md:px-[50px] bg-white"
            href="/login"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
