<script lang="ts">
  import ShaderBackground from '../components/ShaderBackground.vue';
  import itemlist from '@/components/ItemList.vue';
  import ProjectInfo from '../components/ProjectInfo.vue'
  import BackButton from '../components/BackButton.vue'
  import frame from '../components/frame.vue'
import { h } from 'vue';

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
      <img class="HeroImage" src="/images/Projects/AaSS/AaSS-HeroPanel.png" alt="HeroPanel"/>  
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
    </frame>
    <h1 class="Title">Ability and Status System (AaSS)</h1>
    <h4 class="centerText TitleText">
      The Unreal Engine already provides a comprehensive framework for abilities and related gameplay systems with the 
      Gameplay Ability System (GAS). However, for smaller indie projects, this system can often be overly complex and 
      feature-heavy.
    </h4>
    <h4 class="centerText TitleText">
      For this reason, I developed a custom, more lightweight system tailored to smaller project scales. The focus was on 
      asynchronous loading, centralized access to all functionalities, and easy integration via Blueprints.
    </h4>
    <BackButton :BorderRadius=borderRadius :ButtonColor=frameColor></BackButton>
    </section>
    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Structure">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/AaSS/AaSS-InfoPanel-Separation.jpg">
          <h2 class="highlight">Separation</h2>
          <h4>
            The AaSS is split into three core components for better readability and usability. The Manager handles core logic and system integration, 
            while AbilityAndStatusData stores all relevant data. Actors interact with the system via a dedicated component.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/AaSS/AaSS-InfoPanel-Data.jpg">
          <h2 class="highlight">Ability and Status Data</h2>
          <h4>
            To ensure correct processing and structuring of data, the Manager requires separate DataTables for Abilities and Status Effects, 
            as well as a Data Asset for the associated tags. Each ability and status is defined via a Data Asset and then registered in the 
            corresponding DataTables.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/AaSS/AaSS-InfoPanel-Manager.jpg">
          <h2 class="highlight">Ability and Status Manager</h2>
          <h4>
            The Manager stores and loads all active abilities and status effects. It defines three core events per system: Activation, 
            Use, and Stop, which forward calls to the underlying logic. This enables centralized handling of constraints and behavior. 
            Additional elements such as particle effects are also managed, assigned to actors when needed.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/AaSS/AaSS-InfoPanel-Comp.jpg">
          <h2 class="highlight">Ability and Status Component</h2>
          <h4>
            Using the component, actors can store abilities and status effects and execute them in a context-specific way. Additionally, 
            the component provides event-based access to the underlying logic, allowing for individual customization.
          </h4>
        </ProjectInfo>
      </itemlist>
    </section>
    <section class="list" id="Info2">
      <itemlist :bgColor="frameColor" Title="Content">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/AaSS/AaSS-InfoPanel-Async.jpg">
          <h2 class="highlight">Async Loading</h2>
          <h4>
            Since abilities and status effects include assets like particles and materials, they are loaded asynchronously to avoid 
            performance issues. Abilities are handled directly by actors, while status effects are managed centrally by the Manager, as 
            they are usually triggered through abilities.       
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/AaSS/AaSS-InfoPanel-SoftRef.jpg">
          <h2 class="highlight">Soft References</h2>
          <h4>
            While the Data Assets for individual elements store all variables as hard references, the elements in the ability and status DataTables 
            are stored as soft references. This ensures that all data for a given element is loaded at once, preventing the need to load 
            individual parts separately.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/AaSS/AaSS-InfoPanel-Timer.jpg">
          <h2 class="highlight">Timer for Status-Effects</h2>
          <h4>
            The component includes a timer for status effects, allowing them to be executed at defined intervals (e.g., every second) to apply 
            effects over time, such as damage. Expired status effects are automatically removed, and the timer is only active 
            when required by an active effect.       
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/AaSS/AaSS-InfoPanel-Tag.jpg">
          <h2 class="highlight">Tag-System</h2>
          <h4>
            Using a simplified tag system, content can be extended directly within the engine without modifying C++ code. The system is used to 
            control all interactions while also enabling exceptions and special behaviors. For example, a “Frost” status can disable or prevent 
            the application of a “Burn” status.      
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