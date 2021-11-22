<template>
  <v-app>
    <div id="fullpage">
      <div class="section">
        <header class="header-bg header">
          <div class="header-outer">
            <div class="header-menu">
              <div class="header-menu-logo">
                <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
              </div>
              <div class="header-menu-nav">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link active"
                    >MAIN</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="#history" class="header-menu-nav-item__link link"
                    >HISTORY</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="#specs" class="header-menu-nav-item__link link"
                    >SPECS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link"
                    >CHARACTERS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">ROADMAP</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">TEAM</a>
                </li>
              </div>
              <div class="header-menu-nav header-menu-nav--buy">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-link--gallery link"
                    >GALLERY</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="buy-btn">BUY </a>
                </li>
              </div>
            </div>
          </div>
          <Footer
            :heading="'WELCOME TO YOUR FUTURE'"
            :pageNum="'1'"
            :pageName="'MAIN'"
          />
        </header>
      </div>
      <div class="section history" id="section1">
        <header class="header">
          <div class="header-outer">
            <div class="header-menu">
              <div class="header-menu-logo">
                <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
              </div>
              <div class="header-menu-nav">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">MAIN</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link active"
                    >HISTORY</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="#specs" class="header-menu-nav-item__link link"
                    >SPECS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link"
                    >CHARACTERS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">ROADMAP</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">TEAM</a>
                </li>
              </div>
              <div class="header-menu-nav header-menu-nav--buy">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-link--gallery link"
                    >GALLERY</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="buy-btn">BUY </a>
                </li>
              </div>
            </div>
          </div>
        </header>
        <div class="history-inner">
          <div class="history-inner-text scrollable-content">
            <h3 class="history-inner-text__heading">
              The begginning of a new century
            </h3>
            <p class="history-inner-text__desc">
              People edit their genome. They mix themselves with animal genes to
              increase endurance, strength, dexterity. But not everyone is happy
              about this
            </p>
            <p class="history-inner-text__desc">
              Opponents of mutations united and created their own clan. They
              called themselves mechanics. Mechanics believe that the only true
              evolution is the unification of man and technology. With the help
              of implants and prostheses they changed beyond recognition
            </p>
            <p class="history-inner-text__desc">
              People could not tolerate each other, but lived in the world until
              one of them created a completely autonomous artificial
              intelligence ... 
            </p>
            <p class="history-inner-text__desc">
              This universe was invented by two brothers. We will create a comic
              strip based on it. Soon you will get to know the main characters
              There are four of them. Be patient.  The introduction of each
              character will be acompanied with a little suprise for you
            </p>
          </div>
          <div class="history-inner-mint">
            <div class="history-inner-mint-box">
              <img
                src="~/static/spike-mint.png"
                alt=""
                class="history-inner-mint-box__img"
              />
              <hr />
              <div class="history-inner-mint-box-bottom">
                <h3>WELCOME TO HISTORY</h3>
                <p class="history-inner-mint-box-bottom-desc">
                  3333 Spikes are waiting for you. Price 0.03 ETH. Choose with
                  your mind and heart
                </p>
                <div v-if="isSaleOn" class="history-inner-mint-box-controls">
                  <a
                    class="history-inner-mint-box-controls__mint-btn btn-border"
                    href=""
                    >MINT</a
                  >
                  <a
                    @click.prevent="decMint"
                    class="
                      history-inner-mint-box-controls__quantity--minus
                      history-inner-mint-box-controls__quantity
                      btn-border
                    "
                    href=""
                    >-</a
                  >
                  <span
                    class="history-inner-mint-box-controls__number"
                    type="number"
                    >{{ this.quantity }}</span
                  >
                  <a
                    @click.prevent="incMint"
                    class="
                      history-inner-mint-box-controls__quantity--plus
                      history-inner-mint-box-controls__quantity
                      btn-border
                    "
                    href=""
                    >+</a
                  >
                </div>
                <div v-if="!isSaleOn" class="history-inner-mint-box-controls">
                  <a
                    class="
                      sale-off-btn
                      history-inner-mint-box-controls__mint-btn
                      btn-border
                    "
                    href=""
                    >MINT STARTS SOON
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer
            :heading="'a story about us'"
            :pageNum="'2'"
            :pageName="'HISTORY'"
          />
        </div>
      </div>

      <div class="section merch" id="section2">
        <header class="header">
          <div class="header-outer">
            <div class="header-menu">
              <div class="header-menu-logo">
                <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
              </div>
              <div class="header-menu-nav">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">MAIN</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">HISTORY</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link active"
                    >SPECS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link"
                    >CHARACTERS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">ROADMAP</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">TEAM</a>
                </li>
              </div>
              <div class="header-menu-nav header-menu-nav--buy">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-link--gallery link"
                    >GALLERY</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="buy-btn">BUY </a>
                </li>
              </div>
            </div>
          </div>
        </header>
        <div class="merch-inner">
          <div class="merch-inner-traits">
            <img
              class="merch-inner-traits__img"
              src="~/static/merch1.png"
              alt=""
            />
            <p>
              Every hero is individual collection from over 120 possible traits,
              including emotions, hands, headwear, clothing, and more. Items of
              the following characters are hidden
            </p>
          </div>
          <div class="merch-inner-store">
            <img
              class="merch-inner-store__img"
              src="~/static/merch2.png"
              alt=""
            />
            <p>
              We want to open the door a crack to our merch store. Each item
              will be of excellent quality, made with care for you. Our friends
              can get a free subscription with door-to-door comic delivery or
              read online.
            </p>
          </div>
          <Footer
            :heading="'INDIVIDUAL COLLECTION'"
            :pageNum="'3'"
            :pageName="'SPECS'"
          />
        </div>
      </div>
      <div class="section merch" id="section2">
        <header class="header">
          <div class="header-outer">
            <div class="header-menu">
              <div class="header-menu-logo">
                <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
              </div>
              <div class="header-menu-nav">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">MAIN</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">HISTORY</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="#specs" class="header-menu-nav-item__link link"
                    >SPECS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link"
                    >CHARACTERS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link active"
                    >ROADMAP</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">TEAM</a>
                </li>
              </div>
              <div class="header-menu-nav header-menu-nav--buy">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-link--gallery link"
                    >GALLERY</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="buy-btn">BUY </a>
                </li>
              </div>
            </div>
          </div>
        </header>
        <div class="model-inner inner">
          <div class="model-inner-characters">
            <div class="model-inner-characters-list">
              <h3 class="model-inner-characters-list__heading">
                Characters opened (1/4)
              </h3>
              <ul
                class="
                  model-inner-characters-list model-inner-characters-list--chars
                "
              >
                <li class="model-inner-characters-list-item">
                  <a href="" class="model-inner-characters-list-item-link"
                    ><img
                      src="~/static/list-spike.png"
                      alt=""
                      class="model-inner-characters-list-item-link__img"
                  /></a>
                </li>
                <li class="model-inner-characters-list-item">
                  <a href="" class="model-inner-characters-list-item-link"
                    ><img
                      src="~/static/hero-unknown.png"
                      alt=""
                      class="model-inner-characters-list-item-link__img"
                  /></a>
                </li>
                <li class="model-inner-characters-list-item">
                  <a href="" class="model-inner-characters-list-item-link"
                    ><img
                      src="~/static/hero-unknown.png"
                      alt=""
                      class="model-inner-characters-list-item-link__img"
                  /></a>
                </li>
                <li class="model-inner-characters-list-item">
                  <a href="" class="model-inner-characters-list-item-link"
                    ><img
                      src="~/static/hero-unknown.png"
                      alt=""
                      class="model-inner-characters-list-item-link__img"
                  /></a>
                </li>
              </ul>
              <div class="model-inner-characters-list-controls">
                <div
                  class="
                    model-inner-characters-list-controls-item
                    model-inner-characters-list-controls-spin
                  "
                >
                  <img
                    class="model-inner-characters-list-controls-item__img"
                    src="~/static/spin.png"
                    alt=""
                  />
                  <p>Spin</p>
                </div>
                <div
                  class="
                    model-inner-characters-list-controls-item
                    model-inner-characters-list-controls-zoom
                  "
                >
                  <img
                    class="model-inner-characters-list-controls-item__img"
                    src="~/static/zoom.png"
                    alt=""
                  />
                  <p>Zoom in/out</p>
                </div>
              </div>
            </div>
          </div>
          <div class="model-inner-item">
            <model-gltf
              id="noScroll"
              @wheel.prevent
              @touchmove.prevent
              @scroll.prevent
              :width="300"
              :height="500"
              :backgroundColor="'#000'"
              :backgroundAlpha="0"
              src="models/glb/Z_lp_textrs.glb"
            ></model-gltf>
          </div>
          <div class="model-inner-desc">
            <div class="model-inner-desc-main">
              <div class="model-inner-desc-main-pfp">
                <img
                  src="~/static/spike-pfp.png"
                  alt=""
                  class="model-inner-desc-main-pfp__img"
                />
              </div>
              <div class="model-inner-desc-main-controls">
                <h3 class="model-inner-desc-main-controls__name">Spike</h3>
                <a
                  v-if="historyOpen"
                  @click.prevent="historyOpen = false"
                  href="#"
                  class="model-inner-desc-main-controls__history-btn"
                  >CLOSE HISTORY</a
                >
                <a
                  v-if="!historyOpen"
                  @click.prevent="historyOpen = true"
                  href="#"
                  class="model-inner-desc-main-controls__history-btn"
                  >HISTORY</a
                >
              </div>
            </div>
            <div v-if="!historyOpen" class="model-inner-desc-preferences">
              <ul class="model-inner-desc-preferences-list">
                <li class="model-inner-desc-preferences-list-item">
                  <div class="model-inner-desc-preferences-list-item-wrapper">
                    <img
                      src="~/static/kind.svg"
                      alt=""
                      class="model-inner-desc-preferences-list-item__img"
                    />
                  </div>
                </li>
                <h3 class="model-inner-desc-preferences-list-item__key">
                  Kind
                </h3>
                <span class="model-inner-desc-preferences-list-item__value"
                  >Hybrid</span
                >
                <li class="model-inner-desc-preferences-list-item">
                  <div class="model-inner-desc-preferences-list-item-wrapper">
                    <img
                      src="~/static/icon-swords.svg"
                      alt=""
                      class="model-inner-desc-preferences-list-item__img"
                    />
                  </div>
                </li>
                <h3 class="model-inner-desc-preferences-list-item__key">
                  Weapon type
                </h3>
                <span class="model-inner-desc-preferences-list-item__value"
                  >Kusarigama</span
                >
                <li class="model-inner-desc-preferences-list-item">
                  <div class="model-inner-desc-preferences-list-item-wrapper">
                    <img
                      src="~/static/icon-bag.svg"
                      alt=""
                      class="model-inner-desc-preferences-list-item__img"
                    />
                  </div>
                </li>
                <h3 class="model-inner-desc-preferences-list-item__key">Job</h3>
                <span class="model-inner-desc-preferences-list-item__value"
                  >Asassin</span
                >
              </ul>
              <ul class="model-inner-desc-preferences-list">
                <li class="model-inner-desc-preferences-list-item">
                  <div class="model-inner-desc-preferences-list-item-wrapper">
                    <img
                      src="~/static/icon-hearts.svg"
                      alt=""
                      class="model-inner-desc-preferences-list-item__img"
                    />
                  </div>
                </li>
                <h3>Preferences</h3>
                <span>Japanese culture, extreme sports, writes music</span>
                <li class="model-inner-desc-preferences-list-item">
                  <div class="model-inner-desc-preferences-list-item-wrapper">
                    <img
                      src="~/static/icon-martial.svg"
                      alt=""
                      class="model-inner-desc-preferences-list-item__img"
                    />
                  </div>
                </li>
                <h3 class="model-inner-desc-preferences-list-item__key">
                  Martial arts
                </h3>
                <span class="model-inner-desc-preferences-list-item__value"
                  >Taekwando, Wing Chun, Muay Thai
                </span>
                <li class="model-inner-desc-preferences-list-item">
                  <div class="model-inner-desc-preferences-list-item-wrapper">
                    <img
                      src="~/static/icon-employer.svg"
                      alt=""
                      class="model-inner-desc-preferences-list-item__img"
                    />
                  </div>
                </li>
                <h3 class="model-inner-desc-preferences-list-item__key">
                  Employer
                </h3>
                <span class="model-inner-desc-preferences-list-item__value"
                  >Red Planet Confederation
                </span>
              </ul>
            </div>
            <modal name="example">This is an example</modal>
            <div v-if="historyOpen" class="model-inner-desc-history">
              <p class="model-inner-desc-history__text">
                He was a teenager when he was detained for attempting to steal a
                motorcycle from a military moon patrol. They offered to
                participate in the experiment in exchange for release. The
                experiment was top secret, secretly from society, only the
                highest ranks knew about it. He became one of the first
                surviving hybrids, since many during the experiment lost their
                minds, went crazy, or people turned into total mutants, which
                went beyond the desired result. Dozens of years have passed
                since then, the world has changed. Hybrids ceased to be a
                curiosity and people began to voluntarily change their genome.
                Spike didn't understand them, but he resigned himself to his
                body. He liked the fact that he now developed a keen hearing. He
                began composing music and was extremely successful with his
                band. Someday we will introduce you to his music ...
              </p>
            </div>
          </div>
          <Footer
            :heading="'choose your hero'"
            :pageNum="'4'"
            :pageName="'CHARACTERS'"
          />
        </div>
      </div>
      <div class="section merch" id="section2">
        <header class="header">
          <div class="header-outer">
            <div class="header-menu">
              <div class="header-menu-logo">
                <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
              </div>
              <div class="header-menu-nav">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">MAIN</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">HISTORY</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="#specs" class="header-menu-nav-item__link link"
                    >SPECS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link active"
                    >ROADMAP</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link"
                    >CHARACTERS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">TEAM</a>
                </li>
              </div>
              <div class="header-menu-nav header-menu-nav--buy">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-link--gallery link"
                    >GALLERY</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="buy-btn">BUY </a>
                </li>
              </div>
            </div>
          </div>
        </header>
        <div class="roadmap-inner inner">
          <div class="roadmap-inner-list">
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                10% Welcome to our world
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                20% Community building. We start paying for the promotion to our
                favorite holders
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                30% First events. Playing games, solving riddles, discussions
                start at a new level
              </span>
            </div>

            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                40% Opening a bank for the community. 5 ETH is spent on prizes
                in community games 10 ETH invested in the development of the
                next character
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                50% First space attack. Surprise, shhh
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                60% Choose the next character
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                70% We open a merchant store. Hoodies, 3D figures, T-shirts, key
                chains, caps and my Mom is embroidering Spike!
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                80% Collaborations with other projects. We conduct interviews
                with CEOs, and also invite them to our universe
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                90% We start the space liquidity pool
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                100% Open the comics
              </span>
            </div>
          </div>
          <div class="roadmap-inner-pic">
            <img
              class="roadmap-inner-pic__img"
              src="~/static/roadmap.png"
              alt=""
            />

            <div class="roadmap-inner-pic__bg"></div>
          </div>
          <Footer
            :heading="'All in your hands'"
            :pageNum="'5'"
            :pageName="'ROADMAP'"
          />
        </div>
      </div>
      <div class="section team" id="section2">
        <header class="header">
          <div class="header-outer">
            <div class="header-menu">
              <div class="header-menu-logo">
                <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
              </div>
              <div class="header-menu-nav">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">MAIN</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">HISTORY</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="#specs" class="header-menu-nav-item__link link"
                    >SPECS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link"
                    >CHARACTERS</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link">ROADMAP</a>
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-item__link link active"
                    >TEAM</a
                  >
                </li>
              </div>
              <div class="header-menu-nav header-menu-nav--buy">
                <li class="header-menu-nav-item">
                  <a href="" class="header-menu-nav-link--gallery link"
                    >GALLERY</a
                  >
                </li>
                <li class="header-menu-nav-item">
                  <a href="" class="buy-btn">BUY </a>
                </li>
              </div>
            </div>
          </div>
        </header>
        <div class="team-inner inner">
          <div class="team-inner-wrapper--row">
            <div class="team-inner-wrapper">
              <h2 class="team-inner-wrapper__heading">Team in Twitter</h2>
              <div class="team-inner-founders">
                <div class="team-inner-founders-item">
                  <img
                    src="~/static/cvfounder.png"
                    alt=""
                    class="team-inner-founders-item__img"
                  />
                  <a
                    class="team-inner-founders-item__link"
                    href="https://twitter.com/cvfounder"
                    >@cvfounder</a
                  >
                </div>
                <div class="team-inner-founders-item">
                  <img
                    src="~/static/neoner.png"
                    alt=""
                    class="team-inner-founders-item__img"
                  />
                  <a
                    class="team-inner-founders-item__link"
                    href="https://twitter.com/cvfounderneoner"
                    >@cvfounderneoner</a
                  >
                </div>
              </div>
            </div>
            <div class="team-inner-wrapper team-inner-wrapper--collection">
              <h2 class="team-inner-wrapper__heading">Collection in Twitter</h2>
              <div class="team-inner-founders">
                <div class="team-inner-founders-item">
                  <img
                    src="~/static/twitter-team.png"
                    alt=""
                    class="team-inner-founders-item__img"
                  />
                  <a
                    class="team-inner-founders-item__link"
                    href="https://twitter.com/CryptoVersehome"
                    >@CRYPTOVERSE</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="team-inner-wrapper">
            <h2 class="team-inner-network__heading">Networks</h2>
            <div class="team-inner-network">
              <div class="team-inner-network-item">
                <img
                  src="~/static/discord-logo.png"
                  alt=""
                  class="team-inner-network-item__img"
                />
                <a
                  class="team-inner-network-item__link"
                  href="discord.gg/CryptoVerse"
                  >/CRYPTOVERSE</a
                >
              </div>
              <div class="team-inner-network-item">
                <img
                  src="~/static/insta-logo.png"
                  alt=""
                  class="team-inner-network-item__img"
                />
                <a class="team-inner-network-item__link" href="">CRYPTOVERSE</a>
              </div>
              <div class="team-inner-network-item">
                <img
                  src="~/static/os-logo.png"
                  alt=""
                  class="team-inner-network-item__img"
                />
                <a class="team-inner-network-item__link" href="">CRYPTOVERSE</a>
              </div>
            </div>
          </div>
          <Footer
            :heading="'WRITE FUTURE WITH US'"
            :pageNum="'6'"
            :pageName="'THE TEAM'"
          />
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import "~/plugins/scrolloverflow.min.js";
import { ModelGltf } from "vue-3d-model";
import vmodal from "vue-js-modal";

export default {
  components: {
    "model-gltf": ModelGltf,
  },
  data() {
    return {
      options: {
        scrollOverflow: true,
      },
      historyOpen: false,
      quantity: 1,
      clipped: false,
      drawer: false,
      fixed: false,
      isSaleOn: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  methods: {
    incMint() {
      this.quantity += 1;
      if (this.quantity > 10) {
        this.quantity = 10;
      }
    },
    decMint() {
      this.quantity -= 1;
      if (this.quantity < 1) {
        this.quantity = 1;
      }
    },
    openHistory() {
      this.$modal.show("example");
    },
  },
  mounted() {
    var myFullpage = new fullpage("#fullpage", {
      anchors: ["main", "history", "specs", "characters", "roadmap", "team"],
      // sectionsColor: ["#4A6FB1", "#939FAA", "#323539"],
      scrollOverflow: true,
    });
  },
};
</script>


<style lang="scss" scoped>
.sale-off-btn {
  padding: 0;
  @include for-desktop-up {
    padding: 8px 0px !important;
    width: 100%;
    margin: 0 !important;
    text-align: center;
  }
  @include for-phone-only {
    text-align: center;
    width: 100%;
  }
}
.btn-border {
  border: 1px solid rgba(246, 246, 243, 0.4);
  box-sizing: border-box;
  border-radius: 4px;
}
.header-bg {
  background: url("~/static/header-bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  @include for-phone-only {
    background-position: 52% 100%;
  }
}

.header {
  @include for-desktop-up {
    position: absolute;
    top: 0;
    width: 100%;
  }
  @include for-tablet-portrait-up {
    position: absolute;
    top: 0;
    width: 100%;
  }
  &-outer {
    background: rgba(22, 22, 22, 0.5);
    backdrop-filter: blur(10px);
  }
  &-menu {
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    justify-content: space-between;

    &-logo {
      &__item {
      }
    }
    &-nav {
      display: flex;
      align-items: center;
      @include for-desktop-up {
        display: flex !important;
      }
      @include for-tablet-portrait-up {
        display: none;
      }
      @include for-phone-only {
        display: none;
      }
      &--buy {
        @include for-desktop-up {
          display: flex;
          flex-direction: row !important;
        }
        @include for-tablet-portrait-up {
          display: flex;
          flex-direction: column;
          padding: 0 0 0 25px;
          justify-content: center;
        }
        @include for-phone-only {
          display: flex;
          flex-direction: column;
          padding: 0 0 0 25px;
          justify-content: center;
        }
      }
      &-link {
        &--gallery {
          @include for-tablet-portrait-up {
            display: none;
          }
          @include for-phone-only {
            display: none;
          }
        }
      }
      &-item {
        list-style: none;
        margin: 0 49px 0 0;
        &__link {
        }
      }
    }
  }
}
.history {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  &-inner {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    padding: 100px 0 50px;
    @include for-tablet-landscape-up {
      padding: 100px 16px 100px !important;
      flex-direction: column;
    }
    @include for-tablet-portrait-up {
      padding: 80px 16px 80px;
      flex-direction: column;
    }
    @include for-phone-only {
      padding: 24px 16px 80px;
      flex-direction: column;
    }

    &-text {
    }
    &-mint {
      margin: 0 0 0 341px;
      @include for-tablet-portrait-up {
        margin: 32px 0;
        max-width: 450px;
      }
      @include for-phone-only {
        margin: 32px 0;
        max-width: 100%;
      }
      &-box {
        background: rgba(22, 22, 22, 0.5);
        backdrop-filter: blur(50px);
        /* Note: backdrop-filter has minimal browser support */
        padding: 0 24px 24px;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 4px;
        @include for-desktop-up {
          min-width: 400px;
        }
        @include for-phone-only {
          padding: 0 8px 16px;
        }
        &-bottom {
          margin: 24px 0 0 0;
          &-desc {
            margin: 16px 0;
          }
        }
        &-controls {
          display: flex;
          align-items: center;
          &__quantity {
            padding: 8px 17px;
            text-decoration: none;
            color: #fff;
          }
          &__number {
            margin: 0 16px;
            @include for-phone-only {
              margin: 0 11px;
            }
          }
          &__mint-btn {
            padding: 8px 89px;
            text-decoration: none;
            color: #fff;
            margin: 0 16px 0 0;
            @include for-phone-only {
              padding: 8px 45px;
            }
          }
        }
        &__img {
          max-width: 268px;
          margin: -60px auto 0;
          &::after {
            content: "";
            border: 1px solid #000;
            display: block;
            width: 100%;
          }
        }
      }
    }
  }
}
.btn-border {
  border: 1px solid rgba(246, 246, 243, 0.4);
  box-sizing: border-box;
  border-radius: 4px;
}
.merch {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  &-inner {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0;
    @include for-tablet-landscape-up {
      flex-direction: column;
      padding: 40px 16px 100px !important;
      align-items: center;
    }
    @include for-tablet-portrait-up {
      flex-direction: column;
      padding: 40px 16px 80px;
      align-items: center;
    }
    @include for-phone-only {
      flex-direction: column;
      padding: 40px 16px 80px;
      align-items: center;
    }

    &-traits {
      margin: 0 200px 0 0;
      @include for-tablet-portrait-up {
        margin: 50px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      @include for-phone-only {
        margin: 0;
      }
      &__img {
        @include for-tablet-portrait-up {
          width: 60%;
        }
        @include for-phone-only {
          width: 100%;
        }
      }
    }
    &-text {
    }
    &-mint {
      margin: 0 0 0 341px;
      &-box {
        background: rgba(22, 22, 22, 0.5);
        backdrop-filter: blur(50px);
        /* Note: backdrop-filter has minimal browser support */
        padding: 0 24px 24px;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 4px;
        &-bottom {
          margin: 24px 0 0 0;
          &-desc {
            margin: 16px 0;
          }
        }
        &-controls {
          display: flex;
          align-items: center;
          &__quantity {
            padding: 8px 17px;
            text-decoration: none;
            color: #fff;
          }
          &__number {
            margin: 0 16px;
          }
          &__mint-btn {
            padding: 8px 89px;
            text-decoration: none;
            color: #fff;
            margin: 0 16px 0 0;
          }
        }
        &__img {
          max-width: 268px;
          margin: -60px auto 0;
          &::after {
            content: "";
            border: 1px solid #000;
            display: block;
            width: 100%;
          }
        }
      }
    }
    &-store {
      @include for-tablet-portrait-up {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      &__img {
        width: 80%;
        @include for-tablet-portrait-up {
          width: 60%;
        }
        @include for-phone-only {
          width: 100%;
        }
      }
    }
  }
}
.model {
  &-inner {
    &-item {
      @include for-phone-only {
        order: 2;
      }
    }
    @include for-tablet-landscape-up {
      padding: 104px 16px 120px;
    }
    @include for-phone-only {
      flex-direction: column;
      padding: 24px 16px;
    }
    & div {
      &:nth-child(2) {
        flex: 1;
      }
    }
    &-characters {
      @include for-phone-only {
        order: 2;
      }
      &-list {
        display: flex;
        flex-direction: column;
        padding: 0;
        list-style-type: none;
        align-items: flex-start;
        &--chars {
          @include for-phone-only {
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            width: 100%;
          }
        }

        &-controls {
          margin: 98px 0 0 0;

          &-spin {
            display: flex;
            align-items: flex-start;
          }
          &-zoom {
            display: flex;
            align-items: flex-start;
          }
          &-item {
            margin: 0 0 24px 0;

            &__img {
              margin: 0 14px 0 0;
            }
          }
        }
        &-item {
          @include for-phone-only {
            margin: 0 10px 0 0;
          }
          @include for-desktop-up {
            &:nth-child(1) {
              padding: 0;
              margin: 0;
            }
          }
          &-link {
            &__img {
            }
          }
        }
      }
    }
    &-desc {
      flex: 1;
      &-history {
        padding: 0 0 220px 0;
        @include for-phone-only {
          order: 1;
          padding: 0 0 0 0;
        }
      }

      &-main {
        display: flex;
        align-items: center;
        @include for-phone-only {
          order: 1;
        }
        &-pfp {
          &__img {
            margin: -20px 0 0 0;
            @include for-phone-only {
              width: 80%;
            }
          }
        }
        &-controls {
          margin: 0 0 0 16px;
          @include for-phone-only {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
          }
          &__name {
            margin: 0 0 16px 0;
            @include for-phone-only {
              margin: 0;
            }
          }
          &__history-btn {
            text-decoration: none;
            color: #fff;
            border: 1px solid rgba(246, 246, 243, 0.4);
            box-sizing: border-box;
            border-radius: 4px;
            padding: 8px 16px;
          }
        }
      }
      &-preferences {
        display: flex;
        @include for-phone-only {
          order: 3;
          display: flex;
          flex-direction: column;
        }
        &-list {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          list-style-type: none;
          margin: 40px 168px 0 0;
          &:nth-child(2) {
            margin: 40px 0 0 0;
          }

          &-item {
            margin: 48px 0 0 0;
            &:nth-child(1) {
              margin: 0;
            }
            &-wrapper {
              background: rgba(246, 246, 243, 0.4);
              border-radius: 4px;
              padding: 8px;
            }
            &__img {
            }
          }
        }
      }
    }
  }
}
.roadmap {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  &-inner {
    @include for-tablet-landscape-up {
      padding: 140px 16px 160px !important;
    }
    @include for-tablet-portrait-up {
      padding: 23px 16px 40px;
    }
    @include for-phone-only {
      flex-direction: column;
      padding: 23px 16px 140px;
    }
    &-pic {
      margin: 0 0 0 16px;
      @include for-phone-only {
        order: 1;
        padding: 0 16px 16px;
        margin: 0;
      }
      &__img {
        height: 100%;
        @include for-tablet-portrait-up {
          height: 70%;
        }
        @include for-phone-only {
          width: 100%;
        }
      }
      &__bg {
        background: rgba(22, 22, 22, 0.5);
        opacity: 0.4;
        border-radius: 4px;
      }
    }
    &-list {
      @include for-phone-only {
        order: 2;
      }
      &-item {
        background: rgba(22, 22, 22, 0.5);
        border-radius: 4px;
        padding: 8px;
        margin: 16px 0 0 0;
        &.active {
          background: rgba(246, 246, 243, 0.7);
          color: #000;
        }

        &:nth-child(1) {
          margin: 0;
        }
        &__title {
        }
      }
    }
  }
}
.team {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  overflow: auto;
  &-inner {
    flex-direction: column;
    @include for-tablet-landscape-up {
      padding: 0 18px 80px !important;
    }
    @include for-tablet-portrait-up {
      padding: 0 18px 0;
    }
    @include for-phone-only {
      flex-direction: column;
      padding: 0 18px 120px;
    }
    &-wrapper {
      @include for-tablet-portrait-up {
        margin: 60px 0 0 0;
      }
      @include for-desktop-up {
        &--collection {
          margin: 0 96px 0 0;
        }
      }
      @include for-tablet-portrait-up {
        &--collection {
          margin: 60px 0 0 0 !important;
        }
      }
      @include for-phone-only {
        padding: 24px 0;
      }
      &--row {
        display: flex;
        @include for-desktop-up {
          margin: 0 0 96px 0;
        }
        @include for-tablet-portrait-up {
          flex-direction: column;
        }
        @include for-phone-only {
          flex-direction: column;
        }
      }
      &__heading {
        margin: 0 0 44px 0;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        @include for-tablet-landscape-up {
          margin: 0 0 10px 0;
        }
        @include for-phone-only {
          font-size: 16px;
        }
      }
      &--collection {
        margin: 0 0 0 96px;
        @include for-phone-only {
          margin: 0;
        }
      }
    }
    &-founders {
      display: flex;
      align-items: center;
      @include for-phone-only {
        flex-direction: column;
        align-items: flex-start;
      }

      &-item {
        display: flex;
        align-items: center;
        margin: 0 0 0 34px;
        @include for-desktop-up {
          &:nth-child(1) {
            margin: 0;
          }
        }

        @include for-tablet-landscape-up {
          margin: 0 0 22px 32px;
          &:nth-child(1) {
            margin: 0 0 22px 0;
          }
        }
        @include for-phone-only {
          margin: 0 0 22px 0;
        }
        &__link {
          text-decoration: none;
          margin: 0 0 0 16px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          text-transform: uppercase;

          color: #fff;
        }
      }
    }
    &-network {
      display: flex;
      @include for-phone-only {
        flex-direction: column;
      }
      &__heading {
        margin: 0 0 40px 0;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        /* identical to box height, or 133% */

        /* white */

        color: #f7f6f3;
        @include for-tablet-landscape-up {
          margin: 0;
        }
        @include for-phone-only {
          font-size: 16px;
        }
      }
      &-item {
        align-items: center;
        display: flex;
        margin: 0 0 0 32px;

        @include for-desktop-up {
          &:nth-child(1) {
            margin: 0;
          }
        }
        @include for-tablet-landscape-up {
          margin: 10px 0 22px 32px;
          &:nth-child(1) {
            margin: 10px 0 22px 0;
          }
        }

        @include for-phone-only {
          margin: 0 0 32px 0;
        }
        &__link {
          margin: 0 0 0 16px;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */
          text-decoration: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          /* white */

          color: #f7f6f3;

          &:nth-child(1) {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>