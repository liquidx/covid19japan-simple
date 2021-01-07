<template>
  <div class="simple">
    <h1>Simple<br />Covid19<br />Japan</h1>

    <HeaderRow
      v-on:toggleMetric="toggleMetric"
      v-on:togglePeriod="togglePeriod"
      :title="humanReadableMetricKey"
      :metric="metricTitle"
    />
    <StatRow ref="japan" place="Japan" :metric="metrics.japan" />
    <StatRow ref="kanto" place="Kanto" :metric="metrics.kanto" />
    <StatRow ref="tokyo" place="Tokyo" :metric="metrics.tokyo" />
    <StatRow ref="osaka" place="Osaka" :metric="metrics.osaka" />
    <StatRow ref="others" place="Others" :metric="metrics.others" />

    <Description />
  </div>
</template>

<script>
// @ is an alias to /src
import StatRow from '@/components/StatRow.vue';
import HeaderRow from '@/components/HeaderRow.vue';
import Description from '@/components/Description.vue';

import _ from 'lodash';

export default {
  name: 'SimpleCovid',
  components: {
    StatRow,
    HeaderRow,
    Description
  },
  data() {
    return {
      japan: [],
      prefectures: [],
      showRelativeValue: true,
      periodSelected: '14 day',
      periodNames: {
        '14 day': 14,
        '30 day': 30
      },
      metricKey: 'confirmed',
      metricKeys: ['confirmed', 'deceased', 'active', 'critical'],
      metricProperties: {
        confirmed: {
          name: 'New Cases',
          japanKey: 'confirmed',
          prefectureKey: 'dailyConfirmedCount',
          difference: true
        },
        deceased: {
          name: 'Deaths',
          japanKey: 'deceased',
          prefectureKey: 'dailyDeceasedCount',
          difference: true
        },
        active: {
          name: 'Currently Positive',
          japanKey: 'activeCumulative',
          prefectureKey: 'dailyActive',
          current: true
        },
        critical: {
          name: 'Critical Condition',
          japanKey: 'criticalCumulative',
          current: true
        }
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
      return this.metricProperties[this.metricKey].name;
    },
    metricTitle() {
      if (this.showRelativeValue) {
        return `${this.periodSelected} %Δ`;
      } else {
        if (this.metricProperties[this.metricKey].current) {
          return 'Current';
        } else {
          return 'Daily ' + this.periodNames[this.periodSelected] + 'd Avg';
        }
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
    humanReadableValues(values) {
      let max = _.max(Object.values(values));
      console.log(Object.values(values))
      let humanReadable = {};

      for (let k of Object.keys(values)) {
        let v = values[k];
        if (max > 1000000) {
          v = (v / 1000000).toFixed(1) + 'M';
        } else if (max > 1000) {
          v = (v / 1000).toFixed(1) + 'K';
        } else {
          v = v.toString();
        }
        humanReadable[k] = v;
      }
      return humanReadable;
    },
    recalculateMetrics() {
      const isTokyo = p => {
        return p.name == 'Tokyo';
      };
      const isOsaka = p => {
        return p.name == 'Osaka';
      };
      const isKanto = p => {
        return ['Tokyo', 'Kanagawa', 'Chiba', 'Saitama'].indexOf(p.name) != -1;
      };
      const isOthers = p => {
        return ['Tokyo', 'Kanagawa', 'Chiba', 'Saitama', 'Osaka'].indexOf(p.name) == -1;
      };

      this.metrics.japan = this.calculateJapanWideMetrics();
      this.metrics.kanto = this.calculatePrefectureMetrics(isKanto);
      this.metrics.tokyo = this.calculatePrefectureMetrics(isTokyo);
      this.metrics.osaka = this.calculatePrefectureMetrics(isOsaka);
      this.metrics.others = this.calculatePrefectureMetrics(isOthers);
      if (!this.showRelativeValue) {
        this.metrics = this.humanReadableValues(this.metrics);
      }
    },
    calculateJapanWideMetrics() {
      let metricProperty = this.metricProperties[this.metricKey];
      let metricKey = metricProperty.japanKey;
      let periodLength = this.periodNames[this.periodSelected];
      let thisPeriodSum = 1;
      let lastPeriodSum = 1;

      // Cut off the most current day to prevent using incomplete data.
      let values = this.japan.slice(0, this.japan.length - 1);

      if (metricProperty.difference) {
        let thisPeriod = values.slice(values.length - periodLength);
        let lastPeriod = values.slice(
          values.length - periodLength * 2,
          values.length - periodLength
        );

        thisPeriodSum = _.sumBy(thisPeriod, metricKey);
        lastPeriodSum = _.sumBy(lastPeriod, metricKey);
      } else if (metricProperty.current) {
        // For metrics that are just reporting the current number (not increases)
        // we simply compare the current value with a value $periodLength before.
        thisPeriodSum = values[values.length - 1][metricKey];
        lastPeriodSum = values[values.length - periodLength - 1][metricKey];
      }

      if (this.showRelativeValue) {
        let percentDiff = (((thisPeriodSum - lastPeriodSum) / lastPeriodSum) * 100).toFixed(0);
        if (percentDiff > 0) {
          return `+${percentDiff}%`;
        } else {
          return `${percentDiff}%`;
        }
      } else {
        if (metricProperty.difference) {
          return Math.round(thisPeriodSum / periodLength);
        } else if (metricProperty.current) {
          return thisPeriodSum;
        }
      }
    },
    calculatePrefectureMetrics(predicate) {
      let prefectures = _.filter(this.prefectures, predicate);
      let periodLength = this.periodNames[this.periodSelected];
      let thisPeriodSum = 0;
      let lastPeriodSum = 0;

      let metricProperty = this.metricProperties[this.metricKey];
      let metricKey = metricProperty.prefectureKey;
      if (!metricKey) {
        return '';
      }

      for (let prefecture of prefectures) {
        let values = prefecture[metricKey];
        if (!values) {
          continue;
        }

        // Cut off most current day to avoid summing incomplete days.
        values = values.slice(0, values.length - 1);

        if (metricProperty.difference) {
          let thisPeriod = values.slice(values.length - periodLength);
          let lastPeriod = values.slice(
            values.length - 2 * periodLength,
            values.length - periodLength
          );
          thisPeriodSum += _.sum(thisPeriod);
          lastPeriodSum += _.sum(lastPeriod);
        } else if (metricProperty.current) {
          thisPeriodSum += values[values.length - 1];
          lastPeriodSum += values[values.length - periodLength - 1];
        }
      }

      if (this.showRelativeValue) {
        let percentDiff = (((thisPeriodSum - lastPeriodSum) / lastPeriodSum) * 100).toFixed(0);
        if (percentDiff > 0) {
          return `+${percentDiff}%`;
        } else {
          return `${percentDiff}%`;
        }
      } else {
        if (metricProperty.difference) {
          return Math.round(thisPeriodSum / periodLength);
        } else if (metricProperty.current) {
          return thisPeriodSum;
        } else {
          return 'Err';
        }
      }
    },
    toggleMetric() {
      let currentIndex = this.metricKeys.indexOf(this.metricKey);
      let nextIndex = currentIndex + 1;
      if (nextIndex >= this.metricKeys.length) {
        nextIndex = 0;
      }
      this.metricKey = this.metricKeys[nextIndex];
      this.recalculateMetrics();
    },
    togglePeriod() {
      const toggles = [
        '14 day true',
        '14 day false',
        '30 day true',
        '30 day false'
      ]
      let currentIndex = toggles.indexOf(`${this.periodSelected} ${this.showRelativeValue}`)
      let next = toggles[(currentIndex + 1) % toggles.length]

      this.showRelativeValue = next.endsWith('true');
      this.periodSelected = next.replace(' true', '').replace(' false', '')
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
