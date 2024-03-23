import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        <main className="flex flex-row min-h-screen">
          <aside className="flex flex-col items-center w-[270px] h-screen bg-[#F2EAE1]">
            <div className="w-[219px] h-[24px]">
              <h1 className="text-center mt-4 font-extrabold">
                STUDENT COMPANION
              </h1>
            </div>
            <div className="w-[141px] h-[214px] pt-16">
              <Image
                className="rounded-full"
                src="/pexels-photo-23790041.png"
                alt="profile photo"
                width={128}
                height={128}
              />
              <h2 className="text-center font-extrabold pt-3">Alvin Mutebi</h2>
              <p className="text-center font-semibold text-[#FEAF00]">Admin</p>
            </div>
            <div className="pt-20 flex flex-col items-center w-[193px] h-[497px]">
              <div className="flex flex-row items-center justify-center w-[193px] h-[41px] text-center bg-[#FEAF00] rounded-md">
                <div className="mr-5">
                  <Image
                    className=""
                    src="/home-lg-alt1.png"
                    alt="home-icon"
                    width={19}
                    height={17}
                  />
                </div>
                <div>Home</div>
              </div>
              <div className="flex flex-row items-center justify-center w-[193px] h-[41px] text-center mt-10">
                <div className="mr-5">
                  <Image
                    className=""
                    src="/bookmark1.png"
                    alt="home-icon"
                    width={12}
                    height={15}
                  />
                </div>
                <div>Course</div>
              </div>
              <div className="flex flex-row items-center justify-center w-[193px] h-[41px] text-center mt-10">
                <div className="mr-5">
                  <Image
                    className=""
                    src="/graduation-cap1.png"
                    alt="home-icon"
                    width={20}
                    height={16}
                  />
                </div>
                <div>Students</div>
              </div>
              <div className="flex flex-row items-center justify-center w-[193px] h-[41px] text-center mt-10">
                <div className="mr-5">
                  <Image
                    className=""
                    src="/usd-square1.png"
                    alt="home-icon"
                    width={15}
                    height={17}
                  />
                </div>
                <div>Payments</div>
              </div>
              <div className="flex flex-row items-center justify-center w-[193px] h-[41px] text-center mt-10">
                <div className="mr-5">
                  <Image
                    className=""
                    src="/file-chart-line1.png"
                    alt="home-icon"
                    width={13}
                    height={17}
                  />
                </div>
                <div>Reports</div>
              </div>
              <div className="flex flex-row items-center justify-center w-[193px] h-[41px] text-center mt-10">
                <div className="mr-5">
                  <Image
                    className=""
                    src="/sliders-v-square1.png"
                    alt="home-icon"
                    width={12}
                    height={15}
                  />
                </div>
                <div>Settings</div>
              </div>
            </div>
          </aside>
          <div className="flex-grow bg-slate-50">
            <div className="flex items-center justify-between border-2 h-[60px] px-6">
              <div>
                <Image
                  src="/caret-circle-down1.png"
                  alt="Menu Icon"
                  width={18}
                  height={18}
                />
              </div>
              <div className="flex-1"></div>
              <div className="flex items-center border-2 rounded-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 w-full outline-none"
                />
                <button className="p-2">
                  <Image
                    src="/search1.png"
                    alt="Search"
                    width={18}
                    height={18}
                  />
                </button>
              </div>
              <div className="ml-4">
                <Image
                  src="/bell1.png"
                  alt="Notifications"
                  width={18}
                  height={18}
                />
              </div>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
