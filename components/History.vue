<template>
  <section id="history" class="history">
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
              <a href="" class="header-menu-nav-item__link link">SPECS</a>
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
        :heading="'a story about us'"
        :pageNum="'2'"
        :pageName="'HISTORY'"
      />
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
          Opponents of mutations united and created their own clan. They called
          themselves mechanics. Mechanics believe that the only true evolution
          is the unification of man and technology. With the help of implants
          and prostheses they changed beyond recognition
        </p>
        <p class="history-inner-text__desc">
          People could not tolerate each other, but lived in the world until one
          of them created a completely autonomous artificial intelligence ... 
        </p>
        <p class="history-inner-text__desc">
          This universe was invented by two brothers. We will create a comic
          strip based on it. Soon you will get to know the main characters There
          are four of them. Be patient.  The introduction of each character will
          be acompanied with a little suprise for you
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
              3333 Spikes are waiting for you. Price 0.03 ETH. Choose with your
              mind and heart
            </p>
            <div class="history-inner-mint-box-controls">
              <a
                class="history-inner-mint-box-controls__mint-btn btn-border"
                href=""
                >MINT</a
              >
              <a
                @click.prevent="minusQuantity"
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
                @click.prevent="plusQuantity"
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
        </div>
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
    padding: 138px 0;

    @media (max-width: 320px) {
      flex-direction: column;
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
  }
}
</style>

<script>
export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    plusQuantity() {
      if (this.quantity > 10) {
        return;
      }
      this.quantity += 1;
    },
    minusQuantity() {
      if (this.quantity <= 1) {
        this.quantity = 1;
      }
      this.quantity -= 1;
    },
  },
};
</script>