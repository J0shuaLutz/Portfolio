<script lang="ts">
  import ShaderBackground from '../components/ShaderBackground.vue';
  import itemlist from '@/components/ItemList.vue';
  import ProjectInfo from '../components/ProjectInfo.vue'
  import BackButton from '../components/BackButton.vue'
  import frame from '../components/frame.vue'

  export default{
    name: 'Project',
    components: {
      ShaderBackground,
      itemlist,
      ProjectInfo,
      BackButton,
      frame
    },
    data(){
      return {
        frameColor: "rgba(1, 41, 84, 0.75)",
        frameColor2: "rgba(159,195,245,1)",
        frameColor3: "rgba(255,109,218,1)",
        frameColor4: "rgba(1, 57, 104,1)",
        borderRadius: "10px"
      }
    }
  }
</script>

<template>
  <ShaderBackground/>
  <section class="Hero" id="Hero">
    
    <div class="HeroImageContainer">
      <img class="HeroImage" src="/images/Projects/HeroPanel-Basic.png" alt="HeroPanel"/>  
    </div>
    <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Role</h5>
        <h6>Gameplay Programmer</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Engine</h5>
        <h6>Unreal</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Coding</h5>
        <h5> <span class="highlight">Blueprint</span> / <span class="highlight">C++</span></h5>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Page</h5>
        <h6>WebLink</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Release</h5>
        <h6>Date</h6>
      </div>
    </frame>
    <h1 class="Title"> Project Title</h1>
    <h4 class="centerText TitleText">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
      accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
      sanctus est Lorem ipsum dolor sit amet. 
    </h4>
    <BackButton :BorderRadius=borderRadius :ButtonColor=frameColor></BackButton>
    </section>
    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Project Description 1">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4>
        </ProjectInfo>
      </itemlist>
    </section>
    <section class="list" id="Info2">
      <itemlist :bgColor="frameColor" Title="Project Description 2">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4>
        </ProjectInfo>
      </itemlist>
    </section>
</template>

<style scoped>
.Hero{
  margin:0;
  padding:0;
}

.HeroImageContainer{
  margin:0;
  height: 70vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.HeroImage{
  margin:0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom center;
  display: block;
  z-index: -1;
}

.Title{
  margin-top: -7.5%;
}

.TitleText{
  margin-left: 5%;
  margin-right: 5%;
}

.Infobox{
  position: absolute;
  transform: translateY(-100%);
  width:90%;
  left:5%;
  right:5%;
  top: 60vh;
  transition: 1s;
}

@media (min-width: 759px){ 
  .Infobox{
    position: absolute;
  transform: translateY(-100%);
  width:30%;
  left:65%;
  right:5%;
  top: 55vh;
  }
}
</style>