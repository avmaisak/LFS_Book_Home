<template>
  <div>
    <div class="clr-bg-indigo-600 clr-pal-def-white p-1">
      <router-link to="/"><i class="mi-home"></i></router-link>
    </div>
    <!-- <article v-html="content"></article> -->
    {{ p }}

  </div>
</template>

<script>
import * as moment from 'moment'
import PageService from '@/services/PageService'
export default {
  name: 'Page',
  data: function () {
    return {
      title: '',
      currentYear: this.getDate('YYYY'),
      page: this.$route.params.id,
      content: ''
    }
  },
  mounted () {
    this.initMoment(moment)
    this.load(this.p)
  },
  methods: {
    async load (page) {
      const response = await PageService.getPage(page)
      this.content = response.data
      this.$options.template = this.content
    },
    initMoment (moment) {
      moment.locale('ru')
    },
    getDate: function (format) {
      return moment().format(format)
    }
  },
  computed: {
    p: function () {
      return `@/page/${this.$route.params.section}/${this.$route.params.page}.vue`
    }
  }
}
</script>

<style>
</style>
