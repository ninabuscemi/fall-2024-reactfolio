const styles = {
  innerWidth: 'w-full', // Removed max-width for full-width container

  paddings: 'sm:p-8 xs:p-8 px-6 py-12', // Slightly reduced padding
  xPaddings: 'sm:px-12 px-6', // Adjust horizontal padding to give more room
  yPaddings: 'sm:py-16 py-8', // Adjust vertical padding to ensure the content doesn't feel cramped
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  paddingX: 'sm:px-10 px-4', // Adjust horizontal padding for hero
  paddingY: 'sm:py-12 py-8', // Adjust vertical padding for hero
  padding: 'sm:px-12 px-4 sm:py-12 py-8',

  heroHeadText:
    'font-black text-eerieBlack lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] sm:leading-[75px] mt-5 mx-auto text-right sm:mb-4 mb-2', // Adjusted bottom margin for spacing

  heroSubText:
    'text-eerieBlack font-medium lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[45px] sm:leading-[40px] leading-[30px] mx-auto text-right mt-4 sm:mb-6 mb-4', // Adjusted top/bottom margins and line height
  sectionHeadText:
    'text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins',
  sectionHeadTextLight:
    'text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins',
  sectionSubText:
    'sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins',
  sectionSubTextLight:
    'sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins',
};

export { styles };