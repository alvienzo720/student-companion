import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-row pt-6 ml-6 space-x-4">
      <div className="flex flex-col items-start justify-between w-[255px] h-[157px] bg-green-200 rounded-md p-4">
        <div>
          <Image
            src="/graduation-cap2.png"
            alt="Graduation cap"
            width={48}
            height={38}
          />
        </div>
        <h2 className="text-md font-medium mt-2 mb-2">Students</h2>
        <div className="text-3xl font-bold self-end">243</div>
      </div>
      <div className="flex flex-col items-start justify-between w-[255px] h-[157px] bg-[#e1b0ca] rounded-md p-4">
        <div>
          <Image
            src="/bookmark2.png"
            alt="Graduation cap"
            width={28}
            height={35}
          />
        </div>
        <h2 className="text-md font-medium mt-2 mb-2">Course</h2>
        <div className="text-3xl font-bold self-end">13</div>
      </div>
      <div className="flex flex-col items-start justify-between w-[255px] h-[157px] bg-[#ccb78a] rounded-md p-4">
        <div>
          <Image
            src="/usd-square2.png"
            alt="Graduation cap"
            width={28}
            height={35}
          />
        </div>
        <h2 className="text-md font-medium mt-2 mb-2">Payments</h2>
        <div className="text-3xl font-bold self-end">13000</div>
      </div>
      <div className="flex flex-col items-start justify-between w-[255px] h-[157px] bg-[#FEAF00] rounded-md p-4">
        <div>
          <Image
            src="/Vector.png"
            alt="Graduation cap"
            width={28}
            height={35}
          />
        </div>
        <h2 className="text-md font-medium mt-2 mb-2 text-white">Payments</h2>
        <div className="text-3xl font-bold self-end">13000</div>
      </div>
      <div className="flex flex-col items-start justify-between w-[255px] h-[157px] bg-[#FEAF00] rounded-md p-4">
        <div>
          <Image
            src="/Vector.png"
            alt="Graduation cap"
            width={28}
            height={35}
          />
        </div>
        <h2 className="text-md font-medium mt-2 mb-2 text-white">Payments</h2>
        <div className="text-3xl font-bold self-end">13000</div>
      </div>
      <div className="flex flex-col items-start justify-between w-[255px] h-[157px] bg-[#FEAF00] rounded-md p-4">
        <div>
          <Image
            src="/Vector.png"
            alt="Graduation cap"
            width={28}
            height={35}
          />
        </div>
        <h2 className="text-md font-medium mt-2 mb-2 text-white">Payments</h2>
        <div className="text-3xl font-bold self-end">13000</div>
      </div>
    </div>
  );
};

export default Dashboard;
