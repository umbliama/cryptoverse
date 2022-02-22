<template>
  <div class="section history" id="history">
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
    </div>
  </div>
</template>