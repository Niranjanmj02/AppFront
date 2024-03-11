import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text } from "../../components";

export default function SubscriptionPage() {
  return (
    <>
      <Helmet>
        <title>Niranjan's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full pt-3.5 pl-3.5">
          <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[33px] p-[25px] md:px-5 sm:p-5 bg-red-800 max-w-[1537px]">
            <div className="h-[2px] w-[7%] mt-11 ml-3.5 sm:ml-0 sm:mt-0 rotate-[-180deg] bg-white-A700" />
            <Text size="6xl" as="p" className="mb-2 !text-white-A700 !font-righteous">
              Subscription
            </Text>
          </div>
          <Img
            src="images/img_rectangle_2.png"
            alt="image"
            className="w-full md:h-[47px] mt-[-4px] rounded-tr-[23px] rounded-bl-[24px] rounded-tl-[24px] rounded-br-[23px] object-cover max-w-[1537px]"
          />
          <div className="flex flex-row justify-end w-full pb-[46px] px-[46px] md:pb-5 md:px-5 bg-gradient max-w-[1537px] rounded-[50px]">
            <div className="flex flex-row justify-end w-full mb-[90px]">
              <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                <div className="h-[698px] w-[99%] md:w-full ml-4 md:ml-0 relative">
                  <div className="h-[110px] w-[27%] left-[21%] top-0 m-auto bg-red-A700_7f backdrop-opacity-[0.5] blur-[200.00px] absolute rounded-[189px]" />
                  <div className="flex flex-col items-center justify-start w-[42%] bottom-[3%] left-0 m-auto absolute">
                    <Img
                      src="images/img_rectangle_17_490x586.png"
                      alt="image_one"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                    />
                    <div className="flex flex-row justify-center w-full p-[9px]">
                      <Heading size="3xl" as="h1" className="mt-[5px] text-center !font-semibold">
                        Chicken Biriyani
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[23%] right-0 top-[13%] m-auto absolute">
                    <div className="flex flex-row justify-center w-[74%] md:w-full p-[7px]">
                      <div className="flex flex-col items-center justify-start w-[97%] mt-1">
                        <div className="h-[185px] w-[99%] md:w-full relative">
                          <Img
                            src="images/img_freepik_backgr.svg"
                            alt="freepikbackgr"
                            className="justify-center h-[177px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <div className="flex flex-col items-end justify-start w-[56%] bottom-0 left-0 m-auto absolute">
                            <Img
                              src="images/img_freepik_speech.svg"
                              alt="freepikspeech"
                              className="h-[39px] w-[39px] mr-5"
                            />
                            <Img
                              src="images/img_freepik_character_inject_33.svg"
                              alt="freepik_one"
                              className="h-[137px] mt-[-25px]"
                            />
                          </div>
                          <div className="flex flex-row justify-end items-start w-[45%] right-[6%] top-0 m-auto absolute">
                            <Img
                              src="images/img_vector_blue_gray_700_01.svg"
                              alt="vector_one"
                              className="h-[11px] mt-[45px]"
                            />
                            <Img
                              src="images/img_vector_blue_gray_700_01.svg"
                              alt="vector_three"
                              className="h-[11px] mt-[30px]"
                            />
                            <Img
                              src="images/img_vector_blue_gray_700_01_5x1.svg"
                              alt="vector_five"
                              className="h-[5px] mt-[19px] z-[1]"
                            />
                            <div className="h-[158px] w-full sm:w-full relative">
                              <Img
                                src="images/img_vector_blue_gray_700_01_158x91.svg"
                                alt="vector_seven"
                                className="justify-center h-[158px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="justify-center h-[156px] w-[97%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                <Img
                                  src="images/img_vector_blue_gray_900_01_156x88.svg"
                                  alt="vector_nine"
                                  className="justify-center h-[156px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                />
                                <div className="flex flex-row justify-start w-[33%] gap-px top-[2%] right-0 left-0 m-auto absolute">
                                  <Img
                                    src="images/img_vector_blue_gray_700_01_1x2.svg"
                                    alt="vector_eleven"
                                    className="h-px w-[2px]"
                                  />
                                  <Img
                                    src="images/img_vector_blue_gray_700_01_1x2.svg"
                                    alt="vector_thirteen"
                                    className="h-px w-[2px]"
                                  />
                                  <Img
                                    src="images/img_vector_blue_gray_700_01_1x15.svg"
                                    alt="vector_fifteen"
                                    className="h-px"
                                  />
                                  <Img
                                    src="images/img_vector_blue_gray_700_01_1x2.svg"
                                    alt="vector"
                                    className="h-px w-[2px]"
                                  />
                                  <Img
                                    src="images/img_vector_blue_gray_700_01_1x2.svg"
                                    alt="vector_nineteen"
                                    className="h-px w-[2px]"
                                  />
                                </div>
                                <div className="justify-center h-[153px] w-[96%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                                  <Img
                                    src="images/img_vector_white_a700_153x84.svg"
                                    alt="vector"
                                    className="justify-center h-[153px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <div className="flex flex-col items-center justify-start w-[92%] top-[3%] right-0 left-0 m-auto absolute">
                                    <div className="flex flex-row justify-end w-[17%] md:w-full">
                                      <div className="h-px w-px bg-blue_gray-900_01" />
                                      <div className="h-px w-px ml-px bg-blue_gray-900_01" />
                                      <div className="h-px w-px ml-px bg-blue_gray-900_01" />
                                      <div className="h-px w-px ml-px bg-blue_gray-900_01" />
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_1x3.svg"
                                        alt="vector"
                                        className="h-px ml-px z-[3]"
                                      />
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_1x2.svg"
                                        alt="vector"
                                        className="h-px w-[2px] ml-[-2px] z-[2]"
                                      />
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_1x1.svg"
                                        alt="vector"
                                        className="h-px w-px ml-[-2px] z-[1]"
                                      />
                                      <Img
                                        src="images/img_vector_1x1.svg"
                                        alt="vector"
                                        className="h-px w-px ml-[-1px]"
                                      />
                                      <div className="flex flex-col items-start justify-start w-[24%] ml-0.5">
                                        <Img src="images/img_vector_1x3.svg" alt="vector" className="h-px" />
                                        <Img
                                          src="images/img_vector_1x2.svg"
                                          alt="vector_fortyone"
                                          className="h-px w-[2px] mt-[-1px] ml-px md:ml-0"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-center w-[17%] md:w-full mt-2 gap-px">
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_3x2.svg"
                                        alt="vector"
                                        className="h-[3px] w-[2px]"
                                      />
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_2x3.svg"
                                        alt="vector"
                                        className="h-[2px] w-[3px]"
                                      />
                                      <Img src="images/img_vector_2x3.svg" alt="vector" className="h-[2px] w-[3px]" />
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_3x3.svg"
                                        alt="vector"
                                        className="h-[3px] w-[3px]"
                                      />
                                    </div>
                                    <div className="h-px w-full mt-1 bg-blue_gray-900_01" />
                                  </div>
                                  <div className="flex flex-col items-center justify-start w-[90%] gap-[5px] bottom-[7%] right-0 left-0 m-auto absolute">
                                    <div className="flex flex-row justify-center items-end w-full p-1 bg-gray-300">
                                      <Img
                                        src="images/img_vector_3x3.svg"
                                        alt="vector"
                                        className="h-[3px] w-[3px] mb-px"
                                      />
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_3x4.svg"
                                        alt="vector"
                                        className="h-[3px] w-[4px] mb-px ml-px"
                                      />
                                      <Img
                                        src="images/img_vector_3x3.svg"
                                        alt="vector"
                                        className="h-[3px] w-[3px] mb-px ml-px"
                                      />
                                      <Img
                                        src="images/img_vector_3x4.svg"
                                        alt="vector"
                                        className="h-[3px] w-[4px] mb-px"
                                      />
                                      <Img
                                        src="images/img_vector_1x2.svg"
                                        alt="vector_sixtyone"
                                        className="h-[3px] w-[2px] mb-px ml-px"
                                      />
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_2x1.svg"
                                        alt="vector"
                                        className="h-[2px] w-px mb-px ml-px"
                                      />
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_4x3.svg"
                                        alt="vector"
                                        className="h-[4px] w-[3px] mb-px ml-[33px] sm:ml-5"
                                      />
                                      <Img
                                        src="images/img_vector_4x3.svg"
                                        alt="vector"
                                        className="h-[4px] w-[3px] mb-px ml-px"
                                      />
                                      <Img
                                        src="images/img_vector_1.svg"
                                        alt="vector"
                                        className="h-[4px] w-[3px] mb-px ml-px"
                                      />
                                    </div>
                                    <div className="h-[16px] w-[83%] md:w-full relative">
                                      <Img
                                        src="images/img_vector.svg"
                                        alt="vector"
                                        className="justify-center h-[16px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <div className="flex flex-row justify-start w-[33%] gap-px bottom-[38%] right-0 left-0 m-auto absolute">
                                        <Img
                                          src="images/img_vector_white_a700_3x4.svg"
                                          alt="vector"
                                          className="h-[3px] w-[4px]"
                                        />
                                        <Img
                                          src="images/img_vector_white_a700_3x3.svg"
                                          alt="vector"
                                          className="h-[3px] w-[3px]"
                                        />
                                        <Img src="images/img_vector_2.svg" alt="vector" className="h-[3px] w-[3px]" />
                                        <Img src="images/img_vector_3.svg" alt="vector" className="h-[3px] w-[3px]" />
                                        <Img
                                          src="images/img_vector_white_a700_3x3.svg"
                                          alt="vector"
                                          className="h-[3px] w-[3px]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[91%] top-[17%] right-0 left-0 m-auto absolute">
                                    <div className="h-[22px] w-full z-[1] relative">
                                      <Img
                                        src="images/img_vector_blue_gray_900_01.svg"
                                        alt="vector"
                                        className="justify-center h-[22px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <div className="flex flex-row justify-center items-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                                        <div className="flex flex-row justify-start items-center w-full gap-3 z-[1]">
                                          <div className="flex flex-col items-start justify-start w-[20%]">
                                            <div className="flex flex-row justify-start items-center">
                                              <Img
                                                src="images/img_vector_pink_400_3x2.svg"
                                                alt="vector"
                                                className="h-[3px] w-[2px] mt-0.5"
                                              />
                                              <Img
                                                src="images/img_vector_black_900_01_3x2.svg"
                                                alt="vector"
                                                className="h-[3px] w-[2px] ml-[-2px]"
                                              />
                                              <Img
                                                src="images/img_vector_blue_gray_900_01_2x10.svg"
                                                alt="vector"
                                                className="h-[2px]"
                                              />
                                            </div>
                                            <Img
                                              src="images/img_vector_blue_gray_900_01_4x11.svg"
                                              alt="vector"
                                              className="h-[4px] mt-[-3px] ml-px md:ml-0"
                                            />
                                            <Img
                                              src="images/img_vector_black_900_01_4x9.svg"
                                              alt="vector"
                                              className="h-[4px] mt-[-3px] ml-1 md:ml-0"
                                            />
                                          </div>
                                          <div className="flex flex-col items-end justify-start w-[60%] gap-1.5">
                                            <div className="h-px w-full bg-gray-300" />
                                            <div className="flex flex-row justify-start items-center w-[16%] md:w-full gap-0.5">
                                              <Img
                                                src="images/img_vector_pink_400_2x2.svg"
                                                alt="vector"
                                                className="h-[2px] w-[2px]"
                                              />
                                              <div className="h-px w-px bg-pink-400" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-start w-[97%] ml-[-64px]">
                                          <div className="flex flex-col items-start justify-start w-full z-[1]">
                                            <div className="flex flex-row justify-start items-start w-[59%] md:w-full">
                                              <Img
                                                src="images/img_vector_blue_gray_900_01_2x10.svg"
                                                alt="vector"
                                                className="h-[5px]"
                                              />
                                              <Img
                                                src="images/img_vector_blue_gray_900_01_5x1.svg"
                                                alt="vector"
                                                className="h-[5px] ml-px"
                                              />
                                              <Img
                                                src="images/img_vector_pink_900.svg"
                                                alt="vector"
                                                className="h-[9px] mb-px ml-px"
                                              />
                                              <div className="h-px w-px ml-[-1px] bg-pink-400" />
                                              <Img
                                                src="images/img_vector_pink_900_8x4.svg"
                                                alt="vector"
                                                className="h-[8px] ml-px"
                                              />
                                              <Img
                                                src="images/img_vector_pink_400_1x1.svg"
                                                alt="vector"
                                                className="h-px w-px mt-0.5 ml-[-1px]"
                                              />
                                              <div className="h-px w-[41%] mt-0.5 ml-3 bg-pink-400" />
                                            </div>
                                            <Img
                                              src="images/img_vector_white_a700_3x11.svg"
                                              alt="vector"
                                              className="h-[3px] mt-[-3px]"
                                            />
                                            <Img
                                              src="images/img_vector_blue_gray_900_01_1x8.svg"
                                              alt="vector"
                                              className="h-px mt-[-1px] ml-px md:ml-0"
                                            />
                                            <div className="h-px w-[62%] ml-[23px] md:ml-0 sm:ml-5 bg-gray-300" />
                                          </div>
                                          <div className="flex flex-col items-start justify-start w-full mt-[-2px]">
                                            <div className="flex flex-row justify-start items-center z-[1]">
                                              <Img
                                                src="images/img_vector_blue_gray_900_01_1x9.svg"
                                                alt="vector"
                                                className="h-px"
                                              />
                                              <Img
                                                src="images/img_vector_pink_400_3x2.svg"
                                                alt="vector"
                                                className="h-[3px] w-[2px] mt-px ml-px"
                                              />
                                              <Img
                                                src="images/img_vector_black_900_01_3x2.svg"
                                                alt="vector"
                                                className="h-[3px] w-[2px] ml-[-2px]"
                                              />
                                            </div>
                                            <div className="flex flex-row justify-start items-end w-full mt-[-3px]">
                                              <div className="flex flex-col items-center justify-start w-[18%]">
                                                <Img
                                                  src="images/img_vector_pink_400.svg"
                                                  alt="vector"
                                                  className="h-[9px]"
                                                />
                                                <Img
                                                  src="images/img_vector_white_a700_1x1.svg"
                                                  alt="vector"
                                                  className="h-px w-px mt-[-3px]"
                                                />
                                                <Img
                                                  src="images/img_vector_white_a700_1x2.svg"
                                                  alt="vector"
                                                  className="h-px w-[2px] mt-px"
                                                />
                                              </div>
                                              <Img
                                                src="images/img_vector_gray_300_4x3.svg"
                                                alt="vector"
                                                className="h-[4px] w-[3px] mb-px ml-3"
                                              />
                                              <Img
                                                src="images/img_vector_gray_300_4x3.svg"
                                                alt="vector"
                                                className="h-[4px] w-[3px] mb-px ml-px"
                                              />
                                              <Img
                                                src="images/img_vector_blue_gray_900_01_6x15.svg"
                                                alt="vector"
                                                className="h-[6px] ml-[17px] z-[1]"
                                              />
                                              <Img
                                                src="images/img_vector_pink_400_1x2.svg"
                                                alt="vector"
                                                className="h-px w-[2px] mb-0.5 ml-[-12px]"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-row justify-start w-[35%] md:w-full mt-[-22px]">
                                      <div className="h-[22px] w-full bg-gray-200" />
                                      <div className="h-[22px] w-px bg-blue_gray-900_01" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[91%] top-[33%] right-0 left-0 m-auto absolute">
                                    <div className="h-[22px] w-full z-[1] relative">
                                      <Img
                                        src="images/img_vector_blue_gray_900_01.svg"
                                        alt="vector"
                                        className="justify-center h-[22px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <div className="flex flex-col items-start justify-start w-[50%] left-[10%] top-[8%] m-auto absolute">
                                        <div className="flex flex-row justify-end items-end w-[95%] md:w-full ml-0.5 md:ml-0">
                                          <Img
                                            src="images/img_vector_white_a700_1x5.svg"
                                            alt="vector"
                                            className="h-px"
                                          />
                                          <Img
                                            src="images/img_vector_4.svg"
                                            alt="vector"
                                            className="h-px w-px ml-[-3px] z-[1]"
                                          />
                                          <Img
                                            src="images/img_vector_white_a700_5x1.svg"
                                            alt="vector"
                                            className="h-[5px] ml-[-1px]"
                                          />
                                          <div className="h-px w-[42%] mb-px ml-[18px] bg-pink-400" />
                                        </div>
                                        <Img
                                          src="images/img_vector_white_a700_1x5.svg"
                                          alt="vector"
                                          className="h-px ml-px md:ml-0 z-[1]"
                                        />
                                        <Img src="images/img_vector_1x9.svg" alt="vector" className="h-px" />
                                      </div>
                                      <div className="flex flex-col items-end justify-start w-[83%] pb-2.5 bottom-[9%] right-0 left-0 m-auto absolute">
                                        <div className="flex flex-row justify-end items-end w-full">
                                          <div className="flex flex-col items-center justify-start w-[13%]">
                                            <div className="flex flex-col items-center justify-start w-full pb-2.5">
                                              <div className="h-[12px] w-full relative">
                                                <Img
                                                  src="images/img_vector_pink_400_12x8.svg"
                                                  alt="vector"
                                                  className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                                />
                                                <Img
                                                  src="images/img_vector_black_900_01_3x7.svg"
                                                  alt="vector"
                                                  className="h-[3px] bottom-[34%] right-0 left-0 m-auto absolute"
                                                />
                                              </div>
                                              <Img
                                                src="images/img_vector_black_900_01_1x8.svg"
                                                alt="vector"
                                                className="h-px mt-[-11px] z-[1]"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            src="images/img_vector_gray_300_4x3.svg"
                                            alt="vector"
                                            className="h-[4px] w-[3px] mb-px ml-3.5"
                                          />
                                          <Img
                                            src="images/img_vector_blue_gray_900_01_6x15.svg"
                                            alt="vector"
                                            className="h-[6px] ml-[21px] sm:ml-5"
                                          />
                                        </div>
                                        <div className="h-px w-[62%] mt-[-12px] z-[1] bg-gray-300" />
                                      </div>
                                      <div className="flex flex-col items-end justify-start w-[52%] gap-1 bottom-[19%] right-[8%] m-auto absolute">
                                        <div className="h-px w-full bg-gray-300" />
                                        <div className="flex flex-row justify-start items-center w-[26%] md:w-full mr-0.5 gap-0.5">
                                          <Img
                                            src="images/img_vector_pink_400_1x2.svg"
                                            alt="vector"
                                            className="h-px w-[2px]"
                                          />
                                          <Img
                                            src="images/img_vector_pink_400_2x1.svg"
                                            alt="vector"
                                            className="h-[2px] w-px"
                                          />
                                          <div className="h-px w-px bg-pink-400" />
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-[12%] left-[10%] top-[8%] m-auto absolute">
                                        <div className="flex flex-row justify-center items-center h-[5px] w-[5px] z-[3]">
                                          <Img
                                            src="images/img_vector_blue_gray_900_01_1x5.svg"
                                            alt="vector"
                                            className="h-px"
                                          />
                                          <Img
                                            src="images/img_vector_5x1.svg"
                                            alt="vector"
                                            className="h-[5px] mb-px ml-[-3px]"
                                          />
                                          <Img src="images/img_vector_5.svg" alt="vector" className="h-[5px]" />
                                        </div>
                                        <Img src="images/img_vector_1x5.svg" alt="vector" className="h-px z-[2]" />
                                        <Img
                                          src="images/img_vector_gray_300_1x5.svg"
                                          alt="vector"
                                          className="h-px z-[1]"
                                        />
                                        <div className="flex flex-row justify-center w-full">
                                          <Img src="images/img_vector_6.svg" alt="vector" className="h-px" />
                                          <Img
                                            src="images/img_vector_7.svg"
                                            alt="vector"
                                            className="h-px w-px ml-[-9px]"
                                          />
                                          <Img src="images/img_vector_8.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_7.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_7.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_7.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_7.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_7.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_8.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_7.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_7.svg" alt="vector" className="h-px w-px ml-px" />
                                          <Img src="images/img_vector_7.svg" alt="vector" className="h-px w-px ml-px" />
                                        </div>
                                        <Img
                                          src="images/img_vector_gray_300_1x5.svg"
                                          alt="vector"
                                          className="h-px mt-[-1px]"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-row justify-start w-[35%] md:w-full mt-[-22px]">
                                      <div className="h-[22px] w-full bg-gray-200" />
                                      <div className="h-[22px] w-px bg-blue_gray-900_01" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[91%] bottom-[36%] right-0 left-0 m-auto absolute">
                                    <div className="h-[22px] w-full z-[1] relative">
                                      <Img
                                        src="images/img_vector_blue_gray_900_01.svg"
                                        alt="vector"
                                        className="justify-center h-[22px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                      />
                                      <div className="flex flex-col items-center justify-start w-[52%] bottom-[9%] right-[8%] m-auto absolute">
                                        <div className="h-px w-[39%] bg-pink-400" />
                                        <div className="h-px w-full mt-0.5 bg-gray-300" />
                                        <div className="h-px w-full mt-px bg-gray-300" />
                                        <div className="flex flex-row justify-center items-center w-full mt-0.5 z-[1]">
                                          <Img
                                            src="images/img_vector_gray_300_4x3.svg"
                                            alt="vector"
                                            className="h-[4px] w-[3px]"
                                          />
                                          <Img
                                            src="images/img_vector_gray_300_4x3.svg"
                                            alt="vector"
                                            className="h-[4px] w-[3px] ml-px"
                                          />
                                          <Img
                                            src="images/img_vector_6x15.svg"
                                            alt="vector"
                                            className="h-[6px] ml-[17px]"
                                          />
                                        </div>
                                        <div className="flex flex-row justify-start items-center w-[26%] md:w-full mt-[-4px] gap-0.5">
                                          <Img
                                            src="images/img_vector_pink_400_1x2.svg"
                                            alt="vector"
                                            className="h-px w-[2px]"
                                          />
                                          <Img
                                            src="images/img_vector_pink_400_2x1.svg"
                                            alt="vector"
                                            className="h-[2px] w-px"
                                          />
                                          <div className="h-px w-px bg-pink-400" />
                                        </div>
                                      </div>
                                      <div className="flex flex-col items-center justify-start w-[22%] h-max left-[7%] bottom-0 top-0 m-auto absolute">
                                        <div className="flex flex-col items-end justify-start w-full">
                                          <div className="flex flex-row justify-end items-center w-[57%] md:w-full">
                                            <Img
                                              src="images/img_vector_blue_gray_700_01_2x2.svg"
                                              alt="vector"
                                              className="h-[2px] w-[2px] z-[1]"
                                            />
                                            <Img
                                              src="images/img_vector_blue_gray_700_01_3x1.svg"
                                              alt="vector"
                                              className="h-[3px] my-px"
                                            />
                                            <Img
                                              src="images/img_vector_blue_gray_700_01_3x1.svg"
                                              alt="vector"
                                              className="h-[2px] w-[2px] ml-px"
                                            />
                                            <Img
                                              src="images/img_vector_blue_gray_700_01_3x3.svg"
                                              alt="vector"
                                              className="h-[3px] w-[3px] ml-[-1px] z-[2]"
                                            />
                                            <Img
                                              src="images/img_vector_2x2.svg"
                                              alt="vector"
                                              className="h-[2px] w-[2px] ml-[-1px]"
                                            />
                                          </div>
                                          <Img
                                            src="images/img_vector_white_a700.svg"
                                            alt="vector"
                                            className="h-[6px] mt-[-1px]"
                                          />
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-full mt-[-9px] pb-1">
                                          <div className="flex flex-row justify-end items-center">
                                            <Img
                                              src="images/img_vector_blue_gray_700_01_3x4.svg"
                                              alt="vector"
                                              className="h-[3px] w-[4px] mt-px z-[1]"
                                            />
                                            <Img
                                              src="images/img_vector_2x2.svg"
                                              alt="vector"
                                              className="h-[2px] w-[2px] ml-[-2px]"
                                            />
                                            <Img
                                              src="images/img_vector_2x2.svg"
                                              alt="vector"
                                              className="h-[2px] w-[2px] ml-0.5"
                                            />
                                            <Img
                                              src="images/img_vector_9.svg"
                                              alt="vector"
                                              className="h-[2px] w-[2px] ml-[3px]"
                                            />
                                          </div>
                                          <Img
                                            src="images/img_vector_blue_gray_900_01_6x16.svg"
                                            alt="vector"
                                            className="h-[6px]"
                                          />
                                          <Img
                                            src="images/img_vector_pink_400_1x14.svg"
                                            alt="vector"
                                            className="h-px mt-[-4px] ml-px md:ml-0"
                                          />
                                          <Img
                                            src="images/img_vector_pink_400_1x14.svg"
                                            alt="vector"
                                            className="h-px mt-px ml-px md:ml-0"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-row justify-start w-[35%] md:w-full mt-[-22px]">
                                      <div className="h-[22px] w-full bg-gray-200" />
                                      <div className="h-[22px] w-px bg-blue_gray-900_01" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[18px] w-px mt-[34px] rotate-[-180deg] bg-blue_gray-700_01" />
                          </div>
                        </div>
                        <Img src="images/img_vector_7.svg" alt="vector" className="h-px z-[1]" />
                      </div>
                    </div>
                    <Heading size="2xl" as="h2" className="mt-3.5">
                      Easy To Order
                    </Heading>
                    <Text size="lg" as="p" className="mt-1 !text-blue_gray-900 text-center">
                      You only need a few steps in ordering food
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start w-[23%] right-[31%] top-[9%] m-auto absolute">
                    <Img src="images/img_take_away_rafiki.svg" alt="takeaway_one" className="h-[230px] mr-5" />
                    <Heading size="2xl" as="h3" className="mt-[9px] mr-[26px] sm:mr-5">
                      Fastest Delivery
                    </Heading>
                    <Text size="lg" as="p" className="mt-[5px] !text-blue_gray-900 text-center">
                      Delivery that is always ontime even faster
                    </Text>
                  </div>
                  <div className="flex flex-row justify-end w-[26%] bottom-0 right-[15%] m-auto absolute">
                    <div className="flex flex-col items-center justify-start w-full gap-[5px]">
                      <div className="flex flex-col items-center justify-start w-[70%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img src="images/img_waiters_rafiki_1.svg" alt="waitersrafiki" className="h-[230px] z-[1]" />
                          <Heading size="2xl" as="h4" className="mt-[-5px]">
                            Best Quality
                          </Heading>
                        </div>
                      </div>
                      <Text size="lg" as="p" className="!text-blue_gray-900 text-center">
                        Not only fast for us quality is also number one
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-start w-[85%] md:w-full md:gap-10">
                  <div className="flex flex-row md:flex-col justify-center items-end w-[53%] md:w-full md:gap-5">
                    <div className="flex flex-row justify-center w-[41%] md:w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-0.5">
                            <Text
                              size="xl"
                              as="p"
                              className="flex justify-center items-center w-[260px] h-[42px] px-[35px] py-1.5 sm:px-5 tracking-[0.20px] !font-kanit bg-amber-500"
                            >
                              ORDER NOW
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="flex justify-center items-center w-[260px] h-[36px] pt-[5px] pb-px px-[35px] sm:px-5 tracking-[0.20px] !font-kanit bg-amber-200"
                            >
                              Weekly Subscription
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="flex justify-center items-center w-[260px] h-[36px] pt-[5px] pb-px px-8 sm:px-5 tracking-[0.20px] !font-kanit bg-amber-200"
                            >
                              Monthly Subscription
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="flex justify-center items-center w-[260px] h-[36px] pt-[5px] pb-px px-7 sm:px-5 tracking-[0.20px] !font-kanit bg-amber-200"
                            >
                              3 Months Subscription
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[20%] md:w-full pt-[38px] gap-0.5 px-[38px] sm:pt-5 sm:px-5">
                      <Img src="images/img_state_off.svg" alt="stateoff_one" className="h-[36px] mt-8" />
                      <Img src="images/img_state_on.svg" alt="stateon_one" className="h-[36px]" />
                      <Img src="images/img_state_state3.svg" alt="statestatethree" className="h-[36px]" />
                    </div>
                    <div className="flex flex-row justify-center w-[41%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full gap-0.5">
                        <Text
                          size="xl"
                          as="p"
                          className="flex justify-center items-center w-[260px] h-[42px] px-[35px] py-1.5 sm:px-5 tracking-[0.20px] !font-kanit bg-amber-500"
                        >
                          ORDER NOW
                        </Text>
                        <Text
                          size="xl"
                          as="p"
                          className="flex justify-center items-center w-[260px] h-[36px] px-[35px] py-[3px] sm:px-5 tracking-[0.20px] !font-kanit bg-amber-200"
                        >
                          ₹1295
                        </Text>
                        <Text
                          size="xl"
                          as="p"
                          className="flex justify-center items-center w-[260px] h-[36px] px-[35px] py-[3px] sm:px-5 tracking-[0.20px] !font-kanit bg-amber-200"
                        >
                          ₹5050
                        </Text>
                        <Text
                          size="xl"
                          as="p"
                          className="flex justify-center items-center w-[260px] h-[36px] px-[35px] py-[3px] sm:px-5 tracking-[0.20px] !font-kanit bg-amber-200"
                        >
                          ₹15000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[33%] md:w-full mt-2 p-5 md:mt-0 rounded-tl-[24px] rounded-tr-[24px] bg-red-200">
                    <div className="flex flex-col items-center justify-start w-[98%] mb-2.5 gap-6">
                      <div className="flex flex-row justify-between items-center w-full">
                        <Text size="xl" as="p" className="tracking-[0.20px] !font-kanit capitalize">
                          ₹5050
                        </Text>
                        <div className="flex flex-row justify-between items-center w-[39%] p-3 bg-gray-900_02 shadow-sm rounded-[24px]">
                          <div className="flex flex-col items-center justify-center h-[24px] w-[24px] ml-0.5 p-2 bg-white-A700 rounded-[50%]">
                            <Img
                              src="images/img_vector_white_a700_2x8.svg"
                              alt="vector"
                              className="h-[2px] mt-1 mb-0.5"
                            />
                          </div>
                          <Heading size="s" as="h5" className="!text-white-A700 !font-sen capitalize">
                            1
                          </Heading>
                          <div className="flex flex-col items-center justify-start h-[24px] w-[24px] mr-0.5 p-2 bg-white-A700 rounded-[50%]">
                            <Img src="images/img_group_1843.svg" alt="image_two" className="h-[8px] w-[8px]" />
                          </div>
                        </div>
                      </div>
                      <Button
                        color="amber_300"
                        size="3xl"
                        className="w-full sm:px-5 font-sen uppercase font-bold rounded-[12px]"
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
