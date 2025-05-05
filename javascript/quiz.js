

//document.getElementById('date').innerHTML = new Date().toDateString();
const inArr = [
    ["Moa-seogi ","Stand med samlede fødder","",10,8,"Moa-seogi","Moa-seogi","Stand"],
  ["Dwichook-moa-seogi ","Stand med samlede hæle."," Fødder i ca 45 graders vinkel.",10,5,"Dwichook-moa-seogi","Dwichook-moa-seogi","Stand"],
  ["Naranhi-seogi ","Parallel stand","(fødderne i skulderbredde, fødderne parallelle). ",10,4,"","Naranhi-seogi","Stand"],
  ["Joochoom-seogi ","Hestestand ","(benene let bøjede og med ca. 1.5 skulderafstand)",10,6,"","Joochoom-seogi","Stand"],
  ["Ap-koobi ","Lang stand ","med vægten ligeligt fordelt på begge ben. Forreste ben er bøjet og man kan lige se tæerne, men ikke foden",10,9,"","Ap-koobi","Stand"],
  ["Ap-seogi ","Kort stand","",10,10,"","Ap-seogi","Stand"],
  ["Gibon-joonbi-seogi ","Klarstand ved grundteknik","",10,7,"","Gibon-joonbi-seogi","Stand"],
  ["Arae hechyomakki ","Adskille-blokering i lav sektion","",10,3,"","","Hånd"],
  ["Arae makki ","Blokering i lav sektion","",10,10,"","","Hånd"],
  ["Momtong makki ","Indadgående blokering i midtersektion ","(blokering over forreste ben)",10,6,"","","Hånd"],
  ["Momtong an-makki ","Indadgående blokering i midtersektion ","(Blokering over bagerste ben)",10,4,"","","Hånd"],
  ["Eolgul makki ","Blokering i høj sektion","",10,5,"","","Hånd"],
  ["Momtong jireugi ","Slag fra hoften i midtersektion","",10,9,"","","Hånd"],
  ["Eolgul jireugi ","Slag fra hoften i høj sektion","",10,7,"","","Hånd"],
  ["Arae jireugi ","Slag fra hoften i lav sektion","",10,8,"","","Hånd"],
  ["Ap dro naeryo chagi ","Nedadgående spark med strakt ben.","Lige op og lige ned. Stræk foden ud på vej ned",10,10,"","","Ben"],
  ["Bakat chagi ","Udadgående spark med strakt ben.","",10,9,"","","Ben"],
  ["An chagi ","Indadgående spark med strakt ben.","",10,8,"","","Ben"],
  ["Ap chagi ","Front spark. Ram med fodballen.","",10,7,"","","Ben"],
  ["Jumeok ","Knyttet hånd","",10,9,"","","Teori"],
  ["Jireugi ","Slag fra hoften med knyttet hånd","",10,9,"","","Teori"],
  ["Chagi ","Spark","",10,10,"","","Teori"],
  ["Ap ","Front","",10,8,"","","Teori"],
  ["An ","Indadgående","",10,8,"","","Teori"],
  ["Bakat ","Udadgående","",10,9,"","","Teori"],
  ["Arae ","Lav sektion ","(fra hoften og ned)",10,8,"","","Teori"],
  ["Momtong ","Midter sektion"," (mellem hoften og kraveben)",10,9,"","","Teori"],
  ["Eolgul ","Høj sektion ","(mellem kraveben og toppen af hovedet)",10,7,"","","Teori"],
  ["Charyeo ","Indtag hilsestand ","(fødderne samlet og armene ned langs siden). Når man er i denne stand, må man ikke snakke eller bevæge sig.",10,1,"","","Teori"],
  ["Kyeongne ","Hils","(buk)",10,2,"","","Teori"],
  ["Joonbi ","Indtag klarstand","",10,2,"","","Teori"],
  ["Keuman ","Stop og indtag klarstand ","(startposition)",10,1,"","","Teori"],
  ["Dirro dorra ","Vend 180 grader ","(højre om)",10,2,"","","Teori"],
  ["Zuu ","Slap af ","(efter Zuu er man “fri” fra andre ordrer)",10,1,"","","Teori"],
  ["Dobok ","Taekwondo dragt","",10,8,"","","Teori"],
  ["Dojang ","Træningssal","",10,10,"","","Teori"],
  ["Toga-nim ","Træner under 1. dan","",10,4,"","","Teori"],
  ["Kyosa-nim ","Træner 1. - 3. dan","",10,4,"","","Teori"],
  ["Sabum-nim ","Træner 4. - 7. dan","",10,4,"","","Teori"],
  ["Kukki jedeharjo kyeongne ","Hilsen til nationalflaget","",10,2,"","","Teori"],
  ["Nødværgeretten §13 ","Se bilag","",10,0,"","","Teori"],
  ["Hvad betyder Taekwondo? ","Fodens- og nævens- vej/kunst/system","Se teoriafsnit “Hvad er taekwondo?” (",10,10,"","","Teori"],
  ["Chung Moo ","Den bedste","",10,10,"","","Teori"],
  ["Pyeonhi-seogi ","Hvilestand","(fødderne peger lidt ud ad og hænderne på ryggen, hvor den ene hånd hviler i den anden)",9,3,"","","Stand"],
  ["Momtong bakat makki ","Udadgående blokering i midtersektion","",9,1,"","","Hånd"],
  ["Bandae jireugi ","Slag fra hoften over forreste ben ","(samme ben/arm)",9,2,"","","Hånd"],
  ["Baro jireugi ","Slag fra hoften over bagerste ben ","(modsat arm/ben)",9,2,"","","Hånd"],
  ["Sonnal eolgul bakat chigi ","Udadgående stød (slag) i høj sektion med enkelt knivhånd"," (håndfladen nedad)",9,1,"","","Hånd"],
  ["Sonnaldeung momtong an chigi ","Indadgående stød/slag i midtersektion hvor der rammes med omvendt knivhånd ","(den side hvor tommelfingeren sidder)",9,0,"","","Hånd"],
  ["Baldeung dollyo chagi ","Cirkelspark hvor der rammes med vristen","",9,6,"","","Ben"],
  ["Mileo chagi ","Skubbe spark","",9,0,"","","Ben"],
  ["Son ","Hånd","",9,3,"","","Teori"],
  ["Sonnal ","Knivhånd","(udvendige håndkant, der hvor lillefingeren sidder)",9,3,"","","Teori"],
  ["Sonnaldeung ","Omvendt knivhånd"," (den side hvor tommelfingeren sidder)",9,0,"","","Teori"],
  ["Baldeung ","Vrist","",9,6,"","","Teori"],
  ["Dwi-chook ","Undersiden af hælen","",9,5,"","","Teori"],
  ["Chigi ","Slag der ikke kommer fra hoften","",9,3,"","","Teori"],
  ["Dollyo ","Cirkel","",9,6,"","","Teori"],
  ["Mileo ","Skubbe","",9,0,"","","Teori"],
  ["Poom ","Grundteknik","",9,5,"","","Teori"],
  ["Hvad er poomsae? ","Sammensatte grundteknikker","",9,5,"","","Teori"],
  ["DTaF ","Dansk Taekwondo Forbund","",9,1,"","","Teori"],
  ["Hanna ","En (1)","",9,7,"","","Teori"],
  ["Duul ","To (2)","",9,7,"","","Teori"],
  ["Set ","Tre (3)","",9,6,"","","Teori"],
  ["Net ","Fire (4)","",9,6,"","","Teori"],
  ["Il ","Første","",9,2,"","","Teori"],
  ["Yi ","Anden","",9,1,"","","Teori"],
  ["Dwit-koobi ","Sidestand","(forreste fod peger fremad og bagerste fod peger til siden. Der er ca 20 % vægt på forreste ben og 80 % på bagerste ben)",8,2,"","","Stand"],
  ["Anpalmok momtong bakat makki ","Udadgående blokering med inderside af underarm","",8,,"","","Hånd"],
  ["Sonnal makki (momtong og arae) ","Dobbelt knivhåndsblokering"," (midt og lav sektion)",8,,"","","Hånd"],
  ["Sonnal eolgul an chigi ","Indadgående stød (slag) i høj sektion med enkelt knivhånd","",8,,"","","Hånd"],
  ["Hansonnal jebipoom mok chigi ","Enkelthånds svaleteknik"," (stød mod hals med hansonnal (enkeltknivhånd), modsat arm og ben. Kroppen skal drejes så man slår “lidt længere fremme”)",8,,"","","Hånd"],
  ["Hansonnal momtong bakat makki ","Udadgående blokering i midtersektion med enkelt knivhånd","",8,,"","","Hånd"],
  ["Doo bon momtong jireugi ","Dobbeltslag i midtersektion","",8,,"","","Hånd"],
  ["Yeop chagi ","Sidespark","",8,,"","","Ben"],
  ["Ap-chook dollyo chagi ","Cirkelspark hvor der rammes med fodballen","",8,,"","","Ben"],
  ["Pal ","Arm","",8,,"","","Teori"],
  ["Palmok ","Underarm","",8,,"","","Teori"],
  ["An-palmok ","Indersiden af underarm","",8,,"","","Teori"],
  ["Bakat palmok ","Ydersiden af underarm","",8,,"","","Teori"],
  ["Balnal ","Knivfod (udvendige fodkant hvor lilletåen sidder)","",8,,"","","Teori"],
  ["Ap-chook ","Fodballe","",8,,"","","Teori"],
  ["Jebipoom ","Svaleteknik","",8,,"","","Teori"],
  ["Mok ","Hals","",8,,"","","Teori"],
  ["Yeop ","Side","",8,,"","","Teori"],
  ["Tasut ","Fem (5)","",8,,"","","Teori"],
  ["WT ","World Taekwondo","",8,,"","","Teori"],
  ["ETU ","European Taekwondo Union","",8,,"","","Teori"],
  ["Nachoo-seogi ","Dybere og bredere Jochoom-seogi","",7,1,"","","Stand"],
  ["Jebipoom mok chigi ","Svaleteknik ","(hansonnal jebipoom mok chigi med hansonnal eolgul makki samtidigt)",7,,"","","Hånd"],
  ["Batangson momtong nulleo makki ","Nedadgående håndrodsblokering"," (“læg låg på”)",7,,"","","Hånd"],
  ["Deung jumeok ap chigi ","Front stød med oversiden af den knyttede hånd ","(ram med knoerne)",7,,"","","Hånd"],
  ["Pyonsonkeut seweon chireugi ","Fingerstik med pyonsonkeut (fingerspidser på linje) i lodret håndstilling (tommelfinger opad)","",7,,"","","Hånd"],
  ["Hansonnal momtong yeop makki ","Blokering i midtersektion med enkelt knivhånd til siden."," (Udføres ofte i Joochoom-seogi)",7,,"","","Hånd"],
  ["Dwit chagi ","Bagudspark ","(hestespark)",7,,"","","Ben"],
  ["Bandal chagi ","Halvmånespark","",7,,"","","Ben"],
  ["Deung jumeok ","Oversiden af knyttet hånd","",7,,"","","Teori"],
  ["Sewoon-jumeok ","Lodret håndstilling med knyttet hånd","",7,,"","","Teori"],
  ["Batangson ","Håndrod","",7,,"","","Teori"],
  ["Son-deung ","Håndryggen","",7,,"","","Teori"],
  ["Son-keut ","Fingerspidserne","",7,,"","","Teori"],
  ["Pyeunson-keut ","Fingerstik","",7,,"","","Teori"],
  ["Balbadak ","Fodsål","",7,,"","","Teori"],
  ["Chireugi ","Stikslag","",7,,"","","Teori"],
  ["Doo bon ","2 eller dobbelt slag","",7,,"","","Teori"],
  ["Hvad er og betyder “kihap”? ","Kampråb - Ki = energi, hap = samle","",7,,"","","Teori"],
  ["Yusot ","Seks (6)","",7,,"","","Teori"],
  ["Sah ","Fjerde (4.)","",7,,"","","Teori"],
  ["Hvad betyder poomsae ","Imaginær kamp","",7,,"","","Teori"],
  ["Shijak ","Begynd/start/sæt i gang","",7,,"","","Teori"],
  ["Kalyeo ","Stop/break","",7,,"","","Teori"],
  ["Gyesok ","Fortsæt","",7,,"","","Teori"],
  ["Oreun-seogi ","Højre stand ","(højre fod forrest - bortset fra dwit-koobi som er modsat)",6,,"","","Stand"],
  ["Oen-seogi ","Venstre stand ","(Oen for When - venstre fod forrest - bortset fra dwit-koobi som er modsat)",6,,"","","Stand"],
  ["Ap-koa-seogi ","Forlæns krydsstand","",6,,"","","Stand"],
  ["Dwit-koa-seogi ","Støttestand ","(baglæns krydsstand)",6,,"","","Stand"],
  ["Me-jumeok momtong naeryo chigi ","Nedadgående slag med ydersiden af knyttet hånd","",6,,"","","Hånd"],
  ["Palkoop dollyo chigi ","Cirkel albueslag","",6,,"","","Hånd"],
  ["Palkoop pyojeok chigi ","Albue pletslag","",6,,"","","Hånd"],
  ["Yeop-jireugi ","Sideslag","",6,,"","","Hånd"],
  ["Biteureo chagi ","Vridespark ","(benet vrides)",6,,"","","Ben"],
  ["Beodeo chagi ","Bøje-stræk spark ","(ligesom ap chagi, men ram med hælen i stedet for fodballen)",6,,"","","Ben"],
  ["Ieo chagi ","To ens spark lige efter hinanden med forskellige ben","",6,4,"","","Ben"],
  ["Seokeo chagi ","To forskellige spark efter hinanden samme ben","",6,3,"","","Ben"],
  ["Jijjigki","Stamp / tramp (i gulvet) / pulverisere","",6,3,"","","Ben"],
  ["Mit-palmok ","Undersiden af underarm","",6,,"","","Teori"],
  ["Me-jumeok ","Ydersiden af den knyttede hånd","",6,,"","","Teori"],
  ["Palkoop ","Albue","",6,,"","","Teori"],
  ["Dari ","Ben","",6,,"","","Teori"],
  ["Mooreup ","Knæ","",6,,"","","Teori"],
  ["Hooryo chagi ","Svingspark","",6,,"","","Teori"],
  ["Momdollyo chagi ","Spark hvor kroppen drejes","",6,,"","","Teori"],
  ["Pyojeok ","Plet / punkt","",6,,"","","Teori"],
  ["Il-kup ","Syv (7)","",6,,"","","Teori"],
  ["Oh ","Femte (5.)","",6,,"","","Teori"],
  ["Hansonnal eolgul biteureo makki ","Vrideblokering med enkelt knivhånd","",5,,"","","Hånd"],
  ["Eolgul bakat makki ","Udadgående blokering i høj sektion","",5,,"","","Hånd"],
  ["Batangson momtong makki ","Håndrodsblokering i midtersektion","",5,,"","","Hånd"],
  ["Twio chagi ","Flyvespark med forreste ben","",5,,"","","Ben"],
  ["Ieo seokeo chagi ","To forskellige spark efter hinanden med forskellige ben (2 spark i alt)","",5,,"","","Ben"],
  ["Momdollyo chagi ","Forskellige spark hvor kroppen drejes","",5,,"","","Ben"],
  ["Dwit hooryo chagi ","Svingspark med momdollyo ","(strakt ben)",5,,"","","Ben"],
  ["Nakeo chagi (dwit, ap og yeop) ","Svingspark med krog","",5,,"","","Ben"],
  ["Apchook-moa-seogi ","Samle tæer stand","",5,,"","","Teori"],
  ["Anchong-seogi ","Hvilestand ","(fødderne indad)",5,,"","","Teori"],
  ["Balkeut ","Tåspidser","",5,,"","","Teori"],
  ["Dwikoomchi ","Akillessenens hæftning på hælen","",5,,"","","Teori"],
  ["Mom ","Krop","",5,,"","","Teori"],
  ["Jodul ","Otte (8)","",5,,"","","Teori"],
  ["Yook ","Sjette (6.)","",5,,"","","Teori"],
  ["Dommerreglement ","“Starte en kamp” (se bilag)","",5,,"","","Teori"],
  ["Beom-seogi ","Tigerstand","",4,,"","","Stand"],
  ["Bojumeok joonbi-seogi ","Dækket næve ret stand","",4,,"","","Stand"],
  ["Batangson geodureo momtong anmakki ","Håndrodsblokering med støtte (modsat arm og ben) (Støttehånd under anden arm)","",4,,"","","Hånd"],
  ["Eotgeoreo arae makki ","Krydshåndsblokering i lav sektion","",4,,"","","Hånd"],
  ["Gawi makki ","Sakse blokering","",4,,"","","Hånd"],
  ["Doo jumeok jecheo jireugi ","Dobbeltslag med knyttet næve med håndfladen opad","",4,,"","","Hånd"],
  ["Momtong hechyomakki ","Udadgående adskilleblokering","",4,,"","","Hånd"],
  ["Geodeureo deung-jumeok eolgul ap chigi ","Omvendt knoslag i høj sektion med støtte ","(Støttehånd under anden arm)",4,,"","","Hånd"],
  ["Eolgul seweon bakat chigi ","Udadgående slag i høj sektion med lodret håndstilling","",4,,"","","Hånd"],
  ["Batangson momtong anmakki ","Håndrodsblokering"," (modsat arm/ben)",4,,"","","Hånd"],
  ["Geodeup chagi ","Repetere spark ","(gentagne spark med samme ben, træner dikterer antal)",4,,"","","Ben"],
  ["Pyojeok chagi ","Pletspark","",4,,"","","Ben"],
  ["Mooreup chigi ","Knæspark","",4,1,"","","Ben"],
  ["Pyeon jumeok ","Kattenæve","",4,,"","","Teori"],
  ["Doo jumeok ","Dobbelt knytnæve","",4,,"","","Teori"],
  ["Bo jumeok ","Dækket næve","",4,,"","","Teori"],
  ["Gomson ","Bjørnehånd","",4,,"","","Teori"],
  ["Mo-seogi ","Spidsstand","",4,,"","","Teori"],
  ["Geodeureo ","Støtte","",4,,"","","Teori"],
  ["Eotgeoreo ","Kryds","",4,,"","","Teori"],
  ["Gawi ","Saks","",4,,"","","Teori"],
  ["Ahope ","Ni (9)","",4,,"","","Teori"],
  ["Jool ","Ti (10)","",4,,"","","Teori"],
  ["Chill ","Syvende (7.)","",4,,"","","Teori"],
  ["Dommerreglement: udstyr ","Regler for udstyr til kamp","",4,,"","","Teori"],
  ["Geodeureo momtong bakat makki ","Blokering i midtersektion med støtte ","(støttehånd ved siden af albuen på den hånd der blokerer)",3,,"","","Hånd"],
  ["Geodeureo arae makki ","Blokering i lav sektion med støtte ","(støttehånd ved siden af albuen på den hånd der blokerer)",3,,"","","Hånd"],
  ["Oe-santeul makki ","En-hånds bjergblokering (halvt bjerg)","",3,,"","","Hånd"],
  ["Dan-gyo teok jireugi ","Træk med én hånd og udfør slag mod hage med den anden","",3,,"","","Hånd"],
  ["Doo-baldangsang chagi ","2 flyvende spark efter hinanden, hvor det første er et “falsk spark”",". Fx ap chagi eller dollyo chagi",3,,"","","Ben"],
  ["Nopi chagi ","Spark over hovedhøjde ","(springspark)",3,,"","","Ben"],
  ["Banjumeok ","Kastanjenæve","",3,,"","","Teori"],
  ["Balnaldeung ","Inderside af fod ","(svangen)",3,,"","","Teori"],
  ["Mo-joochoom-seogi ","Spids hestestand","",3,,"","","Teori"],
  ["Ap-joochoom-seogi ","Kort hestestand","",3,,"","","Teori"],
  ["Teok ","Hage","",3,,"","","Teori"],
  ["Dan-gyo ","Trække","",3,,"","","Teori"],
  ["Nopi ","Sektion over hovedhøjde","",3,,"","","Teori"],
  ["Santeul ","Bjerg","",3,,"","","Teori"],
  ["Oe-santeul ","Halvt bjerg/del af et bjerg","",3,,"","","Teori"],
  ["Pal ","Ottende (8.)","",3,,"","","Teori"],
  ["Taekwondos historie ","Se pensum","",3,,"","","Teori"],
  ["Hansonnal arae makki ","Enkelt knivhåndsblokering i lav sektion","",2,,"","","Hånd"],
  ["Palkoop naeryo chigi ","Nedadgående albuestød","",2,,"","","Hånd"],
  ["Palkoop olryeo chigi ","Opadgående albuestød","",2,,"","","Hånd"],
  ["Jageun dolcheogi ","Lille hængsel","",2,,"","","Hånd"],
  ["Twio ieo chagi ","Samme spark to gange - flyvende","",2,,"","","Ben"],
  ["Jibge jumeok ","Pincetnæve","",2,,"","","Teori"],
  ["Gawison keut ","Saksefingerstik","",2,,"","","Teori"],
  ["Hanson keut ","Enkelt-fingerstik","",2,,"","","Teori"],
  ["Moeun-dooson keut ","Dobbelt-fingerstik","",2,,"","","Teori"],
  ["Moeun-seson keut ","Tre-fingerstik","",2,,"","","Teori"],
  ["An-chung-joochoom-seogi ","Indaddrejet hestestand","",2,,"","","Teori"],
  ["Olryeo ","Opadgående","",2,,"","","Teori"],
  ["Ko ","Niende (9.)","",2,,"","","Teori"],
  ["Ship ","Tiende (10.)","",2,,"","","Teori"],
  ["Udvidet kendskab til dommerreglementet: Minuspoint ","Se bilag","",2,,"","","Teori"],
  ["Tongmilgi joonbi-seogi ","Skubbe klar stand","",1,,"","","Stand"],
  ["Pyojeok-jireugi ","Plet slag","",1,,"","","Hånd"],
  ["Palkoop yeop chigi ","Albuestød til siden","",1,,"","","Hånd"],
  ["Me jumeok arae pyojeok chigi ","Pletslag i lav sektion","",1,,"","","Hånd"],
  ["Mooreup keokki ","“Knække knæ”","",1,,"","","Hånd"],
  ["Anpalmok hechyo makki ","Adskilleblokering med indersiden af underarm","",1,,"","","Hånd"],
  ["Pyeonsonkeut jechyo-chireugi ","Fingerstik med håndfladen opad","",1,,"","","Hånd"],
  ["Kaljebi ","Slag/stik mod hals med agwison"," (Rundingen mellem tommel- og pegefinger)",1,,"","","Hånd"],
  ["Twio baggueo chagi ","Flyvende spark med bagerste ben","",1,,"","","Ben"],
  ["Modeum sonkeut ","Femfinger-stik","",1,,"","","Teori"],
  ["Keokki ","Knække","",1,,"","","Teori"],
  ["Agwison ","Rundingen mellem tommel- og pegefinger","",1,,"","","Teori"],
  ["Kaljebi ","Benævnelse for slag mod hals med agwison","",1,,"","","Teori"],
  ["Je chin pyeonsonkeut ","Håndfladen opad ","(fingerstik)",1,,"","","Teori"],
  ["O-ja-seogi ","T-stand ","(som dwit koobi, men forreste fod er ud for svangen i stedet for hælen på bagerste fod)",1,,"","","Teori"],
  ["Gyottari-seogi ","Hjælpestand","",1,,"","","Teori"],
  ["Apchook dollyo chagi","Cirkelspark - ram med fodballen","",0,5,"","","Ben"],
  ["Apchook","Fodballen","",0,5,"","","Teori"]
  ]

var url = new URLSearchParams(window.location.search);
var monkup = url.get('monkup')
var degree = url.get('degree')
var BeltOrAll = url.get('beltorall')
var Catagory = url.get('category')

chooseArr = []
loadtime = Date.now();
maxstep = inArr.length;
var ArrCol = 0;
var ArrLevel = 0;
var step = 0
//var monkup = '';
var CorrectCounter = 0
var WrongCounter = 0
var question = true

document.getElementById("quizbelt").src="./assets/images/"+degree+monkup+".png"

if (monkup == 'mon') {
    ArrLevel = parseInt(degree,10)
    ArrCol = 4
} else {
    ArrLevel = parseInt(degree,10)
    ArrCol = 3
}

for (let i = 0; i < maxstep; i++) {
    
    if (parseInt(inArr[i][ArrCol]+'',10) == ArrLevel || (parseInt(inArr[i][ArrCol]+'',10) > ArrLevel && BeltOrAll == "All" )) {
      if (Catagory == "All" || inArr[i][7] == Catagory) {
            chooseArr.splice(i, 0, i)
        }
      }
    }

maxstep = chooseArr.length;
if (maxstep == 0) {
    //router.navigate('./index.tsx')
  } else {
    //isloaded = false;
    startNextQ();
  }


  function startNextQ(){
    outputCounter()
    SvarButton = true;
    if (inArr[chooseArr[step]][6]!="") {
        var audio = new Audio('./assets/sound/'+inArr[chooseArr[step]][6]+'K'+'.mp4');
        audio.play();
    }

   
    //SetDisplayText(inArr[chooseArr[step]][0])
    document.getElementById('displayText').innerHTML = inArr[chooseArr[step]][0]
    //SetDisplaySubText('');
    document.getElementById('displaySubText').innerHTML = ''
    //SetAnswerText('');
    document.getElementById('answerText').innerHTML = ''
    question = true
    //SetImage('')
    document.getElementById("imgex").src="./assets/images/blank.jpg"
    document.getElementById("imgex").style.display = 'none';
    SetButton();
  }

  function outputCounter(){
    let text = "";
    for (let i = 0; i < chooseArr.length; i++) {
      text += chooseArr[i] + ", ";
      }
    //SetCounterText(text)
    document.getElementById('counterText').innerHTML = text
    //SetiText(step )
    document.getElementById('iText').innerHTML = step
    
    //SetMaxText(String(maxstep))  
    document.getElementById('MaxText').innerHTML = maxstep
  }

  function SvarPress(){
    if (question) {
      if (step == maxstep ) {
        step = 0
      }
      //SetAnswerText(inArr[chooseArr[step]][1]);
      document.getElementById('answerText').innerHTML = inArr[chooseArr[step]][1]
      //SetDisplaySubText(inArr[chooseArr[step]][2]);
      document.getElementById('displaySubText').innerHTML = inArr[chooseArr[step]][2]

      question = false
      if (inArr[chooseArr[step]][6]!="") {
        var audio = new Audio('./assets/sound/'+inArr[chooseArr[step]][6]+'DK'+'.mp4');
        audio.play();
    }
        //PlaySound(inArr[chooseArr[step]][6]+'DK')

        //SetImage(inArr[chooseArr[step]][5]+'');
        if (inArr[chooseArr[step]][5]!="") {
            document.getElementById("imgex").src='./assets/images/'+inArr[chooseArr[step]][5]+'.jpg'
            document.getElementById("imgex").style.display = 'inline';
        } else {
            document.getElementById("imgex").style.display = 'none';
        }

      
    }
    outputCounter()
    SvarButton = false;

    SetButton()

  }

  function NegPress(){
    if (!question) {
      step = step+1;
      WrongCounter = WrongCounter++;
      if (step == maxstep ) {
        step = 0
      }
      question = true
      startNextQ();
    } 
  }

  function PosPress(){
    if (!question) {
      chooseArr.splice(step,1);
      maxstep = maxstep-1;
      CorrectCounter = CorrectCounter++;
      if (maxstep == 0) {
        question = true
        isloaded = true
        step = 0
        maxstep = inArr.length
        //router.navigate('./../');
      } else {
        if (step == maxstep ) {
          step = 0;
        }
        startNextQ();  
      }
      
    } 
 
  }

  function SetButton() {
    if (!SvarButton) {
        document.getElementById("SvarButton").style.display = 'none';
        document.getElementById("PosButton").style.display = 'inline';
        document.getElementById("NegButton").style.display = 'inline';
    } else {
        document.getElementById("SvarButton").style.display = 'inline';
        document.getElementById("PosButton").style.display = 'none';
        document.getElementById("NegButton").style.display = 'none';
    }
  }


//document.getElementById('date').innerHTML = ArrCol