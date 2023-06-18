<template>
	<div class="button-up show">
		<div class="icon">
			<IconArrow />
		</div>
		<span>наверх</span>
	</div>
</template>

<script setup>
import IconArrow from '@/components/icons/IconArrow.vue';
</script>

<style>
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
