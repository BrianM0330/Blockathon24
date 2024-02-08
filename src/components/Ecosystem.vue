<template>
  <div>
    <div class="modalBG" v-if="(firstModal || activeCategory)" @click="closeModal" />
    <div class="ecosystemHeading">
      <div class="company">
        <div class="name"> {{ current.name }}</div>
        <div class="separator"> | </div>
        <div class="title"> Ecosystem Map </div>
      </div>
      <div class="actions">
        <div class="copy"> C </div>
        <div class="download"> D </div>
      </div>
    </div>
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
          <div v-for="company in companies" class="logo"
            :class="{ companySelected: activeCompany, active: activeCompany?.name === company.name }" :key="company.name"
            @click="setCompanyDetails(company)">
            <img class="logoImage" :src="company.logo" />
            <div class="name"> {{ company.name }} </div>
          </div>
        </div>
        <div v-if="(firstModal || activeCategory)" class="details" :class="{ expanded: showDrawer }">
          <div class="detailsCollapsed" v-if="!showDrawer" @click="showDrawer = true">
            <div class="collapseArrow"> <- </div>
                <button class="collapse" @click.prevent="showDrawer = true"> More </button>
            </div>
            <div class="detailsExpanded" v-if="showDrawer">
              <button class="collapse" @click.prevent="showDrawer = false"> Less </button>
              <div class="title">
                <img class="titleImage" :src="current.logo" />
                <h2>
                  {{ current.name || '' }}
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
    </div>
</template>

<script lang="ts">
import { Ecosystems as MockResponse } from "../mock";
import type { Category, Company, Ecosystem } from "../mock";
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
      this.showDrawer = false
    }
  },
  computed: {
    formattedCompanies() {
      return this.current?.categories?.map((category: Category) => ({
        name: category?.name,
        value: category?.companies?.length,
      }));
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
        backgroundColor: '#000000',
        chartOptions: {
          chart: {
            type: "treemap",
            backgroundColor: '#000000',
          },
          title: {
            text: '',
          },
          series: [
            {
              colorByPoint: true,
              dataLabels: {
                style: {
                  color: 'white',
                  textOutline: false
                }
              },
              opacity: 0.5,
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
      showDrawer: false,
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
  width: 600px;
  display: flex;
}

.ecosystem.expanded {
  position: fixed;
  background: var(--color-background);
  width: 80vw;
  height: 70vh;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border: 1px solid gray;
  border-radius: 8px;
}

.actualView {
  display: flex;
  width: 100%;
  height: 100%;
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
  width: 7.5%;

  .detailsCollapsed {
    background: var(--color-background);
    height: 100%;
    border-left: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .detailsExpanded {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px 24px 24px 0;
    overflow-y: scroll;

    .collapse {
      margin: -12px 0 0 auto;
    }
  }

  .title {
    .titleImage {
      width: 100%;
      border-radius: 8px;
      width: 96px;
      height: 96px;
    }
  }
}

.details.expanded {
  width: 25%;
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
  padding: 16px 24px 0 24px;
  gap: 8px;

  .logo {
    border-radius: 8px;
    display: flex;
    width: 32.5%;
    max-height: 48px;
    gap: 4px;
    align-items: center;
    margin: 8px 0;

    .logoImage {
      border-radius: 100%;
      width: 40px;
      height: 40px;
    }
  }

  .logo.companySelected {
    opacity: 50%;
  }

  .logo.companySelected.active {
    opacity: 100%;

    .logoImage {
      border: 1px solid white;
    }
  }
}

.ecosystemHeading {
  display: flex;
  padding: 20px 12px;
  border: 1px solid gray;
  border-radius: 8px 8px 0 0;

  justify-content: space-between;


  .company,
  .actions {
    display: flex;
  }

  .actions {
    gap: 8px;
  }
}
</style>
