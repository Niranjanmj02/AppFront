import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Input } from "../../components";

export default function LoginPagePage() {
  return (
    <>
      <Helmet>
        <title>Niranjan's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[34px] md:gap-5 bg-white-A700">
        <div className="flex flex-col items-center justify-end w-[48%] md:w-full pt-[174px] pl-14 md:pt-5 md:pl-5 bg-gray-800">
          <Img
            src="images/img_game_icons_food_truck.svg"
            alt="gameiconsfood"
            className="h-[512px] w-[512px] mt-[338px]"
          />
        </div>
        <div className="flex flex-col items-center justify-end w-[50%] md:w-full p-11 md:p-5 bg-white-A700">
          <div className="flex flex-col items-center justify-start w-[97%] md:w-full mt-[101px] mb-[43px] gap-10">
            <div className="flex flex-col items-center justify-start w-[26%] md:w-full pb-[3px]">
              <a href="#" className="z-[1]">
                <Text size="5xl" as="p" className="!font-righteous">
                  Login
                </Text>
              </a>
              <div className="h-px w-[96%] mt-[-4px] bg-cyan-900" />
            </div>
            <div className="flex flex-row justify-start w-[81%] md:w-full">
              <div className="flex flex-row sm:flex-col justify-start w-full gap-[3px] sm:gap-5">
                <Text size="3xl" as="p" className="mb-0.5 !font-righteous text-center">
                  Dont have an account?{" "}
                </Text>
                <Text size="3xl" as="p" className="!font-righteous text-center underline">
                  Signup here
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row justify-start">
                <Text size="3xl" as="p" className="!text-gray-900_dd tracking-[0.40px] !font-medium">
                  Contact/Email
                </Text>
              </div>
              <Input
                shape="round"
                type="text"
                name="email"
                placeholder="Name"
                className="w-full sm:w-full mt-px tracking-[0.50px] font-roboto z-[1]"
              />
              <div className="flex flex-row justify-start items-center mt-[-3px] gap-[18px]">
                <Text size="3xl" as="p" className="!text-gray-900_dd tracking-[0.40px] !font-medium">
                  Password
                </Text>
                <Img src="images/img_vector_blue_gray_900_01_21x16.svg" alt="vector_one" className="h-[21px]" />
              </div>
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    color="white_A700"
                    size="xs"
                    variant="fill"
                    shape="round"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full md:h-auto tracking-[0.40px] border-gray-900_14 border border-solid !rounded-[26px]"
                  />
                  <Img src="images/img_inputs.svg" alt="inputs_one" className="h-[53px] mt-[-52px] rounded-[26px]" />
                </div>
              </div>
              <a href="#" className="mt-[41px] ml-[289px] md:ml-5">
                <Text />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
