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
        <div
            v-if="!isCommentEditing"
            class="comment-text">
          {{ comment.content }}
        </div>
        <div
            class="comment-text__edited"
            v-else>
          <textarea rows="5" v-model="editedComment"></textarea>
          <button class="comment-answer-send">
            <span>отправить</span>
            <i class="icon">
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
                    stroke="var(--white)"
                    stroke-width="1.5"
                    stroke-linecap="round"/>
              </svg>
            </i>
          </button>
          <div
              @click="isCommentEditing = false"
              class="close comment-answer-close">
            <span></span>
            <span></span>
          </div>
        </div>
        <div
            v-if="isAnswerOpen === false"
            class="comment-answer">
          <i class="icon">
            <IconComment/>
          </i>
          <div
              @click="isAnswerOpen = true;isCommentEditing = false"
              class="comment-answer-button">Ответить</div>
        </div>
        <div v-if="isAnswerOpen" class="comment-answer-textarea">
          <textarea rows="5" v-model="answer"></textarea>
          <button class="comment-answer-send">
            <span>отправить</span>
            <i class="icon">
              <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 10L2.76297 8.42742C4.1689 7.17332 4.87187 6.54627 4.98011 5.782C5.00663 5.59474 5.00663 5.40526 4.98011 5.218C4.87187 4.45373 4.1689 3.82668 2.76297 2.57258L1 1"
                    stroke="var(--white)"
                    stroke-width="1.5"
                    stroke-linecap="round"/>
              </svg>
            </i>
          </button>
          <div
              @click="isAnswerOpen = false;answer = ''"
              class="close comment-answer-close">
            <span></span>
            <span></span>
          </div>
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
              <span @click="
              isAnswerOpen = false;
              answer = '';
              isCommentEditing = true;
              console.log('edit')">Редактировать</span>
            </div>
            <div class="modal-row">
              <span @click="isAnswerOpen = false;answer = '';console.log('delete')">Удалить</span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import TheImage from "@/components/TheImage.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconDislike from "@/components/icons/IconDislike.vue";
import IconCalendar from "@/components/icons/IconCalendar.vue";
import PlaceholderPerson from "@/assets/img/profile-fallback.svg";
import IconComment from "@/components/icons/IconComment.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

const answer = ref('');
const props = defineProps({
  comment: {
    type: Object,
    required: true,
  }
});
const editedComment = ref('');
const isModalOpen = ref(false);
const isAnswerOpen = ref(false);
const isCommentEditing = ref(false);

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

onMounted(() => {
  editedComment.value = props.comment.content
})
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
  overflow: hidden;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.comment-header {
  display: flex;
  row-gap: 15px;
  flex-direction: column;

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

.comment-dialog-trigger {
  width: 18px;
  height: 18px;
}

.comment-dialog-trigger .button {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3px;
  cursor: pointer;
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

.comment-text__edited,
.comment-answer-textarea {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  position: relative;
  max-width: 740px;
  margin: 0 auto;
  font-size: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid var(--gray-medium);
}

.comment-text__edited textarea,
.comment-answer-textarea textarea {
  width: 100%;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  padding: 8px;
  resize: none;
  font-family: var(--font-base);
  border: 1px solid var(--white);
  outline: none;
}

.comment-answer-send {
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-color: var(--blue-light);
  border: 1px solid var(--blue-light);
  padding: 10px 20px;
  bottom: -1px;
  right: -1px;
  -webkit-border-radius: 3px 0 3px 0;
  -moz-border-radius: 3px 0 3px 0;
  border-radius: 3px 0 3px 0;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out, border 0.3s ease-in-out, color 0.3s ease-in-out;
}

.comment-answer-send span {
  line-height: 1;
  color: var(--white);
  font-weight: bold;
}

.comment-answer-send i.icon {
  display: flex;
  align-items: center;
  width: 6px;
  height: 11px;
}

.comment-answer-send i.icon svg {
  width: 100%;
  height: 100%;
}

.comment-answer-send:hover {
  background-color: var(--white);
}

.comment-answer-send:hover span {
  color: var(--blue-light);
}

.comment-answer-send:hover svg path {
  stroke: var(--blue-light);
}

.comment-answer-close {
  position: absolute;
  top: 0;
  width: 18px;
  height: 18px;
  right: -38px;
  cursor: pointer;
}

.comment-answer-close span {
  position: absolute;
  width: 100%;
  height: 1px;
  top: 50%;
  left: 0;
  background-color: var(--black);
  transform-origin: center;
  transform: rotate(45deg);
}

.comment-answer-close span:last-child {
  transform: rotate(-45deg);
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