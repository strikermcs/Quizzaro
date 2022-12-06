<script setup lang="ts">
import Logo from '../assets/quizzaro.png'
import bannerImage from '../assets/quiz1.png'
import Layer from '../assets/images/shape.png'
import pkg from '../../package.json'
import ToggleThemeButton from '@/components/UI/ToggleThemeButton.vue'
import LocaleSelect from '@/components/UI/LocaleSelect.vue'  
</script>


<template>
  <main class="main">
	<div class="wrapper">
		<section class="banner">
			<div class="container">
				<div class="row">
					<div class="column">
						<div class="banner-content">
							<div class="logo-image">
								<img :src="Logo" alt="logo">
								<span class="version">v{{pkg.version}}</span>
							</div>
							<h3 class="subtitle">
								{{$t('WelcomePageBannerText')}}
							</h3>
							<div class="auth-buttons">
								<router-link class="auth-button" to="user/login">{{$t('WelcomePageLoginButton')}}</router-link>
    							<router-link class="auth-button" to="user/register">{{$t('WelcomePageRegisterButton')}}</router-link>
							</div>
						</div>
					</div>
					<div class="column img-banner">
						<div class="banner-image">
							<img :src="bannerImage" alt="banner-image">
						</div>
					</div>
				</div>
			</div>
			<img class="layer" :src="Layer" alt="layer">
		</section>
		<section class="intro">

		</section>
		<div class="controls">
			<toggle-theme-button />
			<locale-select />
		</div> 
	</div>	
  </main>
</template>

<style scoped >
.wrapper {
	position: relative;
}

.banner {
	padding-top: 100px;
	background: #101121;
	position: relative;
	color: aliceblue;
}

.row {
	display: flex;
	width: 100%;
	justify-content:space-between;
}


.banner-content {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding-top: 100px;
	padding-bottom: 100px;
	gap: 40px;
}
.logo-image {
	display: flex;
	gap: 20px;
}

.subtitle {
	max-width: 800px;
}

.logo-image span {
	font-style: italic;
	align-self:flex-end;
	padding-bottom: 5px;
}
.logo-image img{
	width: 350px;
	
}
.layer{
	position: absolute;
	bottom: -233px;
	left: 0;
	width: 100%;
}

.banner-image img {
	width: 80%;
}

.auth-buttons {
	display: flex;
	gap: 20px;
}

.auth-button {
	text-decoration: none;
	border: 1px solid grey;
	padding: 15px 45px 15px 45px;
	border-radius: 30px;
	background: #FFD831;
	color: black;
	transition: all 0.4s ease;
}

.auth-button:hover  {
	background:#776517;
	color: white;
}
.container {
	max-width: 1300px;
	margin: 0 auto;
}

.intro {
	height: 700px;
}

.controls {
	display: flex;
	gap: 10px;
	align-items: center;
	color: white;
	position: absolute;
	top: 10px;
	right: 20px;
}

@media screen and (max-width: 1390px) {
	.container {
		max-width: 1000px;
	}
	.layer {
		bottom: -160px;
	}
}

@media screen and (max-width: 1080px) {
	.container {
		max-width: 900px;
	}
	.layer {
		bottom: -160px;
	}
}

@media screen and (max-width: 980px) {
	.img-banner {
		display: none;
	}

	.layer {
		display: none;
	}

	.banner-content {
		padding-top: 0px;
	}

	.container {
		max-width: 700px;
	}
}

@media screen and (max-width: 750px) {
	.logo-image img{
		width: 230px;
	
	}

	.subtitle {
		font-size: 16px;
	}

	.container {
		padding: 0px 10px 0px 10px; 
	}
}
</style>