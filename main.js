//https://teachablemachine.withgoogle.com/models/UCQEawv5O/

var prediction_1="hello";
var prediciton_2="how are you";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        }
    );
}

console.log("ml5 version", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UCQEawv5O/",modelloaded);

function modelloaded(){
    console.log("Model is loaded successfuly");
    speak();
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is "+prediction_1;
    speak_data_2="and the second prediction is "+prediciton_2;
    var uterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(uterthis);
}