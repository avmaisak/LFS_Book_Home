<template>
  <div class="cont-full clr-bg-indigo-600 h-100 p-t-4 p-b-4">
    <article class="cont clr-bg-pal-def-white p-t-2 p-l-3 p-r-3 p-b-4 txt-j">
       <nav class="clr-grey-500 m-b-1">
        <router-link to="/"><i class="mi-home"></i></router-link>
        <router-link to="/pages/prologue/foreword" class="m-r-1"><i class="mi-ios-arrow-round-back"></i></router-link>
        <router-link to="/pages/shared/contents"><i class="mi-grid"></i></router-link>
      </nav>
      <section v-html="content"></section>
    </article>
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
  beforeMount () {
    console.log('before')
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
