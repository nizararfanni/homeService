function Footer() {
  return (
    <div className="footer bg-cyan-400 shadow mt-20 ">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="rar">
        <p className="py-4">
          &copy; Copyright <span className="font-bold">NZhouse</span>
        </p>
        </div>
        <div className="social-footer items-center sm:gap-7 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-linkedin-box-fill text-2xl"></i>
          <i class="ri-instagram-line text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
