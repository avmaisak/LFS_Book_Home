<template>
  <div>
    <main class="h-100 clr-bg-indigo-500 clr-pal-def-white p-t-3-lg p-t-5-md p-4-sm p-4-smx">
      <article class="cont">
      <h1  class="txt-sz-3 txt-sz-2-sm txt-sz-1-6-smx txt-c txt-400">{{title}}</h1>
      <div class="txt-c p-b-2">
        <img id="logo" :alt="title" src="/static/i/logo.svg" width="120" height="120" class="animation-rubberBand" />
      </div>
      <p class="txt-j m-b-2 txt-sz-1-1">{{description}}</p>
      <div class="rw">
        <div class="cl w-12 txt-c">
          <h3 class="txt-bold txt-sz-1-1 m-b-2">Выберите редакцию</h3>
          <select class="w-30 clr-bg-indigo-500 p-1 m-b-2" @change="versionChange(item)" v-model="item">
            <option
              v-for="(item, index) in releases"
              v-bind:item="item"
              v-bind:index="index"
              v-bind:key="item.id"
              v-bind:value="item"
            >{{ item.milestone }}</option>
          </select>
        </div>
      </div>
      <div class="rw m-b-2" id="book-links">
          <div class="cl w-12-xs w-6-sm w-6-md w-6-lg txt-c ">
            <a :href="`${item.path}${systemv}`" class="btn clr-bg-indigo-900 clr-pal-def-white txt-sz-1-4 txt-sz-0-9-sm txt-sz-0-9-smx txt-uppercase d-block m-1">systemv</a>
            <small>
              <span>Одна страница:</span>
              <a :href="`${item.path}${systemv_chuked_html}`">html</a>
              &nbsp;
              <a :href="`${item.path}${systemv_chuked_txt}`">txt</a>
            </small>
          </div>
          <div class="cl w-12-xs w-6-sm w-6-md w-6-lg txt-c">
            <a :href="`${item.path}${systemd}`" class="btn clr-bg-indigo-800 clr-pal-def-white txt-sz-1-4 txt-sz-0-9-sm txt-sz-0-9-smx txt-uppercase d-block m-1">systemd</a>
             <small>
              <span>Одна страница:</span>
              <a :href="`${item.path}${systemd_chuked_html}`">html</a>
              &nbsp;
              <a :href="`${item.path}${systemd_chuked_txt}`">txt</a>
            </small>
          </div>
      </div>

      <div class="rw">
        <div class="cl w-12 txt-c opacity-0-8 p-b-3" id="footer">
          <a :href="github" class=" clr-vf-pal-def-white m-r-1"><i class="mi-github txt-sz-1-3"></i></a>
          <a :href="vk" class="clr-pal-def-white m-r-1"><i class="mi-vk txt-sz-1-3"></i></a>
          <a :href="`mailto:${mail}`" class="clr-pal-def-white m-r-2-lg m-r-2-md"><i class="mi-envelope-out txt-sz-1-7 txt-sz-1-4-smx txt-sz-1-4-sm"></i></a>
          <a :href="mirror" class="clr-pal-def-white  d-block-sm d-block-smx p-t-1-smx p-t-1-sm txt-sz-0-8-smx txt-sz-0-8-sm">Официальное зеркало LFS</a>
        </div>
      </div>
    </article>
    </main>
  </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'

export default {
  name: 'Home',
  data () {
    return {
      title: 'Перевод книги Linux From Scratch',
      author: 'Gerard Beekmans',
      description: 'Linux From Scratch - книга, которая обеспечит Вас знаниями и инструкциями, необходимыми для того, чтобы создать свою собственную Linux систему. Это готовый шаблон, выполнив который, вы получите правильно работающую систему. К тому же, Вы свободны менять инструкции на Ваше усмотрение, что также является важной частью этого проекта. Вы всё контролируете - мы просто протягиваем Вам руку помощи, чтобы вы смогли начать собственное путешествие в мир Linux!',
      status: 'Черновой технический перевод',
      github: 'https://github.com/avmaisak/LFS_Book',
      mirror: 'https://linuxfromscratch.org.ru/',
      vk: 'https://vk.com/linuxfromscratch_ru',
      systemv: '/systemv/index.html',
      systemv_chuked_html: '/systemv-nc/LFS-BOOK.html',
      systemv_chuked_txt: '/systemv-nc/systemv.txt',
      systemd_chuked_html: '/systemd-nc/LFS-SYSD-BOOK.html',
      systemd_chuked_txt: '/systemd-nc/systemd.txt',
      systemd: '/systemd/index.html',
      mail: 'info@linuxfromscratch.org.ru',
      item: {},
      releases: [
        {
          milestone: 'current-develop',
          path: ''
        },
        {
          milestone: '8.3',
          path: '8.3'
        }
      ]
    }
  },
  methods: {
    versionChange (e) {
    },
    appendPath (target, path) {
      let res = `${path}${target}`
      return res
    }
  },
  mounted: function () {
    // JavaScript
    const sr = ScrollReveal({ reset: true })
    // Customizing a reveal set
    sr.reveal('#logo', { duration: 700 }, 250)
    sr.reveal('#footer a', { duration: 700 }, 250)
    sr.reveal('#book-links a', { duration: 700 }, 250)
    this.item = this.releases[0]
  }
}
</script>
