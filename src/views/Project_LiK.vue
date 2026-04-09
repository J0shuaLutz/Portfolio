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
      <img class="HeroImage" src="/images/Projects/LiK/LiK-HeroPanel.png" alt="HeroPanel"/>  
    </div>
    <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Role</h5>
        <h5> <span class="highlight">Gameplay Programmer</span> / <span class="highlight">Level Designer</span></h5>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Engine</h5>
        <h6>Unity Engine</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Coding</h5>
        <h6>C#</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Trailer</h5>
        <h7>
          <a href="https://www.youtube.com/watch?v=eS8sZ2Xnosc" target="_blank">Youtube</a>
        </h7>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Page</h5>
        <h7>
          <a href="https://opendoorstudios.itch.io/lightiskey" target="_blank">itch.io</a>
        </h7>
      </div>
      
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Document</h5>
        <h7>
          <a href="/images/Projects/LiK/Lik_LevelDesign-JoshuaNicolaLutz.pdf" target="_blank" rel="noopener">Level Design (german) </a>
        </h7>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Release</h5>
        <h6>29.08.2023</h6>
      </div>
    </frame>
    <h1 class="Title"> Light is Key</h1>
    <h4 class="centerText TitleText highlight2 Spacer">
      Light is Key is a 3D physics-based first-person puzzle 
      game that immerses you in the mysterious world of vampires.
    </h4>
    <h4 class="centerText TitleText">
      This student project is an award winning game (<a href="https://www.adc.de/content/uploads/dlm_uploads/2024/06/ADC_Talent_Award_Gewinne_2024.pdf" target="_blank">ADC Talent Award 2024 -Gold-</a>) which is released on itch.io. 
    </h4>
    <BackButton :BorderRadius=borderRadius :ButtonColor=frameColor></BackButton>
    </section>
    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Gameplay Programmer">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/LiK/LiK-InfoPanel-Architecture.jpg">
          <h2 class="highlight">Software Architecture</h2>
          <h4>
            Throughout production, I was the sole programmer, responsible for implementing all gameplay mechanics. 
            The focus was on developing essential features over quantity. Unity’s component system enabled rapid 
            prototyping with placeholder assets, which were seamlessly handed off to artists.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/LiK/LiK-InfoPanel-levelsetup.jpg">
          <h2 class="highlight">Level System</h2>
          <h4>
            Although each level appears independent to the player, the game runs in a single scene to maintain immersion. 
            Since rooms can overlap, a central manager controls the activation and deactivation of each level. 
            This is handled through trigger boxes that notify the manager when a player enters a room.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/LiK/LiK-InfoPanel-lock.jpg">
          <h2 class="highlight">Light and Lock</h2>
          <h4>
            Lighting is controlled via a Line Renderer, while a script handles interactions with hit objects, including mirrors that 
            extend the light beam, keyholes that unlock doors, story objects that become visible, and the player character, 
            who dies when hit. This interconnected system forms the core gameplay mechanic.
          </h4>
        </ProjectInfo>
      </itemlist>
    </section>
    <section class="list" id="Info2">
      <itemlist :bgColor="frameColor" Title="Level Designer">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/LiK/LiK-InfoPanel-learn.jpg">
          <h2 class="highlight">Learning Through Play</h2>
          <h4>
            The game was designed to let players experience the mechanics during gameplay. Therefore, the features were 
            intentionally structured and introduced sequentially. Interaction possibilities and their outcomes had to 
            be clearly understandable, while at the same time engaging enough to maintain the players’ motivation.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/LiK/LiK-InfoPanel-complexity.jpg">
          <h2 class="highlight">Testing and Challenge</h2>
          <h4>
            As players progress, previously introduced mechanics are expanded to increase complexity. This is achieved 
            by adding more mirrors, altering the player’s usable space through light beams, and creating less obvious 
            connections between interactive objects.
          </h4>
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