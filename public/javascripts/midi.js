const midiNotesMap = {
  '28': 'e1',
  '29': 'f1',
  '31': 'g1',
  '33': 'a1',
  '35': 'b1',
  '36': 'c2',
  '38': 'd2',
  '40': 'e2',
  '41': 'f2',
  '43': 'g2',
  '45': 'a2',
  '47': 'b2',
  '48': 'c3',
  '50': 'd3',
  '52': 'e3',
  '53': 'f3',
  '55': 'g3',
  '57': 'a3',
  '59': 'b3',
  '60': 'c4',
  '62': 'd4',
  '64': 'e4',
  '65': 'f4',
  '67': 'g4',
  '69': 'a4',
  '71': 'b4',
  '72': 'c5',
  '74': 'd5',
  '76': 'e5',
  '77': 'f5',
  '79': 'g5',
  '81': 'a5',
  '83': 'b5',
  '84': 'c6',
  '86': 'd6',
  '88': 'e6',
  '89': 'f6',
  '91': 'g6'
}

if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess({
    sysex: false
  }).then(onMIDISuccess, onMIDIFailure);
} else {
  console.warn("No MIDI support in your browser");
}

function onMIDISuccess(midiData) {
  console.log(midiData);
  midi = midiData;
  const allInputs = midi.inputs.values();
  for (let input = allInputs.next(); input && !input.done; input = allInputs.next()) {
    input.value.onmidimessage = onMIDImessage;
  }
}

function onMIDIFailure() {
  console.warn("Not finding a MIDI controller");
}

function onMIDImessage(message) {
  if (message.data[0] === 144 && message.data[2] > 0) {
    const key = message.data[1];
    console.log(key);
    isCorrect(key);
  }
}
