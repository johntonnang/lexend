import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type DesignLanguageContainerType = {
  designLanguageText?: string;
  designPracticesText?: string;
  chairText?: string;

  /** Style props */
  propJustifyContent?: Property.JustifyContent;
  propWidth?: Property.Width;
};

const DesignLanguageContainer: FunctionComponent<
  DesignLanguageContainerType
> = ({
  designLanguageText,
  designPracticesText,
  chairText,
  propJustifyContent,
  propWidth,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
    };
  }, [propJustifyContent]);

  const lexendsDesignLanguageStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="flex flex-col items-start justify-center gap-[64px] text-left text-29xl text-black font-body-b1"
      style={frameDivStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[32px]">
        <div
          className="relative tracking-[-0.07em] inline-block w-[388px]"
          style={lexendsDesignLanguageStyle}
        >
          {designLanguageText}
        </div>
        <div className="relative text-5xl leading-[120%] font-light inline-block w-[423px]">
          {designPracticesText}
        </div>
      </div>
      <button className="cursor-pointer py-4 px-16 bg-[transparent] rounded-31xl box-border h-[72px] flex flex-row items-center justify-center border-[4px] border-solid border-brown">
        <div className="relative text-5xl tracking-[0.15em] font-medium font-clash-grotesk text-brown text-left">
          {chairText}
        </div>
      </button>
    </div>
  );
};

export default DesignLanguageContainer;
