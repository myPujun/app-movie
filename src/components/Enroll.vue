<template>
    <form @submit.prevent="" class="sheet">
        <input type="text" placeholder="请输入手机号码">
        <label for="">
            <input type="text" placeholder="请输入验证码">
            <span>获取验证码</span>
        </label>
        <input type="password" placeholder="请输入密码">
        <input type="submit" value="注册">
    </form>
</template>
<script>
    export default {
        name:'enroll',
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    .sheet{
        margin: 0 auto;
        margin-top: .5rem;
        width: 5.5rem;
        display: flex;
        flex-direction: column;
    }
    .forget{
        margin-top: 1rem;
        font-size: .26rem;
        color: #808080;
    }
    label{
        border-bottom: 1px solid #c9c9c9;
    }
    label input[type='text']{
        border: none;
    }
    label span{
        color: #a975c7;
    }
    input[type='text'],input[type='password']{
        background: none;
        border: none;
        border-bottom: 1px solid #c9c9c9;
        font-size: .3rem;
        height: 1rem;
        text-indent: 5px;
        margin-top: .5rem;
    }
    input[type='submit']{
        margin-top: 1rem;
        background: none;
        border: none;
        height: 1rem;
        color: #FFF;
        font-size: .36rem;
        background-color: #a975c7;
        border-radius: 40px;
        box-shadow: 0px 5px 10px rgba(169,117,199,.3)
    }
</style>