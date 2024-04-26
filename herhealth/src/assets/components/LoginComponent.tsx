import ConnectToWallet from "./ConnectToWallet";

export const LoginComponent = () => {
  return (
    <>
      <div className="w-5/6 h-5/6 bg-background/75 rounded-xl">
        <div className="w-full h-full flex-col gap-3 flex justify-center items-center">
          <h1 className="text-4xl text-blue font-thin text-primary">
            Welcome to HerHealth
          </h1>
          <p className="text-lg text-blue text-primary">
            Please connect your wallet to login
          </p>
          <div className="w-full flex flex-row justify-center items-center gap-3 ">
            <button className="w-1/4 bg-blue text-background font-thin rounded-xl p-2">
              Register
            </button>
            <ConnectToWallet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
