<script setup lang="ts">
import Logo from '../assets/quizzaro.png'
import bannerImage from '../assets/quiz1.png'
import pkg from '../../package.json'
import ToggleThemeButton from '@/components/UI/ToggleThemeButton.vue'
import LocaleSelect from '@/components/UI/LocaleSelect.vue'  
</script>


<template>
	<main class="main">
		<div class="welcome">
			<div>
				<img class="img-welcome" :src="bannerImage" alt="banner">
			</div>
			<div class="logo-content">
				<img class="img-logo" :src="Logo" alt="logo">
				<span class="version">v{{ pkg.version }}</span>
			</div>
			<p class="description">
				{{$t('WelcomePageBannerText')}}
			</p>
			<div class="auth-buttons">
				<router-link class="auth-button" to="user/login">
					<el-button type="primary" size="large">
						{{$t('WelcomePageLoginButton')}}
					</el-button>
				</router-link>
				<router-link class="auth-button" to="user/register">
					<el-button type="success" size="large">
						{{$t('WelcomePageRegisterButton')}}
					</el-button>
				</router-link>
			</div>
		</div>
		<div class="controls">
			<toggle-theme-button />
			<locale-select />
		</div>
	</main>
</template>

<style scoped >
.main {
	position: relative;
	display: flex;
	width: 100dvw;
	height: 100dvh;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.welcome {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 0px 5px 0px 5px;
}

.controls {
	position: absolute;
	top: 10px;
	right: 15px;
	display: flex;
	align-items: center;
	gap: 10px;
}

.img-welcome {
	height: 300px;
}

.img-logo {
	width: 400px;
}

.logo-content {
	display: flex;
	gap: 5px;
}

.version {
	font-style: italic;
	/* align-self: flex-end; */
}

.auth-buttons {
	display: flex;
	gap: 10px;
}

.description {
	max-width: 900px;
	line-height: 1.4;
}

@media screen and (max-width: 500px) {
	.img-welcome {
		height: 200px;
	}

	.img-logo {
		width: 250px;
	}
}
</style>