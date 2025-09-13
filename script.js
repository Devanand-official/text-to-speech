 var speech = new SpeechSynthesisUtterance();
      function Speak() {
        speech.text = TextToSpeech.value;
        speech.rate = 1;
        speech.volume = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
      }
