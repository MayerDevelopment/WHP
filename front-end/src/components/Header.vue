<template>
    <header>
        <router-link to="/" id="logo">{{ config.title }}</router-link>
        <div>
            <router-link exact to="/" class="btn-header">{{ lang.Home }}</router-link>

            <template v-if="$store.getters.User.isLogged">
                <router-link to="/sites" class="btn-header">{{ lang.Sites }}</router-link>
                <Dropdown id="profile-block">
                    <template slot="heading">{{session().name[0]}}</template>
                    <template slot="body">
                        <button @click="$store.commit('logout')">{{ lang.LogOut }}</button>
                    </template>
                </Dropdown>
            </template>

            <template v-else>
                <router-link exact to="/auth/login" class="btn-header">{{ lang.LogIn }}</router-link>
                <router-link exact to="/auth/register" class="btn-header">{{ lang.CreateAccount }}</router-link>
            </template>

            <Dropdown id="changeLang">
                <template slot="heading">{{ lang.Language }}</template>
                <template slot="body">
                    <button v-for="locale in lang._list" :key="locale.code" @click="setLang(locale.code)">
                        {{ locale.name }}
                    </button>
                </template>
            </Dropdown>
        </div>
    </header>
</template>

<script>
export default {
	methods: {
		session () { return this.$store.getters.User.session; }
	}
}
</script>

<style scoped>
header {
    background: #fff;
    padding: 8px 5vw;
    display: flex;
    justify-content: space-between;
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 10px 0;
}
header > div { display: flex; }

#logo {
    color: #263238;
    text-decoration: none;
    font-size: 28px;
    line-height: 30px;
}

.btn-header {
    position: relative;
    display: inline-flex;
    margin: 0 5px;
    font-size: 16px;
    text-decoration: none;
    color: #546E7A;
    background-color: rgba(0, 0, 0, 0.01);
    padding: 4px 15px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
}

.btn-header:hover, .btn-header:focus {
    background-color: #80CBC4;
    color: #fff;
}

.btn-header.active {
    background-color: #26A69A;
    color: #fff;
}

.btn-header:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 0;
    margin: auto;
    bottom: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    filter: drop-shadow(rgba(0, 0, 0, 0.35) 0 0 2px);
    pointer-events: none;
    opacity: 0;
    transition: 0.3s;
}
.btn-header:focus:before { opacity: 1; bottom: -2px; }
</style>
