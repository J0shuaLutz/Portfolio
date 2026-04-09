<script>
  import ShaderBackground from '../components/ShaderBackground.vue'
  import frame from '../components/frame.vue'
  import item from '../components/Item.vue'
  import itemlist from '../components/ItemList.vue'
  import navi from '../components/Navigator.vue'
  

  export default {
    name: 'home',
    components: {
      ShaderBackground,
      frame,
      item,
      itemlist,
      navi
    },
    data(){
        return {
            frameColor: "rgba(1, 41, 84, 0.75)",
            frameColor2: "rgba(159,195,245,1)",
            frameColor3: "rgba(255,109,218,1)",
            borderRadius: "10px",
            lines: []
        }
    },
    mounted() {
        this.lines.push(
            new window.LeaderLine(
            document.getElementById("DiceGame-RP"),
            DiceGamePos,
            { color: 'white', size: 3, path: 'straight', startPlug: 'behind', endPlug: 'behind' }
            )
        );

        this.lines.push(
            new window.LeaderLine(
            document.getElementById("DiceCode-LP"),
            DiceCodePos,
            { color: 'white', size: 3, path: 'straight', startPlug: 'behind', endPlug: 'behind' }
            )
        );

        this.lines.push(
            new window.LeaderLine(
            document.getElementById("DiceTechArt-RP"),
            DiceTechArtPos,
            { color: 'white', size: 3, path: 'straight', startPlug: 'behind', endPlug: 'behind' }
            )
        );

        this.lines.push(
            new window.LeaderLine(
            document.getElementById("DiceOther-LP"),
            DiceOtherPos,
            { color: 'white', size: 3, path: 'straight', startPlug: 'behind', endPlug: 'behind' }
            )
        );

        this.lines.push(
            new window.LeaderLine(
            document.getElementById("DiceGameMobile-RP"),
            DiceGameMobilePos,
            { color: 'white', size: 3, path: 'straight', startPlug: 'behind', endPlug: 'behind' }
            )
        );

        this.lines.push(
            new window.LeaderLine(
            document.getElementById("DiceCodeMobile-LP"),
            DiceCodeMobilePos,
            { color: 'white', size: 3, path: 'straight', startPlug: 'behind', endPlug: 'behind' }
            )
        );

        this.lines.push(
            new window.LeaderLine(
            document.getElementById("DiceTechArtMobile-RP"),
            DiceTechArtMobilePos,
            { color: 'white', size: 3, path: 'straight', startPlug: 'behind', endPlug: 'behind' }
            )
        );

        this.lines.push(
            new window.LeaderLine(
            document.getElementById("DiceOtherMobile-LP"),
            DiceOtherMobilePos,
            { color: 'white', size: 3, path: 'straight', startPlug: 'behind', endPlug: 'behind' }
            )
        );
    },
    unmounted() {
        this.lines.forEach(line => line.remove());
        this.lines = [];
    }
}
</script>

<template>
  <div>
    <ShaderBackground />
    <section id = "Hero" class="desktop">
        <div id="Dice" :style="{position:'relative'}">
            <navi Title="Games" id="DiceGame" x="-35%" y="0px" Target="Games"/>
            <div id="DiceGamePos" :style="{position:'absolute', top:'9.5vw', left:'50%', transform:'translateX(-9.8vw)'}"></div>
            <navi Title="Code" id="DiceCode" x="35%" y="0px" Target="Code"/>
            <div id="DiceCodePos" :style="{position:'absolute', top:'9.5vw', left:'50%', transform:'translateX(9.7vw)'}"></div>
            <navi Title="Tech Art" id="DiceTechArt" x="-35%" y='15vw' Target="TechArt"/>
            <div id="DiceTechArtPos" :style="{position:'absolute', top:'25.25vw', left:'50%', transform:'translateX(-9.7vw)'}"></div>
            <navi Title="Other" id="DiceOther" x="35%" y='15vw' Target="Other"/>
            <div id="DiceOtherPos" :style="{position:'absolute', top:'25.5vw', left:'50%', transform:'translateX(9.5vw)'}"></div>
            <img class="HeroImage" src="/images/Dice.png" alt="Dies"> 
        </div>
        <div class="horizontalBaseGrid HeroGrid">
            <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
                <div class="horizontalInfoGrid">
                    <h5 class="rightText">Role</h5>
                    <h5><span class="highlight">Gameplay Programmer</span> / <span class="highlight">Technical Artist</span></h5>
                </div>
                <div class="horizontalInfoGrid">
                    <h5 class="rightText">Degree</h5>
                    <h6>B.Sc. Game Design Engineer</h6>
                </div>
                <div class="horizontalInfoGrid">
                    <h5 class="rightText">Engines</h5>
                    <h5><span class="highlight">Unreal</span> / <span class="highlight">Unity</span></h5>
                </div>
                <div class="horizontalInfoGrid">
                    <h5 class="rightText">Coding</h5>
                    <h5> <span class="highlight">C++</span> / <span class="highlight">C#</span> / <span class="highlight">Type Script</span></h5>
                </div>
                <div class="horizontalInfoGrid">
                    <h5 class="rightText">Location</h5>
                    <h5><span class="highlight">Munich</span> / <span class="highlight">Germany</span></h5>
                </div>
                <div class="horizontalInfoGrid">
                    <h5 class="rightText">Languages</h5>
                    <h5><span class="highlight">German</span> / <span class="highlight">English</span></h5>
                </div>
                <div class="horizontalInfoGrid">
                    <h5 class="rightText">Status</h5>
                    <h6 class="green">Hireable</h6>
                </div>
                <div class="horizontalInfoGrid">
                    <h5 class="rightText">Contact</h5>
                    <h7>
                        <a href="https://www.linkedin.com/in/joshua-nicola-lutz-166312275" target="_blank">LinkedIn</a>
                    </h7>
                </div>
            </frame>
            <h1>Joshua Nicola Lutz</h1>
            <img class="Portrait" src="/images/profile.png" alt="Portrait" :style="{ '--BorderRadius': borderRadius}">
        </div> 
    </section>
    <section id="Hero" class="mobile">
        <div id="Dice" :style="{position:'relative'}">
            <navi Title="Games" id="DiceGameMobile" x="-35%" y="0px" Target="Games"/>
            <div id="DiceGameMobilePos" :style="{position:'absolute', top:'16vw', left:'50%', transform:'translateX(-16.5vw)'}"></div>
            <navi Title="Code" id="DiceCodeMobile" x="35%" y="0px" Target="Code"/>
            <div id="DiceCodeMobilePos" :style="{position:'absolute', top:'17vw', left:'50%', transform:'translateX(16.5vw)'}"></div>
            <navi Title="Tech Art" id="DiceTechArtMobile" x="-35%" y='60vw' Target="TechArt"/>
            <div id="DiceTechArtMobilePos" :style="{position:'absolute', top:'43vw', left:'50%', transform:'translateX(-16.5vw)'}"></div>
            <navi Title="Other" id="DiceOtherMobile" x="35%" y='60vw' Target="Other"/>
            <div id="DiceOtherMobilePos" :style="{position:'absolute', top:'44vw', left:'50%', transform:'translateX(16.5vw)'}"></div>
            <img class="HeroImageMobile" src="/images/Dice.png" alt="Dies">
        </div>
        <h1>Joshua Nicola Lutz</h1>
        <frame class = "Infobox" :bgColor=frameColor :BorderRadius=borderRadius>
            <div class="horizontalInfoGrid">
                <h5 class="rightText">Role</h5>
                <h5><span class="highlight">Gameplay Programmer</span> / <span class="highlight">Technical Artist</span></h5>
            </div>
            <div class="horizontalInfoGrid">
                <h5 class="rightText">Degree</h5>
                <h6>B.Sc. Game Design Engineer</h6>
            </div>
            <div class="horizontalInfoGrid">
                <h5 class="rightText">Engines</h5>
                <h5><span class="highlight">Unreal</span> / <span class="highlight">Unity</span></h5>
            </div>
            <div class="horizontalInfoGrid">
                <h5 class="rightText">Coding</h5>
                <h5> <span class="highlight">C++</span> / <span class="highlight">C#</span> / <span class="highlight">Type Script</span></h5>
            </div>
            <div class="horizontalInfoGrid">
                <h5 class="rightText">Location</h5>
                <h5><span class="highlight">Munich</span> / <span class="highlight">Germany</span></h5>
            </div>
            <div class="horizontalInfoGrid">
                <h5 class="rightText">Languages</h5>
                <h5><span class="highlight">German</span> / <span class="highlight">English</span></h5>
            </div>
            <div class="horizontalInfoGrid">
                <h5 class="rightText">Status</h5>
                <h6 class="green">Hireable</h6>
            </div>
            <div class="horizontalInfoGrid">
                <h5 class="rightText">Contact</h5>
                <h7>
                    <a href="https://www.linkedin.com/in/joshua-nicola-lutz-166312275" target="_blank">LinkedIn</a>
                </h7>
            </div>
        </frame>
    </section>
    <section id ="Profile" class="desktop">
        <div class="horizontalBaseGrid">
            <div>
                <frame class = "Spacer" :bgColor=frameColor :BorderRadius=borderRadius>
                    <div class ="ToolGrid">
                        <img class="Image" src="/images/Unreal.png" alt="Unreal">
                        <img class="Image" src="/images/Unity.png" alt="Unity">
                        <img class="Image" src="/images/C++.png" alt="C++">
                        <img class="Image" src="/images/C_sharp.png" alt="CSharp">
                        <img class="Image" src="/images/Blender.png" alt="Blender">
                        <img class="Image" src="/images/Adobe.png" alt="Adobe">
                        <img class="Image" src="/images/Vizrt.png" alt="Vizrt">
                        <img class="Image" src="/images/allplan.png" alt="Allplan">
                    </div>
                </frame>
                <frame class = "Spacer" :bgColor=frameColor :BorderRadius=borderRadius>
                    <h2>Skill Matrix</h2>
                    <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                        <h3>UE Blueprint</h3>
                        <frame :bgColor=frameColor3 :BorderRadius=borderRadius>
                        </frame>
                    </frame>
                    <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                        <h3>C++</h3>
                        <frame :style="{ width: '75%' }"  :bgColor=frameColor3 :BorderRadius=borderRadius>
                        </frame>
                    </frame>
                    <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                        <h3>C#</h3>
                        <frame :style="{ width: '60%' }" :bgColor=frameColor3 :BorderRadius=borderRadius>
                        </frame>
                    </frame>
                    <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                        <h3>GLSL</h3>
                        <frame :style="{ width: '50%' }" :bgColor=frameColor3 :BorderRadius=borderRadius>
                        </frame>
                    </frame>
                    <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                        <h3>Type Script</h3>
                        <frame :style="{ width: '45%' }" :bgColor=frameColor3 :BorderRadius=borderRadius>
                        </frame>
                    </frame>
                </frame>
            </div>
            <div>
                <h4 class="centerText Spacer">
                    My passion
                    is <span class="highlight">creating modular systems </span> 
                    that can be expanded and used flexibly 
                    to help designers and artists 
                    while bringing joy to players.
                </h4>
                <h4 class="centerText Spacer">
                    <span class="highlight">Unreal</span> has been my primary engine since 2020, 
                    and I use it actively in various projects. 
                    While I focused on gaming during university, 
                    my last job involved work in virtual production 
                    and rendering.
                </h4>
                <h4 class="centerText Spacer">
                    I am also experienced with <span class="highlight">Unity</span>, which I used 
                    extensively during my practical studies at university 
                    and to develop my first award-winning game.
                </h4>         
            </div>
            <div>
                <h4 class="Spacer">
                    <span class="highlight2">I started a career as a technical draftsman, 
                    but quickly realized a desire to build worlds 
                    instead of drawing buildings. This led to pursuing 
                    game design studies with a focus on programming. </span>
                </h4>
                <h4 class="Spacer">
                    <span class="highlight2 highlight3"> Creating a world means designing complex systems 
                    that players can explore, grow within and interact with. </span>
                </h4>
            </div>
        </div>
    </section>
    <section id="Profile" class="mobile">
        <div class="horizontalMobileGrid">
            <img class="PortraitMobile" src="/images/profile.png" alt="Portrait" :style="{'--BorderRadius': borderRadius}">
            <h4>
                <span class="highlight2 highlight3"> Creating a world means designing complex systems 
                that players can explore, grow within and interact with. </span>
            </h4>
        </div>
        <h4 class="Spacer">
            <span class="highlight2">I started a career as a technical draftsman, 
            but quickly realized a desire to build worlds 
            instead of drawing buildings. This led to pursuing 
            game design studies with a focus on programming. </span>
        </h4>
        <frame class = "Spacer" :bgColor=frameColor :BorderRadius=borderRadius>
            <div class ="ToolGrid">
                <img class="Image" src="/images/Unreal.png" alt="Unreal">
                <img class="Image" src="/images/Unity.png" alt="Unity">
                <img class="Image" src="/images/C++.png" alt="C++">
                <img class="Image" src="/images/C_sharp.png" alt="CSharp">
                <img class="Image" src="/images/Blender.png" alt="Blender">
                <img class="Image" src="/images/Adobe.png" alt="Adobe">
                <img class="Image" src="/images/Vizrt.png" alt="Vizrt">
                <img class="Image" src="/images/allplan.png" alt="Allplan">
            </div>
        </frame>
        <frame class = "Spacer" :bgColor=frameColor :BorderRadius=borderRadius>
            <h2>Skill Matrix</h2>
            <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                <h3>UE Blueprint</h3>
                <frame :bgColor=frameColor3 :BorderRadius=borderRadius>
                </frame>
            </frame>
            <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                <h3>C++</h3>
                <frame :style="{ width: '75%' }"  :bgColor=frameColor3 :BorderRadius=borderRadius>
                </frame>
            </frame>
            <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                <h3>C#</h3>
                <frame :style="{ width: '60%' }" :bgColor=frameColor3 :BorderRadius=borderRadius>
                </frame>
            </frame>
            <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                <h3>GLSL</h3>
                <frame :style="{ width: '50%' }" :bgColor=frameColor3 :BorderRadius=borderRadius>
                </frame>
            </frame>
            <frame class="SmallSpacer" :bgColor=frameColor2 :BorderRadius=borderRadius>
                <h3>Type Script</h3>
                <frame :style="{ width: '45%' }" :bgColor=frameColor3 :BorderRadius=borderRadius>
                </frame>
            </frame>
        </frame>
        <div>
            <h4 class="centerText Spacer">
                My passion
                is <span class="highlight">creating modular systems </span> 
                that can be expanded and used flexibly 
                to help designers and artists 
                while bringing joy to players.
            </h4>
            <h4 class="centerText Spacer">
                <span class="highlight">Unreal</span> has been my primary engine since 2020, 
                and I use it actively in various projects. 
                While I focused on gaming during university, 
                my last job involved work in virtual production 
                and rendering.
            </h4>
            <h4 class="centerText Spacer">
                I am also experienced with <span class="highlight">Unity</span>, which I used 
                extensively during my practical studies at university 
                and to develop my first award-winning game.
            </h4>         
        </div>
    </section>
    <section class="list" id = "Games" >
        <itemlist :bgColor="frameColor" Title="Games">
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Sound of Survival"
                Description="First Person Rythm Shooter released on Steam."
                ProjectStyle="Student Project"
                Image="/images/Projects/SoS/SoS-FrontPanel.jpg"
                Path="/SoundOfSurvival"
            />
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Light is Key"
                Description="Award winning first-person puzzle."
                ProjectStyle="Student Project"
                Image="/images/Projects/LiK/LiK-FrontPanel.jpg"
                Path="/LightisKey"
            />
        </itemlist>
    </section>
    <section class="list" id = "Code">
        <itemlist :bgColor="frameColor" Title="Code">
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Work in Progress"
                Description="Description will be come soon. "
                ProjectStyle="project"
                Image="/images/Projects/FrontPanel-Basic.jpg"
                Path="/progress"
            />
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Work in Progress"
                Description="Description will be come soon. "
                ProjectStyle="project"
                Image="/images/Projects/FrontPanel-Basic.jpg"
                Path="/progress"
            />
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Work in Progress"
                Description="Description will be come soon. "
                ProjectStyle="project"
                Image="/images/Projects/FrontPanel-Basic.jpg"
                Path="/progress"
            />
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Work in Progress"
                Description="Description will be come soon. "
                ProjectStyle="project"
                Image="/images/Projects/FrontPanel-Basic.jpg"
                Path="/progress"
            />
        </itemlist>
    </section>
    <section class="list" id = "TechArt">
        <itemlist :bgColor="frameColor" Title="Tech Art">
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Work in Progress"
                Description="Description will be come soon. "
                ProjectStyle="project"
                Image="/images/Projects/FrontPanel-Basic.jpg"
                Path="/progress"
            />
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Work in Progress"
                Description="Description will be come soon. "
                ProjectStyle="project"
                Image="/images/Projects/FrontPanel-Basic.jpg"
                Path="/progress"
            />
        </itemlist>
    </section>
    <section class="list" id = "Other">
        <itemlist :bgColor="frameColor" Title="Other">
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Work in Progress"
                Description="Description will be come soon. "
                ProjectStyle="project"
                Image="/images/Projects/FrontPanel-Basic.jpg"
                Path="/progress"
            />
            <item :BorderRadius=borderRadius :ButtonColor=frameColor
                Title="Work in Progress"
                Description="Description will be come soon. "
                ProjectStyle="project"
                Image="/images/Projects/FrontPanel-Basic.jpg"
                Path="/progress"
            />
        </itemlist>
    </section>
  </div>

</template>
<style>
    section{
        margin-top: 25px;
        margin-bottom: 25px;
        padding: 10px;
        box-sizing: border-box;
    }

    .desktop{
        display: none;
    }

    .mobile{
        display: block;
        width: 100%;
    }

    @media (min-width: 759px) {
        .desktop{
            display: block;
            width: 100%;
        }
        .mobile{
            display: none;
        }
    }

    .HeroImage{
        display: block;
        margin-top: 25px;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }

    .HeroImageMobile{
        display: block;
        margin-top: 0px;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
        width: 70%;
    }

    .HeroGrid{
        margin-top: -135px;
        align-items: end;
    }

    .HeroTitle{
        text-align: center;
    }

    .Portrait{
        display: block;
        align-items: end;
        justify-content: left;
        width: 75%;
        margin: 10px;
        height: auto;
        max-width: 100%;
        border-radius: var(--BorderRadius);
    }

    .PortraitMobile{
        width: 100%;
        height: auto;
        margin:0;
        border-radius: var(--BorderRadius);
    }

    .horizontalBaseGrid{
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
        
        justify-content: start;
        column-gap: 10px;
    }

    .horizontalMobileGrid{
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        width:100%;
        column-gap: 10px;
        margin:0;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        align-items: center;
    }

    .ToolGrid{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 100%;
    }

</style>
