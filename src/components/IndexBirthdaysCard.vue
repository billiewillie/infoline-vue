<template>
	<div class="birthdays-card shadow rounded">
		<header class="birthdays-card-header">
			<span class="icon">
				<IconBirthday />
			</span>
			<span class="text">С Днем Рождения!</span>
			<router-link to="/birthdays" class="birthdays-card-link shadow rounded">все</router-link>
		</header>
		<div class="birthdays-list">
			<router-link
				:to="{name: 'User', params: {id: 'belinovich'}}"
				class="birthdays-link rounded shadow overflow-hidden"
				v-for="item in birthdays"
				:key="item.id"
			>
				<div class="birthdays-avatar overflow-hidden">
					<picture>
						<source :srcset="imageWeb" type="image/webp" />
						<img :src="image" alt="image" loading="lazy" />
					</picture>
				</div>
				<span class="birthdays-name">{{ item.lastname }} {{ item.firstname }}</span>
				<div class="birthdays-date">{{ item.day }} {{ getMonthName(item.month) }}</div>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import IconBirthday from '@/components/icons/IconBirthday.vue';
import {onMounted, ref} from 'vue';
import {getMonthName} from '@/functions/getMonthName';
import {USERS_API_URL, USERS_IMAGES_URL} from '@/constants';
import imageWeb from '@/assets/img/index-news-img.webp';
import image from '@/assets/img/index-news-img.jpg';

const birthdays = ref([
	{
		token: 'uvB5Fnc0xm7eJsbR5U2VX8',
		login: 'index-news-img',
		firstname: 'Артем',
		middlename: 'Петрович',
		lastname: 'Ладжи-Горяев',
		avatar: 'index-news-img',
		month: 8,
		day: 23,
	},
	{
		token: 'uvB5Fnc0xm7eJsbR5U2VX8',
		login: 'index-news-img',
		firstname: 'Артем',
		middlename: 'Петрович',
		lastname: 'Трифонов',
		avatar: 'index-news-img',
		month: 8,
		day: 23,
	},
	{
		token: 'uvB5Fnc0xm7eJsbR5U2VX8',
		login: 'index-news-img',
		firstname: 'Артем',
		middlename: 'Петрович',
		lastname: 'Трифонов',
		avatar: 'index-news-img',
		month: 8,
		day: 23,
	},
	{
		token: 'uvB5Fnc0xm7eJsbR5U2VX8',
		login: 'index-news-img',
		firstname: 'Артем',
		middlename: 'Петрович',
		lastname: 'Трифонов',
		avatar: 'index-news-img',
		month: 8,
		day: 23,
	},
]);

// onMounted(() => {
//   fetch(`${USERS_API_URL}/upcoming-birthdays/4`).then(res => res.data()).then(data => {
//     birthdays.value = data
//   })
// })
</script>

<style scoped>
.birthdays-card {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.birthdays-card-header {
	position: relative;
	display: flex;
	justify-content: center;
	background-color: var(--blue-dark);
	color: var(--white);
	column-gap: 8px;
	padding: 8px 0;
	width: 100%;
	text-align: center;
	-webkit-border-radius: 3px 3px 0 0;
	-moz-border-radius: 3px 3px 0 0;
	border-radius: 3px 3px 0 0;
	align-items: center;

	@media (min-width: 1280px) {
		display: flex;
		text-align: left;
		align-self: start;
		-webkit-border-radius: 3px 3px 0 0;
		-moz-border-radius: 3px 3px 0 0;
		border-radius: 3px 3px 0 0;
		column-gap: 10px;
		padding: 5px 0;
	}

	@media (min-width: 1920px) {
		padding: 6px 11px 7px 8px;
		column-gap: 14px;
	}
}

.birthdays-card-header .icon {
	display: flex;
	align-items: center;
	height: 100%;

	@media (min-width: 1280px) {
		left: 0;
		position: relative;
		width: 13px;
		height: 13px;
	}

	@media (min-width: 1920px) {
		width: 19px;
		height: 19px;
	}
}

.birthdays-card-header .icon svg {
	width: 19px;
	height: 19px;

	@media (min-width: 1280px) {
		width: 13px;
		height: 13px;
	}

	@media (min-width: 1920px) {
		width: 19px;
		height: 19px;
	}
}

.birthdays-card-header .text {
	font-weight: 700;
	font-size: 15px;

	@media (min-width: 1280px) {
		font-size: 13px;
	}
}

.birthdays-list {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 12px;
	width: 100%;
	row-gap: 16px;

	@media (min-width: 1280px) {
		flex-direction: row;
		column-gap: 12px;
		padding: 6px;
		flex: auto;
	}

  @media (min-width: 1920px) {
    padding: 12px;
  }
}

.birthdays-link {
	display: grid;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 90px;
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr 1fr;

	@media (min-width: 1280px) {
		display: flex;
		flex-direction: column;
		height: auto;
	}
}

.birthdays-date {
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--gray-dark);
	font-weight: 700;

	@media (min-width: 1280px) {
		font-size: 11px;
		flex: auto;
	}

  @media (min-width: 1920px) {
    font-size: 13px;
  }
}

.birthdays-avatar {
	height: 100%;
	aspect-ratio: 1 / 1;
	grid-row-start: 1;
	grid-row-end: 3;

	@media (min-width: 1280px) {
		height: auto;
	}
}

.birthdays-name {
	display: flex;
	flex-wrap: nowrap;
	color: var(--blue-dark);
	font-weight: 700;
	font-size: 16px;
	padding: 0 4px;
	min-height: 43px;
	border-bottom: 1px solid var(--gray-medium);
	width: 100%;
	justify-content: center;
	text-align: center;
	align-items: center;

	@media (min-width: 1280px) {
		font-size: 10px;
	}

	@media (min-width: 1920px) {
		font-size: 13px;
	}
}

.birthdays-card-link {
	position: absolute;
	display: flex;
	align-items: center;
	right: 12px;
	top: 0;
	bottom: 0;
	margin: auto;
	color: var(--white);
	text-decoration: underline;
	font-weight: 500;
	font-size: 15px;

	@media (min-width: 1280px) {
		font-size: 11px;
	}

  @media (min-width: 1920px) {
    font-size: 13px;
  }
}
</style>
