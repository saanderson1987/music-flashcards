const midiNotes = {};

const sharps = new Set([30,32,34,37,39,42,44,46,49,51,54,56,58,61,63,66,68,70,73,75,78,80,82,85,87,90])

for (let i = 28; i < 92; i++ ) {
  if (!sharps.has(i)) {
    midiNotes[i] = undefined;
  }
}

const noteLetters = ["e", "f", "g", "a", "b", "c", "d"];
let num = 1;
let i = 0;
for (let prop in midiNotes) {
  midiNotes[prop] = noteLetters[i] + num;
  if (i === 6) {
    i = 0;
  } else {
    i++;
  }
  if (i === 5) {
    num ++;
  }
}

console.log(midiNotes);
