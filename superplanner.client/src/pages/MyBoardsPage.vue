<template>
  <div class="about container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="text-white title mt-3">
          Personal Boards
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
      <BoardComponent v-for="board in state.boards" :key="board.id" :board-prop="board" />
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
          state.newBoard = {}
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}

</script>

<style scoped>
.title{
  text-shadow: 4px 3px 4px #000000;
}
 .about{
    background-repeat: none;
     background-size:cover;
     background-image: linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1508379748716-9d2d1c63db1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80');
 }
</style>
