<template>
    <div class="login">
        <h1>Login</h1>
        <p v-if="error">{{ error }}</p>
        <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <router-link to="/auth/register">Register</router-link></p>
    </div>
</template>

<script>
    const { status, data, signIn, signOut } = useSession()

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: '',
            }
        },
        methods: {
            async login() {
                try {
                    await signIn('credentials', {
                        email: this.email,
                        password: this.password,
                        redirect: false,
                    })
                    this.$router.push('/')
                } catch (error) {
                    this.error = error.response.data.message
                }
            },
        },
    }
</script>

<style>
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-size: 2rem;
        color: var(--primary);
    }

    .login h1 {
        font-size: 10rem;
        margin: 0;
    }

    .login p {
        margin: 0;
    }
</style>