<template>
  <div class="comment">
    <div class="post-center comment-inner">
      <div class="comment-avatar">
        <div class="image">
          <TheImage
              :alt="`comment-avatar-${String(comment.id)}`"
              :fallback="PlaceholderPerson"
              image="https://users.trifonov.space/images/users/belinovich/avatar.webp"/>
        </div>
      </div>
      <div class="comment-content">
        <div class="comment-header">
          <h3 class="comment-author title">Иван Иванов</h3>
          <div class="comment-stats">
            <div class="comment-stats-item">
              <div class="icon">
                <IconCalendar/>
              </div>
              <span>08.08.2023</span>
            </div>
            <div class="comment-stats-item">
              <div class="icon">
                <IconLike/>
              </div>
              <span>12</span>
            </div>
            <div class="comment-stats-item">
              <div class="icon">
                <IconDislike/>
              </div>
              <span>12</span>
            </div>
          </div>
        </div>
        <div class="comment-text">
          {{ comment.content }}
        </div>
        <div class="comment-answer">
          <i class="icon">
            <IconComment/>
          </i>
          <div class="comment-answer-button">Ответить</div>
        </div>
        <div class="comment-answer-textarea">
          <textarea></textarea>
        </div>
      </div>
      <div
          @click="isModalOpen = !isModalOpen"
          class="comment-dialog-trigger">
        <div
            :class="{active: isModalOpen}"
            class="button">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <transition name="fade">
          <div
              class="modal shadow rounded"
              v-show="isModalOpen"
              v-click-outside="handleClickOutside">
            <div class="modal-row">
              <span @click="console.log('edit')">Редактировать</span>
            </div>
            <div class="modal-row">
              <span @click="console.log('delete')">Удалить</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import TheImage from "@/components/TheImage.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconDislike from "@/components/icons/IconDislike.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import PlaceholderPerson from "@/assets/img/profile-fallback.svg";
import IconComment from "@/components/icons/IconComment.vue";

const isAnswerOpen = ref(false);
const isModalOpen = ref(false);
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  }
});

const handleClickOutside = () => {
  isModalOpen.value = false;
};

const vClickOutside = {
  mounted(el, binding) {
    el.__ClickOutsideHandler__ = (event) => {
      if (!(el === event.target || el.contains(event.target) || event.target.closest('.comment-dialog-trigger'))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.__ClickOutsideHandler__);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__ClickOutsideHandler__);
  },
};
</script>

<style scoped>
.post-center {
  max-width: 740px;
  margin: 0 auto;
}

.comment {
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-medium);
}

.comment:nth-of-type(even) {
  background-color: #fafafa;
}

.comment-inner {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
}

.comment-avatar {
  width: 54px;
  height: 54px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  overflow: hidden;
}

.comment-header {
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media (min-width: 1280px) {
    flex-direction: row;
    column-gap: 15px;
  }
}

.comment-author {
  font-size: 16px;
  color: var(--blue-dark);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.comment-stats {
  display: flex;
  column-gap: 15px;
}

.comment-stats-item {
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: var(--blue-dark);
}

.comment-stats-item span {
  line-height: 1;
}

.comment-content {
  display: flex;
  flex: auto;
  flex-direction: column;
  row-gap: 15px;
}

.comment-dialog-trigger .button {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3px;
  cursor: pointer;
  width: 20px;
}

.comment-dialog-trigger .button span {
  width: 4px;
  height: 4px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: var(--blue-dark);
  transition: background-color 0.3s ease-in-out;
}

.comment-dialog-trigger .button.active span,
.comment-dialog-trigger .button:hover span {
  background-color: var(--blue-light);
}

.comment-answer {
  display: flex;
  column-gap: 8px;
  align-items: center;
}

.comment-answer-button {
  font-weight: 700;
  cursor: pointer;
  text-underline-offset: 4px;
  line-height: 1;
}

.comment-answer-button:hover {
  text-decoration: underline;
}

.comment-answer-textarea {
  display: none;
  max-width: 740px;
  margin: 0 auto;
}

.comment-answer-textarea textarea {
  width: 100%;
}

.icon {
  width: 18px;
  height: 18px;
}

.modal {
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  top: -10px;
  right: 30px;
  padding: 10px;
  background-color: var(--white);
}

.modal-row span {
  cursor: pointer;
  color: var(--blue-dark);
  font-size: 12px;
  font-weight: 500;
  text-underline-offset: 4px;
}

.modal-row span:hover {
  text-decoration: underline;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, top 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  top: 10px;
  opacity: 0;
}
</style>