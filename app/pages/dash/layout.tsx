
import "./globals.css";
import Image from "next/image";
import Nav from "../../../components/nav"

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html  lang="en">
      <body  >
        <div className="w-full h-full overflow-y-scroll overflow-x-hidden  flex md:flex-row flex-col">
          {/* Sidebar Section */}
          <div className="w-screen   md:w-[20%]  lg:w-[20%] overflow-x-visible   md:overflow-hidden md:overflow-y-scroll flex flex-col   gap-4 md:items-center   py-[20px] bg-slate-50 sidebar">
            {/* Logo */}
            <div className="md:ml-[15%] gap-2  w-max-[80%]  mr-auto flex justify-center items-center text-[24px] lg:text-[30px] font-bold">
              <Image src="/svg/logo.svg" alt="logo" width={40} height={40} priority />
              Boostify
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-row  md:flex-col overflow-x-scroll overflow-y-hidden md:overflow-visible justify-start items-center w-screen md:h-min h-min md:w-[95%]  md:gap-3 ">
           <Nav></Nav>
            </div>
           

            {/* Footer Links */}
            <div className="hidden md:flex  mt-auto flex-row md:flex-col overflow-x-scroll md:overflow-visible justify-start items-center w-screen h-[120px] md:h-min md:w-[95%] md:gap-3 ">
              <div className=" mr-auto text-[12px] lg:text-[20px] w-[100%]  rounded-[12px] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Terms & Conditions
              </div>
              <div className=" mr-auto text-[12px] lg:text-[20px] w-[90%]   rounded-[12px] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Support
              </div>
              <div className=" mr-auto text-[12px] lg:text-[20px]  w-[90%]  rounded-[12px] mb-[2%] text-[#D50C0C] p-[7px] px-[25px] cursor-pointer transition-all duration-300">
                Log out
              </div>
            </div>
          </div>

          {/* Main Dashboard Section */}
          <div className=" w-screen md:w-[80%] h-min md:h-full bg-[#F5F5F6] flex flex-col justify-center items-center">
            {/* Top Search Bar */}
            <div className="h-[80px] w-full bg-white border flex items-center justify-end p-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-[300px] h-[40px] rounded-lg bg-gray-200 text-gray-600 placeholder-gray-500 px-4 focus:outline-none focus:ring-2 mr-[8%] focus:ring-gray-400"
              />
            </div>

            {/* Dynamic Content */}
            <div className="overflow-x-scroll    w-[100%] h-min md:h-full">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
