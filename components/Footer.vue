<template>
  <div class="page-footer">
    <div class="page-footer-inner">
      <div class="page-footer-inner-wrapper">
        <h3 class="page-footer-inner-wrapper__heading">
          {{ heading }}
        </h3>
        <div class="page-footer-inner-wrapper-pagination">
          <span class="page-footer-inner-wrapper-pagination__page">
            PAGE 0{{ pageNum }}
          </span>
          <div class="page-footer-inner-wrapper-pagination-progress">
            <img
              :src="require('~' + '/static/line' + pageNum + '.png')"
              alt=""
            />
          </div>
          <span class="page-footer-inner-wrapper-pagination__name">
            {{ pageName }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-footer {
  background: rgba(22, 22, 22, 0.5);
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  padding: 20px 0;
  position: absolute;
  @include for-sm-laptop {
    padding: 15px 0;
  }
  @include for-tablet-portrait-up {
    padding: 0;
  }
  @include for-phone-only {
    padding: 0;
  }
  &-inner {
    max-width: 1280px;
    margin: 0 auto;
    @include for-tablet-portrait-up {
      width: 100%;
    }
    &-wrapper {
      display: flex;
      justify-content: space-between;
      // @include for-tablet-portrait-up {
      //   flex-direction: column;
      //   padding: 16px;
      // }

      @include for-tablet-portrait-up {
        flex-direction: column;
        padding: 16px;
      }
      @include for-phone-only {
        flex-direction: column;
        padding: 16px;
      }
      &-pagination {
        display: flex;
        align-items: center;
        &-progress {
          margin: 0 24px;
          display: flex;
        }
        &__page {
          font-size: 16px;
        }
        &__name {
          font-size: 16px;
        }
      }
      &__heading {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 56px;
        /* identical to box height, or 140% */

        text-transform: uppercase;
        @include for-tablet-portrait-up {
          font-size: 30px;
        }
        @include for-phone-only {
          filter: blur(0);

          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "footer",
  props: ["heading", "pageNum", "pageName", "lineNum"],
};
</script>