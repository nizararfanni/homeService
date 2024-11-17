import React from "react";
import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";
import rm1 from "../assets/images/rm1.jpeg"
import rm2 from "../assets/images/rm2.jpg"
import rm3 from "../assets/images/rm3.jpeg"
import rm4 from "../assets/images/rm4.jpeg"
import rm5 from "../assets/images/rm5.jpeg"


const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4 ">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-32 gap-20">
          <div className="box ">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Jual Rumah authentic
              <span className="font-bold text-sky-400 underline hover:text-sky-600">NzHouse</span>
            </h1>
            <p className="text-base/8 mb-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, accusamus repellat deleniti rem nihil animi officiis
              maxime minus. Placeat quisquam natus animi sapiente debitis alias
              fugit impedit tempore doloribus perspiciatis?
            </p>
            <a
              href="#"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              about me <i className="ri-eye-line ms-1 "></i>
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="hero image"
              className="md:full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center ms:gap-20 gap-10 pt-20 md:pt-20 pt-32 ">
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="about image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Jual Rumah authentic
              <span className="font-bold text-sky-400 underline">NzHouse</span>
            </h1>
            <p className="text-base/loose">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis, accusamus repellat deleniti rem nihil animi officiis
              maxime minus. Placeat quisquam natus animi sapiente debitis alias
              fugit impedit tempore doloribus perspiciatis?
            </p>
          </div>
        </div>
        <div className="services pt-32">
          <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            service
          </h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white">
                <h3 className="text-xl font-bold text-white mt-6 mb-2">
                  Service name 1
                </h3>
                <p className="text-white text-base/loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  a sapiente officiis iste accusamus expedita.
                </p>
              </i>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white">
                <h3 className="text-xl font-bold text-white mt-6 mb-2">
                  Service name 2
                </h3>
                <p className="text-white text-base/loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  a sapiente officiis iste accusamus expedita.
                </p>
              </i>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white">
                <h3 className="text-xl font-bold text-white mt-6 mb-2">
                  Service name 3
                </h3>
                <p className="text-white text-base/loose">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  a sapiente officiis iste accusamus expedita.
                </p>
              </i>
            </div>
          </div>
        </div>
        <div className="proyek pt-32">
          <h1 className=" text-center lg:text-5xl/tight text-3xl font-medium mb-7">
            projek
          </h1>
          <p className="text-black text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a
            sapiente officiis iste accusamus expedita.
          </p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img src={rm1} alt="prjek-1" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold text-black mt-6 mb-2">
                Proyek name 1
              </h3>
              <p className="text-black text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda commodi illum facere optio non consequuntur.
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={rm2} alt="prjek-1"  className="w-full h-[220px]"  />
              <h3 className="text-xl font-bold text-black mt-6 mb-2">
                Proyek name 2
              </h3>
              <p className="text-black text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda commodi illum facere optio non consequuntur.
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={rm3} alt="prjek-1"  className="w-full h-[220px]" />
              <h3 className="text-xl font-bold text-black mt-6 mb-2">
                Proyek name 3
              </h3>
              <p className="text-black text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda commodi illum facere optio non consequuntur.
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={rm4} alt="prjek-1"  className="w-full h-[220px]" />
              <h3 className="text-xl font-bold text-black mt-6 mb-2">
                Proyek name 4
              </h3>
              <p className="text-black text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda commodi illum facere optio non consequuntur.
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img src={rm5} alt="prjek-1"  className="w-full h-[220px]"  />
              <h3 className="text-xl font-bold text-black mt-6 mb-2">
                Proyek name 5
              </h3>
              <p className="text-black text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda commodi illum facere optio non consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
