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
      <img class="HeroImage" src="/images/Projects/Grid/Grid-HeroPanel.png" alt="HeroPanel"/>  
    </div>
    <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Engine</h5>
        <h6>Unreal Engine 5.7</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Coding</h5>
        <h5> <span class="highlight">C++</span> / <span class="highlight">Blueprint</span></h5>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">State</h5>
        <h5> <span class="highlight">Prototype</span> / <span class="highlight">Development</span></h5>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Release</h5>
        <h6>private Use</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Access</h5>
        <h6>on request</h6>
      </div>
    </frame>
    <h1 class="Title">3D Grid</h1>
    <h4 class="centerText TitleText">
      For a personal project, I developed a 3D grid system designed to run reliably across a wide range of hardware. 
      The goal is to enable fast and straightforward grid generation that can be dynamically expanded while maintaining 
      stable performance.
    </h4>
    <h4 class="centerText TitleText">
      A particular focus is placed on Blueprint usability to ensure easy integration and application.
    </h4>
    <BackButton :BorderRadius=borderRadius :ButtonColor=frameColor></BackButton>
    </section>
    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Structure">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Grid/Grid-InfoPanel-Separation.jpg">
          <h2 class="highlight">Separation</h2>
          <h4>
            The grid is divided into three core components to improve readability and usability. The core logic and global 
            access are handled by the GridManager, while the GridRenderer is responsible for visual representation and world 
            referencing. The GridData component manages all relevant data and referenced assets.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Grid/Grid-InfoPanel-Data.jpg">
          <h2 class="highlight">Grid-Data</h2>
          <h4>
            The GridData contains the cell types as an enum, which is the only part that needs to be extended in C++. It also stores 
            the structs for the GridManager and GridRenderer, as well as the Data Asset where the respective cell 
            information is defined.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Grid/Grid-InfoPanel-Manager.jpg">
          <h2 class="highlight">Grid-Manager</h2>
          <h4>
            The GridManager provides a static getter for global access, allowing the grid to be created, expanded, and modified via Blueprints. 
            Relevant data is forwarded to the GridRenderer when needed. Features such as pathfinding can also be integrated, 
            while cell access is handled internally through a map storing the core grid data.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Grid/Grid-InfoPanel-Renderer.jpg">
          <h2 class="highlight">Grid-Renderer</h2>
          <h4>
            The GridRenderer is solely responsible for spawning actors and instances as well as removing selected cells. All cells are managed 
            in corresponding maps and properly attached in the Outliner to ensure a structured representation.
          </h4>
        </ProjectInfo>
      </itemlist>
    </section>
    <section class="list" id="Info2">
      <itemlist :bgColor="frameColor" Title="Content">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Grid/Grid-InfoPanel-Spawn.jpg">
          <h2 class="highlight">Async Spawning</h2>
          <h4>
            To ensure the grid is usable on all hardware, all cells are loaded asynchronously. This required implementing delegates to react 
            to individual loading processes. These are integrated into the respective nodes and are triggered once all cells have finished loading, 
            regardless of their number or loading time.        
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Grid/Grid-InfoPanel-Instance.jpg">
          <h2 class="highlight">Actor or Instance</h2>
          <h4>
            During the spawning process, the user can choose whether a cell is created as an instance or an actor. This is important to distinguish 
            between purely visual and interactable cells. It also improves performance, as not every cell requires 
            an individual draw call.          
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Grid/Grid-InfoPanel-SoftReference.jpg">
          <h2 class="highlight">Soft References</h2>
          <h4>
            Actors are stored as soft references within the data asset, ensuring that memory is only used when they are actually needed. 
            Instance geometries are also loaded on demand, only when required.          
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