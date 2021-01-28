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
        <h1 class="text-center text-white title">
          {{ state.board.title }} :
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
          state.newList = { boardId: route.params.id }
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
.title{
   text-shadow: 3px 3px 4px #000000;
}

 .BoardDetailsPage{
    background-repeat: none;
     background-size:cover;
     background-image: linear-gradient(rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1387&q=80');
 }

</style>
