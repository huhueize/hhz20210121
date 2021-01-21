//父组件,默认
<!--  home-->
<template>
  <div class="content">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--      默认-->
    <child>
        6666666666666<br>
      <template>555555555555</template>
        <br>
        777777777777<br>
    </child>

    <child v-slot="slotProps">
      11111111111111<br>
      22222222222222<br>
      33333333333333<br>
      44444444444444<br>
    </child>
  </div>
</template>
//父组件,具体名称
<!--<template>-->
<!--    <div class="container">-->
<!--        <child>-->
<!--            <template v-slot:main>-->
<!--                <a href="https://www.baidu.com" target="_blank">百度</a>-->
<!--            </template>-->
<!--            <template #footer>页脚</template>-->
<!--            <template #footer>-->
<!--                &lt;!&ndash;  v-slot 重复定义同样的 name 后只会加载最后一个定义的插槽内容 &ndash;&gt;-->
<!--                &lt;!&ndash;v-slot只会添加在一个 template 上面&ndash;&gt;-->
<!--            </template>-->
<!--        </child>-->
<!--    </div>-->

<!--</template>-->
//父组件 作用域
<!--<template>-->
<!--    <div class="container">-->
<!--        <child>-->
<!--            <template #footer="slotProps">-->
<!--                {{slotProps.user.title}}-->
<!--                <button @click="slotProps.testClick">点击</button>-->
<!--            </template>-->
<!--            <template #footer="{user,testClick}">-->
<!--                {{user.title}}<br>-->
<!--                此为解构插槽prop<br>-->
<!--                &lt;!&ndash; 子组件中的通用方法，可传递给父组件复用 &ndash;&gt;-->
<!--                <button @click="testClick">点击</button>-->
<!--            </template>-->
<!--        </child>-->
<!--    </div>-->
<!--</template>-->

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import child from'./child'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    child
  }
}
</script>
