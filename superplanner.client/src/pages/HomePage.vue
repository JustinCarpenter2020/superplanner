<template>
  <div class="home container-fluid" id="top">
    <div class="hero-image row">
      <div class="hero-text col">
        <h1 class="words">
          SuperPanner
        </h1>
        <h5 class="font">
          Plan Ahead
        </h5>
        <button class="btn btn-outline btn-dark">
          Log In Now
        </button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <form class="form-inline font"></form>
        <div class="form-group">
          <h2 class="text-center">
            Join Our Newsletter!
          </h2>
          <form class="form-inline justify-content-center">
            <div class="form-group">
              <input minlength="3"
                     maxlength="50"
                     type="text"
                     class="form-control my-2"
                     name="description"
                     id="description"
                     placeholder="Username@email.com"
              >
              <button class="btn btn-success" type="submit">
                +
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="row hero-image2 mt-5">
      <div class="col hero-text">
        <h1 class="words">
          About The App
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col text-center mt-5">
        <h5>"SuperPlanner is an app to help balance the chaos of everyday life. Create boards to keep track of projects, goals, appointments, etc. Each of these boards are seperate and can hold individual lists to keep track of your progress! We recommend you create three lists, backlog, inprogress, and completed, however they can be anything you desire. Then fill the backlog with tasks that must be completed, move them between any of the boards to signify their progress! You can also comment on any task, use this to remember any small details for a task you might forget. Now that you know the basics login to start creating boards and SuperPlan your life!" </h5>
      </div>
    </div>
    <div class="row hero-image3 mt-5">
      <div class="col hero-text">
        <h1 class="words">
          About The Team
        </h1>
      </div>
    </div>
    <div class="row light">
      <div class="col-6">
        <img class="avatar mt-2" src="https://ca.slack-edge.com/T1GGQN1RU-U01G00RPTEY-e392fab1f3dc-512" alt="">
      </div>
      <div class="col-6 avatar-text mt-5 text-center">
        <h2 class="font">
          <b>Steffen Larson</b>
        </h2>
        <h5><u>Worked on</u></h5>
        <h5>-Backend</h5>
        <h5>-Frontend logic</h5>
        <h5>-Frontend Styling</h5>
      </div>
    </div>
    <div class="row mt-5 red">
      <div class="col-6">
        <img class="avatar mt-2" src="https://ca.slack-edge.com/T1GGQN1RU-U01G00STAUC-97431b90931b-512" alt="">
      </div>
      <div class="col-6 avatar-text mt-5 text-center">
        <h2 class="font">
          <b> Kris Jones </b>
        </h2>
        <h5><u>Worked on</u></h5>
        <h5>-Frontend logic</h5>
        <h5>-Frontend Styling</h5>
      </div>
    </div>
    <div class="row mt-5 yellow">
      <div class="col-6">
        <img class="avatar mt-2" src="https://ca.slack-edge.com/T1GGQN1RU-U01FTREP98A-12a1d25b8473-192" alt="">
      </div>
      <div class="col-6 avatar-text mt-5 text-center">
        <h2 class="font">
          <b>Justin Carpenter</b>
        </h2>
        <h5><u>Worked on</u></h5>
        <h5>-Backend logic</h5>
        <h5>-Frontend logic</h5>
        <h5>-Frontend styling</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.font{
  font-family: 'Imbue', serif;
}
.home{
    width:100%;
    overflow-x:hidden;
}
.yellow{
  background: #F7B733;
}
.red{
  background-color: #FC4A1A;
}
.light{
  background-color: #4ABDAC;
}
.avatar{
  border-radius: 50%;
  width: 18rem;
  height: 18rem;
}
.avatar-text{
  align-content: center;
}
.words{
  font-family: 'Imbue', serif;
}
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");

  /* Set a specific height */
  height: 30%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-image2 {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1611095971113-9f7542655338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80");

  /* Set a specific height */
  height: 30%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-image3 {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1518378379207-3418372afea3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");

  /* Set a specific height */
  height: 30%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
    text-shadow: 4px 3px 4px #000000;
}

input {
  width: 20%;
}
</style>
