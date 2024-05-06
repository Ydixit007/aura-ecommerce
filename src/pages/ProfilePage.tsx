import Navbar from "@/components/Navbar";
import { User } from "@/types/api-types";
import { Link } from "react-router-dom";

interface PropsType {
  user: User | null;
}
const ProfilePage = ({ user }: PropsType) => {
  if (user) {
    return (
      <>
        <Navbar user={user} />
        <div className="pt-20 h-screen w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center">
          <div className="profile h-[80%] flex-1 max-w-md rounded-[2rem] border-2 border-gray-200 bg-white px-8 py-6 flex flex-col">
            <div className="info flex items-center gap-5">
              <img
                className="max-w-16 rounded-full border-2 border-primary"
                src={user.photo}
                alt="profile image"
              />
              <div className="">
                <h3 className="name text-lg font-medium">{user.name}</h3>
                <h6 className="email text-sm text-gray-400">{user.email}</h6>
              </div>
            </div>
          </div>
          <div className="profile h-[80%] flex-1"></div>
        </div>
      </>
    );
  } else {
    return (
      <div className="w-full h-screen flex justify-center items-center flex-col gap-2">
        <p className="font-medium">Please login to view profile</p>
        <Link className="btn" to={"/login"}>
          Login here
        </Link>
      </div>
    );
  }
};

export default ProfilePage;
