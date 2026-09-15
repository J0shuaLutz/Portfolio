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
        borderRadius: "10px",
        activeId: null as string | null,
        items: []
      }
    },
    methods:{
      setActive(id: string) {
        this.activeId = this.activeId === id ? null : id;
      }
    }
  }
</script>

<template>
  <ShaderBackground/>
  <section class="Hero" id="Hero">
    
    <div class="HeroImageContainer">
      <img class="HeroImage" src="/images/Projects/GauntledOfGods/GOG-HeroPanel.png" alt="HeroPanel"/>  
    </div>
    <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Challenge</h5>
        <h7>
          <a href="https://createwithclint.com/community-challenges/13#about-game" target="_blank">Gauntled of Gods</a>
        </h7>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Engine</h5>
        <h6>Blender</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Coding</h5>
        <h6>Geometry Nodes in Blender</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">View</h5>
        <h7>
          <a href="https://www.youtube.com/watch?v=FJLlDNp4i8o&t=1h57m34s" target="_blank">1:57:34</a>
        </h7>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Release</h5>
        <h6>05.09.2026</h6>
      </div>
    </frame>
    <h1 class="Title">Gauntled of Gods</h1>
    <h4 class="centerText TitleText Spacer">
      The goal of this render challenge was to create a hero consisting of a swarm of flies and a snake, 
      stylistically inspired by the demon from the movie Constantine. Unlike the demon in the film, this character 
      was not intended to represent evil, but rather a form of vengeance against it.
    </h4>
    <h4 class="centerText TitleText Spacer">
      The concept is based on the biblical story of Moses and the Ten Plagues, which ultimately led to the liberation 
      of the slaves. The character represents one of these ten plagues.
    </h4>
    <h2 class="centerText white">Trigger Warning</h2>
    <h4 class="centerText TitleText Spacer">
      The rendering contains extreme and religious themes that may be disturbing to some viewers. 
      These elements are used solely as part of the artistic concept and do not reflect any personal beliefs 
      or political views.
    </h4>
    <BackButton :BorderRadius=borderRadius :ButtonColor=frameColor></BackButton>
    </section>

    <section class="desktop">
      <div class="media-container-desktop">
        <video class="video" autoplay loop muted playsinline>
          <source src="/images/Projects/GauntledOfGods/GOG-Video.mp4" type="video/mp4" />
        </video>
        <img src="/images/Projects/GauntledOfGods/GOG-Card.png" alt="Video Fallback">
      </div>
    </section>

    <section class="mobile">
      <div class="media-container-mobile">
        <video class="video" autoplay loop muted playsinline>
          <source src="/images/Projects/GauntledOfGods/GOG-Video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
    <section class="mobile">
      <div class="media-container-mobile">
        <img src="/images/Projects/GauntledOfGods/GOG-Card.png" alt="Video Fallback">
      </div>
    </section>

    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Character">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/GauntledOfGods/GOG-Player1.png"
        id="1-1"
        :isExpanded="activeId === '1-1'"
        @toggle="setActive">
          <h2 class="highlight">Controlling a Swarm of Flies</h2>
          <h4>
            To move the swarm between two positions, I use two objects with the same number of connected points. Velocity and Randomization are 
            used to simulate natural movement. An additional Sphere determines which particles are activated and when they leave the swarm.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/GauntledOfGods/GOG-Player2.png"
        id="1-2"
        :isExpanded="activeId === '1-2'"
        @toggle="setActive">
          <h2 class="highlight">Flies Along a Sphere</h2>
          <h4>
            A Sphere serves as the basis for positioning the flies. A Random Factor breaks up their positions and increases their distance 
            from each other, creating the impression that they are spreading outward from a central point. Animating the Sphere allows this 
            movement to be controlled.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/GauntledOfGods/GOG-Player3.png"
        id="1-3"
        :isExpanded="activeId === '1-3'"
        @toggle="setActive">
          <h2 class="highlight">Nondestructive Snake</h2>
          <h4>
            The snake's body was created using various Modifiers. Subdivision allows for efficient and nondestructive modeling. 
            For animation, I use Curves and Shape Keys, allowing the position, mouth, teeth, and tongue to be controlled independently.
          </h4>
        </ProjectInfo>
      </itemlist>
    </section>

    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Environment">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/GauntledOfGods/GOG-Environment_Pyramid.png"
        id="1-1"
        :isExpanded="activeId === '1-1'"
        @toggle="setActive">
          <h2 class="highlight">Pyramid</h2>
          <h4>
            A Grid defines the base of the pyramid. The system then iterates across its height and number of points. 
            The angle of each point relative to the center determines which geometry is used. The interior of the pyramid 
            is excluded through a distance calculation to reduce unnecessary computational cost.          
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/GauntledOfGods/GOG-Environment_Rope.png"
        id="1-2"
        :isExpanded="activeId === '1-2'"
        @toggle="setActive">
          <h2 class="highlight">Rope Automation</h2>
          <h4>
            A Curve is used for the Rope, with three Circles placed along it. Their rotation is aligned along the Curve and 
            then supplemented with individual strands through Randomization. The Nodes also pass the Factor of the 
            Curve to the material, allowing the individual lines to automatically adapt to the shape of the Rope.
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

.media-container-desktop {
  display: flex;
  align-items: center;
  gap: 2.5%;
}

.media-container-desktop video,
.media-container-desktop img {
  width: 48.5%;
}

.media-container-mobile {
  display: flex;
  flex-direction: column;
  gap: 2.5%;
  padding: 2.5%;
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