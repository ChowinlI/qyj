<template>
    <div class="login">
        <div class="login-container">
            <Card icon="log-in" title="欢迎登录" :bordered="false">
                <div class="form-container">
                    <Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
                        <FormItem prop="username">
                            <Input v-model="form.username" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="md-person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="16" type="md-lock"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            const validateUsername = (rule,value,callback) => {
                if(!value||value === ''||value===undefined){
                    callback(new Error("请输入用户名"));
                }else {
                    callback();
                }
            };
            const validatePassword = (rule,value,callback) => {
                if(!value||value === ''||value===undefined){
                    callback(new Error("请输入密码"));
                }else {
                    callback();
                }
            };
            return {
                form:{
                    username:"",
                    password:""
                },
                rules: {
                    username: [
                        {required:true, validator: validateUsername, trigger: 'blur'}
                    ],
                    password: [
                        {required:true, validator: validatePassword, trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            handleSubmit () {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.$router.push({path: '/home'})
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "login";
</style>
