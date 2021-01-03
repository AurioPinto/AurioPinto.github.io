<template>
  <div class="default">
    <div
      class="timeline-container"
      @mouseover="pauseInterval"
      @mouseleave="beginInterval"
      :class="openYear === 2018 ? 'longer' : ''"
    >
      <div ref="aboveContainer" class="above-container">
        <div
          v-for="(item, index) in above"
          :key="index + 'above'"
          class="text-block above"
          :style="
            isMobile
              ? 'left:' + item.left * 20 + 'px'
              : 'left:' + item.left + '%'
          "
        >
          <p class="timestamp">
            {{ item.year.toString().split(".")[0] }}-{{ item.month }}
          </p>
          <div class="introduce">
            <div class="scroller">
              <p
                v-for="(text, Index) in item.text"
                :key="'a' + Index"
                class="introduce"
              >
                {{ text }}
              </p>
              <img
                v-for="(imgItem, index) in item.img"
                :key="'i' + index"
                :src="config.absoluteFile + imgItem"
                alt
              />
            </div>
          </div>
          <div class="bottom-height"></div>
        </div>
      </div>
      <div ref="timeline" class="timeline">
        <div class="line"></div>
        <div class="icon-container">
          <div
            id="abc"
            @click="changeYear(2018, $event)"
            class="icon"
            :class="openYear === 2018 ? 'sub' : 'add'"
          >
            <p>2014</p>
          </div>
          <div
            @click="changeYear(2015, $event)"
            class="icon"
            :class="openYear === 2015 ? 'sub' : 'add'"
          >
            <p>2015</p>
          </div>
          <div
            @click="changeYear(2015.1, $event)"
            class="icon"
            :class="openYear === 2016.1 ? 'sub' : 'add'"
          >
            <p>2016.1H</p>
          </div>
          <div
            @click="changeYear(2016.2, $event)"
            class="icon"
            :class="openYear === 2016.2 ? 'sub' : 'add'"
          >
            <p>2016.2H</p>
          </div>
          <div
            @click="changeYear(2017.1, $event)"
            class="icon"
            :class="openYear === 2017.1 ? 'sub' : 'add'"
          >
            <p>2017.1H</p>
          </div>
          <div
            @click="changeYear(2017.2, $event)"
            class="icon"
            :class="openYear === 2017.2 ? 'sub' : 'add'"
          >
            <p>2017.2H</p>
          </div>
          <div
            @click="changeYear(2018.1, $event)"
            class="icon"
            :class="openYear === 2018.1 ? 'sub' : 'add'"
          >
            <p>2018.1H</p>
          </div>
          <div
            @click="changeYear(2018.2, $event)"
            class="icon"
            :class="openYear === 2018.2 ? 'sub' : 'add'"
          >
            <p>2018.2H</p>
          </div>
          <div
            @click="changeYear(2019, $event)"
            class="icon"
            :class="openYear === 2019 ? 'sub' : 'add'"
          >
            <p>2019</p>
          </div>
        </div>
      </div>
      <div ref="belowContainer" class="below-container">
        <div
          v-for="(item, index) in below"
          :key="index + 'below'"
          class="text-block below"
          :style="
            isMobile
              ? 'left:' + item.left * 20 + 'px'
              : 'left:' + item.left + '%'
          "
        >
          <div :style="isMobile ? 'height: 60px' : 'height: 5vw;'"></div>
          <p class="timestamp">
            {{ item.year.toString().split(".")[0] }}-{{ item.month }}
          </p>
          <div class="introduce">
            <div class="scroller">
              <p
                v-for="(text, Index) in item.text"
                :key="'t' + Index"
                class="introduce"
              >
                {{ text }}
              </p>
              <img
                v-for="(imgItem, index) in item.img"
                :key="'i' + index"
                :src="config.absoluteFile + imgItem"
                alt
              />
            </div>
          </div>
          <div></div>
        </div>
        <div v-if="below.length === 0" class="text-block">
          <div style="height: 3vw"></div>
          <p class="timestamp"></p>
          <div class="introduce"></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from "../config.js";

export default {
  name: "TimeLine",
  data() {
    return {
      above: [],
      below: [],
      openYear: 2018,
      years: [2018, 2015, 2016.1, 2016.2, 2017.1, 2017.2, 2018.1, 2018.2, 2019],
      interval: "",
      isMobile: false,
      config,
    };
  },
  props: ["value"],
  created() {
    this.initData();
    this.getIsMobile();
    this.setTime();
  },
  methods: {
    setTime() {
      let indexYear = 0;
      this.interval = setInterval(() => {
        this.openYear = this.years[(indexYear += 1) % this.years.length];
        this.initData();
      }, 5000);
    },
    getIsMobile() {
      this.isMobile = document.body.offsetWidth < 1000;
    },
    beginInterval() {
      this.setTime();
    },
    pauseInterval() {
      clearInterval(this.interval);
    },
    changeYear(year) {
      this.openYear = year;
      this.initData();
    },
    initData() {
      this.above = [];
      this.below = [];
      this.value
        .filter((item) => this.openYear === item.year)
        .forEach((item, index) => {
          if (index % 2 === 0) {
            this.above.push(item);
          } else {
            this.below.push(item);
          }
        });
    },
  },
};
</script>
<style lang="scss">
.default {
  background-color: black;
}
.timeline-container {
  overflow: scroll;
  width: 100vw;
  height: 40vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  .text-block {
    color: #fff;
    width: 34.2vh;
    height: 29.5vh;
    position: absolute;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    transition: 1s;
    justify-content: space-between;
    align-items: center;
    .timestamp {
      line-height: 3vw;
    }
    div.introduce {
      line-height: 1.2vw;
      width: 16vw;
      text-align: left;
      height: 7.6vw;
      // overflow: scroll;
      .scroller {
        min-height: 100%;
        animation: myMove 5s linear;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        /*animation-fill-mode: forwards;*/
      }
      img {
        width: 100%;
        margin-top: 1vw;
      }
    }
    @keyframes myMove {
      0% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(-33.3%);
      }
      100% {
        transform: translateY(-66.6%);
      }
    }
    .bottom-height {
      height: 5vw;
    }
  }
  .above {
    top: 22.3vh;
    background-image: url("../../public/images/develop/history_15.png");
  }
  .below {
    top: 50.1vh;
    background-image: url("../../public/images/develop/history_43.png");
  }
}
.timeline {
  width: 100vw;
  height: 80px;
  position: absolute;
  top: 49vh;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none;
  }
  .line {
    border-top: 1px dashed #fff;
    width: 100vw;
    position: relative;
    top: 20px;
  }
  .icon-container {
    text-align: left;
    position: relative;
    .icon {
      width: 40px;
      height: 40px;
      display: inline-block;
      background-position: center;
      background-size: contain;
      position: relative;
      z-index: 3;
      transition: 1s;
      p {
        color: #fff;
        font-size: 20px;
        position: relative;
        top: 40px;
        width: 110px;
      }
    }
    .sub {
      background-image: url("../../public/images/develop/history_46.png");
      margin-right: 55vw;
    }
    .add {
      background-image: url("../../public/images/develop/history_31.png");
      margin-right: 3vw;
    }
  }
}
@media (max-width: 1000px) {
  .timeline-container.longer {
    .above-container,
    .below-container,
    .timeline,
    .icon-container {
      width: 1000px;
    }
    .line {
      width: 1450px;
    }
  }
  .timeline-container {
    position: absolute;
    top: 5vh;
    height: 650px;
    .above-container {
      display: flex;
      width: 1300px;
      .above {
        position: absolute;
        top: 94px;
        .introduce {
          p {
            line-height: 18px;
            width: 280px;
            padding: 0 20px;
            box-sizing: border-box;
          }
        }
      }
    }
    .below-container {
      display: flex;
      width: 1300px;
      .below {
        position: absolute;
        top: 315px;
        p.introduce {
          line-height: 18px;
          width: 280px;
          padding: 0 20px;
          box-sizing: border-box;
        }
        div.introduce {
          width: 270px;
        }
      }
    }
    .text-block {
      width: 274.3px;
      height: 236px;
      position: relative;
      .timestamp {
        line-height: 12vw;
      }
      div.introduce {
        line-height: 8.2vw;
        width: 270px;
        overflow: hidden;
        height: 90px;
        img {
          width: 95%;
          left: 3vw;
          position: relative;
        }
      }
      .bottom-height {
        height: 17vw;
      }
    }
  }
  .timeline {
    position: absolute;
    top: 300px;
    width: 600px;
    .line {
      position: absolute;
      width: 2000px;
    }
    .icon-container {
      width: 2000px;
      .sub {
        margin-right: 1000px;
      }
      .add {
        margin-right: 60px;
      }
    }
  }
}
</style>
