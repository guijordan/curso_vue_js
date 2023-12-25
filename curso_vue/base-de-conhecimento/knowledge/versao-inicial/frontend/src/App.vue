<template>
	<div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
		<Header title="Cod3r - Base de Conhecimento" :hideToggle="!user" :hideUserDropdown="!user"></Header>
		<Menu v-if="user"></Menu>
		<Loading v-if="validateToken"></Loading>
		<Content v-else></Content>
		<Footer></Footer>
	</div>
</template>

<script>
import axios from 'axios';
import { baseApiUrl, userKey } from "@/global";
import { mapState } from 'vuex';
import Header from '@/components/template/Header.vue';
import Menu from '@/components/template/Menu.vue';
import Content from '@/components/template/Content.vue';
import Footer from '@/components/template/Footer.vue';
import Loading from '@/components/template/Loading.vue';
export default {
	name: "App",
	components: { Header, Menu, Content, Footer, Loading },
	computed: mapState(['isMenuVisible', 'user']),
	data: function () {
		return {
			validatingToken: true
		};
	},
	methods: {
		async validateToken() {
			this.validateToken = true;
			const json = localStorage.getItem(userKey);
			const userData = JSON.parse(json);
			this.$store.commit('setUser', null);
			if (!userData) {
				this.validateToken = false;
				this.$router.push({ name: 'auth' });
				return;
			}
			const res = await axios.post(`${baseApiUrl}/validateToken`, userData);
			if (res.data) {
				this.$store.commit('setUser', userData);
				if (this.$mq === 'xs' || this.$mq === 'sm') {
					this.$store.commit('toggleMenu', false);
				}
			} else {
				localStorage.removeItem(userKey);
				this.$router.push({ name: 'auth' });
			}
			this.validateToken = false;
		}
	},
	created() {
		this.validateToken();
	}
}
</script>

<style>
* {
	font-family: "Latto", sans-serif;
}

body {
	margin: 0;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr 40px;
	grid-template-columns: 300px 1fr;
	grid-template-areas:
		"header header"
		"menu content"
		"menu footer";
}

#app.hide-menu {
	grid-template-areas: "header header"
		"content content"
		"footer footer";
}
</style>