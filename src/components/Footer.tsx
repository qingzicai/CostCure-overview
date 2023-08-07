function Footer() {
  return (
    <footer className="bg-gray-400 text-white py-4 w-full mt-20}">
      <div className="flex justify-between container mx-auto text-center">
        <div className="flex mb-4 gap-2">
          <a href="/" className="text-gray-600 hover:text-blue-500">Home</a> |
          <a href="/about" className="text-gray-600 hover:text-blue-500">About</a> |
          <a href="/contact" className="text-gray-600 hover:text-blue-500">Contact</a> |
          <a href="/login" className="text-gray-600 hover:text-blue-500">Login</a>
        </div>
        <div className="mb-2">
          <a href="https://www.github.com" className="mx-2 text-blue-700 hover:text-blue-500">
            Github
          </a>
          <a href="https://www.instgram.com" className="mx-2 text-blue-700 hover:text-blue-500">
            Instgram
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} CareCompare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
