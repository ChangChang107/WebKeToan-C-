<template>

        <TheHeader></TheHeader>
        <div class="main">
        <TheNavbar></TheNavbar>
        <div>Đây là trang tổng quan</div>
        <!-- <MToastMessage
        :textMsg="addSuccessMsg"
        :content="content"
        :action="action"
        v-if="showToastMsg"
        :classIcon="classIconSusscess"
        ></MToastMessage> -->
        </div>
        

</template>

<script>
// import TheHeader from './components/layout/TheHeader.vue'
// import TheNavbar from './components/layout/TheNavbar.vue'
// import PageContent from './components/layout/PageContent.vue'
// import MToastMessage from '../components/base/MToastMessage.vue';
// import MISAEnum from '@/helpers/enum';


export default {
  name: 'OverviewPage',
  components: {
    // MToastMessage,
  },
  data() {
    return {
      // deleteEmployeeMsg: MISAEnum.deleteMessage.content,
      // addSuccessMsg: MISAEnum.toasMessage.Success,
      // content: "Công việc của bạn đã bị xóa",
      // action: "Hoàn tác",
      // editSuccessMsg: MISAEnum.toasMessage.editSuccess,
      // deleteSuccessMsg: MISAEnum.toasMessage.deleteSuccess,
      // showToastMsg: true,
      // classIconSusscess: MISAEnum.ClassIcon.Success,
      // classIconFaild: MISAEnum.ClassIcon.Faild,
    }
  },
}
</script>

<style>

</style>