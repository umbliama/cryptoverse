<template>
  <section class="merch">
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
              <a href="" class="header-menu-nav-item__link link">ROADMAP</a>
            </li>
            <li class="header-menu-nav-item">
              <a href="" class="header-menu-nav-item__link link">CHARACTERS</a>
            </li>
            <li class="header-menu-nav-item">
              <a href="" class="header-menu-nav-item__link link">TEAM</a>
            </li>
          </div>
          <div class="header-menu-nav">
            <li class="header-menu-nav-item">
              <a href="" class="link">GALLERY</a>
            </li>
            <li class="header-menu-nav-item">
              <a href="" class="buy-btn">BUY </a>
            </li>
          </div>
        </div>
      </div>
      <Footer
        :heading="'INDIVIDUAL COLLECTION'"
        :pageNum="'3'"
        :pageName="'SPECS'"
      />
    </header>
    <div class="merch-inner">
      <div class="merch-inner-traits">
        <img class="merch-inner-traits__img" src="~/static/merch1.png" alt="" />
        <p>
          Every hero is individual collection from over 120 possible traits,
          including emotions, hands, headwear, clothing, and more. Items of the
          following characters are hidden
        </p>
      </div>
      <div class="merch-inner-store">
        <img class="merch-inner-store__img" src="~/static/merch2.png" alt="" />
        <p>
          We want to open the door a crack to our merch store. Each item will be
          of excellent quality, made with care for you. Our friends can get a
          free subscription with door-to-door comic delivery or read online.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
    padding: 138px 0;
    @media (max-width: 499px) {
      flex-direction: column;
      padding: 40px 16px 0;
      align-items: center;
    }

    &-traits {
      margin: 0 200px 0 0;
      @media (max-width: 499px) {
        margin: 0;
      }
      &__img {
        @media (max-width: 1600px) {
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
      &__img {
        @media (max-width: 1600px) {
          width: 80%;
        }
      }
    }
  }
}
</style>