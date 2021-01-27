<template>
  <div class="BoardDetailsPage container-fluid">
    <div class="row">
      <div class="col">
        <div class="dropdown text-right mt-1">
          <button type="button" class="btn btn-primary mr-2" data-toggle="modal" data-target="#exampleModalCenter">
            Create New List
          </button>

          <!-- Modal -->
          <div class="modal fade"
               id="exampleModalCenter"
               tabindex="-1"
               role="dialog"
               aria-labelledby="exampleModalCenterTitle"
               aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    New List
                  </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form type="submit" @submit.prevent="createList">
                    <div class="form-group">
                      <label for=""></label>
                      <input type="text"
                             class="form-control"
                             name=""
                             v-model="state.newList.title"
                             id=""

                             aria-describedby="helpId"
                             placeholder="New List Title"
                      >
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
    <div class="row">
      <ListComponent v-for="list in state.lists" :key="list.id" :list-prop="list" />
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { boardService } from '../services/BoardService'
import { listService } from '../services/ListService'
export default {
  name: 'BoardDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      user: computed(() => AppState.user),
      board: computed(() => AppState.activeBoard),
      lists: computed(() => AppState.lists),
      newList: { boardId: route.params.id }
    })
    onMounted(async() => {
      try {
        await boardService.getOne(route.params.id)
        await listService.getLists(AppState.activeBoard.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      async createList() {
        try {
          await listService.createList(state.newList)
        } catch (error) {
          logger.error(error)
        }
      },
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
