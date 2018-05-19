<template>
  <div class="cont-full clr-bg-indigo-600 h-100 p-t-4">
    <nav class="clr-pal-def-white p-1 fix-t">
      <div class="cont">
        <router-link to="/"><i class="mi-home"></i></router-link>
      </div>
    </nav>
    <article v-html="content" class="cont clr-bg-pal-def-white p-3 txt-j"></article>
  </div>
</template>

<script>
import * as moment from 'moment'
import * as Handlebars from 'handlebars'
import PageService from '@/services/PageService'

let dataSource = {
  title: '',
  currentYear: '',
  content: '',
  page: '',
  conf: {},
  packages: []
}

export default {
  name: 'Page',
  data: function () {
    return dataSource
  },
  mounted () {
    this.initMoment(moment)
    this.loadConfig()
    this.loadConfigData()
    this.loadPageContent(this.p)
  },
  methods: {
    async loadPageContent (page) {
      Handlebars.registerPartial('page-header',
        `<h1 class="txt-c clr-indigo-600 txt-sz-3">{{text}}</h1>`
      )
      const response = await PageService.getStatic(page)
      const source = response.data
      const template = Handlebars.compile(source)
      const result = template(dataSource)
      dataSource.content = result
    },
    async loadConfigData () {
      const packages = await PageService.getStatic('/static/config/packages', 'json')
      for (let index = 0; index < packages.data.length; index++) {
        dataSource.packages.push(packages.data[index])
      }
    },

    async loadConfig () {
      const cfg = await PageService.getStatic('/static/config/general', 'json')
      dataSource.cfg = cfg.data
    },

    initMoment (moment) {
      moment.locale('ru')
      dataSource.currentYear = this.getDate('YYYY')
    },
    getDate: function (format) {
      return moment().format(format)
    }
  },
  computed: {
    p: function () {
      return `/static/pages/${this.$route.params.section}/${this.$route.params.page}`
    }
  }
}
</script>
