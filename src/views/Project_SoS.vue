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
      <img class="HeroImage" src="/Portfolio/images/Projects/SoS/SoS-HeroPanel.png" alt="HeroPanel"/>  
    </div>
    <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Role</h5>
        <h5><span class="highlight">Gameplay Programmer (Lead)</span> / <span class="highlight">Producer</span></h5>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Engine</h5>
        <h6>Unreal Engine 5</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Coding</h5>
        <h6>Blueprint</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Trailer</h5>
        <h7>
          <a href="https://www.youtube.com/@GruntRevolutionStudios" target="_blank">Youtube</a>
        </h7>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Page</h5>
        <h7>
          <a href="https://store.steampowered.com/app/3464830/Sound_of_Survival/" target="_blank">Steam</a>
        </h7>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Release</h5>
        <h6>30.04.2025</h6>
      </div>
    </frame>
    <h1 class="Title">Sound of Survival</h1>
    <h4 class ="centerText TitleText highlight2 Spacer">
      Sound of Survival is a rhythm ego shooter where you have to shoot on the beat. 
      Fight in a cyberpunk City against hordes of robots while you groove to the music. 
      Shoot and hit on the beat to get stronger!
    </h4>
    <h4 class="centerText TitleText Spacer">
      Sound of Survival is a game developed during the final two project phases of my studies. 
      The project spanned 12 weeks and involved 19 contributors, including singers, songwriters and film designers.
    </h4>
    <BackButton :BorderRadius=borderRadius :ButtonColor=frameColor></BackButton>
    </section>
    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Gameplay Programmer">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/SoS/SoS-InfoPanel-Spawner.jpg">
          <h2 class="highlight"> Spawn-System</h2>
          <h4>
            To encourage player movement, a trigger-based spawn system was implemented. As players move through these triggers placed 
            throughout the level, enemy waves are spawned. After a set time, triggers are reset via a central management system. 
            Each trigger contains predefined spawn points with data on NPC types, level context, and difficulty.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/SoS/SoS-InfoPanel-NPC.jpg">
          <h2 class="highlight"> NPC / Enemys</h2>
          <h4>
            To efficiently implement and expand different enemy types, a scalable NPC system was developed. It is based on a 
            parent-child structure for reusing core functionalities, while a simple state machine governs individual NPC behaviors. 
            Interactions such as damage types and attacks are handled through an interface-based system.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/SoS/SoS-InfoPanel-Weapon.jpg">
          <h2 class="highlight"> Special Attacks</h2>
          <h4>
            Special abilities unlocked via meta progression were highly diverse in their requirements, with minimal overlap in 
            functionality. Each ability combined VFX, SFX, animations, gameplay interactions, and had to be cleanly integrated 
            into the existing system architecture.
          </h4>
        </ProjectInfo>
      </itemlist>
    </section>
    <section class="list" id="Info2">
      <itemlist :bgColor="frameColor" Title="Producer / Team Lead">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/SoS/SoS-InfoPanel-Producer.jpg">
          <h4>
            During phase two, I led production and team management, including:
          </h4>
          <ul class="listing">
            <li>Coordinating development progress</li>
            <li>Supporting technical and design decisions</li>
            <li>Managing external contributors</li>
            <li>Planning and executing the Steam release</li>
            <li>Coordinating promotion across various social media platforms</li>
          </ul>
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