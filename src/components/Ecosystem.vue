<template>
  <div>
    <div class="modalBG" v-if="(firstModal || activeCategory)" @click="closeModal" />
    <div class="ecosystem" :class="{ expanded: (firstModal || activeCategory) }">
      <div v-show="activeCategory" class="toolbar">
        <div v-if="firstModal && !activeCategory" class="toolbarHeading">
          <img class="toolbarLogo" :src="current.logo">
          |
          <div class="toolbarTitle"> Ecosystem Map </div>
        </div>
        <div v-else class="toolbarBreadcrumbs">
          <div class="breadcrumbRoot" @click="activeCategory = ''"> {{ ecosystemTitle }} Ecosystem </div>
          <div class="separator"> / </div>
          <div class="breadcrumbChild"> {{ current.name }} </div>
        </div>

        <div class="toolbarIcons">
          <div class="copy"> C </div>
          <div class="download"> D </div>
          <div class="close" @click="closeModal"> X </div>
        </div>
      </div>

      <div class="actualView">
        <div v-if="!activeCategory" class="chart" @click="setExpansion">
          <highcharts :options="chartOptionRoot.chartOptions"></highcharts>
        </div>
        <div v-else class="category">
          <div v-for="company in companies" class="logo" :key="company.name" @click="setCompanyDetails(company)">
            <img class="logoImage" :src="company.logo" />
            <div class="name"> {{ company.name }} </div>
          </div>
        </div>
        <div v-if="(firstModal || activeCategory)" class="details">
          <div class="title">
            <img class="titleImage" :src="current.logo" />
            <h2>
              {{ current.name }}
            </h2>
          </div>
          <div v-if="current?.excerpt" class="excerpt">
            {{ current.excerpt }}
          </div>
          <h3> Description </h3>
          <div class="description">
            {{ current?.description }}
          </div>
          <h3> Links </h3>
          <div class="links">
            <a v-for="link in current.links" :href="link" :key="link">
              {{ link }}
            </a>
          </div>
          <h3> Founders </h3>
          <div class="founders">
            <div v-for="founder in current.founders" :key="founder">
              {{ founder }}
            </div>
          </div>
          <h3> Competitors </h3>
          <div class="competitors">
            <div v-for="comp in current.competitors" :key="comp">{{ comp }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Ecosystems as MockResponse } from "../mock.ts";
import type { Category, Company, Ecosystem } from "../mock.ts";
import Teleport from 'vue2-teleport';

export default {
  components: { Teleport },
  methods: {
    setExpansion() {
      this.firstModal = true
    },
    setCompanyDetails(e) {
      this.activeCompany = e
    },
    closeModal() {
      this.activeCategory = ''
      this.activeCompany = undefined
      this.firstModal = false
    }
  },
  computed: {
    formattedCompanies() {
      return this.current?.categories?.map((category: Category) => ({
        name: category?.name,
        value: category?.companies?.length,
      }));
    },
    companyImages() {
      return this.companies.map({})
    },
    title() {
      return this.current?.name
    },
    ecosystemTitle() {
      return this.response?.name
    },
    chartOptionRoot() {
      return {
        title: this.current?.name,
        chartType: "treemap",
        colorInputIsSupported: null,
        chartOptions: {
          chart: {
            type: "treemap",
          },
          title: {
            text: this.current?.name,
          },
          series: [
            {
              colorByPoint: true,
              colors: [
                "#7656FC",
                "#D6B300",
                "#0B50CF",
                "#067D80",
                "#8FBA35",
                "#CE1256",
                "#8FBA35",
                "#B45600",
                "#C62323",
                "#7656FC",
              ],
              point: {
                events: {
                  click: ({ point }) => {
                    const { companies } = this.response.categories.find((element) => element.name === point.name)
                    this.companies = companies
                    this.activeCategory = point.name
                  },
                },
              },
              data: this.formattedCompanies,
            },
          ],
        },
      };
    },
    current(): Company | Ecosystem {
      return this.activeCompany || this.response;
    },
  },

  data() {
    return {
      activeTitle: '',
      activeCategory: '',
      activeCompany: undefined,
      firstModal: false,
      companies: [],
      response: undefined,
      showDrawer: true,
    };
  },

  mounted() {
    // We async fetch from the deals DB.......
    this.response = MockResponse[0];
  },
};
</script>

<style scoped>
.ecosystem {
  border: 1px solid red;
  width: 600px;
  display: flex;
}

.ecosystem.expanded {
  position: absolute;
  background: var(--color-background);
  width: 80vw;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.actualView {
  display: flex;
  width: 100%;
}

.modalBG {
  content: "";
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  filter: blur(4px);
}

.details {
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 24px 24px 0;
  overflow-y: scroll;

  .title {
    .titleImage {
      width: 100%;
      border-radius: 8px;
    }
  }
}

.chart,
.category {
  flex: 1;
}

.toolbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid gray;

  .toolbarHeading {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 24px;
  }

  .toolbarBreadcrumbs {
    display: flex;
    gap: 8px;
    font-size: 24px;

    .breadcrumbRoot {
      text-decoration: underline;
      font-weight: semibold;
    }
  }

  .toolbarTitle {}

  .toolbarIcons {
    display: flex;
    gap: 8px;
    align-items: center;
  }
}

.category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: fit-content;
  padding: 24px 24px 0 24px;
  gap: 8px;


  .logo {
    border-radius: 8px;
    display: flex;
    width: 31%;
    max-height: 48px;
    gap: 4px;
    align-items: center;

    .logoImage {
      height: 100%;
      width: auto;
      border-radius: 100%;
    }
  }
}
</style>
