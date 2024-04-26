import LoginComponent from "../LoginComponent";

export const Login = () => {
  return (
    <>
      <div
        className="relative h-full w-full
        bg-gradient-to-b
        from-background to-pink
      flex-col items-center justify-center flex overflow-y-auto"
      >
        <div className="w-3/4 h-3/4 bg-background/50 rounded-xl flex justify-center items-center">
          <LoginComponent />
        </div>
      </div>
    </>
  );
};

export default Login;
