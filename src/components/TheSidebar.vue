<template>
	<aside class="aside">
		<DocsNav :withIcons="true" onmouseover="isHovered = true" onmouseout="isHovered = false" />
		<div class="button-up show">
			<div class="icon">
				<IconArrow />
			</div>
			<span>наверх</span>
		</div>
	</aside>
</template>

<script setup>
import DocsNav from '@/components/DocsNav.vue';
import IconArrow from '@/components/icons/IconArrow.vue';
import {ref} from 'vue';

const isHovered = ref(false);
</script>

<style>
aside.aside {
	display: none;
	transition: right 0.3s ease-in-out;

	@media (min-width: 1280px) {
		position: fixed;
		right: calc(100% - 50px);
		top: 50px;
		width: 190px;
		display: flex;
		align-items: flex-end;
		flex-direction: column;
		justify-content: space-between;
		height: calc(100vh - 50px);
		background-color: var(--white);
		z-index: 1;
		box-shadow: var(--secondary-shadow);
	}

	@media (min-width: 1920px) {
		top: 70px;
		height: calc(100vh - 70px);
		right: calc(100% - 70px);
	}
}

aside.aside:hover {
	right: calc(100% - 190px);
}

aside.aside .docs-nav__menu {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--blue-dark);

	@media (min-width: 1280px) {
		align-items: flex-end;
		padding: 16px 0;
		row-gap: 40px;
	}

	@media (min-width: 1920px) {
		padding: 20px 0;
	}
}

aside.aside .docs-nav__item {
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: flex-end;

	@media (min-width: 1280px) {
		min-height: 31px;
	}
}

aside.aside .docs-nav__link {
	display: flex;
	column-gap: 25px;
	align-items: center;
	justify-content: flex-end;
	color: var(--blue-dark);
	height: 100%;
	width: 100%;
	transition: background-color 0.3s ease-in-out, color;

	@media (min-width: 1280px) {
		padding: 0 16px;
	}

	@media (min-width: 1920px) {
		padding: 0 20px;
	}
}

.aside.aside .docs-nav__title {
	font-size: 13px;
	font-weight: 400;
	text-align: right;
	max-width: 100px;
}

aside.aside .docs-nav__icon {
	display: flex;
}

aside.aside .docs-nav__icon svg {
	width: 18px;
	height: 18px;

	@media (min-width: 1920px) {
		width: 30px;
		height: 30px;
	}
}

.button-up {
	display: none;
	color: var(--white);
	font-weight: 600;
	cursor: pointer;

	@media (min-width: 1280px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--blue-light);
		width: 50px;
		padding: 10px 0;
		row-gap: 10px;
		font-size: 11px;
	}

	@media (min-width: 1920px) {
		width: 70px;
		height: 70px;
		font-size: 13px;
	}
}

.button-up .icon {
	display: flex;
	align-items: center;
	justify-content: center;
	transform-origin: center center;
	transform: rotate(-90deg);
	border-radius: 50px;
	width: 23px;
	height: 23px;
	border: 1px solid var(--white);
}
</style>
