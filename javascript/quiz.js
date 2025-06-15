const inArr = [
 ["Moa-seogi ","Stand med samlede fødder","",10,8,"Moa-seogi","Moa-seogi","Stand"],
["Dwichook-moa-seogi ","Stand med samlede hæle."," Fødder i ca 45 graders vinkel.",10,5,"Dwichook-moa-seogi","Dwichook-moa-seogi","Stand"],
["Naranhi-seogi ","Parallel stand","(fødderne i skulderbredde, fødderne parallelle). ",10,4,"","Naranhi-seogi","Stand"],
["Joochoom-seogi ","Hestestand ","(benene let bøjede og med ca. 1.5 skulderafstand)",10,6,"","Joochoom-seogi","Stand"],
["Ap-koobi ","Lang stand ","med vægten ligeligt fordelt på begge ben. Forreste ben er bøjet og man kan lige se tæerne, men ikke foden",10,9,"","Ap-koobi","Stand"],
["Ap-seogi ","Kort stand","",10,10,"","Ap-seogi","Stand"],
["Gibon-joonbi-seogi ","Klarstand ved grundteknik","",10,7,"","Gibon-joonbi-seogi","Stand"],
["Arae hechyomakki ","Adskille-blokering i lav sektion","",10,3,"","Arae hechyomakki","Hand"],
["Arae makki ","Blokering i lav sektion","",10,10,"","Arae makki","Hand"],
["Momtong makki ","Indadgående blokering i midtersektion ","(blokering over forreste ben)",10,6,"","Momtong makki","Hand"],
["Momtong an-makki ","Indadgående blokering i midtersektion ","(Blokering over bagerste ben)",10,4,"","Momtong anmakki","Hand"],
["Eolgul makki ","Blokering i høj sektion","",10,5,"","Eolgul makki","Hand"],
["Momtong jireugi ","Slag fra hoften i midtersektion","",10,9,"","Momtong jireugi","Hand"],
["Eolgul jireugi ","Slag fra hoften i høj sektion","",10,7,"","Eolgul jireugi","Hand"],
["Arae jireugi ","Slag fra hoften i lav sektion","",10,8,"","Arae jireugi","Hand"],
["Ap dro naeryo chagi ","Nedadgående spark med strakt ben.","Lige op og lige ned. Stræk foden ud på vej ned",10,10,"","Ap dro naeryo chagi","Ben"],
["Bakat chagi ","Udadgående spark med strakt ben.","",10,9,"","Bakat chagi","Ben"],
["An chagi ","Indadgående spark med strakt ben.","",10,8,"","An chagi","Ben"],
["Ap chagi ","Front spark. Ram med fodballen.","",10,7,"","Ap chagi","Ben"],
["Jumeok ","Knyttet hånd","",10,9,"","Jumeok","Teori"],
["Jireugi ","Slag fra hoften med knyttet hånd","",10,9,"","Jireugi","Teori"],
["Chagi ","Spark","",10,10,"","Chagi","Teori"],
["Ap ","Front","",10,8,"","Ap","Teori"],
["An ","Indadgående","",10,8,"","An","Teori"],
["Bakat ","Udadgående","",10,9,"","Bakat","Teori"],
["Arae ","Lav sektion ","(fra hoften og ned)",10,8,"","Arae","Teori"],
["Momtong ","Midter sektion"," (mellem hoften og kraveben)",10,9,"","Momtong","Teori"],
["Eolgul ","Høj sektion ","(mellem kraveben og toppen af hovedet)",10,7,"","Eolgul","Teori"],
["Charyeo ","Indtag hilsestand ","(fødderne samlet og armene ned langs siden). Når man er i denne stand, må man ikke snakke eller bevæge sig.",10,1,"","Charyeo","Teori"],
["Kyeongne ","Hils","(buk)",10,2,"","Kyeongne","Teori"],
["Joonbi ","Indtag klarstand","",10,2,"","Joonbi","Teori"],
["Keuman ","Stop og indtag klarstand ","(startposition)",10,1,"","Keuman","Teori"],
["Dirro dorra ","Vend 180 grader ","(højre om)",10,2,"","Dirro dorra","Teori"],
["Zuu ","Slap af ","(efter Zuu er man “fri” fra andre ordrer)",10,1,"","Zuu","Teori"],
["Dobok ","Taekwondo dragt","",10,8,"","Dobok","Teori"],
["Dojang ","Træningssal","",10,10,"","Dojang","Teori"],
["Toga-nim ","Træner under 1. dan","",10,4,"","Toga-nim","Teori"],
["Kyosa-nim ","Træner 1. - 3. dan","",10,4,"","Kyosa-nim","Teori"],
["Sabum-nim ","Træner 4. - 7. dan","",10,4,"","Sabum-nim","Teori"],
["Kukki jedeharjo kyeongne ","Hilsen til nationalflaget","",10,2,"","Kukki jedeharjo kyongne","Teori"],
["Nødværgeretten §13 ","Se bilag","",10,0,"","Noedvaergeretten 13","Teori"],
["Hvad betyder Taekwondo? ","Fodens- og nævens- vej/kunst/system","Se teoriafsnit “Hvad er taekwondo?” (",10,10,"","Hvad betyder taekwondo","Teori"],
["Chung Moo ","Den bedste","",10,10,"","Chung Moo","Teori"],
["Pyeonhi-seogi ","Hvilestand","(fødderne peger lidt ud ad og hænderne på ryggen, hvor den ene hånd hviler i den anden)",9,3,"","Pyeonhi-seogi","Stand"],
["Momtong bakat makki ","Udadgående blokering i midtersektion","",9,1,"","Momtong bakat makki","Hand"],
["Bandae jireugi ","Slag fra hoften over forreste ben ","(samme ben/arm)",9,2,"","Bandae jireugi","Hand"],
["Baro jireugi ","Slag fra hoften over bagerste ben ","(modsat arm/ben)",9,2,"","Baro jireugi","Hand"],
["Sonnal eolgul bakat chigi ","Udadgående stød (slag) i høj sektion med enkelt knivhånd"," (håndfladen nedad)",9,1,"","Sonnal eolgul bakat chigi","Hand"],
["Sonnaldeung momtong an chigi ","Indadgående stød/slag i midtersektion hvor der rammes med omvendt knivhånd ","(den side hvor tommelfingeren sidder)",9,0,"","Sonnaldeung momtong an chigi","Hand"],
["Baldeung dollyo chagi ","Cirkelspark hvor der rammes med vristen","",9,6,"","Baldeung dollyo chagi","Ben"],
["Mileo chagi ","Skubbe spark","",9,0,"","Mileo chagi","Ben"],
["Son ","Hand","",9,3,"","Son","Teori"],
["Sonnal ","Knivhånd","(udvendige håndkant, der hvor lillefingeren sidder)",9,3,"","Sonnal","Teori"],
["Sonnaldeung ","Omvendt knivhånd"," (den side hvor tommelfingeren sidder)",9,0,"","Sonnaldeung","Teori"],
["Baldeung ","Vrist","",9,6,"","Baldeung","Teori"],
["Dwi-chook ","Undersiden af hælen","",9,5,"","Dwi-chook","Teori"],
["Chigi ","Slag der ikke kommer fra hoften","",9,3,"","Chigi","Teori"],
["Dollyo ","Cirkel","",9,6,"","Dollyo","Teori"],
["Mileo ","Skubbe","",9,0,"","Mileo","Teori"],
["Poom ","Grundteknik","",9,5,"","Poom","Teori"],
["Hvad er poomsae? ","Sammensatte grundteknikker","",9,5,"","Hvad er poomsae","Teori"],
["DTaF ","Dansk Taekwondo Forbund","DTaF",9,1,"","","Teori"],
["Hanna ","En (1)","",9,7,"","Hanna","Teori"],
["Duul ","To (2)","",9,7,"","Duul","Teori"],
["Set ","Tre (3)","",9,6,"","Set","Teori"],
["Net ","Fire (4)","",9,6,"","Net","Teori"],
["Il ","Første","",9,2,"","Il","Teori"],
["Yi ","Anden","",9,1,"","Yi","Teori"],
["Dwit-koobi ","Sidestand","(forreste fod peger fremad og bagerste fod peger til siden. Der er ca 20 % vægt på forreste ben og 80 % på bagerste ben)",8,2,"","Dwit-koobi","Stand"],
["Anpalmok momtong bakat makki ","Udadgående blokering med inderside af underarm","",8,,"","Anpalmok momtong bakat makki","Hand"],
["Sonnal makki (momtong og arae) ","Dobbelt knivhåndsblokering"," (midt og lav sektion)",8,,"","Sonnal makki momtong og arae","Hand"],
["Sonnal eolgul an chigi ","Indadgående stød (slag) i høj sektion med enkelt knivhånd","Sonnal eolgul an chigi",8,,"","Sonnal eolgul an chigi","Hand"],
["Hansonnal jebipoom mok chigi ","Enkelthånds svaleteknik"," (stød mod hals med hansonnal (enkeltknivhånd), modsat arm og ben. Kroppen skal drejes så man slår “lidt længere fremme”)",8,,"","Hansonnal jebipoom mok chigi","Hand"],
["Hansonnal momtong bakat makki ","Udadgående blokering i midtersektion med enkelt knivhånd","",8,,"","Hansonnal momtong bakat makki","Hand"],
["Doo bon momtong jireugi ","Dobbeltslag i midtersektion","",8,,"","Doo bon momtong jireugi","Hand"],
["Yeop chagi ","Sidespark","",8,,"","Yeop chagi","Ben"],
["Ap-chook dollyo chagi ","Cirkelspark hvor der rammes med fodballen","",8,5,"","Ap-chook dollyo chagi","Ben"],
["Pal ","Arm","",8,,"","Pal","Teori"],
["Palmok ","Underarm","",8,,"","Palmok","Teori"],
["An-palmok ","Indersiden af underarm","",8,,"","An-palmok","Teori"],
["Bakat palmok ","Ydersiden af underarm","",8,,"","Bakat palmok","Teori"],
["Balnal ","Knivfod (udvendige fodkant hvor lilletåen sidder)","",8,,"","Balnal","Teori"],
["Ap-chook ","Fodballe","",8,5,"","Ap-chook","Teori"],
["Jebipoom ","Svaleteknik","",8,,"","Jebipoom","Teori"],
["Mok ","Hals","",8,,"","Mok","Teori"],
["Yeop ","Side","",8,,"","Yeop","Teori"],
["Tasut ","Fem (5)","",8,,"","Tasut","Teori"],
["WT ","World Taekwondo","",8,,"","WT","Teori"],
["ETU ","European Taekwondo Union","",8,,"","ETU","Teori"],
["Nachoo-seogi ","Dybere og bredere Jochoom-seogi","",7,1,"","Nachoo seogi","Stand"],
["Jebipoom mok chigi ","Svaleteknik ","(hansonnal jebipoom mok chigi med hansonnal eolgul makki samtidigt)",7,,"","Jebipoom mok chigi","Hand"],
["Batangson momtong nulleo makki ","Nedadgående håndrodsblokering"," (“læg låg på”)",7,,"","Batangson montong nulleomakki","Hand"],
["Deung jumeok ap chigi ","Front stød med oversiden af den knyttede hånd ","(ram med knoerne)",7,,"","Deung jumeok ap chigi","Hand"],
["Pyonsonkeut seweon chireugi ","Fingerstik med pyonsonkeut (fingerspidser på linje) i lodret håndstilling (tommelfinger opad)","",7,,"","Pyeonsonkeut seweon chireugi","Hand"],
["Hansonnal momtong yeop makki ","Blokering i midtersektion med enkelt knivhånd til siden."," (Udføres ofte i Joochoom-seogi)",7,,"","Hansonnal momtong yeop makki","Hand"],
["Dwit chagi ","Bagudspark ","(hestespark)",7,,"","Dwit chagi","Ben"],
["Bandal chagi ","Halvmånespark","",7,,"","Bandal chagi","Ben"],
["Deung jumeok ","Oversiden af knyttet hånd","",7,,"","Deung jumeok","Teori"],
["Sewoon-jumeok ","Lodret håndstilling med knyttet hånd","",7,,"","Seweon jumeok","Teori"],
["Batangson ","Håndrod","",7,,"","Batangson","Teori"],
["Son-deung ","Håndryggen","",7,,"","Son-deung","Teori"],
["Son-keut ","Fingerspidserne","",7,,"","Sonkeut","Teori"],
["Pyeunson-keut ","Fingerstik","",7,,"","Pyeonsonkeut","Teori"],
["Balbadak ","Fodsål","",7,,"","Balbadak","Teori"],
["Chireugi ","Stikslag","",7,,"","Chireugi","Teori"],
["Doo bon ","2 eller dobbelt slag","",7,,"","Doo bon","Teori"],
["Hvad er og betyder “kihap”? ","Kampråb - Ki = energi, hap = samle","",7,,"","Kihap","Teori"],
["Yusot ","Seks (6)","",7,,"","Yusot","Teori"],
["Sah ","Fjerde (4.)","",7,,"","Sah","Teori"],
["Hvad betyder poomsae ","Imaginær kamp","",7,,"","Hvad betyder poomsae","Teori"],
["Shijak ","Begynd/start/sæt i gang","",7,,"","Shijak","Teori"],
["Kalyeo ","Stop/break","",7,,"","Kalyo","Teori"],
["Gyesok ","Fortsæt","",7,,"","Gyesok","Teori"],
["Oreun-seogi ","Højre stand ","(højre fod forrest - bortset fra dwit-koobi som er modsat)",6,,"","Oreun-seogi","Stand"],
["Oen-seogi ","Venstre stand ","(Oen for When - venstre fod forrest - bortset fra dwit-koobi som er modsat)",6,,"","Oen-seogi","Stand"],
["Ap-koa-seogi ","Forlæns krydsstand","",6,,"","Ap-koa-seogi","Stand"],
["Dwit-koa-seogi ","Støttestand ","(baglæns krydsstand)",6,,"","Dwit-koa-seogi","Stand"],
["Me-jumeok momtong naeryo chigi ","Nedadgående slag med ydersiden af knyttet hånd","",6,,"","Me-jumeok naeryo chigi","Hand"],
["Palkoop dollyo chigi ","Cirkel albueslag","",6,,"","Palkoop dollyo chigi","Hand"],
["Palkoop pyojeok chigi ","Albue pletslag","",6,,"","Palkoop pyojeok chigi","Hand"],
["Yeop-jireugi ","Sideslag","",6,,"","Yeop-jireugi","Hand"],
["Biteureo chagi ","Vridespark ","(benet vrides)",6,,"","Biteureo chagi","Ben"],
["Beodeo chagi ","Bøje-stræk spark ","(ligesom ap chagi, men ram med hælen i stedet for fodballen)",6,,"","Beodeo chagi","Ben"],
["Ieo chagi ","To ens spark lige efter hinanden med forskellige ben","",6,4,"","Ieo chagi","Ben"],
["Seokeo chagi ","To forskellige spark efter hinanden samme ben","",6,3,"","Seokeo chagi","Ben"],
["Jijjigki","Stamp / tramp (i gulvet) / pulverisere","",6,3,"","Jijjigi","Ben"],
["Mit-palmok ","Undersiden af underarm","",6,,"","Mit-palmok","Teori"],
["Me-jumeok ","Ydersiden af den knyttede hånd","",6,,"","Me-jumeok","Teori"],
["Palkoop ","Albue","",6,,"","Palkoop","Teori"],
["Dari ","Ben","",6,,"","Dari","Teori"],
["Mooreup ","Knæ","",6,,"","Mooreup","Teori"],
["Hooryo chagi ","Svingspark","",6,,"","Hooryo chagi","Teori"],
["Momdollyo chagi ","Spark hvor kroppen drejes","",6,,"","Momdollyo chagi","Teori"],
["Pyojeok ","Plet / punkt","",6,,"","Pyojeok","Teori"],
["Il-kup ","Syv (7)","",6,,"","Il-kup","Teori"],
["Oh ","Femte (5.)","",6,,"","Oh","Teori"],
["Hansonnal eolgul biteureo makki ","Vrideblokering med enkelt knivhånd","",5,,"","Hansonnal eolgul biteureomakki","Hand"],
["Eolgul bakat makki ","Udadgående blokering i høj sektion","",5,,"","Eolgul bakat makki","Hand"],
["Batangson momtong makki ","Håndrodsblokering i midtersektion","",5,,"","Batangson montong makki","Hand"],
["Twio chagi ","Flyvespark med forreste ben","",5,,"","Twio chagi","Ben"],
["Ieo seokeo chagi ","To forskellige spark efter hinanden med forskellige ben (2 spark i alt)","",5,,"","Ieo seokeo chagi","Ben"],
["Momdollyo chagi ","Forskellige spark hvor kroppen drejes","",5,,"","Momdollyo chagi2","Ben"],
["Dwit hooryo chagi ","Svingspark med momdollyo ","(strakt ben)",5,,"","Dwit hooryo chagi","Ben"],
["Nakeo chagi (dwit, ap og yeop) ","Svingspark med krog","",5,,"","Nakeo chagi","Ben"],
["Apchook-moa-seogi ","Samle tæer stand","",5,,"","Ap-chook moa seogi","Teori"],
["Anchong-seogi ","Hvilestand ","(fødderne indad)",5,,"","Anchon-seogi","Teori"],
["Balkeut ","Tåspidser","",5,,"","Balkeut","Teori"],
["Dwikoomchi ","Akillessenens hæftning på hælen","",5,,"","Dwikoomchi","Teori"],
["Mom ","Krop","",5,,"","Mom","Teori"],
["Jodul ","Otte (8)","",5,,"","Jodul","Teori"],
["Yook ","Sjette (6.)","",5,,"","Yook","Teori"],
["Dommerreglement ","“Starte en kamp” (se bilag)","",5,,"","Dommerreglement","Teori"],
["Beom-seogi ","Tigerstand","",4,,"","Beom-seogi","Stand"],
["Bojumeok joonbi-seogi ","Dækket næve ret stand","",4,,"","Bojumeok joonbi seogi","Stand"],
["Batangson geodureo momtong anmakki ","Håndrodsblokering med støtte (modsat arm og ben) (Støttehånd under anden arm)","",4,,"","Batangson geodeureo momtong anmakki","Hand"],
["Eotgeoreo arae makki ","Krydshåndsblokering i lav sektion","",4,,"","Eotgeoreo arae makki","Hand"],
["Gawi makki ","Sakse blokering","",4,,"","Gawi makki","Hand"],
["Doo jumeok jecheo jireugi ","Dobbeltslag med knyttet næve med håndfladen opad","",4,,"","Doo jumeok jecheo jireugi","Hand"],
["Momtong hechyomakki ","Udadgående adskilleblokering","",4,,"","Momtong hechyomakki","Hand"],
["Geodeureo deung-jumeok eolgul ap chigi ","Omvendt knoslag i høj sektion med støtte ","(Støttehånd under anden arm)",4,,"","Geodeureo deung jumeok eolgul ap chigi","Hand"],
["Eolgul seweon bakat chigi ","Udadgående slag i høj sektion med lodret håndstilling","",4,,"","Eolgul sewon bakat chigi","Hand"],
["Batangson momtong anmakki ","Håndrodsblokering"," (modsat arm/ben)",4,,"","Batangson montong anmakki","Hand"],
["Geodeup chagi ","Repetere spark ","(gentagne spark med samme ben, træner dikterer antal)",4,,"","Geodeup chagi","Ben"],
["Pyojeok chagi ","Pletspark","",4,,"","Pyjeok chagi","Ben"],
["Mooreup chigi ","Knæspark","",4,1,"","Mooreup chigi","Ben"],
["Pyeon jumeok ","Kattenæve","",4,,"","Pyeon jumeok","Teori"],
["Doo jumeok ","Dobbelt knytnæve","",4,,"","Doo jumeok","Teori"],
["Bo jumeok ","Dækket næve","",4,,"","Bo jumeok","Teori"],
["Gomson ","Bjørnehånd","",4,,"","Gomson","Teori"],
["Mo-seogi ","Spidsstand","",4,,"","Mo seogi","Stand"],
["Geodeureo ","Støtte","",4,,"","Geodeureo","Teori"],
["Eotgeoreo ","Kryds","",4,,"","Eotgeoreo","Teori"],
["Gawi ","Saks","",4,,"","Gawi","Teori"],
["Ahope ","Ni (9)","",4,,"","Ahope","Teori"],
["Jool ","Ti (10)","",4,,"","Jool","Teori"],
["Chill ","Syvende (7.)","",4,,"","Chill","Teori"],
["Dommerreglement: udstyr ","Regler for udstyr til kamp","",4,,"","Dommerregkement udstyr","Teori"],
["Geodeureo momtong bakat makki ","Blokering i midtersektion med støtte ","(støttehånd ved siden af albuen på den hånd der blokerer)",3,,"","Geodeureo momtong makki","Hand"],
["Geodeureo arae makki ","Blokering i lav sektion med støtte ","(støttehånd ved siden af albuen på den hånd der blokerer)",3,,"","Geodeureo arae makki","Hand"],
["Oe-santeul makki ","En-hånds bjergblokering (halvt bjerg)","",3,,"","Oe-santeul makki","Hand"],
["Dan-gyo teok jireugi ","Træk med én hånd og udfør slag mod hage med den anden","",3,,"","Dan-gyo teok jireugi","Hand"],
["Doo-baldangsang chagi ","2 flyvende spark efter hinanden, hvor det første er et “falsk spark”",". Fx ap chagi eller dollyo chagi",3,,"","Doo-baldangsang chagi","Ben"],
["Nopi chagi ","Spark over hovedhøjde ","(springspark)",3,,"","Nopi chagi","Ben"],
["Banjumeok ","Kastanjenæve","",3,,"","Banjumeok","Teori"],
["Balnaldeung ","Inderside af fod ","(svangen)",3,,"","Balnaldeung","Teori"],
["Mo-joochoom-seogi ","Spids hestestand","",3,,"","Mo joochoom seogi","Stand"],
["Ap-joochoom-seogi ","Kort hestestand","",3,,"","Ap joochoom seogi","Stand"],
["Teok ","Hage","",3,,"","Teok","Teori"],
["Dan-gyo ","Trække","",3,,"","Dan-gyo","Teori"],
["Nopi ","Sektion over hovedhøjde","",3,,"","Nopi","Teori"],
["Santeul ","Bjerg","",3,,"","Santeul","Teori"],
["Oe-santeul ","Halvt bjerg/del af et bjerg","",3,,"","Oe-santeul","Teori"],
["Pal ","Ottende (8.)","",3,,"","Pal2","Teori"],
["Taekwondos historie ","Se pensum","",3,,"","Taekwondos historie","Teori"],
["Hansonnal arae makki ","Enkelt knivhåndsblokering i lav sektion","",2,,"","Hansonnal arae makki","Hand"],
["Palkoop naeryo chigi ","Nedadgående albuestød","",2,,"","Palkoop naeryo chigi","Hand"],
["Palkoop olryeo chigi ","Opadgående albuestød","",2,,"","Palkoop olryeo chigi","Hand"],
["Jageun dolcheogi ","Lille hængsel","",2,,"","Jageun dolcheogi","Hand"],
["Twio ieo chagi ","Samme spark to gange - flyvende","",2,,"","Twio ieo chagi","Ben"],
["Jibge jumeok ","Pincetnæve","",2,,"","Jibge jumeok","Teori"],
["Gawison keut ","Saksefingerstik","",2,,"","Gawison keut","Teori"],
["Hanson keut ","Enkelt-fingerstik","",2,,"","Hanson keut","Teori"],
["Moeun-dooson keut ","Dobbelt-fingerstik","",2,,"","Moeun-dooson keut","Teori"],
["Moeun-seson keut ","Tre-fingerstik","",2,,"","Moeun-seson keut","Teori"],
["An-chung-joochoom-seogi ","Indaddrejet hestestand","",2,,"","An-chung-joochoom seogi","Stand"],
["Olryeo ","Opadgående","",2,,"","Olryeo","Teori"],
["Ko ","Niende (9.)","",2,,"","Ko","Teori"],
["Ship ","Tiende (10.)","",2,,"","Ship","Teori"],
["Udvidet kendskab til dommerreglementet: Minuspoint ","Se bilag","",2,,"","Udvidet kendskab til dommerreglement","Teori"],
["Tongmilgi joonbi-seogi ","Skubbe klar stand","",1,,"","Tongmilgi joonbi seogi","Stand"],
["Pyojeok-jireugi ","Plet slag","",1,,"","Pyojeok jireugi","Hand"],
["Palkoop yeop chigi ","Albuestød til siden","",1,,"","Palkoop yeop chigi","Hand"],
["Me jumeok arae pyojeok chigi ","Pletslag i lav sektion","",1,,"","Me jumeok arae pyojeok chigi","Hand"],
["Mooreup keokki ","“Knække knæ”","",1,,"","Mooreup keokki","Hand"],
["Anpalmok hechyo makki ","Adskilleblokering med indersiden af underarm","",1,,"","Anpalmok hechyomakki","Hand"],
["Pyeonsonkeut jechyo-chireugi ","Fingerstik med håndfladen opad","",1,,"","Pyeonsonkeut jechyo-chireugi","Hand"],
["Kaljebi ","Slag/stik mod hals med agwison"," (Rundingen mellem tommel- og pegefinger)",1,,"","Kaljebi","Hand"],
["Twio baggueo chagi ","Flyvende spark med bagerste ben","",1,,"","Twio baggueo chagi","Ben"],
["Modeum sonkeut ","Femfinger-stik","",1,,"","Modeum sonkeut","Teori"],
["Keokki ","Knække","",1,,"","Keokki","Teori"],
["Agwison ","Rundingen mellem tommel- og pegefinger","",1,,"","Agwison","Teori"],
["Kaljebi ","Benævnelse for slag mod hals med agwison","",1,,"","Kaljebi2","Teori"],
["Je chin pyeonsonkeut ","Håndfladen opad ","(fingerstik)",1,,"","Je chin pyeonsonkeut","Teori"],
["O-ja-seogi ","T-stand ","(som dwit koobi, men forreste fod er ud for svangen i stedet for hælen på bagerste fod)",1,,"","O-ja-seogi","Stand"],
["Gyottari-seogi ","Hjælpestand","",1,,"","Gyottari seogi","Stand"]
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
var CorrectCounter = 0
var WrongCounter = 0
var question = true
var maxmax = 0

document.getElementById("quizbelt").src="./assets/images/"+degree+monkup+".png"

document.getElementById("PosButton").style.display = 'none';
document.getElementById("NegButton").style.display = 'none';
document.getElementById("SvarButton").style.display = 'none';


function SvarStart() {
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
maxmax = chooseArr.length; 

shuffle(chooseArr)
if (maxstep == 0) {
  window.location.href = './finish.html?monkup=' + monkup +'&degree=' + degree + '&beltorall=' + BeltOrAll + '&category=' + Catagory;
  } else {
    startNextQ();
  }
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


  function startNextQ(){
    outputCounter()
    SvarButton = true;
    if (inArr[chooseArr[step]][6]!="") {
        var audio = new Audio('./assets/sound/'+inArr[chooseArr[step]][6]+'K'+'.mp4');
        audio.play();
    }

   

    document.getElementById('displayText').innerHTML = inArr[chooseArr[step]][0]
    document.getElementById('displaySubText').innerHTML = ''
    document.getElementById('answerText').innerHTML = ''
    question = true
    document.getElementById("imgex").src="./assets/images/blank.jpg"
    document.getElementById("imgex").style.display = 'none';
    SetButton();
  }

  function outputCounter(){
    let text = "";
    for (let i = 0; i < chooseArr.length; i++) {
      text += chooseArr[i] + ", ";
      }
    document.getElementById('counterText').innerHTML = text
    document.getElementById('iText').innerHTML = step
    document.getElementById('MaxText').innerHTML = maxstep
    document.getElementById('MaxMaxText').innerHTML = maxmax
    document.getElementById('LeftText').innerHTML = maxmax-CorrectCounter;
  }

  function SvarPress(){
    if (question) {
      if (step == maxstep ) {
        step = 0
      }
      document.getElementById('answerText').innerHTML = inArr[chooseArr[step]][1]
    
      document.getElementById('displaySubText').innerHTML = inArr[chooseArr[step]][2]

      question = false
      if (inArr[chooseArr[step]][6]!="") {
        var audio = new Audio('./assets/sound/'+inArr[chooseArr[step]][6]+'DK'+'.mp4');
        audio.play();
    }
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
      WrongCounter = WrongCounter+1;
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
      CorrectCounter = CorrectCounter+1;
      if (maxstep == 0) {
        question = true
        isloaded = true
        step = 0
        maxstep = inArr.length
        
        window.location.href = './finish.html?monkup=' + monkup +'&degree=' + degree + '&beltorall=' + BeltOrAll + '&category=' + Catagory;
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
        document.getElementById("StartButton").style.display = 'none';
    } else {
        document.getElementById("SvarButton").style.display = 'inline';
        document.getElementById("PosButton").style.display = 'none';
        document.getElementById("NegButton").style.display = 'none';
        document.getElementById("StartButton").style.display = 'none';
    }
  }
