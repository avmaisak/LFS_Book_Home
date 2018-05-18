<template>
  <div>
    <main class="h-100 clr-bg-indigo-500 clr-pal-def-white p-t-5-lg p-t-5-md p-4-sm p-4-smx">
      <article class="cont">
      <h1  class="txt-sz-3 txt-sz-2-sm txt-sz-2-smx txt-c txt-uppercase txt-100">{{title}}</h1>
      <div class="txt-c p-t-2 p-b-3">
        <img :alt="title" src="/static/logo.svg" width="180" height="180" class="animation-rubberBand" />
      </div>
      <p class="txt-j m-b-3 txt-sz-1-2">{{description}}</p>

      <router-link to="/pages/prologue/welcome" class="m-r-1"><i class="mi-home"></i></router-link>

      <div class="rw m-b-3" id="book-links">
          <div class="cl w-6 txt-c-xs txt-c-sm txt-r-lg txt-l-md">
            <a :href="systemv" class="btn clr-pal-def-white m-r-1 txt-sz-1-4 txt-sz-0-9-sm txt-sz-0-9-smx txt-uppercase">systemv</a>
          </div>
          <div class="cl w-6 txt-c-xs txt-c-sm txt-l-lg txt-l-md">
            <a :href="systemd" class="btn clr-pal-def-white txt-sz-1-4 txt-sz-0-9-sm txt-sz-0-9-smx txt-uppercase">systemd</a>
          </div>
      </div>

      <div class="rw">
        <div class="cl w-12 txt-c opacity-0-8" id="footer">
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
      description: 'Linux From Scratch - книга, которая обеспечит Вас знаниями и инструкциями, необходимыми для того, чтобы сконструировать свою собственную Linux систему. Это готовый шаблон, выполнив который, вы получите правильно работающую систему. К тому же, Вы свободны менять инструкции на Ваше усмотрение, что также является важной частью этого проекта. Вы всё контролируете - мы просто протягиваем Вам руку помощи, чтобы вы смогли начать собственное путешествие в мир Linux!',
      status: 'Черновой технический перевод',
      github: 'https://github.com/avmaisak/LFS_Book',
      mirror: 'https://linuxfromscratch.org.ru/',
      vk: 'https://vk.com/linuxfromscratch_ru',
      systemv: '/systemv/LFS-BOOK.html',
      systemd: '/systemd/LFS-SYSD-BOOK.html',
      mail: 'am@rus-bit.com'
    }
  },
  mounted: function () {
    // JavaScript
    const sr = ScrollReveal({ reset: true })
    // Customizing a reveal set
    sr.reveal('#footer a', { duration: 700 }, 250)
    sr.reveal('#book-links a', { duration: 700 }, 250)
  }
}
</script>
