function LoginPage() {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <section className="flex flex-col justify-center items-center md:flex-row h-screen ">
            <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img
                    src="src/assets/women-illustration.jpg"
                    alt="women illustration" className="w-full h-full object-cover"/>
            </div>
            <div
                className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-xl font-bold leading-tight mt-12 font-mono text-center">CareCompare</h1>
                    <form className="mt-6" onSubmit={handleFormSubmit}>
                        <div className={'font-mono'}>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="" id="" placeholder="Enter Email Address"
                                   className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                   autofocus autocomplete required/>
                        </div>
                        <div className="mt-4 font-mono">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" name="" id="" placeholder="Enter Password" minlength="6"
                                   className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                   required/>
                        </div>
                        <div className="text-right mt-2 font-mono">
                            <a href="#"
                               className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot
                                Password?</a>
                        </div>
                        <button type="submit" className="font-mono w-full block bg-blue-800 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                            Log In
                        </button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full"/>
                    <button type="button"
                            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google">
                                <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                                <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                            </svg>
                            <span className="ml-4 font-mono">Log in with Google</span>
                        </div>
                    </button>
                    <p className="mt-8 font-mono text-center">Need an account?<br/>
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold m-2">
                            Register
                        </a>
                    </p>
                    <p className="text-sm text-gray-500 mt-12">&copy; 2023 CareCompare - All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;