<template>
  <div class="about container-fluid">
    <div class="row">
      <div class="col">
        <h1>
          Your boards:
        </h1>
      </div>
      <div class="col-4">
        <form type="submit" @submit.prevent="createBoard">
          <div class="form-group text-center">
            <label for=""></label>
            <input type="text"
                   class="form-control"
                   name="newBoard"
                   v-model="state.newBoard.title"
                   id="board"
                   aria-describedby="helpId"
                   placeholder="Create a new Board!"
            >
            <button type="submit" class="btn btn-outline btn-success mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
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
      boards: computed(() => AppState.boards),
      newBoard: {}
    })
    onMounted(async() => {
      try {
        await boardService.getBoards()
      } catch (error) {
        logger.error(error)
      }
    })

    return {
      state,
      async createBoard() {
        try {
          await boardService.createBoard(state.newBoard)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}

</script>
