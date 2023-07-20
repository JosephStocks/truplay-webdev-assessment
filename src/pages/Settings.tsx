import { ChevronRightIcon, PencilIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useTitle } from "../utils";

const Settings = () => {
  useTitle("Settings");

  return (
    <main className="flex flex-col max-w-screen-md mx-auto px-4">
      <h1 className="text-4xl mx-auto my-20 font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-heading-left to-text-heading-right leading-relaxed">
        Settings
      </h1>
      <div className="bg-foreground rounded-2xl">
        <div className="py-6 px-8">
          <h2 className="text-3xl">Account</h2>
          <div className="flex justify-between mt-6">
            <div>
              <h3>Email Address</h3>
              <p className="text-text-faint">sample.email@gmail.com</p>
            </div>
            <button className="bg-gradient-to-r from-button-gradient-green via-button-gradient-blue to-button-gradient-green bg-[position:_0%] bg-[size:_200%] hover:bg-[position:_100%] transition-all duration-200 flex items-center justify-center rounded-full px-3">
              <span className="ml-1 px-1">Verify Email</span>
              <ChevronRightIcon className="h-8 w-8" />
            </button>
          </div>
          <div>{/* checkbox */}</div>
        </div>
        <hr className="h-[3px] bg-background border-0"></hr>
        <div className="flex justify-between py-6 px-8 items-center">
          <div>
            <h3>Password</h3>
            <p className="text-text-faint">stars</p>
          </div>
          <button className="text-text-transparent-button flex items-center hover:backdrop-brightness-110 transition-all duration-200 ease-in-out p-2 rounded-md">
            Change Password <PencilIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
      <div className="mt-10 bg-foreground rounded-2xl">
        <div className="py-6 px-8">
          <h2 className="text-3xl">Subscriptions</h2>
          <div className="flex justify-between mt-6 items-center">
            <div>
              <h3>Current Plan</h3>
              <p className="text-text-faint">Annual</p>
            </div>
            <button className="text-text-transparent-button flex items-center hover:backdrop-brightness-110 transition-all duration-200 ease-in-out px-2 py-1 rounded-md">
              <span className="px-1 ml-1">Manage</span>
              <ChevronRightIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
        <hr className="h-[3px] bg-background border-0"></hr>
        <div className="py-6 px-8">
          <div>
            <h3>Next Billing Date</h3>
            <p className="text-text-faint">June 3, 2023</p>
          </div>
        </div>
      </div>
      <Link
        to="/login"
        className="bg-red rounded-md p-2 px-3 flex-grow-0 place-self-center mt-4"
      >
        Log out
      </Link>
    </main>
  );
};

export default Settings;
