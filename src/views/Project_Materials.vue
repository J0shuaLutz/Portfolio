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
      <img class="HeroImage" src="/images/Projects/Material/Material-HeroPanel.png" alt="HeroPanel"/>  
    </div>
    <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Role</h5>
        <h6>Technical Artist</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Engine</h5>
        <h6>Unreal Engine 5</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Coding</h5>
        <h6> UE Shader Graph</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Textures</h5>
        <h6>textures.com</h6>
      </div>
    </frame>
    <h1 class="Title"> Shader & Materials</h1>
    <h4 class="centerText TitleText">
      For the practical part of the bachelor’s thesis, a set of materials was developed within a short development timeframe that 
      achieve high visual quality with minimal texture usage, while maintaining performance and enabling 
      flexible application across different use cases.
    </h4>
    <BackButton :BorderRadius=borderRadius :ButtonColor=frameColor></BackButton>
    </section>
    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Shader">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Material/Material-InfoPanel-Wood.jpg">
          <h2 class="highlight">Single Texture Material</h2>
          <h4>
            The color texture is used as the base for specular, roughness, and normal data. The blue channel 
            is used to derive vector information, which is processed into a normal map. This approach is 
            texture-dependent and, for this relatively smooth material, provides a sufficient approximation.         
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Material/Material-InfoPanel-Tiles.jpg">
          <h2 class="highlight">Tiling</h2>
          <h4>
            The Fracture node generates a grid-based tile structure with adjustable density and grout width. 
            The normal map is derived from the grid using blend angle adjustments to enhance perceived tile depth. 
            Controlled noise adds surface variation, while each segment is treated as a hash-based element and 
            assigned a randomized color within a defined range.      
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Material/Material-InfoPanel-Stone.jpg">
          <h2 class="highlight">Noise</h2>
          <h4>
            The stone texture is based on two overlapping masking Voronoi patterns, suitable for 
            marbled stone such as marble. Each cell has a grayscale value, allowing color control 
            via a gradient. While Voronoi nodes add variation, they often increase material complexity,
             where a simple texture can be more efficient.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Material/Material-InfoPanel-WoodPlanks.jpg">
          <h2 class="highlight">Projection</h2>
          <h4>
            This material is designed for floors and adjacent surfaces, using world-position mapping for projection. An extended Fracture setup 
            creates offset tiles in a parquet-like pattern. All parameters, including wood color, are fully adjustable. 
            Specular, roughness, and normal data are derived from the texture and grid.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/Material/Material-InfoPanel-Performance.jpg">
          <h2 class="highlight">Performance</h2>
          <h4>
            These materials demonstrate that, in some cases, it is more efficient to precompute 
            details via textures rather than reconstructing them in real time. Shader performance 
            is not only defined by texture sampling and VRAM usage, but also by shader complexity, 
            which often increases when fewer textures are used.          
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