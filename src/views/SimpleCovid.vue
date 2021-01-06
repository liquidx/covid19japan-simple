<template>
  <div class="simple">
    <h1>Simple<br />Covid19<br />Japan</h1>

    <HeaderRow
      v-on:toggleMetric="toggleMetric"
      v-on:togglePeriod="togglePeriod"
      :title="humanReadableMetricKey"
      :metric="periodSelected + ' %Δ'"
    />
    <StatRow ref="japan" place="Japan" :metric="metrics.japan" />
    <StatRow ref="kanto" place="Kanto" :metric="metrics.kanto" />
    <StatRow ref="tokyo" place="Tokyo" :metric="metrics.tokyo" />
    <StatRow ref="osaka" place="Osaka" :metric="metrics.osaka" />
    <StatRow ref="others" place="Others" :metric="metrics.others" />
  </div>
</template>

<script>
// @ is an alias to /src
import StatRow from '@/components/StatRow.vue';
import HeaderRow from '@/components/HeaderRow.vue';

import _ from 'lodash';

export default {
  name: 'SimpleCovid',
  components: {
    StatRow,
    HeaderRow
  },
  data() {
    return {
      japan: [],
      prefectures: [],
      periodSelected: 'Weekly',
      periodNames: {
        Weekly: 7,
        Monthly: 30
      },
      metricKeys: ['confirmed', 'active', 'critical', 'deceased'],
      metricKey: 'confirmed',
      prefectureMetricKeyName: {
        confirmed: 'dailyConfirmedCount',
        active: 'dailyActive',
        deceased: 'dailyDeceasedCount'
      },
      avgKeyForMetric: {
        active: 'activeCumulative',
        critical: 'criticalCumulative'
      },
      diffMethod: {
        confirmed: 'sumDiff',
        deceased: 'sumDiff',
        active: 'avgDiff',
        critical: 'avgDiff'
      },
      metrics: {
        japan: '',
        kanto: '',
        tokyo: '',
        osaka: '',
        others: ''
      }
    };
  },
  async mounted() {
    this.loadData();
  },
  watch: {
    japan() {
      this.recalculateMetrics();
    }
  },
  computed: {
    humanReadableMetricKey() {
      switch (this.metricKey) {
        case 'active':
          return 'Active Cases';
        case 'critical':
          return 'Critical Cases';
        case 'deceased':
          return 'Deaths';
        case 'confirmed':
          return 'New';
        default:
          return '';
      }
    }
  },
  methods: {
    loadData() {
      fetch('https://data.covid19japan.com/summary_min/latest.json')
        .then(results => results.json())
        .then(results => {
          this.japan = results.daily;
          this.prefectures = results.prefectures;
          console.log(this.prefectures);
        });
    },
    recalculateMetrics() {
      const isTokyo = p => {
        return p.name == 'Tokyo';
      };
      const isOsaka = p => {
        return p.name == 'Osaka';
      };
      const isKanto = p => {
        return ['Tokyo', 'Kanagawa', 'Chiba', 'Saitama'].indexOf(p.name) != -1
      }
      const isOthers = p => {
        return ['Tokyo', 'Kanagawa', 'Chiba', 'Saitama', 'Osaka'].indexOf(p.name) == -1
      }

      this.metrics.japan = this.calculateJapanWideMetrics();
      this.metrics.kanto = this.calculatePrefectureMetrics(isTokyo);
      this.metrics.tokyo = this.calculatePrefectureMetrics(isKanto);
      this.metrics.osaka = this.calculatePrefectureMetrics(isOsaka);
      this.metrics.others = this.calculatePrefectureMetrics(isOthers);
    },
    calculateJapanWideMetrics() {
      let diffMethod = this.diffMethod[this.metricKey];
      let periodLength = this.periodNames[this.periodSelected];
      let thisPeriodSum = 1
      let lastPeriodSum = 1

      // Cut off the most current day to prevent using incomplete data.
      let values = this.japan.slice(0, this.japan.length - 1)

      if (diffMethod == 'sumDiff') {
        let thisPeriod = values.slice(values.length - periodLength);
        let lastPeriod = values.slice(
          values.length - periodLength * 2,
          values.length - periodLength
        );
        // console.log(thisPeriod)
        // console.log(thisPeriod.map(o => o[this.metricKey]));
        // console.log(lastPeriod.map(o => o[this.metricKey]));

        thisPeriodSum = _.sumBy(thisPeriod, this.metricKey);
        lastPeriodSum = _.sumBy(lastPeriod, this.metricKey);
       
      } else if (diffMethod == 'avgDiff') {
        // This matters for Japan-wide data beacuse we're inconsistently naming day-to-day diffs
        // so instead we use the cumulative number and compare them.
        thisPeriodSum = values[values.length - 2][this.avgKeyForMetric[this.metricKey]];
        lastPeriodSum = values[values.length - periodLength - 2][this.avgKeyForMetric[this.metricKey]];
        // console.log(this.japan)
        // console.log(thisPeriodSum, lastPeriodSum)
      }

      let percentDiff = (((thisPeriodSum - lastPeriodSum) / lastPeriodSum) * 100).toFixed(1);
      if (percentDiff > 0) {
        return `+${percentDiff}%`;
      } else {
        return `${percentDiff}%`;
      }
    },
    calculatePrefectureMetrics(predicate) {
      let prefectures = _.filter(this.prefectures, predicate);
      let periodLength = this.periodNames[this.periodSelected];
      let thisPeriodSum = 0;
      let lastPeriodSum = 0;

      let metricKey = this.prefectureMetricKeyName[this.metricKey];
      if (!metricKey) {
        return '';
      }

      for (let prefecture of prefectures) {
        let values = prefecture[metricKey];
        if (!values) {
          continue;
        }

        // Cut off most current day to avoid summing incomplete days.
        values = values.slice(0, values.length - 1)

        let thisPeriod = values.slice(values.length - periodLength);
        let lastPeriod = values.slice(
          values.length - 2 * periodLength,
          values.length - periodLength
        );
        thisPeriodSum += _.sum(thisPeriod);
        lastPeriodSum += _.sum(lastPeriod);
      }

      let percentDiff = (((thisPeriodSum - lastPeriodSum) / lastPeriodSum) * 100).toFixed(1);
      if (percentDiff > 0) {
        return `+${percentDiff}%`;
      } else {
        return `${percentDiff}%`;
      }
    },
    toggleMetric() {
      console.log('toggleMetric');
      let currentIndex = this.metricKeys.indexOf(this.metricKey);
      let nextIndex = currentIndex + 1;
      if (nextIndex >= this.metricKeys.length) {
        nextIndex = 0;
      }
      this.metricKey = this.metricKeys[nextIndex];
      this.recalculateMetrics();
    },
    togglePeriod() {
      switch (this.periodSelected) {
        case 'Weekly': {
          this.periodSelected = 'Monthly';
          break;
        }
        case 'Monthly': {
          this.periodSelected = 'Weekly';
          break;
        }
      }
      this.recalculateMetrics();
    }
  }
};
</script>

<style lang="scss" scoped>
.simple {
  h1 {
    margin-top: 0;
    font-size: 3em;
    font-weight: bold;
  }
}
</style>
