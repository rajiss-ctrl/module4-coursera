
( function(window){
	var helloSpeaker = {};
	helloSpeaker.name = ["Yaakov","Paul", "Frank", "Larry", "Paula", "Laura"];
	helloSpeaker.name.length=name;

var speakWord = "Hello";

helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker;

})(window);

