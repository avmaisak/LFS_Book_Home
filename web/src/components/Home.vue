<template>
  <div>
    <main class="h-100 clr-bg-indigo-500 clr-pal-def-white p-t-5">
      <article class="cont">
      <h1  class="txt-sz-3 txt-c txt-uppercase txt-100">{{title}}</h1>
      <div class="txt-c p-t-3 p-b-3">
        <img :alt="title" src="/static/logo.svg" width=180 class="animation-rubberBand" />
      </div>
      <p class="txt-j m-b-3 txt-sz-1-2">{{description}}</p>

      <div class="rw m-b-3">
          <div class="cl w-12 txt-c">
            <a :href="systemv" class="btn clr-pal-def-white m-r-1 txt-sz-1-4 txt-uppercase"><i class="mi-book"></i>systemv</a>
            <a :href="systemd" class="btn clr-pal-def-white txt-sz-1-4 txt-uppercase">systemd</a>
          </div>
      </div>

      <div class="rw">
        <div class="cl w-12 txt-c opacity-0-8">
          <a :href="github" class=" clr-vf-pal-def-white m-r-1"><i class="mi-github txt-sz-1-3"></i></a>
          <a :href="vk" class="clr-pal-def-white m-r-1"><i class="mi-vk txt-sz-1-3"></i></a>
          <a :href="`mailto:${mail}`" class="clr-pal-def-white m-r-2"><i class="mi-envelope-out txt-sz-1-7"></i></a>
          <a :href="mirror" class="clr-pal-def-white ">Официальное зеркало LFS</a>
        </div>
      </div>
    </article>
    </main>
  </div>
</template>

<script>
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
      systemd: '/systemd/LFS-BOOK.html',
      mail: 'am@rus-bit.com'
    }
  }
}
</script>
