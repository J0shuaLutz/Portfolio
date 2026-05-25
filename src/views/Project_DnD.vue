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
      <img class="HeroImage" src="/images/Projects/DnD/DnD-HeroPanel.png" alt="HeroPanel"/>  
    </div>
    <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Version</h5>
        <h5> <span class="highlight">3.0</span> / <span class="highlight">3.5</span></h5>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Groupsize</h5>
        <h6>5</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Playtime</h5>
        <h6>10+ years</h6>
      </div>
      <div class="horizontalInfoGrid">
        <h5 class="rightText">Pages</h5>
        <h6>ca. 298</h6>
      </div>
    </frame>
    <h1 class="Title"> Dungeons & Dragons Master</h1>
    <h4 class="centerText TitleText">
      I have been playing Dungeons & Dragons for over 12 years, including 10 years as a Dungeon Master. The fascination of creating 
      worlds in which others can freely interact, express their imagination, and share experiences has stayed with me from the very 
      beginning.
    </h4>
    <h4 class="centerText TitleText">
      Starting as a player in a classic introductory adventure, I quickly evolved into creating my own campaign, which I continue 
      to run with the same group to this day. What began as a hobby gradually developed into a passion that ultimately motivated me 
      to pursue a second educational path.
    </h4>
    <BackButton :BorderRadius=borderRadius :ButtonColor=frameColor></BackButton>
    </section>
    <section class="list" id="Info1">
      <itemlist :bgColor="frameColor" Title="Building a World">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/DnD/DnD-InfoPanel-WorldMap.jpg"
        id="1-1"
        :isExpanded="activeId === '1-1'"
        @toggle="setActive">
          <h2 class="highlight">From Large to Small</h2>
          <h4>
            During the development of my campaign, I realized the importance of starting broad and refining details later. This was essential 
            for building a coherent world. I began with the main storyline, which formed the basis for the map and key locations. From there, 
            I developed political, economic, and historical systems that led to a variety of side quests.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/DnD/DnD-InfoPanel-Quest.jpg"
        id="1-2"
        :isExpanded="activeId === '1-2'"
        @toggle="setActive">
          <h2 class="highlight">Open World Problem</h2>
          <h4>
            After several years, a common open-world issue appeared in my campaign: players focused on side quests while the main story 
            moved into the background, creating balancing challenges through resource gains. This highlighted the importance of clear 
            prioritization and player guidance, while the analog format allowed flexible adaptation.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/DnD/DnD-InfoPanel-Media.jpg"
        id="1-3"
        :isExpanded="activeId === '1-3'"
        @toggle="setActive">
          <h2 class="highlight">Integrating different Media</h2>
          <h4>
            In addition to classic D&D visual aids such as miniatures, floors, and walls, I use images, music, 
            typography, and encrypted texts to make puzzles and tasks more immersive. Since neural network tools became available, 
            generated voices and images have been integrated, speeding up creation and improving immersion.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/DnD/DnD-InfoPanel-Magic.jpg"
        id="1-4"
        :isExpanded="activeId === '1-4'"
        @toggle="setActive">
          <h2 class="highlight">Systems</h2>
          <h4>
            Beyond the standard D&D mechanics, I added additional systems to support a more grounded and consistent world, 
            including political and economic structures as well as societal dynamics generated via an NPC system. I also created systems 
            for the creation and use of magical weapons and items to integrate them into the campaign.
          </h4>
        </ProjectInfo>
      </itemlist>
    </section>
    <section class="list" id="Info2">
      <itemlist :bgColor="frameColor" Title="Gameplay and Fun">
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/DnD/DnD-InfoPanel-Quest2.jpg"
        id="2-1"
        :isExpanded="activeId === '2-1'"
        @toggle="setActive">
          <h2 class="highlight">Challenges</h2>
          <h4>
            In an open-world D&D campaign, encounter difficulty is highly situational due to group size differences and variable timing of 
            enemy encounters, requiring constant adjustment. To address this in a persistent world without respawn, I integrated resurrection 
            into the narrative, but at a high cost to maintain risk and consequences.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/DnD/DnD-InfoPanel-System.jpg"
        id="2-2"
        :isExpanded="activeId === '2-2'"
        @toggle="setActive">
          <h2 class="highlight">Action and Reaction</h2>
          <h4>
            An interactive world is strongly shaped by player actions, and pen-and-paper systems allow flexible adaptation compared to 
            digital games. My players often made unexpected choices, harming NPCs or changing economic and political structures. 
            This led me to focus more on smaller elements like trade routes to support emergent gameplay.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/DnD/DnD-InfoPanel-Map.jpg"
        id="2-3"
        :isExpanded="activeId === '2-3'"
        @toggle="setActive">
          <h2 class="highlight">Reward and Meta-Gaming</h2>
          <h4>
            Rewards in D&D include experience, gold, items, and also narrative or informational benefits. Their value depends 
            heavily on player interest. For my group, I added character flaws to create deeper interactions, and awarded bonus 
            experience to reinforce certain behaviors, even if they are not always optimal.
          </h4>
        </ProjectInfo>
        <ProjectInfo :BorderRadius=borderRadius :BackColor=frameColor4 Image="/Portfolio/images/Projects/DnD/DnD-InfoPanel-Size.jpg"
        id="2-4"
        :isExpanded="activeId === '2-4'"
        @toggle="setActive">
          <h2 class="highlight">Feedback</h2>
          <h4>
            At the end of each session, I meet with the group to gather feedback and discuss what worked well and what did not. This 
            helps me better align the playstyle and gameplay elements with their expectations. At the same time, this exchange 
            benefits both sides, as players reflect on their experiences and discuss them together.
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