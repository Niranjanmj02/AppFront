import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, Heading, Img, Radio } from "../../components";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Niranjan's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[82px] p-9 md:gap-10 sm:p-5 bg-red-800">
          <div className="h-[2px] w-[7%] mt-[33px] ml-[3px] sm:ml-0 sm:mt-0 rotate-[-180deg] bg-white-A700" />
          <Text size="6xl" as="p" className="mb-5 !text-white-A700 !font-righteous">
            My Cart
          </Text>
        </div>
        <div className="flex flex-row justify-end w-full p-[11px] bg-gray-100_01">
          <div className="flex flex-col items-center justify-start w-[95%] mb-[123px] mr-7 gap-[74px] sm:mr-5">
            <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10 md:px-5 max-w-[1322px]">
              <div className="flex flex-col w-[46%] md:w-full pb-[45px] gap-[49px] md:pb-5">
                <div className="flex flex-row justify-center w-[99%] md:w-full mr-[9px]">
                  <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
                    <Img
                      src="images/img_rectangle_17_328x283.png"
                      alt="image"
                      className="w-[48%] md:h-auto sm:w-full object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[47%] sm:w-full mt-[18px] gap-[143px] sm:mt-0">
                      <div className="flex flex-col items-start justify-start w-[92%] md:w-full ml-6 md:ml-0 sm:ml-5">
                        <div className="flex flex-row justify-between items-center w-full">
                          <Heading as="h1">Mutton Biriyani </Heading>
                          <Button color="red_600_02" size="xs" className="w-[27px] rounded-[13px]">
                            <Img src="images/img_back.svg" />
                          </Button>
                        </div>
                        <Text as="p" className="mt-[-3px]">
                          ₹230
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-[88%] md:w-full">
                        <div className="flex flex-row justify-between items-center w-[50%]">
                          <div className="h-[48px] w-[50%] relative">
                            <div className="justify-center h-[48px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 bg-red-900_6c absolute rounded-[50%]" />
                            <Img
                              src="images/img_group_1843_red_900_1x18.svg"
                              alt="image_one"
                              className="justify-center h-px left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                          </div>
                          <Heading size="s" as="h2" className="!text-red-900 !font-sen capitalize">
                            2
                          </Heading>
                        </div>
                        <div className="h-[48px] w-[25%] relative">
                          <div className="justify-center h-[48px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 bg-red-900_6c absolute rounded-[50%]" />
                          <Img
                            src="images/img_group_1843_red_900.svg"
                            alt="image_two"
                            className="justify-center h-[14px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle_17_1.png"
                  alt="rectangle"
                  className="w-[48%] md:w-full md:h-[328px] mr-[319px] md:mr-5 object-cover rounded-[10px]"
                />
                <Button color="red_600_02" size="xs" className="w-[5%] ml-[575px] md:ml-5 rounded-[13px]">
                  <Img src="images/img_back.svg" />
                </Button>
                <Heading as="h3" className="ml-[340px] mr-[150px] md:mx-5">
                  Biriyani Rice{" "}
                </Heading>
                <div className="flex flex-row justify-end w-[6%] md:w-full ml-[364px] mr-[204px] md:mx-5">
                  <Text as="p">₹100</Text>
                </div>
                <div className="flex flex-row justify-end w-[40%] md:w-full ml-80 mr-11 md:mx-5">
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row justify-between items-center w-[50%]">
                      <div className="h-[48px] w-[50%] relative">
                        <div className="justify-center h-[48px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 bg-red-900_6c absolute rounded-[50%]" />
                        <Img
                          src="images/img_group_1843_red_900_1x18.svg"
                          alt="image"
                          className="justify-center h-px left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                      </div>
                      <Heading size="s" as="h4" className="!text-red-900 !font-sen capitalize">
                        1
                      </Heading>
                    </div>
                    <div className="h-[48px] w-[25%] relative">
                      <div className="justify-center h-[48px] w-full left-0 bottom-0 right-0 top-0 m-auto opacity-0.2 bg-red-900_6c absolute rounded-[50%]" />
                      <Img
                        src="images/img_group_1843_red_900.svg"
                        alt="image_one"
                        className="justify-center h-[14px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[29%] md:w-full mt-[13px] gap-[19px] py-11 md:mt-0 md:py-5 bg-gray-100_01">
                <div className="flex flex-row justify-center w-full p-1 rounded-bl-[10px] rounded-br-[10px] shadow-md">
                  <Heading size="lg" as="h5" className="!text-black-900_d8 tracking-[-0.41px] !font-outfit">
                    Payment Methods
                  </Heading>
                </div>
                <div className="flex flex-col items-start justify-start w-[83%] md:w-full mb-[111px]">
                  <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                    <Heading
                      size="s"
                      as="h6"
                      className="ml-[5px] md:ml-0 !text-black-900_d8 tracking-[-0.41px] !font-outfit !font-semibold"
                    >
                      Online Payment
                    </Heading>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-row justify-start items-center w-[64%] gap-3">
                        <div className="h-[20px] w-[20px] border-gray-400 border-2 border-solid bg-white-A700 rounded-[50%]" />
                        <Radio
                          shape="round"
                          value="pay1"
                          name="pay"
                          label="Pay"
                          className="pl-[7px] pr-3.5 gap-[7px] py-2 text-black-900_01 font-outfit text-center font-medium"
                        />
                        <Text size="md" as="p" className="!text-black-900_d8 !font-outfit">
                          Apple Pay
                        </Text>
                      </div>
                      <Img
                        src="images/img_restore_from_trash.svg"
                        alt="restorefrom_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-full mt-[34px]">
                    <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                      <Heading
                        size="s"
                        as="h6"
                        className="ml-[5px] md:ml-0 !text-black-900_d8 tracking-[-0.41px] !font-outfit !font-semibold"
                      >
                        Other Payment Methods
                      </Heading>
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-start items-center w-[62%] gap-3">
                          <div className="h-[20px] w-[20px] border-gray-400 border-2 border-solid bg-white-A700 rounded-[50%]" />
                          <div className="flex flex-row justify-center w-[40%] p-[3px] border-black-900_d8 border border-solid rounded-[10px]">
                            <Img
                              src="images/img_image_14.png"
                              alt="imagefourteen"
                              className="w-[69%] md:h-auto sm:w-full object-cover"
                            />
                          </div>
                          <Text size="md" as="p" className="!text-black-900_d8 !font-outfit">
                            1234 ****
                          </Text>
                        </div>
                        <Img src="images/img_restore_from_trash.svg" alt="restorefrom" className="h-[24px] w-[24px]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[50%] md:w-full mt-8 gap-[9px]">
                    <Heading
                      size="s"
                      as="h6"
                      className="ml-[5px] md:ml-0 !text-black-900_d8 tracking-[-0.41px] !font-outfit !font-semibold"
                    >
                      Default
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-3">
                      <div className="flex flex-col items-center justify-start h-[20px] w-[20px] p-[3px] border-gray-400 border-2 border-solid bg-white-A700 rounded-[50%]">
                        <div className="h-[14px] w-[14px] bg-blue_gray-900_01 rounded-[50%]" />
                      </div>
                      <Button
                        color="black_900_d8"
                        size="md"
                        variant="outline"
                        className="font-outfit font-medium min-w-[122px] rounded-[10px]"
                      >
                        Cash on delivery
                      </Button>
                    </div>
                  </div>
                  <Button
                    color="deep_orange_900"
                    size="sm"
                    className="mt-[54px] sm:px-5 font-outfit font-medium min-w-[303px] rounded-[10px] sm:min-w-full"
                  >
                    Make Default
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full p-[34px] sm:p-5 rounded-tl-[24px] rounded-tr-[24px] bg-gradient1">
              <div className="flex flex-col items-start justify-start w-[89%] mb-[135px] gap-[37px]">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                    <div className="flex flex-row justify-between w-full mx-auto md:px-5 max-w-[1104px]">
                      <Text size="xs" as="p" className="mb-px !text-blue_gray-900_01 !font-sen uppercase !font-normal">
                        Delivery Address
                      </Text>
                      <Text
                        size="xs"
                        as="p"
                        className="!text-blue_gray-900_01 !font-sen uppercase !font-normal underline"
                      >
                        EDIT
                      </Text>
                    </div>
                    <Input
                      color="gray_100"
                      size="md"
                      variant="fill"
                      name="address"
                      placeholder="2118 Thornridge Cir. Syracuse"
                      className="w-full sm:w-full font-sen rounded-[10px]"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[30%] md:w-full">
                  <Text size="xs" as="p" className="!text-black-900 !font-sen uppercase !font-normal">
                    Total:{" "}
                  </Text>
                  <Text size="3xl" as="p" className="!text-gray-900 !font-sen capitalize text-center">
                    ₹330
                  </Text>
                </div>
              </div>
            </div>
            <Button
              color="yellow_900"
              size="7xl"
              className="sm:px-5 tracking-[0.09px] font-nunito font-semibold min-w-[435px] rounded-[12px] sm:min-w-full"
            >
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
