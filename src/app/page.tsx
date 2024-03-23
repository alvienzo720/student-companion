export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex justify-center items-center flex-col bg-white p-10 rounded-2xl">
        <div>
          <h1 className="text-3xl text-center mb-7 font-extrabold">
            <span className="text-[#FEAF00] h-5">I</span> STUDENT COMPANION
          </h1>
        </div>
        <div>
          <h2 className="text-2xl text-center mb-2 font-semibold font-Montserrat">
            SIGN IN
          </h2>
          <p className="text-normal text-center text-[#6C6C6C]">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="mt-7 w-[415px] h-[71px]">
          <span className="text-[#6C6C6C] text-base">Email</span>
          <br />
          <input
            className="rounded-sm border-2 w-[400px] h-[44px]"
            type="text"
            placeholder="  Enter your email"
          />
        </div>
        <div className="mt-7 mb-7 w-[415px] h-[71px]">
          <span className="text-[#6C6C6C] text-base">Password</span>
          <br />
          <input
            className="rounded-sm border-2 w-[400px] h-[44px]"
            type="password"
            placeholder="  Enter your password"
          />
        </div>
        <div className="flex justify-center items-center text-center w-[415px] h-[55px] bg-[#FEAF00] text-white rounded-md">
          <button type="submit">SIGN IN</button>
        </div>

        <div className="mt-10 text-center">
          <p>
            Forgot Your password?{" "}
            <a className="text-[#FEAF00] underline" href="/resetPassword">
              Reset Password
            </a>
          </p>
          <p>
            Create Account{" "}
            <a className="text-[#FEAF00] underline" href="/sign-up">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
