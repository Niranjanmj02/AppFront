import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading } from "../../components";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Niranjan's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-end w-full bg-white-A700">
          <div className="flex flex-row md:flex-col justify-start items-start w-full gap-10 mx-auto md:gap-5 md:px-5 max-w-[1349px]">
            <div className="flex flex-col items-start justify-start h-[624px] w-[623px] md:w-full mt-[168px] md:mt-0">
              <a href="#" className="ml-[167px] md:ml-5">
                <Text size="4xl" as="p" className="!font-righteous text-center">
                  Sign up
                </Text>
              </a>
              <div className="h-px w-[32%] mt-[-4px] ml-[157px] md:ml-5 bg-blue_gray-700_02" />
              <div className="flex flex-col items-start justify-start w-full mt-[77px]">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-end justify-start w-full">
                    <div className="flex flex-row justify-end w-full">
                      <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                        <div className="h-[65px] w-full relative">
                          <div className="h-[43px] w-[52%] right-0 top-0 m-auto rounded-tr-[21px] rounded-bl-[22px] rounded-tl-[22px] rounded-br-[21px] bg-white-A700 absolute" />
                          <div className="flex flex-row justify-start w-[75%] bottom-[1%] left-0 m-auto absolute">
                            <div className="flex flex-col items-center justify-start w-full gap-[9px]">
                              <div className="flex flex-row justify-between w-full">
                                <Text size="3xl" as="p" className="mb-0.5 !font-righteous text-center">
                                  Name
                                </Text>
                                <div className="flex flex-row justify-start items-center gap-[18px]">
                                  <Text size="3xl" as="p" className="!text-gray-400_03 !font-righteous text-center">
                                    enter your name
                                  </Text>
                                  <Img
                                    src="images/img_vector_black_900_01_26x23.svg"
                                    alt="vector_one"
                                    className="h-[26px]"
                                  />
                                </div>
                              </div>
                              <div className="h-px w-[99%] bg-black-900_01" />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-[76%] md:w-full ml-1 md:ml-0">
                          <div className="flex flex-col items-center justify-start w-full gap-[19px]">
                            <div className="flex flex-row sm:flex-col justify-center items-center w-full sm:gap-5">
                              <Heading size="3xl" as="h1" className="!font-inter text-center">
                                Phone{" "}
                              </Heading>
                              <Text
                                size="3xl"
                                as="p"
                                className="ml-[46px] md:ml-5 !text-gray-400_02 !font-righteous text-center"
                              >
                                enter phone number
                              </Text>
                              <Img
                                src="images/img_ic_baseline_phone.svg"
                                alt="icbaseline_one"
                                className="h-[24px] ml-5 sm:ml-0"
                              />
                            </div>
                            <div className="h-px w-[98%] bg-black-900_01" />
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-[75%] md:w-full ml-[5px] md:ml-0">
                          <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                            <div className="flex flex-row justify-between items-start w-full">
                              <Heading size="3xl" as="h2" className="mt-px !font-inter text-center">
                                Email
                              </Heading>
                              <div className="flex flex-row justify-between items-start w-auto gap-[58px]">
                                <Text size="3xl" as="p" className="mb-2 !text-gray-400_02 !font-righteous text-center">
                                  enter email
                                </Text>
                                <Img
                                  src="images/img_vector_black_900_01_16x20.svg"
                                  alt="vector_three"
                                  className="h-[16px] mt-[30px]"
                                />
                              </div>
                            </div>
                            <div className="h-px w-[98%] bg-black-900_01" />
                          </div>
                        </div>
                        <div className="flex flex-row justify-between items-center w-[68%] md:w-full">
                          <Heading size="3xl" as="h3" className="!font-inter text-center">
                            Password
                          </Heading>
                          <Text size="3xl" as="p" className="!text-gray-400_02 !font-righteous text-center">
                            enter password
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_black_900_01_14x24.svg"
                      alt="vector_five"
                      className="h-[14px] mt-[-10px] mr-[152px] md:mr-5 z-[1]"
                    />
                  </div>
                </div>
                <div className="h-px w-[75%] mt-[11px] ml-[5px] md:ml-0 bg-black-900_01" />
                <Button
                  color="red_800"
                  size="6xl"
                  className="mt-[72px] ml-[106px] md:ml-5 sm:px-5 font-righteous min-w-[297px] rounded-[42px] sm:min-w-full"
                >
                  Signup
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-[51%] md:w-full pt-[174px] pr-14 md:pt-5 md:pr-5 bg-gray-800">
              <Img
                src="images/img_ion_fast_food_outline.svg"
                alt="ionfastfood_one"
                className="h-[512px] w-[512px] mt-[338px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
