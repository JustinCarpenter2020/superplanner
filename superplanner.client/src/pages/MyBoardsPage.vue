<template>
  <div class="about container-fluid">
    <h1>
      Your boards:
    </h1>
    <div class="row">
      <BoardComponenet v-for="board in state.boards" :key="board.id" :board-prop="board" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { boardService } from '../services/BoardService'
export default {
  name: 'MyBoardsPage',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      boards: computed(() => AppState.boards)
    })
    onMounted(async() => {
      try {
        await boardService.getBoards()
      } catch (error) {
        logger.error(error)
      }
    })

    return {
      state
    }
  }
}

</script>
