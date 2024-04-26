import { useEffect, useState } from "react";
import { getUserContract } from "./../../abis/user.contract";
// import { useNavigate } from "react-router-dom";
import { useUserStore } from "./../../providers/UserProvider";
const { ethereum } = window;

export default function ConnectToWallet() {
  const { user, setUser } = useUserStore();
  const [account, setAccount] = useState("");

  // const navigate = useNavigate();

  const connectToMetamask = async () => {
    try {
      const accounts = await ethereum?.request?.({
        method: "eth_requestAccounts"
      });
      setAccount(accounts[0]);
      const userContract = await getUserContract(account);
      const user = await userContract.getUser(account);
      if (!user) {
        console.log("not registered");
      }
      console.log("user", user);
      setUser(user);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    if (!user) {
      connectToMetamask();
    }
  }, [user]);

  return (
    <button
      className="w-1/4 bg-pink text-background font-thin rounded-xl p-2"
      onClick={() => connectToMetamask()}
    >
      Connect
    </button>
  );
}
