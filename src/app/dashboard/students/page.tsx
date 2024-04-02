import Image from "next/image";
import React from "react";

const StudentsPage = () => {
  return (
    <section>
      <div className="flex items-center justify-between border-2 h-[60px] px-6">
        <div>
          <h1 className="font-[20px]">Students List</h1>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center border-2 rounded-md"></div>
        <div className="ml-4 mr-5">
          <Image src="/sort1.png" height={22} width={14} alt="sorting icon" />
        </div>
        <div className="bg-[#FEAF00] p-2 w-[199px] h-[44px] text-center justify-center font-[14px] text-white rounded-md">
          <button>ADD STUDENT</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-6">
        <div>
          <table className=" text-[#ACACAC] font-semibold">
            <tr className="text-center flex items-stretch">
              <th className="">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Enroll Number</th>
              <th>Date of Admission</th>
              <th></th>
            </tr>
          </table>
        </div>
        <div className="pt-4 h-[85px] w-[1110px] rounded-md text-center flex flex-row items-stretch">
          <tr>
            <td className="rounded-sm">
              <Image
                src="/pexels-photo-23790041.png"
                width={65}
                height={55}
                alt="profile"
              />
            </td>
            <td>alvin Mutebi</td>
            <td>mutebi@gamil.com</td>
            <td>07550096655</td>
            <td>122h23324</td>
            <td>08-Dec-2021</td>
            <td>Edit Icon</td>
            <td>Delete Icon</td>
          </tr>
        </div>
      </div>
    </section>
  );
};

export default StudentsPage;
