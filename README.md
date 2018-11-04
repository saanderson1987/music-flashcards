# Music Flashcards


## Motivation
I recently took the piano back up again and wanted a way to get better at reading notes. In the past I felt it slowed me down when I started playing a new song and I would have to stop and figure out which note I had to play next. Some notes I recognize in a split second. I want to read all notes like that. So I developed digital music flashcards. 

## How to Use
1. Select your input preference. Music Flashcards can be used with either the computer keyboard or an electric piano keyboard. Changing your preference after having started the game restarts the game.
   When using the computer as input, only the letter keys corresponding to notes are recognized (A, B, C, D, E, F, G). If you press the 'S' key by accident, it doesn't count as incorrect.

  When using an electric piano keyboard, you must strike the exact key that corresponds to the note displayed on the flashcard; meaning, if the flashcard is middle C, if you strike high C on the keyboard, it will be incorrect, even though they're both C's. The computer keyboard cannot make this distinction.

2. Press start to begin. The timer will start and a flashcard will be displayed. Press stop to end and reset the score and timer.

Earn one point for every correct answer. An incorrect response does not deduct points.

## How It Works

### Flashcard Images
Each flashcard is an png image that I created myself using [Pixlr Editor](https://pixlr.com/editor/). I started with an image of the grand staff found in the public domain. For each note, I created an oval and line in the editor and added them to the proper place on the staff. The images are stored in the `flashcards/` directory. There are two files per note, one with a PNG extension, which is the static image used in the program (by way of the `public/images/flashcards` directory), and another with a PXD extension, which is the file that represents the note as a movable object to edit in Pixlr.

The image names carry which clef they are found on ('b' for base and 't' for treble), and their scientific pitch notation, i.e., the note letter and octave. For example, 'tc4' represents to 'C4', i.e., middle C, written on the treble clef, whereas 'bc4' represents middle C written on the bass clef.

### Random Flashcard
Each flashcard is chosen at random using the `Math.random` function in relation to the length of the array of the names of the images found in the `public/images/flashcards` folder. 

The current note variables (`currentNote` and `currentNoteLetter`), which are used to determine whether an input is correct, are then set based on the name of the image, and the `<img/>` tag `src` attribute is then set to the path of the image chosen. For example, if the `flashcardName` is `tc4.png`, the `currentNoteLetter` is set to `c` and the `currentNote` is set to `c4`. The program relies on two variables because just the letter is used to determine if the input is correct for the computer, while the note and octave is needed to determine if the MIDI input is correct.

```javascript
  function newFlashcard() {
    const randIdx = Math.floor(Math.random() * flashcardNames.length);
    const flashcardName = flashcardNames[randIdx];
    currentNoteLetter = flashcardName[1];
    currentNote = flashcardName.slice(1, 3);
    console.log(currentNoteLetter, currentNote);
    flashcard.src = '/images/flashcards/' + flashcardName;
  }
```

### Is the Input Correct?
When the input mode is set to computer, the program compares the key pressed down on the keyboard with the `currentNoteLetter`. If the mode is piano, the program compares the `currentNote` with the MIDI input by referencing an object that maps MIDI input values with notes in scientific pitch notation. For example, if the user plays an 'E' in the first octave on the piano, the program receives the value `28` and determines that it corresponds to `e1`:

```javascript
const midiNotesMap = {
  '28': 'e1',
  '29': 'f1',
  // and so on
}
```

### MIDI Interface
The program relies on Javascript's [Web MIDI API](https://www.w3.org/TR/webmidi/) to interact with the MIDI device. If the user properly plugs their piano into their computer, the MIDI API recognizes this connection and adds it to the map `inputs`. The program then assigns an event handler function to the `onmidimessage` property on the MIDI input. It is in this function,`onMIDImessage`, that the program interprets the data inputed and calls the `isCorrect` function. 

MIDI message data is stored in array with three items: the first represents on/off-- whether a key is pressed or released; the second represents the pitch-- which key has been played; and the third represents the velocity, or the volume at which the note has been played.

If the MIDI message communicates that a note has been played, then the program calls the `isCorrect` function with the pitch value as the parameter. 








