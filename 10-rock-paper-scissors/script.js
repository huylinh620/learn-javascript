const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌️',
    beats: 'paper'
  }
]
const selectionButtons = [].slice.call(document.querySelectorAll('[data-selection]'))
const finalColumn = document.querySelector('[data-final-column]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const computerScoreSpan = document.querySelector('[data-computer-score]')

selectionButtons.map(selectionButton => {
  selectionButton.addEventListener('click', () => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makseSelection(selection)
  })
})

function makseSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {

  console.log(scoreSpan)
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')

  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}

function isWinner(selection, oppenentSelection) {
  return selection.beats === oppenentSelection.name
}
