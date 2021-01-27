<template>
  <div class="BoardDetailsPage container-fluid">
    <div class="row">
      <div class="col">
        <div class="dropdown text-right mt-1">
          <button class="btn btn-dark dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
          >
            <i class="fas fa-cog"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link :to="{
              name: 'MyBoards'
            }"
            >
              <div @click="deleteBoard" class="dropdown-item text-danger" href="#">
                Delete Board
              </div>
            </router-link>
            <div class="dropdown-item" href="#">
              Edit Board Title
            </div>
          </div>
        </div>
        <h1 class="text-center">
          <b>{{ state.board.title }} </b>:
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { boardService } from '../services/BoardService'
export default {
  name: 'BoardDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      user: computed(() => AppState.user),
      board: computed(() => AppState.activeBoard)
    })
    onMounted(async() => {
      try {
        await boardService.getOne(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      async deleteBoard() {
        try {
          await boardService.deleteBoard(state.board.id)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
