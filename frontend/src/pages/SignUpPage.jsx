import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthStore } from "../store/authUser"

const SignUpPage = () => {
  const { searchParams } = new URL(document.location)
  const emailValue =searchParams.get('email')
  // build state
  const [email, setEmail] = useState(emailValue||"")
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const { signup }=useAuthStore()


  const handleSignUp = (e) => {
    e.preventDefault();
    // console.log(email,password,userName);
    signup({email,password,username:userName})
  }

  return (
    <div className="h-screen w-full hero-bg">
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
				<Link to={"/"}>
					<img src='/netflix-logo.png' alt='logo' className='w-52' />
				</Link>
      </header>
      
      <div className="flex justify-center items-center mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Sign up
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            {/* email input */}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                Email
              </label>
              <input type='email'
								className='w-full px-3 py-2 mt-3 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								placeholder='you@example.com'
                id='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
							/>
            </div>
            {/* end of email input */}

            {/* username input */}
             <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-300 block">
                Username
              </label>
              <input type='text'
								className='w-full px-3 py-2 mt-3 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								placeholder='JohnDoe'
                id='username'
                 value={userName}
                onChange={(e)=>setUserName(e.target.value)}
							/>
            </div>
            {/* end of username input */}

            {/* password input */}
             <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
                Password
              </label>
              <input type='password'
								className='w-full px-3 py-2 mt-3 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
								placeholder='nhập mật khẩu ở đây'
                id='password'
                 value={password}
                onChange={(e)=>setPassword(e.target.value)}
							/>
            </div>
            {/* end of password input */}

            {/* sign up button */}
            <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
              Đăng kí

            </button>
            {/* end of sign up button */}
          </form>
          {/* switch to sign in when already have acc */}
      
          {/* end of acion */}
          {/*  */}
             <div className='text-center text-gray-400 '>
            Already had account ? {" "}
            <Link to={"/login"} className="hover:underline text-red-500">
              Đăng nhập
            </Link>
          </div>
          {/*  */}
        </div>

      </div>
    </div>
   
  )
}

export default SignUpPage