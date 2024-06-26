// Init SpeechSynth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

let voices = [];

// Get All the Voices
function getVoices() {
  voices = synth.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = voice.name + '(' + voice.lang + ')';
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);

    voiceSelect.appendChild(option);
  });
}

getVoices();
if(synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// Speak
function speak(){
  if(synth.speaking){
    console.error('Already speaking...');
    return;
  }

  if(textInput.value !== '') {
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    speakText.onend = e => {
      console.log('Done speaking...');
    }
    speakText.onerror = e => {
      console.error('Something went wrong');
    }
    
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

    voices.forEach(voice => {
      if(voice.name == selectedVoice){
        speakText.voice = voice;
      }
    });

    speakText.rate = rate.value;
    speakText.pitch = pitch.value;

    synth.speak(speakText);
  }
}

// Event Litsener
textForm.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  textInput.blur();
});

rate.addEventListener('change', e => (rateValue.textContent = rate.value));

pitch.addEventListener('change', e => (pitchValue.textContent = pitch.value));

voiceSelect.addEventListener('change', e => speak());
