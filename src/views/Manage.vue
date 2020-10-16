<template>
  <div class="manage">
    <Header/>
    <div class="container">
      <h1 :class="{'dark' : !isDarkMode, 'light' : isDarkMode}">Manage Readers</h1>
      <p
          :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
      >Enter reader name</p>
      <form @submit.prevent="getUserData" class="manage-container">
        <input
            v-model="reader.name"
            type="text"
            style="margin: 0"
            class="field"
            :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
            placeholder="Reader name"
        />
        <button
            class="manage-button button"
        >Get Reader Details
        </button>
      </form>
      <hr class="line-break"/>
      <h1 :class="{'dark' : !isDarkMode, 'light' : isDarkMode}">Reader Details</h1>
      <div class="details-container">
        <div class="detail">
          <div
              class="detail-title"
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >Reader name
          </div>
          <div
              class="detail-text"
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >{{reader.name}}
          </div>
        </div>
        <div class="detail">
          <div
              class="detail-title"
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >Age
          </div>
          <div
              class="detail-text"
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >{{reader.age}}
          </div>
        </div>
        <div class="detail">
          <div
              class="detail-title"
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >Job
          </div>
          <div
              class="detail-text"
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >{{reader.job}}
          </div>
        </div>
        <div class="detail">
          <div
              class="detail-title"
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >Tel
          </div>
          <div
              class="detail-text"
              :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          >{{reader.tel}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from 'axios';
import Reader from "@/models/reader";
import authHeader from "@/service/auth-header";
export default {
  name: "manage",
  components: {
    Header
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  data() {
    return {
      reader: new Reader('','','','')
    };
  },
  methods: {
    getUserData() {
      const API_URL='http://localhost:8082/api/reader/find/'
      axios.get(API_URL+this.reader.name,{
        headers:authHeader(),
      }).then(resp=>{
        this.reader.name=resp.data.name;
        this.reader.age=resp.data.age;
        this.reader.job=resp.data.job;
        this.reader.tel=resp.data.tel;
      })
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-left: 15%;
  padding-right: 15%;
}

h1 {
  margin-top: 40px;
}

p {
  line-height: 25px;
  font-size: 16px;
  font-weight: 400;
}

.manage-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
}

.manage-button {
  margin: 0 0 0 25px;
  @media all and (max-width: 767px) {
    margin: 25px;
  }
}

.line-break {
  opacity: 0.2;
  height: 1px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}

.details-container {
  margin: 0 -40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.detail {
  width: 400px;
  max-width: 35%;
  margin: 20px 40px;
}

.detail-title {
  opacity: 0.3;
  margin-bottom: 16px;
}

.detail-text {
  margin-top: -12px;
  line-height: 31px;
  font-size: 20px;
}
</style>