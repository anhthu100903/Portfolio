// components/Home.js
import React from "react";
import "./styles/Home.css"
import img_home from "../assets/img_home.jpg";

function Home() {
  return (
    <section id="home">
      <div className="home-section">
        <div className="container home-content">
          <div className="row">
            {/* Phần Chào hỏi và Giới thiệu */}
            <div className="col-7 home-header">
              <h1 className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Phan Thi Anh Thu</strong>
              </h1>

              <div className="typing">
                <p className="type-text">
                  Glad you're here to explore my work and skills as a developer.
                </p>
              </div>
            </div>

            {/* Phần Hình ảnh bên phải */}
            <div className="col-5">
              <img
                src={img_home}
                alt="home pic"
                className="img-fluid profile-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
