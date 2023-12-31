import React from "react";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import pythonImage from "../Images/python.png";
import profileImage from "../Images/profile_low.jpg";
import { Link } from "react-router-dom";
import SkillItem from "./SkillItem";

import "../home.css";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Yuki</h1>

      <img src={profileImage} className="profileImage" alt="profile" />

      <p>
        こんにちわ、会津大学大学院一年の情報・コンピュータシステム学専攻の１年のYukiです。大学では医療分野のAIを研究しています。
      </p>

      <section class="page-section" id="experience">
        <div className="service">
          <div class="text-center">
            <h2 class="text-uppercase pb-2">開発経験</h2>
            <h3 class="text-muted mb-5">
              これまでの開発経験のタイムラインです
            </h3>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <h6 class="card-title">Timeline</h6>
                  <div id="content">
                    <ul class="timeline">
                      <li class="event" data-date="2023年5月-現在">
                        <h3>アルバイト（会津ラボ株式会社）</h3>
                        <p>
                          ReactとTailwindを用いた開発を行いました。また、Pythonを用いた開発も行いました。
                        </p>
                      </li>
                      <li class="event" data-date="2023年9月">
                        <h3>インターン（楽天株式会社） - 1週間</h3>
                        <p>
                          ハッカソン形式でReactとBootstrapを用いて開発を行いました。チームで開発を行い、最後に発表を行いました。
                        </p>
                      </li>
                      <li class="event" data-date="2023年8月">
                        <h3>インターン（フリー株式会社）- 2週間</h3>
                        <p>実務に実際に携わりました。</p>
                      </li>
                      <li class="event" data-date="2021年8月">
                        <h3>技育展（ハッカソン）</h3>
                        <p>
                          チームでDjangoとBootstrapを用いて開発を行い、最後に発表を行いました。私はチームのリーダーを務めました。
                        </p>
                      </li>
                      <li class="event" data-date="8:30 - 9:30pm">
                        <h3>介護ハッカソン</h3>
                        <p>チームで開発を行い、最後に発表を行いました。</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <a href="https://o-xgame.vercel.app/">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-gamepad fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">OXゲーム</h4>
              </a>
              <p class="text-muted">
                Reactの公式サイトのOXゲームをアレンジしました。
              </p>
            </div>
            <div class="col-md-4">
              <a href="https://youtu.be/xTxCXm0LFRY">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">物件クチコミサイト</h4>
              </a>
              <p class="text-muted">
                物件の口コミを書くサイトを作りました。Djangoを用いました。まだデプロイしていないので、使っている映像を載せています。
              </p>
            </div>
            <div class="col-md-4">
              <a href="https://youtu.be/6Kq0TNnNqYI">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">帰宅お知らせシステム</h4>
              </a>
              <p class="text-muted">
                ラズベリーパイを用いたシステムで人感センサーが反応したら、カメラで写真を撮ってそれをLINEに送るシステムです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <SkillItem
              img={reactImage}
              title={"React"}
              text={"Reactがつかえます"}
            />
            <SkillItem
              img={jsImage}
              title={"HTML/CSS"}
              text={"HTML/CSSがつかえます"}
            />
            <SkillItem
              img={pythonImage}
              title={"Python"}
              text={"Pythonがつかえます"}
            />
          </div>
          <Link to="/skill-list">
            <button type="button" class="btn btn-primary">
              スキル一覧
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
