<script setup lang="ts">
import { IconPlaceholder } from "@/shared/ui/icons";

defineProps<{
  title: string,
}>();

</script>

<template>
  <div class="sidebar-item">
    <slot name="icon"><IconPlaceholder /></slot>

    <s class="title">{{ title }}</s>

    <!-- arrow/message: -->
    <!-- <slot name="extra"></slot>  -->
  </div>
</template>

<style scoped>
.sidebar-item {
  display: flex;
  width: 232px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
}

.sidebar-item:hover {
  background: var(--Gray-Gray-4);
}

.title {
  color: var(--Gray-Gray-80);
  /* Body Big/Regular */
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
</style>
