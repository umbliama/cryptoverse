<template>
  <v-app>
    <div id="fullpage">
      <div class="section main">
        <header class="header-bg header">
          <Header />
          <div class="spacer"></div>
          <Footer
            :heading="'WELCOME TO YOUR FUTURE'"
            :pageNum="'1'"
            :pageName="'MAIN'"
          />
        </header>
      </div>
      <div class="section history">
        <div class="spacer--history"></div>

        <div class="header-outer">
          <div class="header-menu">
            <div class="header-menu-logo">
              <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
            </div>
            <div class="header-menu-nav">
              <li class="header-menu-nav-item">
                <a href="#main" class="header-menu-nav-item__link link">MAIN</a>
              </li>
              <li class="header-menu-nav-item">
                <a
                  href="#history"
                  class="header-menu-nav-item__link link active"
                  >HISTORY</a
                >
              </li>
              <li class="header-menu-nav-item">
                <a href="#specs" class="header-menu-nav-item__link link"
                  >SPECS</a
                >
              </li>

              <li class="header-menu-nav-item">
                <a href="#roadmap" class="header-menu-nav-item__link link"
                  >ROADMAP</a
                >
              </li>
              <li class="header-menu-nav-item">
                <a href="#team" class="header-menu-nav-item__link link">TEAM</a>
              </li>
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="header-menu-nav-item__link link"
                  href="https://discord.gg/CryptoVerse"
                  ><img
                    class="header-menu-nav-item__img"
                    src="~/static/discord.svg"
                    alt=""
                /></a>
              </li>
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="header-menu-nav-item__link link"
                  href="https://twitter.com/CryptoVersehome"
                  ><img
                    class="
                      header-menu-nav-item__img
                      header-menu-nav-item__img--twitter
                    "
                    src="~/static/twitter.svg"
                    alt=""
                /></a>
              </li>
            </div>
            <div class="header-menu-nav header-menu-nav--buy">
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/cryptoversespike"
                  class="buy-btn"
                  >OPENSEA
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="history-inner">
          <div class="history-inner-text scrollable-content">
            <!-- <h3 class="-inner-text__heading">
              The begginning of a new century
            </h3> -->
            <p class="history-inner-text__desc">
              Mars is now ruled by one Government, The Red Planet Confederation
              (RPC). With advancements in medical science, The RPC began a top
              secret program to develop technology enabling humans to alter
              their genomes. Once the technology had been developed The RPC
              started to conduct scientific trials and successfully managed to
              mix human and animal genes creating ‘Hybrids’ with increased
              stamina, strength and agility.
            </p>
            <p class="history-inner-text__desc">
              Not everyone was happy about the existence of half-human,
              half-animal hybrids though and tensions amongst the remaining
              ‘purebreds’, as they referred to themselves, started to rise.
              Hybrids became the target of attacks by human purebreds for no
              other reason than the fact they chose to change themselves. Spike
              turned a blind eye to the undeserved cruelty towards other hybrids
              for a long time but eventually thought enough was enough. Spike
              created a social unit called ‘Moloch’ where hybrids could receive
              help and support.
            </p>
            <p class="history-inner-text__desc">
              Those humans who opposed Moloch created their own clan and called
              themselves the ‘Mechanics’. Mechanics believe that the only true
              evolution is the unification of man and technology. With the help
              of implants and prostheses, they have changed themselves beyond
              physical recognition. Purebreds, Mechanics and Hybrids could not
              tolerate each other but they lived in relative peace until one of
              them created a completely autonomous artificial intelligence ...
            </p>
          </div>
          <div class="history-inner-mint">
            <div class="history-inner-mint-box">
              <img
                class="history-inner-mint-box__img--time"
                src="~/static/time-icon.svg"
                alt=""
              />
              <img
                src="~/static/spike-mint.png"
                alt=""
                class="history-inner-mint-box__img"
              />
              <hr />
              <div class="history-inner-mint-box-bottom">
                <h3 class="history-inner-mint-box__heading">
                  WELCOME TO HISTORY
                </h3>
                <p class="history-inner-mint-box-bottom-desc">
                  3333 Spikes are waiting for you. <br />
                  Price 0.02 ETH for Whitelist and 0.03 ETH for Public.
                  <br />
                  Choose with your mind and heart
                </p>
                <p
                  v-if="
                    this.proofList.length < 1 &&
                    isWalletConnected &&
                    saleState == 1
                  "
                  class="history-inner-mint-box-bottom-desc"
                >
                  You're not in OG
                </p>
                <p
                  v-if="
                    this.proofList.length < 1 &&
                    isWalletConnected &&
                    saleState == 2
                  "
                  class="history-inner-mint-box-bottom-desc"
                >
                  You're not in WL
                </p>

                <p
                  v-if="
                    isWalletConnected &&
                    saleState == 1 &&
                    this.proofList.length > 1
                  "
                  class="history-inner-mint-box-bottom-desc"
                >
                  You have {{ this.ogLeft }} mints left
                </p>
                <p
                  v-if="
                    isWalletConnected &&
                    saleState == 2 &&
                    this.proofList.length > 1
                  "
                  class="history-inner-mint-box-bottom-desc"
                >
                  You have {{ this.wlLeft }} mints left
                </p>

                <div class="history-inner-mint-box-controls">
                  <div
                    class="history-inner-mint-box-controls-connect-btn"
                    v-if="!isWalletConnected && saleState > 0"
                  >
                    <a
                      class="
                        history-inner-mint-box-controls__mint-btn
                        history-inner-mint-box-controls__mint-btn--connect
                        btn-border
                        disable-link
                      "
                      href=""
                      >SOLD OUT</a
                    >
                  </div>
                </div>
                <div
                  v-if="
                    (isSaleOn && isWalletConnected) ||
                    (isPreSaleOn && isWalletConnected) ||
                    (isOgMint && isWalletConnected)
                  "
                  class="history-inner-mint-box-controls"
                >
                  <div
                    v-if="
                      saleState === 1 &&
                      isWalletConnected &&
                      this.proofList.length > 1
                    "
                  >
                    <a
                      class="
                        history-inner-mint-box-controls__mint-btn
                        btn-border
                      "
                      href=""
                      v-on:click.prevent="ogPurchase"
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
                      id="tokensNumber"
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
                  <div v-if="saleState === 3 && isWalletConnected">
                    <a
                      class="
                        history-inner-mint-box-controls__mint-btn
                        btn-border
                        disable-link
                      "
                      href=""
                      >SOLD OUT</a
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
                      id="tokensNumber"
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

                  <div
                    v-if="
                      saleState === 2 &&
                      isWalletConnected &&
                      this.proofList.length > 1
                    "
                  >
                    <a
                      class="
                        history-inner-mint-box-controls__mint-btn
                        btn-border
                      "
                      href=""
                      v-on:click.prevent="whiteListPurchase"
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
                      id="tokensNumber"
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
                </div>

                <div
                  v-if="saleState <= 0"
                  class="history-inner-mint-box-controls"
                >
                  <a
                    disabled
                    class="history-inner-mint-box-controls__mint-btn"
                    href=""
                    >PRESALE STARTS SOON
                  </a>
                  <!-- <a cla ss="history-inner-mint-box-controls__mint-btn" href="">
                  </a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="spacer--history"></div>
        <Footer
          :heading="'a story about us'"
          :pageNum="'2'"
          :pageName="'HISTORY'"
        />
      </div>

      <div class="section merch">
        <div class="spacer--merch"></div>

        <div class="header-outer">
          <div class="header-menu">
            <div class="header-menu-logo">
              <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
            </div>
            <div class="header-menu-nav">
              <li class="header-menu-nav-item">
                <a href="#main" class="header-menu-nav-item__link link">MAIN</a>
              </li>
              <li class="header-menu-nav-item">
                <a href="#history" class="header-menu-nav-item__link link"
                  >HISTORY</a
                >
              </li>
              <li class="header-menu-nav-item">
                <a href="#specs" class="header-menu-nav-item__link link active"
                  >SPECS</a
                >
              </li>

              <li class="header-menu-nav-item">
                <a href="#roadmap" class="header-menu-nav-item__link link"
                  >ROADMAP</a
                >
              </li>
              <li class="header-menu-nav-item">
                <a href="#team" class="header-menu-nav-item__link link">TEAM</a>
              </li>
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="header-menu-nav-item__link link"
                  href="https://discord.gg/CryptoVerse"
                  ><img
                    class="header-menu-nav-item__img"
                    src="~/static/discord.svg"
                    alt=""
                /></a>
              </li>
              <li class="header-menu-nav-item">
                <a
                  class="header-menu-nav-item__link link"
                  href="https://twitter.com/CryptoVersehome"
                  ><img
                    class="
                      header-menu-nav-item__img
                      header-menu-nav-item__img--twitter
                    "
                    src="~/static/twitter.svg"
                    alt=""
                /></a>
              </li>
            </div>
            <div class="header-menu-nav header-menu-nav--buy">
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/cryptoversespike"
                  class="buy-btn"
                  >OPENSEA
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="merch-inner">
          <div class="merch-inner-traits">
            <img
              class="merch-inner-traits__img"
              src="~/static/merch1.png"
              alt=""
            />
            <p class="merch-inner-traits__desc">
              Every hero is individually designed from a collection of over 120
              possible traits, including emotions, hands, headwear, clothing and
              more
            </p>
          </div>
          <div class="merch-inner-store">
            <img
              class="merch-inner-store__img"
              src="~/static/merch2.png"
              alt=""
            />
            <p class="merch-inner-traits__desc">
              We wanted to offer you a glimpse of things to come from our merch
              store. Each item will be of excellent quality made with care, just
              for you. NFT holders can get a free subscription to our comic with
              door-to-door delivery or they can read it online.
            </p>
          </div>
        </div>
        <div class="spacer--merch"></div>

        <Footer
          :heading="'INDIVIDUAL COLLECTION'"
          :pageNum="'3'"
          :pageName="'SPECS'"
        />
      </div>

      <div class="section merch">
        <div class="spacer--roadmap"></div>

        <div class="header-outer">
          <div class="header-menu">
            <div class="header-menu-logo">
              <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
            </div>
            <div class="header-menu-nav">
              <li class="header-menu-nav-item">
                <a href="#main" class="header-menu-nav-item__link link">MAIN</a>
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
                <a
                  href="#roadmap"
                  class="header-menu-nav-item__link link active"
                  >ROADMAP</a
                >
              </li>
              <li class="header-menu-nav-item">
                <a href="#team" class="header-menu-nav-item__link link">TEAM</a>
              </li>
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="header-menu-nav-item__link link"
                  href="https://discord.gg/CryptoVerse"
                  ><img
                    class="header-menu-nav-item__img"
                    src="~/static/discord.svg"
                    alt=""
                /></a>
              </li>
              <li class="header-menu-nav-item">
                <a
                  class="header-menu-nav-item__link link"
                  href="https://twitter.com/CryptoVersehome"
                  ><img
                    class="
                      header-menu-nav-item__img
                      header-menu-nav-item__img--twitter
                    "
                    src="~/static/twitter.svg"
                    alt=""
                /></a>
              </li>
            </div>
            <div class="header-menu-nav header-menu-nav--buy">
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/cryptoversespike"
                  class="buy-btn"
                  >OPENSEA
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="roadmap-inner inner">
          <div class="roadmap-inner-list">
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                10% Airdrop a 1/1 Spike art piece to one of our current holders
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                20% Charity donation of 2 ETH
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                30% 0.25 of ETH will be gifted (5 x 0.05 each) to 5 lucky
                holders
              </span>
            </div>

            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                40% In readiness for when we enter the Metaverse, 2 lucky
                holders will be sent an Oculus 2 VR kit each!
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                50% We will start working on our Merch which will be available
                to buy from our online shop on the website
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                60% The founders Max (Mayor) and Stephen (Neoner) are very fond
                of surprises so we’ll leave you guessing on this one
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                70% We will make existing Spikes minted so far into 3D digital
                renders and will make them available to current holders by way
                of a free mint (only have to pay gas fees)
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                80% Free distribution of merch to holders – we will send out 5 x
                Hoodies, 3 x T-shirts and 1 x Cap to 9 lucky holders by way of a
                raffle. Postage costs will also be covered
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                90% As part of the collection of 3,333 Spikes there will be 3
                very rare NFT’s. As a nod to our future CryptoVerse phases there
                will be 1 x a Purebred NFT, 1 x a Mechanic NFT and 1 x a AI NFT
              </span>
            </div>
            <div class="roadmap-inner-list-item">
              <span class="roadmap-inner-list-item__title">
                100% Launch of the first CyberPunk comic in NFT. The comic will
                be available to every current Spike NFT owners on our website
              </span>
            </div>
          </div>
          <div class="roadmap-inner-pic">
            <picture>
              <source
                media="(max-width: 1566px)"
                srcset="~/static/roadmap-laptop.png"
              />
              <source
                media="(min-width: 768px)"
                srcset="~/static/roadmap.png"
              />
              <img src="~/static/roadmap.png" />
            </picture>

            <div class="roadmap-inner-pic__bg"></div>
          </div>
        </div>
        <div class="spacer--roadmap"></div>
        <Footer
          :heading="'All in your hands'"
          :pageNum="'4'"
          :pageName="'ROADMAP'"
        />
      </div>
      <div class="section team">
        <div class="spacer--team"></div>

        <div class="header-outer">
          <div class="header-menu">
            <div class="header-menu-logo">
              <a href="/"><img src="~/static/CRYPTOVERSE.svg" /></a>
            </div>
            <div class="header-menu-nav">
              <li class="header-menu-nav-item">
                <a href="#main" class="header-menu-nav-item__link link">MAIN</a>
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
                <a href="#roadmap" class="header-menu-nav-item__link link"
                  >ROADMAP</a
                >
              </li>
              <li class="header-menu-nav-item">
                <a href="#team" class="header-menu-nav-item__link link active"
                  >TEAM</a
                >
              </li>
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="header-menu-nav-item__link link"
                  href="https://discord.gg/CryptoVerse"
                  ><img
                    class="header-menu-nav-item__img"
                    src="~/static/discord.svg"
                    alt=""
                /></a>
              </li>
              <li class="header-menu-nav-item">
                <a
                  class="header-menu-nav-item__link link"
                  href="https://twitter.com/CryptoVersehome"
                  ><img
                    class="
                      header-menu-nav-item__img
                      header-menu-nav-item__img--twitter
                    "
                    src="~/static/twitter.svg"
                    alt=""
                /></a>
              </li>
            </div>
            <div class="header-menu-nav header-menu-nav--buy">
              <li class="header-menu-nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://opensea.io/collection/cryptoversespike"
                  class="buy-btn"
                  >OPENSEA
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="team-inner inner">
          <div class="team-inner-wrapper--row">
            <div class="team-inner-wrapper">
              <h2 class="team-inner-wrapper__heading">Team on Twitter</h2>
              <div class="team-inner-founders">
                <div class="team-inner-founders-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="team-inner-founders-item__link"
                    href="https://twitter.com/cvfounder"
                  >
                    <img
                      src="~/static/cvfounder.png"
                      alt=""
                      class="team-inner-founders-item__img"
                    />@cvfounder</a
                  >
                </div>
                <div class="team-inner-founders-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="team-inner-founders-item__link"
                    href="https://twitter.com/cvfounderneoner"
                  >
                    <img
                      src="~/static/neoner.png"
                      alt=""
                      class="team-inner-founders-item__img"
                    />@cvfounderneoner</a
                  >
                </div>
              </div>
            </div>
            <div class="team-inner-wrapper team-inner-wrapper--collection">
              <h2 class="team-inner-wrapper__heading">Collection in Twitter</h2>
              <div class="team-inner-founders">
                <div class="team-inner-founders-item">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    class="team-inner-founders-item__link"
                    href="https://twitter.com/CryptoVersehome"
                  >
                    <img
                      src="~/static/twitter-team.png"
                      alt=""
                      class="team-inner-founders-item__img"
                    />@CRYPTOVERSE</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="team-inner-wrapper team-inner-wrapper--networks">
            <h2 class="team-inner-network__heading">Networks</h2>
            <div class="team-inner-network">
              <div class="team-inner-network-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  class="team-inner-network-item__link"
                  href="https://discord.gg/CryptoVerse"
                >
                  <img
                    src="~/static/discord-logo.png"
                    alt=""
                    class="team-inner-network-item__img"
                  />/CRYPTOVERSE</a
                >
              </div>
              <div class="team-inner-network-item">
                <img
                  src="~/static/insta-logo.png"
                  alt=""
                  class="team-inner-network-item__img"
                />
                <a class="team-inner-network-item__link" href="">TBD</a>
              </div>
              <div class="team-inner-network-item">
                <img
                  src="~/static/os-logo.png"
                  alt=""
                  class="team-inner-network-item__img"
                />
                <a class="team-inner-network-item__link" href="">TBD</a>
              </div>
            </div>
            <div class="team-inner-network">
              <div class="team-inner-network-item"></div>
            </div>
          </div>
        </div>
        <div class="spacer--team"></div>
        <Footer
          :heading="'WRITE THE FUTURE WITH US '"
          :pageNum="'5'"
          :pageName="'THE TEAM'"
        />
      </div>
    </div>
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
      );

      ym(87443265, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      });
    </script>
    <noscript
      ><div>
        <img
          src="https://mc.yandex.ru/watch/87443265"
          style="position: absolute; left: -9999px"
          alt=""
        /></div
    ></noscript>
    <!-- /Yandex.Metrika counter -->
    <SaveModal
      :errText="errText"
      v-show="showModal"
      @close-modal="showModal = false"
    />
  </v-app>
</template>

<script>
import "~/plugins/scrolloverflow.min.js";
import { ModelGltf } from "vue-3d-model";
import Header from "../components/Header.vue";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import SaveModal from "../components/SaveModal.vue";

const providerOptions = {
  injected: {
    display: {
      name: "Metamask",
      description: "Connect with the provider in your Browser",
    },
    package: WalletConnectProvider,
  },
  walletconnect: {
    display: {
      name: "Mobile",
      description: "Scan qrcode with your mobile wallet",
    },
    package: WalletConnectProvider,
    options: {
      infuraId: "66b965f2c6804207818a0e79c43769a2",
    },
  },
};

const NFT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "CryptoVerseMinted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "mintSpikesTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_merkelProof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "ogMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "reserveMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newUri",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "setOGMintMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "SetOGMintMerkleRoot",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "setPresaleMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "SetPresaleMerkleRoot",
    type: "event",
  },
  {
    inputs: [],
    name: "switchOGSaleIsActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "switchPresaleIsActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "switchSaleIsActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_merkelProof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "whitelistMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetsLeft",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_OG_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_PRESALE_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_PURCHASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRootOG",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "OGMintedQty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ogMintIsActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presaleIsActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presalePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "saleIsActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "supplyReached",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOTAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "whilteListMintedQty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistClaimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistOGClaimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});
export default {
  components: {
    "model-gltf": ModelGltf,
    Header,
    SaveModal,
  },
  data() {
    return {
      options: {
        scrollOverflow: true,
      },
      proofList: [],
      historyOpen: false,
      errText: null,
      quantity: 1,
      showModal: false,
      clipped: false,
      drawer: false,
      fixed: false,
      isSaleOn: false,
      isOgMint: false,
      isWalletConnected: false,
      isPreSaleOn: true,
      account: null,
      maxOGTokens: 4,
      maxTokens: 3,
      saleState: 3, // 0 - CLOSED 1 - OG 2 - WL 3 - PUBLIC
      contract: null,
      proof: null,
      ogLeft: null,
      wlLeft: null,
    };
  },
  methods: {
    incMint() {
      this.quantity += 1;
      if (this.quantity > this.maxTokens) {
        this.quantity = this.maxTokens;
      }
    },
    decMint() {
      this.quantity -= 1;
      if (this.quantity < 1) {
        this.quantity = 1;
      }
    },
    async checkSaleState() {
      this.contract.methods
        .ogMintIsActive()
        .call()
        .then((res) => {
          console.log(res);
        });
    },
    async getAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      this.account = accounts[0];
    },
    async initContract() {
      const provider = await web3Modal.connect();

      const web3 = new Web3(provider);

      const myContract = new web3.eth.Contract(
        NFT_ABI,
        "0x0Df49ce5a655B53118824c7ad4988Da4fE9035F5"
      );

      this.contract = myContract;
    },
    //ESTIMATE
    async ogPurchase() {
      const count = parseInt(document.getElementById("tokensNumber").innerText);
      const price = 20000000000000000;

      try {
        await this.contract.methods
          .ogMint(this.proofList, count)
          .estimateGas({
            from: this.account,
            value: price * count,
            gasLimit: 300000,
          })
          .then((gasAmount) => {
            this.contract.methods.ogMint(this.proofList, count).send({
              from: this.account,
              value: price * count,
              gas: gasAmount,
            });
          })
          .catch(function (error) {
            alert(
              "An error has occurred, the text of the error can be found in the console"
            );
          });
      } catch (e) {
        console.log(e);
      }

      await this.getAccount();
    },
    async whiteListPurchase() {
      const count = parseInt(document.getElementById("tokensNumber").innerText);
      const price = 20000000000000000;

      try {
        await this.contract.methods
          .whitelistMint(this.proofList, count)
          .estimateGas({
            from: this.account,
            value: price * count,
            gasLimit: 300000,
          })
          .then((gasAmount) => {
            this.contract.methods.whitelistMint(this.proofList, count).send({
              from: this.account,
              value: price * count,
              gas: gasAmount,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (e) {
        console.log(e);
      }

      await this.getAccount();
    },
    async getOGLeft() {
      this.ogLeft = await this.contract.methods
        .OGMintedQty(this.account)
        .call();
    },
    async getWLLeft() {
      this.wlLeft = await this.contract.methods
        .whilteListMintedQty(this.account)
        .call();
    },
    toggleModal() {
      this.showModal = true;
    },
    setErrorText(err) {
      this.errText = err;
    },
    async checkMerkle() {
      let leaves = null;

      if (this.saleState === 1) {
        leaves = this.OGList.map((x) => keccak256(x));
      } else if (this.saleState === 2) {
        leaves = this.whiteListAddresses.map((x) => keccak256(x));
      }

      const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

      const root = tree.getRoot().toString("hex");
      // if (this.saleState === 1) {
      //   console.log("OGRoot is : 0x" + root);
      // } else if (this.saleState === 2) {
      //   console.log("WLRoot is : 0x" + root);
      // }

      const leaf = keccak256(this.account);

      const proof = tree.getProof(leaf);
      const hexProof = tree.getHexProof(this.account);
      this.proofList = hexProof;
      proof.forEach(function (item, index, array) {
        var hex = "0x" + item.data.toString("hex");
        hexProof.push(hex);
      });
      this.proof = JSON.stringify(hexProof);

      // console.log(this.proofList);
    },
    async publicPurchase() {
      const count = parseInt(document.getElementById("tokensNumber").innerText);
      const price = 30000000000000000;
      var vm = this;
      try {
        await this.contract.methods
          .mintSpikesTo(count)
          .estimateGas({
            from: this.account,
            value: price * count,
            gasLimit: 300000,
          })
          .then((gasAmount) => {
            this.contract.methods.mintSpikesTo(count).send({
              from: this.account,
              value: price * count,
              gas: gasAmount,
            });
          })
          .catch(function (error) {});
      } catch (e) {
        console.log(e);
      }

      await this.getAccount();
    },

    // async connectWallet() {
    //   await this.initContract();
    //   await this.getAccount();
    //   await this.getOGLeft();
    //   if (this.saleState === 1) {
    //     this.getOGLeft();
    //     await this.checkMerkle();
    //   } else if (this.saleState === 2) {
    //     this.getWLLeft();
    //     await this.checkMerkle();
    //   }
    //   this.isWalletConnected = true;
    // },
  },

  async mounted() {
    var myFullpage = new fullpage("#fullpage", {
      anchors: ["main", "history", "specs", "roadmap", "team"],
      // sectionsColor: ["#4A6FB1", "#939FAA", "#323539"],
      scrollOverflow: true,
    });
    this.initContract();
  },
};
</script>


<style lang="scss" scoped>
.disable-link {
  pointer-events: none;
}
.modal {
  background: url("~/static/modal-bg.png") no-repeat;
  background-size: cover;
  padding: 16px;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  margin: 16px;
  height: 96%;
  filter: drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  overflow: auto;

  &-content {
    padding: 16px;
    font-size: 16px;
    &__heading {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      margin: 0 0 8px 0;
      color: #f7f6f3;
    }
    &-btn {
      &-container {
        display: flex;
      }
    }
    &__btn {
      &--close {
        width: 100%;
        padding: 8px 100px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #f7f6f3;
        border: 1px solid rgba(246, 246, 243, 0.4);
        box-sizing: border-box;
        border-radius: 4px;
        text-align: center;
      }
    }
  }
}
.spacer {
  &--history {
    width: 100%;
    height: 0;
    @include for-tablet-portrait-up {
      height: 80px;
    }
    @include for-phone-only {
      height: 80px;
    }
  }
  &--merch {
    width: 100%;
    height: 0;
    @include for-tablet-portrait-up {
      height: 80px;
    }
    @include for-phone-only {
      height: 80px;
    }
  }
  &--model {
    width: 100%;
    height: 0;
    @include for-tablet-portrait-up {
      height: 80px;
    }
    @include for-phone-only {
      height: 100px;
    }
  }
  &--roadmap {
    width: 100%;
    height: 0;
    @include for-tablet-portrait-up {
      height: 80px;
    }
    @include for-phone-only {
      height: 80px;
    }
  }
  &--team {
    width: 100%;
    height: 0px;
    @include for-tablet-portrait-up {
      height: 80px;
    }
    @include for-phone-only {
      height: 80px;
    }
  }
}
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

.main {
  height: 100vh;
}
.header-bg {
  background: url("~/static/header-bg.webp") no-repeat;
  background-position: 100% 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  @include for-phone-only {
    background-position: 52% 100%;
  }
}

.history {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  position: relative;
  justify-content: center;
  background-size: cover;
  &-inner {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    padding: 138px 0;
    @include for-tablet-landscape-up {
      max-width: 660px;
    }
    @include for-tablet-portrait-up {
      flex-direction: column;
      width: 100%;
      max-width: 660px;
    }
    @include for-phone-only {
      padding: 24px 16px 24px;
      flex-direction: column;
    }
    &::after {
      position: absolute;
      content: "";
      bottom: -40px;
      height: 40px;
      width: 1px;
    }

    &-mint {
      margin: 0 0 0 190px;
      // @include for-tablet-portrait-up {
      //   margin: 32px 0;
      //   max-width: 450px;
      // }
      @include for-tablet-portrait-up {
        margin: 32px;
        max-width: 80%;
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
        &__heading {
          text-align: center;
          @include for-phone-only {
            text-align: center;
          }
        }
        @include for-desktop-up {
          min-width: 400px;
        }
        @include for-phone-only {
          padding: 0 8px 16px;
          margin: 8px 0 0 0;
        }
        &-bottom {
          margin: 24px 0 0 0;
          &-desc {
            margin: 16px 0;
            text-align: center;
            @include for-phone-only {
              padding: 0 8px 16px;
              text-align: center;
            }
          }
        }
        &-controls {
          // display: flex;
          align-items: center;
          text-align: center;
          @include for-phone-only {
            // justify-content: space-between;
            text-align: center;
          }
          &-connect-btn {
            width: 100%;
          }
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
            text-decoration: none;
            color: #fff;
            margin: 0 16px 0 0;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            padding: 8px 30px;
            @include for-phone-only {
              padding: 8px 53px;
              margin: 0 0 0 16px;
            }
            &--connect {
              padding: 8px 90px;
              margin: 0;
            }
          }
        }
        &__img {
          max-width: 268px;
          margin: -60px auto 0;
          &--time {
            position: absolute;
            top: 0;
            left: 0;
            margin: -75px;
            @include for-phone-only {
              display: none;
            }
          }
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
  position: relative;
  background-size: cover;
  &-inner {
    display: flex;
    align-items: center;
    max-width: 1280px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 110px 0;

    @include for-tablet-portrait-up {
      flex-direction: column;
      padding: 40px 0 80px;
      align-items: center;
      max-width: 660px;
    }
    @include for-tablet-landscape-up {
      max-width: 660px;
    }
    @include for-phone-only {
      flex-direction: column;
      padding: 40px 16px 24px;
      align-items: center;
    }

    &-traits {
      max-width: 542px;
      // margin: 0 200px 0 0;
      // @include for-tablet-portrait-up {
      //   margin: 50px 0 0 0;
      //   display: flex;
      //   flex-direction: column;
      //   align-items: flex-start;
      // }

      &__desc {
        margin: 0 0 0 20px;
        @include for-phone-only {
          margin: 0;
        }
      }
      @include for-phone-only {
        margin: 0;
      }
      &__img {
        // @include for-tablet-portrait-up {
        //   width: 60%;
        // }
        @include for-phone-only {
          width: 100%;
        }
      }
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
      max-width: 542px;
      // @include for-tablet-portrait-up {
      //   margin: 0;
      //   display: flex;
      //   flex-direction: column;
      //   align-items: flex-end;
      // }
      &__img {
        // @include for-tablet-portrait-up {
        //   width: 60%;
        // }
        @include for-phone-only {
          width: 100%;
        }
      }
    }
  }
}
.model {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  position: relative;
  background-size: cover;
  &-inner {
    display: flex;
    max-width: 1280px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 110px 0;
    &-item {
      @include for-phone-only {
        order: 2;
      }
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
        order: 3;
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
            justify-content: space-between;
            width: 100%;
          }
        }

        &-controls {
          margin: 98px 0 0 0;
          @include for-phone-only {
            display: none;
          }

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
        }
      }
    }
    &-desc {
      flex: 1;
      max-width: 542px;
      @include for-phone-only {
        order: 3;
      }
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
    display: flex;
    max-width: 1280px;

    margin: 0 auto;
    align-items: center;
    padding: 62px 0;
    @include for-tablet-portrait-up {
      flex-direction: column;
      padding: 20px 18px 0;
    }
    @include for-phone-only {
      flex-direction: column;
      padding: 23px 16px 24px;
    }
    &-pic {
      margin: 8px 0 0 16px;

      @include for-sm-laptop {
        margin: 0 0 0 16px;
      }
      @include for-tablet-portrait-up {
        margin: 10px 0 0 0;
      }
      @include for-phone-only {
        order: 1;
        padding: 0 16px 16px;
        margin: 0;
      }
      &__img {
        height: 100%;
        // @include for-tablet-portrait-up {
        //   height: 70%;
        // }
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
      @include for-sm-laptop {
        // overflow-y: scroll;
        // max-height: 500px;
      }
      @include for-phone-only {
        order: 2;
      }
      &-item {
        background: rgba(22, 22, 22, 0.5);
        border-radius: 4px;
        padding: 8px;
        margin: 16px 0 0 0;
        @include for-sm-laptop {
          margin: 10px 0 0 0;
          padding: 7px;
        }
        &.active {
          background: rgba(246, 246, 243, 0.7);
          color: #000;
        }

        &:nth-child(1) {
          margin: 0;
        }
      }
    }
  }
}
.team {
  background: url("~/static/bg.png") no-repeat;
  background-position: 100% 100%;
  position: relative;
  background-size: cover;
  overflow: auto;
  &-inner {
    position: relative;
    max-width: 1280px;
    margin: 0 auto;
    padding: 138px 0;

    @include for-tablet-portrait-up {
      flex-direction: column;
      padding: 0 18px 0;
    }
    @include for-phone-only {
      flex-direction: column;
      padding: 0 18px 24px;
    }
    &-wrapper {
      &--networks {
        margin: 96px 0 0 0;
        @include for-phone-only {
          margin: 0 0 0;
        }
      }
      @include for-tablet-portrait-up {
        margin: 60px 0 0 0;
      }

      @include for-phone-only {
        padding: 24px 0 0;
      }
      &--row {
        display: flex;
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

        @include for-phone-only {
          font-size: 16px;
        }
      }
      &--collection {
        margin: 0 0 0 96px;
        @include for-tablet-portrait-up {
          margin: 60px 0 0 0;
        }
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
        margin: 0 0 0 96px;
        @include for-desktop-up {
          &:nth-child(1) {
            margin: 0;
          }
        }

        @include for-tablet-portrait-up {
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
          display: flex;
          align-items: center;
          &:nth-child(1) {
            margin: 0;
          }
        }
        &__img {
          margin: 0 16px 0 0;
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

        @include for-phone-only {
          font-size: 16px;
        }
      }
      &-item {
        align-items: center;
        display: flex;
        margin: 0 0 0 96px;
        &__joke {
          margin: 8px 0 0 0;
          max-width: 222px;
        }

        @include for-desktop-up {
          &:nth-child(1) {
            margin: 0;
          }
        }
        @include for-tablet-portrait-up {
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
          display: flex;
          align-items: center;

          /* white */

          color: #f7f6f3;

          &:nth-child(1) {
            margin: 0;
          }
        }
        &__img {
          margin: 0 16px 0 0;
        }
      }
    }
  }
}
</style>