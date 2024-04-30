import { useSelector } from "react-redux";

function UserName() {
  const name = useSelector((state) => state.user.userName);
  if (!name) return null;
  return <div className="font-semibolb hidden text-sm md:block ">{name}</div>;
}

export default UserName;
