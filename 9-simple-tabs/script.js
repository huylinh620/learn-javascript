const tabs = [].slice.call(document.querySelectorAll('[data-tab-target]'))
const tabContents = [].slice.call(document.querySelectorAll('[data-tab-content]'))

tabs.map(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.map(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.map(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})