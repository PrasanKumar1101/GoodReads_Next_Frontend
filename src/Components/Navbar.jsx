import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/Redux/Slices/authSlice";
import { useEffect } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn, username } = useSelector((state) => state.auth);
  function onLogout() {
    dispatch(logout());
    router.push("/Signin");
  }
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     dispatch(login(user));
  //   }
  // }, []);

  return (
    <div className="navbar bg-neutral text-neutral-content w-full px-200">
      {/* Left */}
      <div className="flex-1">
        <Link href="/Dashboard" className="btn btn-success btn-ghost text-xl">
          BookShelf
        </Link>
      </div>

      {/* Right */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard/shelves">Shelves</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link href="/Dashboard" className="font-semibold text-success">
                Hi, {username}
              </Link>
            </li>
          )}
          <li>
            <details>
              <summary>Options</summary>
              <ul className="p-2 bg-base-100 text-black rounded-box">
                {isLoggedIn ? (
                  <li>
                    <button
                      href="/Signin"
                      onClick={onLogout}
                      className="text-white bg-red-400 hover:bg-red-500"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <ul>
                    <li>
                      <Link
                        href="/Signin"
                        className="text-white bg-red-400 hover:bg-red-500 my-4"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Signup"
                        className="text-white bg-red-400 hover:bg-red-500"
                      >
                        Signup
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
