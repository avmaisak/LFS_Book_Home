<template>
  <div class="cont-full clr-bg-grey-300 h-100 p-t-5">
    <nav class="clr-bg-indigo-600 clr-pal-def-white p-1 fix-t">
      <router-link to="/"><i class="mi-home"></i></router-link>
    </nav>
    <article v-html="content" class="cont clr-bg-pal-def-white p-2">
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
  packages: []
}

export default {
  name: 'Page',
  data: function () {
    return dataSource
  },
  mounted () {
    this.initMoment(moment)
    this.loadPackages(dataSource)
    this.loadPageContent(this.p, dataSource)
  },
  methods: {
    async loadPageContent (page, d) {
      const response = await PageService.getStatic(page)
      var source = response.data
      var template = Handlebars.compile(source)
      var result = template(d)
      dataSource.content = result
    },
    async loadPackages (dataSource) {
      var res = await PageService.getStatic('/static/packages', 'json')

      for (let index = 0; index < res.data.length; index++) {
        dataSource.packages.push(res.data[index])
      }
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
