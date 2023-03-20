// Variable declarations 

var audio = new Audio('./songs/1.mp3');
var playButton=document.getElementsByClassName('s_Play_Button');
var M_play_button= document.querySelector('.M');
var songs_List= document.getElementsByClassName("song");
var song_Info=document.getElementById("song_Info");
var song_seek= document.getElementById('song_Time_Display');
var button=document.getElementsByClassName('button');
// console.log(button[0].className.search('s_Play_Button'));
var song_List_Event;



// HardCoded Songs Artist Name and song Location
var songs_Information={
    0:{
        "song_Name":"Wiz_Khalifa_-_So_High",
        "logo":"./covers/",
        "audio_source":`./songs/`,
    },
    1:{
        "song_Name":"Armin_van_Blah_Blah_Blah",
        "logo":"./covers/",
        "audio_source":`./songs/`,
    },
    2:{
        "song_Name":"Charlie_Puth_-_Attention",
        "logo":"./covers/",
        "audio_source":`./songs/`,

    },
    3:{
        "song_Name":"Fİ_Ha_-_Arabic_TRap",
        "logo":"./covers/",
        "audio_source":`./songs/`,

    },
    4:{
        "song_Name":"Needa_Padadhani",
        "logo":"./covers/",
        "audio_source":`./songs/`,

    },
    5:{
        "song_Name":"powfu-deathbed_beat",
        "logo":"./covers/",
        "audio_source":`./songs/`,

    },
    6:{
        "song_Name":"Shawn_Mendes_Señorita",
        "logo":"./covers/",
        "audio_source":`./songs/`,

    },
    7:{
        "song_Name":"Stract_-_Losing_Interest",
        "logo":"./covers/",
        "audio_source":`./songs/`,

    },
    8:{
        "song_Name":"timmies____again__ft._shiloh",
        "logo":"./covers/",
        "audio_source":`./songs/`,

    },
    9:{
        "song_Name":"TENTACION_Losing_Interest",
        "logo":"./covers/",
        "audio_source":`./songs/`,

    }

};



    //  Audio Duration Update

function AudioSrc__TimeStamp_Update(src,Event){
    audio.src=src;
    audio.onloadedmetadata = function() {
        let Time= parseInt(audio.duration)/60;
        let Time_split=String(Time).split(".");
        let Min= Time_split[0];
        let sec= Time_split[1].slice(0,2);
        Event.srcElement.parentNode.children[0].innerHTML=`${Min}:${sec}`;
    };
   
}
    // Individual Play & Pause Event 
function play_Pause_Event(Event){
    
    song_List_Event=Event;
    if(Event.target.className.search('s_Play_Button')!=-1){
        song_seek.value=0;
        let src=`./songs/${eval(Event.target.id)}.mp3`;
        AudioSrc__TimeStamp_Update(src,Event);
        audio.play();
       
        M_play_button.classList.value="fa pause_button M";
        M_play_button.innerHTML="&#xf28b";
        Event.target.classList.remove('s_Play_Button');
        Event.target.classList.add('pause_button');
        Event.target.innerHTML="&#xf28b";
        bottom_SongName_Change(Event);
    }else{
        audio.pause();
        M_play_button.classList.value="fa play_button ";
        M_play_button.innerHTML="&#xf144";
        Event.target.classList.add('s_Play_Button');
        Event.target.classList.remove('pause_button'); 
        Event.target.innerHTML="&#xf144";
        
    }    
}
    // SeekBar 

    // song_seek.oninput = function() {
    //     console.log(this.value);
        
    //     // audio.currentTime=this.value*60/100;
        
    //     // this.value=Math.trunc((Math.trunc(audio.currentTime)/Math.trunc(audio.duration))*100);
    //   }
    


    // Master Control Play & Pause Event 
function M_play_Pause_Event(Event){
     
   if(Event.target.className.search('play_button')!=-1){
        
        
        Event.target.classList.remove('play_button');
        Event.target.classList.add('pause_button');
        Event.target.innerHTML="&#xf28b";
        audio.play();
    }else{
        // console.log(Event);
        Event.target.innerHTML="&#xf144";
        Event.target.classList.add('play_button');
        Event.target.classList.remove('pause_button'); 
        audio.pause();
    }

    if(song_List_Event.target.className!=undefined){
        if(song_List_Event.target.className.search('s_Play_Button')!=-1){
            song_List_Event.target.classList.remove('s_Play_Button');
            song_List_Event.target.classList.add('pause_button');
            song_List_Event.target.innerHTML="&#xf28b";
        }
        else{
                song_List_Event.target.classList.add('s_Play_Button');
                song_List_Event.target.classList.remove('pause_button');
                song_List_Event.target.innerHTML="&#xf144";
        }
    }
    else{
       console.log(audio.target);
    }
}

// Botttom SongName Change 
function bottom_SongName_Change(e){
    song_Info.innerHTML=songs_Information[eval(e.target.id-1)].song_Name;
}



// Event Handlers

for(i of playButton){
    i.addEventListener('click',(Event)=>play_Pause_Event(Event));
}

M_play_button.addEventListener('click',(Event)=>M_play_Pause_Event(Event));








//  Adding Album Cover pic & Song Name 
for(i of songs_List){
    let t=parseInt(i.id)+1;
    for(j of i.children){
        if(j.className=='logo'){
            j.src=`./covers/${t}.jpg`;
        }
        else if(j.className=='song_Name'){
            j.innerHTML=songs_Information[eval(t-1)].song_Name;
        }
    } 
}



// for(let i  of button){
//    console.log( i.className.search('s_Play_Button')!=-1);
// }