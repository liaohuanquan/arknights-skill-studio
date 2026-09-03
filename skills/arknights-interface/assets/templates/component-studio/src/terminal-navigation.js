import './terminal-navigation.css'

export function mountSidebarSearch(sidebar) {
  const input = sidebar.querySelector('input[type="search"]')
  const links = [...sidebar.querySelectorAll('.terminal-sidebar__link')]
  const empty = sidebar.querySelector('.terminal-sidebar__empty')
  const mobile = matchMedia(`(max-width: ${sidebar.dataset.navCollapse}px)`)

  function filterNavigation() {
    const query = input.value.trim().toLocaleLowerCase()
    let count = 0
    for (const link of links) {
      const matches = link.textContent.toLocaleLowerCase().includes(query)
      link.hidden = !matches
      if (matches) count += 1
    }
    sidebar.classList.toggle('is-filtered', Boolean(query))
    empty.hidden = count !== 0
  }

  function clearSearch() {
    input.value = ''
    filterNavigation()
  }

  function handleKey(event) {
    if (event.key === 'Escape') clearSearch()
  }

  function handleViewport() {
    if (mobile.matches) clearSearch()
  }

  input.addEventListener('input', filterNavigation)
  input.addEventListener('keydown', handleKey)
  mobile.addEventListener('change', handleViewport)
  return () => {
    input.removeEventListener('input', filterNavigation)
    input.removeEventListener('keydown', handleKey)
    mobile.removeEventListener('change', handleViewport)
  }
}
