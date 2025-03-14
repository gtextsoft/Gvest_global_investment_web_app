import React from "react";

interface PageHeaderProps {
  title: string;
  height?: string;
  bgGradient?: string;
  padding?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  height = "",
  bgGradient = "bg-gradient-to-b from-white to-[#FFF0F0] to-lonestar-100",
  padding = "pt-24 md:pt-23 pb-14",
}) => {
  return (
    <section
      className={`${height} grid items-center justify-center font-montserrat gap-20 md:gap-y-4 gap-x-4 px-5 lg:px-10 mx-auto ${padding} ${bgGradient} w-full`}
    >
      <div className="w-full flex justify-center items-center max-w-[1400px]">
        <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
      </div>
    </section>
  );
};

export default PageHeader;
