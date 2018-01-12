<template>
  <div>
    <Head></Head>
    <div class="Logincontent">
      <div v-if="!isLogin" class="noLogin">
        <div style="height:1rem;fontSize:0.4rem;lineHeight:1rem;textAlign:center;fontWeight:bold;">登陆</div>
        <div style="display:flex;justifyContent:center;flexWrap:wrap;textAlign:center;position:relative;">
          <Input style="width:75%" size="large" v-model="userNameVal" type="text" placeholder="请输入手机号"></Input>
          <div style="position:relative;width:75%;marginTop:10px;">
            <Input size="large" v-model="passwordVal" style="height:50px;" :type="!isEyeOpen?'text':'password'" placeholder="请输入密码(随便输点)"></Input>
            <span class="passwordEye"  @click="isEyeOpenFn">
              <Icon  :size='25':type="isEyeOpen?'eye':'eye-disabled'"></Icon>
            </span>
          </div>
        </div>
        <div style="textAlign:right;paddingRight:20px;fontSize:0.25rem;color:blue;">忘记密码?</div>
        <div class="loginBtn" @click="loginBtnFn" >登陆</div>
      </div>
      <div v-if="isLogin" class="Logined">
        <div style="textAlign:center;padding:15px;">
          <Avatar src="http://image01.oneplus.cn/shop/201712/20/1134/b81ea647cd4bff0ecf76596db9e27d35.jpg" size="large" style="transform:scale(1.25)"></Avatar>  
          <div style="lineHeight:1.2rem;fontSize:0.35rem">{{userNameVal}}</div>
        </div>
        <ul class="personalList">
          <li class="personalTitle">个人中心</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="clipboard"></Icon>
            </div><span>我的订单</span></li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="icecream"></Icon>
            </div>优惠券</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="pizza"></Icon>
            </div>礼品券</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="card"></Icon>
            </div>邀请码</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="location"></Icon>
            </div>收货地址</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="ios-box"></Icon>
            </div>我的奖品</li>
        </ul>
        <ul class="personalList">
          <li class="personalTitle">账户管理</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="ios-person"></Icon>
            </div>我的账户</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="android-done"></Icon>
            </div>产品认证</li>
        </ul>
        <ul class="personalList">
          <li class="personalTitle">售后服务</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="android-lock"></Icon>
            </div>一加加多保</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="arrow-return-left"></Icon>
            </div>退货单</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="arrow-swap"></Icon>
            </div>换货单</li>
          <li>
            <div style="width:30px;textAlign:center;display:inline-block;">
              <Icon style="transform:translateY(15%);marginRight:10px;" :size="30" type="settings"></Icon>
            </div>维修单</li>
        </ul>
        <div style="textAlign:center;padding:10px;">
          <div @click="exitFn" class="exitBtn"><Icon :size="20" style="marginRight:10px;transform:translateY(5%);" type="close-circled"></Icon>退出登陆</div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from '../Head/Head.vue'
import Footer from '../Footer/Footer.vue'
import {Input,Icon,Button,Avatar} from 'iview'

export default {
  name:'login',
  data(){
    return{
      isEyeOpen:false,
      userNameVal:'',
      passwordVal:'',
      isLogin:false
    }
  },
  created(){
    this.isLogin = this.$store.state.login.isLogin
    this.userNameVal = this.$store.state.login.name
    this.passwordVal = ''
  },
  components:{
    Head,
    Footer,
    Input,
    Icon,
    Button,
    Avatar
  },
  computed:{
  },
  methods:{
    isEyeOpenFn(){
      this.isEyeOpen= !this.isEyeOpen
    },
    loginBtnFn(){
      let len = this.userNameVal.trim().length
      let passwordLen = this.passwordVal.trim().length
      if(len === 0){
        this.$dialog.notify({
            mes: '请填写手机号~',
            timeout: 3000,
            callback: () => {
            }
        });
        return
      }
      if(len!==11){
        this.$dialog.notify({
            mes: '请查证手机号~',
            timeout: 3000,
            callback: () => {
            }
        });
        return
      }
      if(passwordLen === 0){
        this.$dialog.notify({
            mes: '请填写密码~',
            timeout: 3000,
            callback: () => {
            }
        });
        return
      }
      this.$store.commit('login',this.userNameVal)
      this.$dialog.toast({
          mes: '登陆成功！',
          timeout: 1500,
          icon: 'success'
      });
      this.$router.push('/')
      console.log(this.$store.state.login.isLogin)
    },
    exitFn(){
      this.$store.commit('logout')
      this.$router.push('/')
      this.$dialog.toast({
          mes: '退出成功！',
          timeout: 1500,
          icon: 'success'
      });
    }
  }
}
</script>

<style>
  .noLogin{
    text-align: center;
  }
  .Logincontent{
    min-height: 6.05rem;
    background-color: #efefef;
  }
  .passwordEye{
    position: absolute;
    right:10px;
    top:6px;
  }
  .loginBtn{
    display: inline-block;
    height: 0.9rem;
    width: 4rem;
    background-color: #eb0028;
    color: #fff;
    text-align: center;
    line-height: 0.9rem;
    border-radius: 5px;
    margin: 10px 0;
    font-size: 16px;
  }
  .personalList{
    background-color: #fff;
  }
  .personalList .personalTitle{
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    text-indent: 10px;
    padding-left: 0;
  }
  .personalList li {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #ccc;
    padding-left: 15px;
    font-size: 0.3rem;
  }
  .exitBtn{
    width: 90%;
    height: 1rem;
    line-height: 1rem;
    display: inline-block;
    background-color: #cccccc;
    font-size: 0.35rem;
    text-align: center;
  }
</style>
