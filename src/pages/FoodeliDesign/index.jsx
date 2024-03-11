import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, RatingBar } from "../../components";

export default function FoodeliDesignPage() {
  return (
    <>
      <Helmet>
        <title>Niranjan's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pl-[43px] py-[43px] md:pl-5 md:py-5 bg-white-A700">
        <div className="flex flex-col items-start justify-start w-full mb-[5px] max-w-[1387px]">
          <div className="h-[882px] w-[93%] md:w-full ml-[42px] md:ml-5 relative">
            <div className="flex flex-col items-start justify-center w-full h-full gap-[86px] left-0 bottom-0 right-0 top-0 m-auto absolute">
              <header className="flex flex-row md:flex-col justify-between items-center w-[92%] md:gap-10">
                <div className="flex flex-row justify-between items-start w-[18%] md:w-full">
                  <div className="flex flex-row justify-start w-[40%] p-[3px] bg-red-A400">
                    <div className="flex flex-col items-center justify-start w-[35%] mb-[19px] ml-1.5">
                      <div className="flex flex-row justify-start items-center w-full gap-2 z-[1]">
                        <Heading size="xs" as="p" className="!text-gray-100_03">
                          F
                        </Heading>
                        <Heading size="xs" as="p" className="!text-gray-100_03">
                          O
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full mt-[-1px] gap-[5px]">
                        <Heading size="xs" as="p" className="!text-gray-100_03">
                          D
                        </Heading>
                        <Heading size="xs" as="p" className="!text-gray-100_03">
                          O
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Heading size="xl" as="h4" className="mt-2">
                    Foodeli
                  </Heading>
                </div>
                <div className="flex flex-row sm:flex-col justify-between items-start w-[58%] md:w-full mt-[3px] md:mt-0 sm:gap-10">
                  <div className="flex flex-row sm:flex-col justify-between items-center w-[69%] sm:w-full mt-1.5 sm:gap-10 sm:mt-0">
                    <div className="flex flex-row sm:flex-col justify-center w-[88%] sm:w-full sm:gap-5">
                      <div className="flex flex-row justify-center w-[24%] sm:w-full">
                        <Text size="xs" as="p" className="!text-red-A400">
                          Subscribtions
                        </Text>
                      </div>
                      <a href="#" className="ml-[42px] md:ml-5">
                        <Text size="xs" as="p" className="!text-blue_gray-900">
                          Services
                        </Text>
                      </a>
                      <div className="flex flex-row justify-center w-[10%] sm:w-full ml-[54px] md:ml-5">
                        <Text size="xs" as="p" className="!text-blue_gray-900">
                          Menu
                        </Text>
                      </div>
                      <a href="#" className="ml-[54px] md:ml-5">
                        <Text size="xs" as="p" className="!text-blue_gray-900">
                          Contact
                        </Text>
                      </a>
                    </div>
                    <Img src="images/img_group_2.svg" alt="image" className="h-[24px] w-[25px] mb-[3px]" />
                  </div>
                  <a href="#">
                    <Text />
                  </a>
                </div>
              </header>
              <div className="h-[730px] w-full relative">
                <div className="flex flex-row justify-between items-start w-[33%] md:h-auto sm:w-full left-0 top-[3%] p-[11px] m-auto bg-deep_orange-50 absolute rounded-[24px]">
                  <Text as="p" className="mb-px ml-2 !text-red-A400 text-right">
                    More than Faster
                  </Text>
                  <Img
                    src="images/img_image_1.png"
                    alt="imageone_one"
                    className="w-[6%] md:h-auto mt-[3px] mr-2 object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex flex-row md:flex-col justify-start items-start w-full md:gap-5 z-[1]">
                    <div className="flex flex-row justify-start w-[47%] md:w-full mt-[125px] md:mt-0">
                      <div className="flex flex-col items-start justify-start w-full gap-5">
                        <div className="h-[255px] w-full relative">
                          <Heading
                            size="5xl"
                            as="h1"
                            className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto !text-red-A400 absolute"
                          >
                            <span className="text-black-900 font-rubik text-[67px]">Claim Best Offer on Fast</span>
                            <span className="text-black-900 text-[67px]"></span>
                            <span className="text-red-A400 font-lobstertwo text-[80px] italic">Food</span>
                            <span className="text-black-900"></span>
                            <span className="text-black-900 font-rubik">& </span>
                            <span className="text-red-A400 font-lobstertwo text-[80px] italic">Restaurants</span>
                            <span className="text-red-A400"></span>
                          </Heading>
                          <div className="h-[10px] w-[10px] bottom-[45%] right-[8%] m-auto bg-amber-300 absolute rounded-[50%]" />
                        </div>
                        <Text size="lg" as="p" className="w-[80%] !text-blue_gray-900">
                          Our job is to filling your tummy with delicious food and with fast and free delivery
                        </Text>
                        <div className="flex flex-row justify-start items-center w-[67%] md:w-full gap-[29px]">
                          <Button
                            color="red_A400"
                            size="5xl"
                            className="sm:px-5 font-medium min-w-[186px] rounded-[34px]"
                          >
                            Get Started
                          </Button>
                          <div className="flex flex-row justify-start items-center w-[46%] gap-[15px]">
                            <Button color="amber_300" size="xl" shape="circle" className="w-[46px] shadow-xs">
                              <Img src="images/img_frame_8.svg" />
                            </Button>
                            <Text size="lg" as="p" className="!text-blue_gray-900">
                              Watch Video
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[711px] w-[58%] md:w-full ml-[-49px] md:ml-0 z-[1] relative">
                      <Img
                        src="images/img_image_46.png"
                        alt="imagefortysix"
                        className="justify-center h-[711px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-start w-[88%] h-max gap-[252px] left-[3%] bottom-0 top-0 m-auto absolute">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-row justify-center p-[22px] sm:p-5 rotate-[20deg] bg-amber-300 rounded-[20px]">
                            <Img src="images/img_ri_time_line.svg" alt="ritimeline_one" className="h-[64px] w-[64px]" />
                          </div>
                          <div className="flex flex-col items-end justify-start mt-[7px]">
                            <Img
                              src="images/img_noto_fire.png"
                              alt="notofire_one"
                              className="w-[30px] md:h-auto mr-[73px] md:mr-5 object-cover"
                            />
                            <Img
                              src="images/img_group_53.svg"
                              alt="image_one"
                              className="h-[147px] mt-[62px] mr-[7px]"
                            />
                            <Img
                              src="images/img_rectangle_7.svg"
                              alt="image_two"
                              className="h-[18px] w-[18px] mt-[177px] rounded-[3px]"
                            />
                          </div>
                        </div>
                        <Img
                          src="images/img_rectangle_7.svg"
                          alt="image_three"
                          className="h-[15px] w-[15px] ml-[183px] md:ml-5 rounded-[3px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[12%] md:w-full mt-[-45px]">
                    <div className="flex flex-row justify-start w-[72%]">
                      <Img
                        src="images/img_ellipse_5.png"
                        alt="circleimage"
                        className="h-[64px] w-[64px] md:h-auto rounded-[50%]"
                      />
                      <Img
                        src="images/img_ellipse_6.png"
                        alt="circleimage_one"
                        className="h-[64px] w-[64px] md:h-auto ml-[-21px] rounded-[50%]"
                      />
                    </div>
                    <Img
                      src="images/img_ellipse_7.png"
                      alt="circleimage_two"
                      className="h-[64px] w-[64px] md:h-auto ml-[-22px] rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/defaultNoData.png"
              alt="image_four"
              className="h-[751px] w-[57%] sm:w-full right-[9%] top-0 m-auto object-cover absolute"
            />
          </div>
          <div className="flex flex-row justify-start w-[91%] md:w-full mt-[107px]">
            <div className="flex flex-col items-center justify-start w-full gap-5">
              <Heading as="h2" className="!text-red-A400 tracking-[2.88px]">
                WHAT WE SERVE
              </Heading>
              <div className="flex flex-row md:flex-col justify-between items-start w-[67%] md:w-full md:gap-10">
                <div className="flex flex-row sm:flex-col justify-between items-start w-auto gap-[102px] sm:gap-10">
                  <Img
                    src="images/img_rectangle_7.svg"
                    alt="image_five"
                    className="h-[18px] w-[18px] mt-[46px] sm:mt-0 rounded-[3px]"
                  />
                  <Heading size="4xl" as="h3" className="w-[82%] !text-black-900 !font-rubik text-center">
                    Your Favourite Food Delivery Partner
                  </Heading>
                </div>
                <Img src="images/img_rectangle_9.svg" alt="image_six" className="h-[18px] w-[18px] rounded-[3px]" />
              </div>
              <div className="flex flex-row md:flex-col justify-between items-end w-full md:gap-10">
                <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
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
                                    <Img src="images/img_vector_1x1.svg" alt="vector" className="h-px w-px ml-[-1px]" />
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
                                        <Img src="images/img_vector_white_a700_1x5.svg" alt="vector" className="h-px" />
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
                  <Heading size="2xl" as="h4" className="mt-3.5">
                    Easy To Order
                  </Heading>
                  <Text size="lg" as="p" className="mt-1 !text-blue_gray-900 text-center">
                    You only need a few steps in ordering food
                  </Text>
                </div>
                <div className="flex flex-col items-end justify-start w-[26%] md:w-full">
                  <Img src="images/img_take_away_rafiki.svg" alt="takeaway_one" className="h-[230px] mr-5" />
                  <Heading size="2xl" as="h5" className="mt-[9px] mr-[26px] sm:mr-5">
                    Fastest Delivery
                  </Heading>
                  <Text size="lg" as="p" className="mt-[5px] !text-blue_gray-900 text-center">
                    Delivery that is always ontime even faster
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[29%] md:w-full">
                  <div className="h-[159px] w-[54%] md:w-full relative">
                    <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                      <div className="flex flex-col items-center justify-start w-[38%] md:w-full mr-[25px] sm:mr-5 z-[1]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="h-[149px] w-full z-[1] relative">
                            <div className="flex flex-row justify-center items-start w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                              <div className="flex flex-row justify-center items-start w-[98%] z-[1]">
                                <div className="flex flex-col items-start justify-start w-[83%]">
                                  <div className="flex flex-col items-start justify-start w-full z-[1]">
                                    <div className="flex flex-col items-end justify-start w-[30%] md:w-full ml-[9px] md:ml-0 z-[1]">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <div className="flex flex-row justify-center items-end w-full">
                                          <div className="flex flex-row justify-center w-full">
                                            <div className="flex flex-row justify-center items-end w-full">
                                              <div className="h-[12px] w-full sm:w-full relative">
                                                <Img
                                                  src="images/img_vector_blue_gray_900_01_12x17.svg"
                                                  alt="vector"
                                                  className="justify-center h-[12px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                                />
                                                <div className="flex flex-col items-start justify-start w-[6%] gap-px bottom-[15%] right-[38%] m-auto absolute">
                                                  <Img
                                                    src="images/img_vector_10.svg"
                                                    alt="vector"
                                                    className="h-px w-px"
                                                  />
                                                  <Img
                                                    src="images/img_vector_7.svg"
                                                    alt="vector"
                                                    className="h-px w-px ml-px md:ml-0"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                src="images/img_vector_8.svg"
                                                alt="vector"
                                                className="h-[2px] w-[2px] mb-[9px] ml-[-17px] z-[1]"
                                              />
                                              <Img
                                                src="images/img_vector_7.svg"
                                                alt="vector"
                                                className="h-px w-px mb-0.5 ml-[11px]"
                                              />
                                              <Img
                                                src="images/img_vector_11.svg"
                                                alt="vector"
                                                className="h-px w-px mb-1"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            src="images/img_vector_red_a200.svg"
                                            alt="vector"
                                            className="h-[3px] ml-[-3px] z-[2]"
                                          />
                                          <Img
                                            src="images/img_vector_blue_gray_900_01_5x2.svg"
                                            alt="vector"
                                            className="h-[5px] mb-0.5 ml-[-1px]"
                                          />
                                        </div>
                                        <Img
                                          src="images/img_vector_red_a100_4x3.svg"
                                          alt="vector"
                                          className="h-[4px] w-[3px] mt-[-3px] ml-0.5 md:ml-0 z-[1]"
                                        />
                                      </div>
                                      <div className="h-[15px] w-[59%] md:w-full mt-[-1px] mr-0.5 z-[1] relative">
                                        <Img
                                          src="images/img_vector_red_a100.svg"
                                          alt="vector"
                                          className="justify-center h-[15px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                        />
                                        <Img
                                          src="images/img_vector_black_900_01_4x4.svg"
                                          alt="vector"
                                          className="h-[4px] w-[4px] top-[15%] right-0 left-0 m-auto opacity-0.2 absolute"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-row justify-start items-start w-full mt-[-4px]">
                                      <Img
                                        src="images/img_vector_gray_300.svg"
                                        alt="vector"
                                        className="h-[26px] mt-0.5 z-[1]"
                                      />
                                      <div className="flex flex-row justify-start items-start w-[93%] ml-[-20px]">
                                        <div className="flex flex-col items-center justify-start w-[61%] z-[1]">
                                          <div className="flex flex-col items-center justify-start w-full">
                                            <Img
                                              src="images/img_vector_blue_gray_900_01_45x32.svg"
                                              alt="vector"
                                              className="h-[45px]"
                                            />
                                            <Img
                                              src="images/img_vector_white_a700_45x32.svg"
                                              alt="vector"
                                              className="h-[45px] mt-[-45px] opacity-0.1"
                                            />
                                          </div>
                                        </div>
                                        <Img
                                          src="images/img_vector_gray_300.svg"
                                          alt="vector"
                                          className="h-[18px] ml-[-10px]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[58%] md:w-full mt-[-23px]">
                                    <div className="flex flex-col items-end justify-start w-[88%] md:w-full ml-[3px] md:ml-0 z-[1]">
                                      <div className="flex flex-row justify-end items-start h-[20px] w-[19px] md:w-full mr-1">
                                        <Img
                                          src="images/img_vector_white_a700_20x12.svg"
                                          alt="vector"
                                          className="h-[20px] z-[1]"
                                        />
                                        <div className="flex flex-row justify-end items-center w-[53%] mt-0.5 ml-[-3px]">
                                          <Img
                                            src="images/img_vector_red_a100_5x6.svg"
                                            alt="vector"
                                            className="h-[5px] w-[6px]"
                                          />
                                          <Img
                                            src="images/img_vector_red_a100_6x5.svg"
                                            alt="vector"
                                            className="h-[6px] w-[5px] mt-px ml-[-2px]"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-row justify-end w-full">
                                        <div className="flex flex-row justify-center items-start w-full">
                                          <div className="h-[23px] w-full sm:w-full relative">
                                            <Img
                                              src="images/img_vector_gray_300_23x29.svg"
                                              alt="vector"
                                              className="justify-center h-[23px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                            />
                                            <div className="flex flex-row justify-center items-center w-[7%] left-[13%] top-[11%] m-auto absolute">
                                              <Img
                                                src="images/img_vector_3x2.svg"
                                                alt="vector"
                                                className="h-[3px] w-[2px] mb-px opacity-0.1"
                                              />
                                              <Img
                                                src="images/img_vector_black_900_01_2x1.svg"
                                                alt="vector"
                                                className="h-[2px] w-px ml-[-2px] opacity-0.1"
                                              />
                                            </div>
                                          </div>
                                          <Img
                                            src="images/img_vector_3x2.svg"
                                            alt="vector"
                                            className="h-[2px] w-px mt-0.5 ml-[-2px] z-[1] opacity-0.1"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-row justify-center w-full mt-[-27px]">
                                      <Img
                                        src="images/img_vector_blue_gray_900_01_87x25.svg"
                                        alt="vector"
                                        className="h-[87px] z-[1]"
                                      />
                                      <div className="h-[87px] w-[58%] sm:w-full ml-[-12px] relative">
                                        <Img
                                          src="images/img_vector_blue_gray_900_01_87x25.svg"
                                          alt="vector"
                                          className="justify-center h-[87px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                        />
                                        <div className="h-[20px] w-[3px] left-[16%] top-[19%] m-auto bg-black-900_01 absolute" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[10px] w-[32%] sm:w-full mt-3.5 ml-[-10px] z-[1] relative">
                                  <Img
                                    src="images/img_vector_red_a400.svg"
                                    alt="vector"
                                    className="justify-center h-[10px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                  />
                                  <Img
                                    src="images/img_vector_white_a700_8x9.svg"
                                    alt="vector"
                                    className="h-[8px] w-[9px] left-[5%] bottom-0 top-0 m-auto opacity-0.3 absolute"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-end justify-start w-[39%] mt-[13px] ml-[-24px] pb-0.5">
                                <div className="flex flex-col items-start justify-start h-[15px] w-[16px] md:w-full gap-px z-[1]">
                                  <div className="flex flex-row justify-start items-start ml-[3px] gap-[3px] md:ml-0">
                                    <Img
                                      src="images/img_vector_red_a400_2x2.svg"
                                      alt="vector"
                                      className="h-[2px] w-[2px]"
                                    />
                                    <Img src="images/img_vector_red_a400_1x1.svg" alt="vector" className="h-px w-px" />
                                    <Img
                                      src="images/img_vector_red_a400_1x1.svg"
                                      alt="vector"
                                      className="h-[5px] w-[4px] mt-0.5"
                                    />
                                  </div>
                                  <div className="flex flex-row justify-start items-center">
                                    <Img
                                      src="images/img_vector_red_a100_5x6.svg"
                                      alt="vector"
                                      className="h-[5px] w-[6px]"
                                    />
                                    <Img
                                      src="images/img_vector_red_a100_6x5.svg"
                                      alt="vector"
                                      className="h-[6px] w-[5px] ml-[-1px]"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full mt-[-3px]">
                                  <div className="h-px w-full bg-red-A400" />
                                  <Img src="images/img_vector_red_a400_1x26.svg" alt="vector" className="h-px" />
                                  <Img
                                    src="images/img_vector_black_900_01_1x26.svg"
                                    alt="vector"
                                    className="h-px opacity-0.2"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="h-[16px] w-[19%] sm:w-full left-[20%] top-[2%] m-auto absolute">
                              <Img
                                src="images/img_vector_red_a100_16x13.svg"
                                alt="vector"
                                className="justify-center h-[16px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <Img
                                src="images/img_vector_12.svg"
                                alt="vector"
                                className="h-px bottom-[29%] right-[32%] m-auto absolute"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start w-[20%] left-[18%] top-[15%] m-auto absolute">
                              <div className="flex flex-row justify-center items-center">
                                <Img src="images/img_vector_gray_50.svg" alt="vector" className="h-[6px]" />
                                <Img
                                  src="images/img_vector_red_a400_4x4.svg"
                                  alt="vector"
                                  className="h-[4px] w-[4px] ml-[-3px] z-[1]"
                                />
                                <Img src="images/img_vector_gray_50_5x4.svg" alt="vector" className="h-[5px] w-[4px]" />
                                <Img
                                  src="images/img_vector_13.svg"
                                  alt="vector"
                                  className="h-[2px] w-[2px] ml-[-4px] z-[2]"
                                />
                                <Img
                                  src="images/img_vector_red_a400_4x4.svg"
                                  alt="vector"
                                  className="h-[4px] w-[3px] ml-[-1px]"
                                />
                              </div>
                              <Img
                                src="images/img_vector_gray_300_17x12.svg"
                                alt="vector"
                                className="h-[17px] mt-[-5px] ml-0.5 md:ml-0"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row justify-start mt-[-3px] gap-[19px] z-[2]">
                            <Img src="images/img_vector_black_900_01_1x26.svg" alt="vector" className="h-[3px]" />
                            <Img src="images/img_vector_black_900_01_1x26.svg" alt="vector" className="h-[3px]" />
                          </div>
                          <div className="flex flex-row justify-start ml-0.5 gap-[17px] md:ml-0">
                            <Img src="images/img_vector_blue_gray_900_01_4x10.svg" alt="vector" className="h-[4px]" />
                            <Img src="images/img_vector_blue_gray_900_01_4x10.svg" alt="vector" className="h-[4px]" />
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_freepik_path_inject_16.svg"
                        alt="freepikpath_one"
                        className="h-[10px] mt-[-5px]"
                      />
                    </div>
                    <Img
                      src="images/img_freepik_charac.svg"
                      alt="freepikcharac"
                      className="h-[146px] left-[17%] bottom-0 top-0 m-auto absolute"
                    />
                  </div>
                  <Heading size="2xl" as="h6" className="mt-7">
                    Best Quality
                  </Heading>
                  <Text size="lg" as="p" className="mt-[5px] !text-blue_gray-900 text-center">
                    Not only fast for us quality is also number one
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[18px] w-[18px] mt-[58px] ml-[972px] md:ml-5 rotate-[25deg] bg-red-A400 rounded-[50%]" />
          <div className="flex flex-col items-start justify-start w-[97%] md:w-full mt-[34px] ml-[42px] md:ml-5">
            <div className="flex flex-row justify-between items-start w-[41%] md:w-full">
              <Heading as="h2" className="mb-2.5 !text-red-A400 tracking-[2.88px]">
                OUR MENU
              </Heading>
              <Img
                src="images/img_rectangle_9.svg"
                alt="image_seven"
                className="h-[18px] w-[18px] mt-5 rounded-[3px]"
              />
            </div>
            <Heading size="4xl" as="h3" className="w-[40%] mt-1.5 !text-black-900 !font-rubik">
              Menu That Always Makes You Fall In Love
            </Heading>
            <div className="flex flex-row md:flex-col justify-between items-center w-full mt-[33px] md:gap-10 overflow-auto">
              <div className="flex flex-row md:flex-col justify-center items-center w-[54%] md:w-full md:gap-5">
                <div className="flex flex-col items-start justify-start w-[48%] md:w-full">
                  <Img
                    src="images/img_ellipse_18.png"
                    alt="circleimage"
                    className="h-[155px] w-[51%] md:h-auto sm:w-full ml-[71px] md:ml-5 rounded-[50%]"
                  />
                  <Button
                    color="red_A400"
                    size="4xl"
                    className="mt-[30px] ml-1.5 md:ml-0 sm:px-5 font-medium min-w-[336px] rounded-[33px] sm:min-w-full"
                  >
                    Empire Restaurant{" "}
                  </Button>
                  <Text size="2xl" as="p" className="mt-[26px] !text-red-600_01">
                    Serving delicious Since 1966
                  </Text>
                  <div className="flex flex-row justify-end mt-5 ml-8 md:ml-0 sm:ml-5">
                    <Text size="2xl" as="p" className="text-center">
                      #2820/1, 8th Cross, Kalidasa Rd · 080 4041{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center mt-[9px] ml-[22px] gap-[7px] md:ml-0 sm:ml-5">
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#000000"
                      activeColor="#000000"
                      size={16}
                      className="flex justify-between w-[100px]"
                    />
                    <Text size="xs" as="p" className="h-[22px]">
                      4.5
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[1%] md:w-full ml-5 md:ml-0">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="h-[76px] w-[6px] z-[1] bg-red-900_01 rounded-[50%]" />
                    <div className="h-[573px] w-[6px] mt-[-76px] bg-red-500_01 rounded-[50%]" />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[44%] md:w-full ml-[34px] p-4 md:ml-0 sm:ml-5">
                  <Img
                    src="images/img_rectangle_17.png"
                    alt="image_eight"
                    className="w-full md:h-[328px] object-cover rounded-[10px]"
                  />
                  <Heading as="h4">Chicken Biriyani </Heading>
                  <Text as="p">₹185</Text>
                  <div className="flex flex-row justify-start items-center gap-2.5 p-2.5">
                    <Button size="xl" shape="square" className="w-[44px]">
                      <Img src="images/defaultNoData.png" />
                    </Button>
                    <Button shape="round" className="font-semibold min-w-[97px]">
                      Subscribe
                    </Button>
                    <Button shape="round" className="font-semibold min-w-[55px]">
                      add
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[22%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Img
                    src="images/img_rectangle_17_328x283.png"
                    alt="image_nine"
                    className="w-full md:h-[328px] object-cover rounded-[10px]"
                  />
                  <Heading as="h5">Mutton Biriyani </Heading>
                  <Text as="p">₹230</Text>
                  <div className="flex flex-row justify-start items-center w-[93%] md:w-full mt-[11px] ml-2.5 gap-2.5 md:ml-0">
                    <div className="flex flex-row justify-center w-[35%] p-2.5 bg-red-300 rounded-lg">
                      <Img src="images/img_frame_67.svg" alt="image_ten" className="h-[24px]" />
                    </div>
                    <Button shape="round" className="font-semibold min-w-[97px]">
                      Subscribe
                    </Button>
                    <Button shape="round" className="font-semibold min-w-[55px]">
                      add
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[22%] md:w-full gap-px">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      src="images/img_rectangle_17_1.png"
                      alt="image_eleven"
                      className="w-full md:h-auto sm:w-full z-[1] object-cover rounded-[10px]"
                    />
                    <div className="h-[45px] w-[41%] md:w-full relative">
                      <Heading as="h6" className="w-max top-0 right-0 left-0 m-auto absolute">
                        Biriyani Rice{" "}
                      </Heading>
                      <Text as="p" className="bottom-0 left-0 m-auto absolute">
                        ₹100
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5">
                  <div className="flex flex-row justify-center w-[35%] p-2.5 bg-red-300 rounded-lg">
                    <Img src="images/img_frame_67.svg" alt="image_twelve" className="h-[24px]" />
                  </div>
                  <div className="flex flex-row justify-start w-[62%] gap-2.5">
                    <Button shape="round" className="font-semibold min-w-[97px]">
                      Subscribe
                    </Button>
                    <Button shape="round" className="font-semibold min-w-[55px]">
                      add
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col w-[52%] md:w-full gap-[65px] md:gap-10">
                <div className="flex flex-col items-start justify-start w-[46%] md:w-full p-4">
                  <Img
                    src="images/img_rectangle_17_2.png"
                    alt="image"
                    className="w-full md:h-[328px] object-cover rounded-[10px]"
                  />
                  <Text as="p" className="mt-[23px]">
                    ₹160
                  </Text>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5">
                    <div className="flex flex-row justify-center w-[35%] p-2.5 bg-red-300 rounded-lg">
                      <Img src="images/img_frame_67.svg" alt="image_one" className="h-[24px]" />
                    </div>
                    <Button shape="round" className="font-semibold min-w-[97px]">
                      Subscribe
                    </Button>
                    <Button shape="round" className="font-semibold min-w-[55px]">
                      add
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[46%] md:w-full p-4">
                  <Img
                    src="images/img_rectangle_17_3.png"
                    alt="image"
                    className="w-full md:h-[328px] object-cover rounded-[10px]"
                  />
                  <Heading as="h6">Chicken masala</Heading>
                  <Text as="p">₹185</Text>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5 p-2.5">
                    <div className="flex flex-row justify-center w-[35%] p-2.5 bg-red-300 rounded-lg">
                      <Img src="images/img_frame_67.svg" alt="image_one" className="h-[24px]" />
                    </div>
                    <Button shape="round" className="font-semibold min-w-[97px]">
                      Subscribe
                    </Button>
                    <Button shape="round" className="font-semibold min-w-[55px]">
                      add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-[146px] gap-[146px] md:gap-10 overflow-auto">
              <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                <div className="flex flex-col items-center justify-start w-[16%] md:w-full">
                  <div className="flex flex-row justify-start items-center w-full gap-[22px]">
                    <div className="flex flex-col items-center justify-start w-[93%] gap-[25px]">
                      <Img
                        src="images/img_ellipse_19.png"
                        alt="circleimage"
                        className="h-[155px] w-[52%] md:h-auto sm:w-full rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-full">
                        <Button color="red_A400" size="4xl" className="w-full sm:px-5 font-medium rounded-[33px]">
                          Hotel Hanumantu{" "}
                        </Button>
                        <Text size="2xl" as="p" className="w-[68%] mt-[26px] ml-[45px] md:ml-5 !text-red-600">
                          We take pride in our traditional cooking methods
                        </Text>
                        <div className="flex flex-row justify-start w-[91%] md:w-full mt-6">
                          <div className="flex flex-row justify-start w-full">
                            <Text size="2xl" as="p" className="text-center">
                              Shop No 57, B N Street, Market Building, near Chikka Market, Mandi Mohalla, Mysuru,
                              Karnataka 570001
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-end mt-[9px] ml-[13px] gap-[7px] md:ml-0">
                          <Img
                            src="images/img_vector_black_900_01.svg"
                            alt="image"
                            className="h-[14px] w-[14px] mb-[3px]"
                          />
                          <Img
                            src="images/img_vector_black_900_01.svg"
                            alt="image_one"
                            className="h-[14px] w-[14px] mb-[3px]"
                          />
                          <Img
                            src="images/img_vector_black_900_01.svg"
                            alt="image_two"
                            className="h-[14px] w-[14px] mb-[3px]"
                          />
                          <Img
                            src="images/img_vector_black_900_01.svg"
                            alt="image_three"
                            className="h-[14px] w-[14px] mb-[3px]"
                          />
                          <Img
                            src="images/img_vector_black_900_01_16x16.svg"
                            alt="image_four"
                            className="h-[16px] w-[16px] mb-0.5"
                          />
                          <Text size="xs" as="p" className="h-[22px]">
                            4.5
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[2%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[76px] w-[6px] z-[1] bg-red-900_01 rounded-[50%]" />
                        <div className="h-[573px] w-[6px] mt-[-76px] bg-red-500_01 rounded-[50%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[469px] w-full mt-[43px] md:mt-0 relative">
                  <div className="flex flex-col items-start justify-start w-[15%] gap-2.5 bottom-[6%] right-0 left-0 m-auto absolute">
                    <Text as="p">₹280</Text>
                    <div className="flex flex-row justify-start w-[97%] md:w-full ml-2.5 gap-2.5 md:ml-0">
                      <Button shape="round" className="!text-white-A700 font-semibold min-w-[43px]">
                        4.7
                      </Button>
                      <div className="flex flex-row justify-start w-[81%] gap-2.5">
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-center w-full gap-[65px] left-0 bottom-0 right-0 top-0 m-auto md:gap-10 absolute">
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full p-4">
                      <Img
                        src="images/img_rectangle_17_4.png"
                        alt="chicken"
                        className="w-[98%] md:w-full md:h-[328px] object-cover rounded-[10px]"
                      />
                      <Heading as="h6">Chicken Biriyani </Heading>
                      <Text as="p">₹220</Text>
                      <div className="flex flex-row justify-start gap-2.5 p-2.5">
                        <Button shape="round" className="!text-white-A700 font-semibold min-w-[44px]">
                          4.5
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full p-4">
                      <Img
                        src="images/img_rectangle_17_5.png"
                        alt="image"
                        className="w-[98%] md:w-full md:h-[328px] object-cover rounded-[10px]"
                      />
                      <Heading as="h6">Mutton Biriyani with keema </Heading>
                      <Text as="p" className="mt-px">
                        ₹360
                      </Text>
                      <div className="flex flex-row justify-start gap-2.5 p-2.5">
                        <Button shape="round" className="!text-white-A700 font-semibold min-w-[44px]">
                          4.6
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                    <Heading as="h6" className="mt-[343px] mb-[100px] md:mt-0">
                      Mutton Biriyani{" "}
                    </Heading>
                    <Img
                      src="images/img_rectangle_17_6.png"
                      alt="mutton_biriyani"
                      className="w-[16%] md:w-full md:h-[328px] mt-4 mb-[125px] md:mt-0 object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full p-4">
                      <Img
                        src="images/img_rectangle_17_7.png"
                        alt="image"
                        className="w-[98%] md:w-full md:h-[328px] object-cover rounded-[10px]"
                      />
                      <Text as="p" className="mt-[23px]">
                        ₹200
                      </Text>
                      <div className="flex flex-row justify-start gap-2.5 p-2.5">
                        <Button shape="round" className="!text-white-A700 font-semibold min-w-[44px]">
                          4.0
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full p-4">
                      <Img
                        src="images/img_rectangle_17_8.png"
                        alt="image"
                        className="w-[99%] md:w-full md:h-[328px] object-cover rounded-[10px]"
                      />
                      <Text as="p" className="mt-[23px]">
                        ₹250
                      </Text>
                      <div className="flex flex-row justify-start gap-2.5 p-2.5">
                        <Button shape="round" className="!text-white-A700 font-semibold min-w-[43px]">
                          4.2
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-start w-full ml-1 md:gap-10">
                <div className="flex flex-col items-center justify-start w-[27%] md:w-full">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col items-center justify-start w-[90%] gap-[25px]">
                      <Img
                        src="images/img_ellipse_20.png"
                        alt="circleimage"
                        className="h-[155px] w-[54%] md:h-auto sm:w-full rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-start w-full gap-2">
                        <Button
                          color="red_A400"
                          size="4xl"
                          className="sm:px-5 font-medium min-w-[300px] rounded-[33px] sm:min-w-full"
                        >
                          Mahesh Prasad
                        </Button>
                        <Text size="2xl" as="p" className="w-[94%] ml-[22px] md:ml-0 sm:ml-5 !text-red-600">
                          &quot;Vegetarian family restaurant Serving delicious and hygienic food since 2000&quot;
                        </Text>
                        <div className="flex flex-row justify-start w-[94%] md:w-full">
                          <div className="flex flex-row justify-start w-full">
                            <Text size="2xl" as="p" className="text-center">
                               Ashoka Cir, near RTO Office, Chamarajapura, Chamarajapuram Mohalla, Lakshmipuram, Mysuru,
                              Karnataka 570004
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-center ml-1 gap-[7px] md:ml-0">
                          <RatingBar
                            value={5}
                            isEditable={true}
                            color="#000000"
                            activeColor="#000000"
                            size={16}
                            className="flex justify-between w-[100px]"
                          />
                          <Text size="xs" as="p" className="h-[22px]">
                            4.5
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[2%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[76px] w-[6px] z-[1] bg-red-900_01 rounded-[50%]" />
                        <div className="h-[573px] w-[6px] mt-[-76px] bg-red-500_01 rounded-[50%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[469px] w-full mt-[26px] md:mt-0 relative">
                  <div className="flex flex-col items-start justify-start w-[15%] gap-2.5 bottom-[6%] right-0 left-0 m-auto absolute">
                    <Text as="p">₹80</Text>
                    <div className="flex flex-row justify-start w-[97%] md:w-full ml-2.5 gap-2.5 md:ml-0">
                      <Button shape="round" className="!text-white-A700 font-semibold min-w-[43px]">
                        4.7
                      </Button>
                      <div className="flex flex-row justify-start w-[81%] gap-2.5">
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-center w-full gap-[65px] left-0 bottom-0 right-0 top-0 m-auto md:gap-10 absolute">
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full p-4">
                      <Img
                        src="images/img_rectangle_17_9.png"
                        alt="butter_masala"
                        className="w-[98%] md:w-full md:h-[328px] object-cover rounded-[10px]"
                      />
                      <Heading as="h6" className="mt-[-2px]">
                        Butter Masala Dosa{" "}
                      </Heading>
                      <Text as="p">₹150</Text>
                      <div className="flex flex-row justify-start gap-2.5 p-2.5">
                        <Button shape="round" className="!text-white-A700 font-semibold min-w-[44px]">
                          4.4
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full p-4">
                      <Img
                        src="images/img_rectangle_17_10.png"
                        alt="image"
                        className="w-[98%] md:w-full md:h-[328px] object-cover rounded-[10px]"
                      />
                      <Heading as="h6">Bisibele Bath with Vada Soup</Heading>
                      <Text as="p" className="mt-px">
                        ₹150
                      </Text>
                      <div className="flex flex-row justify-start gap-2.5 p-2.5">
                        <Button shape="round" className="!text-white-A700 font-semibold min-w-[44px]">
                          4.6
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                    <Heading as="h6" className="mt-[343px] mb-[100px] md:mt-0">
                      Shavige Uppittu
                    </Heading>
                    <Img
                      src="images/img_rectangle_17_11.png"
                      alt="rectangle"
                      className="w-[16%] md:w-full md:h-[328px] mt-4 mb-[125px] md:mt-0 object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full p-4">
                      <Img
                        src="images/img_rectangle_17_12.png"
                        alt="image"
                        className="w-[98%] md:w-full md:h-[328px] object-cover rounded-[10px]"
                      />
                      <Text as="p" className="mt-[23px]">
                        ₹60
                      </Text>
                      <div className="flex flex-row justify-start gap-2.5 p-2.5">
                        <Button shape="round" className="!text-white-A700 font-semibold min-w-[44px]">
                          4.0
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[18%] md:w-full p-4">
                      <Img
                        src="images/img_rectangle_17_13.png"
                        alt="image"
                        className="w-[99%] md:w-full md:h-[328px] object-cover rounded-[10px]"
                      />
                      <Text as="p" className="mt-[23px]">
                        ₹120
                      </Text>
                      <div className="flex flex-row justify-start gap-2.5 p-2.5">
                        <Button shape="round" className="!text-white-A700 font-semibold min-w-[43px]">
                          4.2
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[97px]">
                          Subscribe
                        </Button>
                        <Button shape="round" className="font-semibold min-w-[108px]">
                          add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="flex justify-center items-center w-full mt-[295px] ml-[27px] md:ml-0 sm:ml-5">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                  <div className="flex flex-col items-start justify-start w-[25%] md:w-full gap-[38px]">
                    <div className="flex flex-row justify-start items-center w-[51%] md:w-full gap-[19px]">
                      <div className="flex flex-col items-center justify-center h-[45px] w-[45px] p-[3px] bg-red-A400">
                        <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row justify-start items-center w-full gap-2 z-[1]">
                              <Heading size="xs" as="p" className="!text-gray-100_03">
                                F
                              </Heading>
                              <Heading size="xs" as="p" className="!text-gray-100_03">
                                O
                              </Heading>
                            </div>
                            <div className="flex flex-row justify-start items-center w-full mt-[-1px] gap-[5px]">
                              <Heading size="xs" as="p" className="!text-gray-100_03">
                                D
                              </Heading>
                              <Heading size="xs" as="p" className="!text-gray-100_03">
                                O
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Heading size="xl" as="h4" className="!font-rubik">
                        Foodeli
                      </Heading>
                    </div>
                    <Text size="md" as="p" className="!text-blue_gray-900 !leading-[30px]">
                      Our job is to filling your tummy with delicious food and with fast and free delivery.
                    </Text>
                    <div className="flex flex-row justify-between w-[52%] md:w-full ml-3 md:ml-0">
                      <Img src="images/img_bx_bxl_instagram_alt.svg" alt="bxbxl_one" className="h-[24px] w-[24px]" />
                      <Img src="images/img_bx_bxl_facebook.svg" alt="bxbxlfacebook" className="h-[24px] w-[24px]" />
                      <Img
                        src="images/img_akar_icons_twitter_fill.svg"
                        alt="akaricons_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                  <ul className="flex flex-col items-start justify-start mt-[11px] md:mt-0">
                    <li>
                      <a href="#">
                        <Heading size="lg" as="h5" className="!font-rubik">
                          About
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-7">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[18px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Features
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[17px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          News
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[18px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Menu
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-start mt-3 md:mt-0">
                    <li>
                      <a href="#">
                        <Heading size="lg" as="h5" className="!font-rubik">
                          Company
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-7">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Why Foodeli?
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-4">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Partner With Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[19px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          FAQ
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[18px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Blog
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col items-start justify-start mt-3 md:mt-0">
                    <li>
                      <a href="#">
                        <Heading size="lg" as="h5" className="!font-rubik">
                          Support
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[26px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Account
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[19px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Support Center
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[15px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Feedback
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[18px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Contact Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="mt-[19px]">
                        <Text size="md" as="p" className="!text-blue_gray-900">
                          Accessibilty
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-col items-start justify-start mt-2.5 md:mt-0">
                    <a href="#">
                      <Heading size="lg" as="h5" className="!font-rubik">
                        Get in Touch
                      </Heading>
                    </a>
                    <Text size="lg" as="p" className="mt-[26px] !text-blue_gray-900">
                      Question or feedback?
                    </Text>
                    <Text size="lg" as="p" className="mt-4 !text-blue_gray-900">
                      We’d love to hear from you
                    </Text>
                    <Button
                      color="gray_400_01"
                      size="2xl"
                      variant="outline"
                      rightIcon={<Img src="images/img_carbonsend.svg" alt="carbon:send" />}
                      className="mt-[33px] gap-[23px] min-w-[196px] rounded-[25px] sm:min-w-full"
                    >
                      Email Address
                    </Button>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
