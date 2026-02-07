import React from "react";
import qrCode from "../assets/images/qr-code.png";
import googlePlay from "../assets/images/google-app.avif";
import appStore from "../assets/images/app-st.avif";
import eatProteinImg from "../assets/images/eat_logo.jpg";

function DownloadApp() {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden text-white px-4 sm:px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 shadow-lg"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* === Text Section === */}
      <div className="text-center md:text-left max-w-lg relative z-10">
        {/* Logo */}
        <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
          <img
            src={eatProteinImg}
            alt="Eat Protein Logo"
            className="h-12 sm:h-14 md:h-16 w-auto rounded-xl border-4 border-[#FFFFFF]"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
          Get Our App Now!
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg mb-6 text-gray-200">
          Order your favorite protein foods, meals, and drinks on the go.{" "}
          <br className="hidden sm:block" />
          Scan the QR code or download from your favorite store.
        </p>

        {/* === Store Buttons === */}
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googlePlay}
              alt="Get it on Google Play"
              className="h-10 sm:h-12 hover:scale-105 transition-transform duration-300"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mannschaft.eatprotien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStore}
              alt="Download on App Store"
              className="h-10 sm:h-12 hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      {/* === QR Code Section === */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center w-[220px] sm:w-[250px] relative z-10">
        <img
          src={qrCode}
          alt="QR Code"
          className="w-36 h-36 sm:w-40 sm:h-40 object-cover mb-3"
        />
        <p className="text-[#258440] font-semibold text-center">
          Scan to download
        </p>
      </div>
    </section>
  );
}

export default DownloadApp;
