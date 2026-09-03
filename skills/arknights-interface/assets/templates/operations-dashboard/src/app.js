import './style.css'

const stationData = {
  'PS-01': { code: 'PS-01 / HUB', name: '白原中继站', status: '● 在线', statusClass: 'badge--success', coordinate: '77.85°S, 166.67°E', latency: '342 ms', sync: '18 秒前', firmware: '4.12.7' },
  'PS-02': { code: 'PS-02 / DOME', name: '冰穹站', status: '△ 强风', statusClass: 'badge--warning', coordinate: '80.37°S, 77.35°E', latency: '508 ms', sync: '32 秒前', firmware: '4.12.7' },
  'PS-03': { code: 'PS-03 / CLIFF', name: '海崖站', status: '● 在线', statusClass: 'badge--success', coordinate: '76.41°S, 148.22°E', latency: '421 ms', sync: '24 秒前', firmware: '4.12.6' },
  'PS-04': { code: 'PS-04 / RIFT', name: '裂谷站', status: '! 低电量', statusClass: 'badge--danger', coordinate: '79.12°S, 112.90°E', latency: '694 ms', sync: '51 秒前', firmware: '4.11.9' },
  'PS-05': { code: 'PS-05 / WEST', name: '雪原西站', status: '× 离线', statusClass: 'badge--neutral', coordinate: '78.72°S, 45.31°E', latency: '超时', sync: '37 分钟前', firmware: '4.10.4' },
  'PS-06': { code: 'PS-06 / NORTH', name: '冰盖北站', status: '● 在线', statusClass: 'badge--success', coordinate: '82.06°S, 93.44°E', latency: '376 ms', sync: '21 秒前', firmware: '4.12.7' },
  'PS-07': { code: 'PS-07 / COAST', name: '海岸东站', status: '● 在线', statusClass: 'badge--success', coordinate: '75.29°S, 171.08°E', latency: '398 ms', sync: '28 秒前', firmware: '4.12.7' },
}

const clock = document.querySelector('#utc-clock')
const telemetryToggle = document.querySelector('#telemetry-toggle')
let telemetryPaused = false

function updateClock() {
  if (telemetryPaused) return
  const now = new Date()
  clock.dateTime = now.toISOString()
  clock.textContent = `UTC ${now.toISOString().slice(11, 19)}`
}

updateClock()
setInterval(updateClock, 1000)

telemetryToggle.addEventListener('click', () => {
  telemetryPaused = !telemetryPaused
  telemetryToggle.setAttribute('aria-pressed', String(telemetryPaused))
  telemetryToggle.textContent = telemetryPaused ? '恢复遥测' : '暂停遥测'
  document.querySelector('.sync-state > span:nth-child(2)').textContent = telemetryPaused ? '遥测已暂停' : '遥测同步中'
})

document.querySelector('#dismiss-alert').addEventListener('click', () => {
  document.querySelector('#wind-alert').hidden = true
})

const detailFields = {
  code: document.querySelector('#detail-code'),
  name: document.querySelector('#detail-name'),
  status: document.querySelector('#detail-status'),
  coordinate: document.querySelector('#detail-coordinate'),
  latency: document.querySelector('#detail-latency'),
  sync: document.querySelector('#detail-sync'),
  firmware: document.querySelector('#detail-firmware'),
}

document.querySelectorAll('.station-node').forEach((node) => {
  node.addEventListener('click', () => {
    document.querySelectorAll('.station-node').forEach((item) => {
      item.classList.remove('is-selected')
      item.setAttribute('aria-pressed', 'false')
    })
    node.classList.add('is-selected')
    node.setAttribute('aria-pressed', 'true')

    const data = stationData[node.dataset.station]
    Object.entries(detailFields).forEach(([key, element]) => {
      if (key === 'status') return
      element.textContent = data[key]
    })
    detailFields.status.textContent = data.status
    detailFields.status.className = `badge ${data.statusClass}`
  })
})

document.querySelector('#locate-device').addEventListener('click', () => {
  const station = detailFields.code.textContent.slice(0, 5)
  document.querySelector('#device-filter').value = station
  filterDevices(station)
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  document.querySelector('#devices').scrollIntoView({ behavior })
})

const deviceFilter = document.querySelector('#device-filter')
const deviceRows = [...document.querySelectorAll('#device-table-body tr')]
const deviceEmpty = document.querySelector('#device-empty')

function filterDevices(searchTerm) {
  const term = searchTerm.trim().toLocaleLowerCase('zh-CN')
  let visibleCount = 0
  deviceRows.forEach((row) => {
    const visible = row.dataset.search.toLocaleLowerCase('zh-CN').includes(term)
    row.hidden = !visible
    if (visible) visibleCount += 1
  })
  deviceEmpty.hidden = visibleCount > 0
}

deviceFilter.addEventListener('input', (event) => filterDevices(event.target.value))

const select = document.querySelector('#sensor-select')
const selectTrigger = document.querySelector('#sensor-trigger')
const selectList = document.querySelector('#sensor-list')
const sensorValue = document.querySelector('#sensor-value')
const options = [...document.querySelectorAll('.select-option')]
let activeOptionIndex = 0

function openSelect() {
  selectList.hidden = false
  selectTrigger.setAttribute('aria-expanded', 'true')
  activeOptionIndex = options.findIndex((option) => option.getAttribute('aria-selected') === 'true')
  options[activeOptionIndex].focus()
}

function closeSelect(returnFocus = true) {
  selectList.hidden = true
  selectTrigger.setAttribute('aria-expanded', 'false')
  if (returnFocus) selectTrigger.focus()
}

function selectOption(option) {
  options.forEach((item) => {
    const selected = item === option
    item.classList.toggle('is-selected', selected)
    item.setAttribute('aria-selected', String(selected))
  })
  sensorValue.textContent = option.dataset.value
  closeSelect()
}

selectTrigger.addEventListener('click', () => {
  if (selectList.hidden) openSelect()
  else closeSelect()
})

selectTrigger.addEventListener('keydown', (event) => {
  if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
    event.preventDefault()
    openSelect()
  }
})

selectList.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    closeSelect()
    return
  }
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    activeOptionIndex = (activeOptionIndex + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length
    options[activeOptionIndex].focus()
  }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    selectOption(options[activeOptionIndex])
  }
  if (event.key === 'Tab') closeSelect(false)
})

options.forEach((option, index) => {
  option.addEventListener('click', () => {
    activeOptionIndex = index
    selectOption(option)
  })
  option.addEventListener('focus', () => {
    activeOptionIndex = index
  })
})

document.addEventListener('click', (event) => {
  if (!select.contains(event.target) && !selectList.hidden) closeSelect(false)
})

const calibrationForm = document.querySelector('#calibration-form')
const startButton = document.querySelector('#start-calibration')
const stopButton = document.querySelector('#stop-calibration')
const progressBar = document.querySelector('#progress-bar')
const progressTrack = document.querySelector('.progress-track')
const progressValue = document.querySelector('#progress-value')
const progressLabel = document.querySelector('#progress-label')
const progressDetail = document.querySelector('#progress-detail')
const calibrationState = document.querySelector('#calibration-state')
let calibrationTimer = null
let progress = 0

function validateNumber(input, errorElement, min, max, label) {
  const value = Number(input.value)
  const valid = input.value !== '' && value >= min && value <= max
  input.setAttribute('aria-invalid', String(!valid))
  errorElement.textContent = valid ? '' : `${label}必须在 ${min}–${max} 范围内。`
  return valid
}

function setProgress(value, label, detail) {
  progress = value
  progressBar.style.width = `${value}%`
  progressTrack.setAttribute('aria-valuenow', String(value))
  progressValue.textContent = `${value}%`
  progressLabel.textContent = label
  progressDetail.textContent = detail
}

function finishCalibration() {
  clearInterval(calibrationTimer)
  calibrationTimer = null
  setProgress(100, '校准完成', `${sensorValue.textContent} 修正参数已安全写入。`)
  calibrationState.textContent = '✓ 已完成'
  calibrationState.className = 'badge badge--success'
  startButton.disabled = false
  startButton.textContent = '再次校准'
  stopButton.disabled = true
  console.log('[finishCalibration] 校准任务完成')
}

calibrationForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const referenceInput = document.querySelector('#reference-value')
  const samplesInput = document.querySelector('#samples')
  const referenceValid = validateNumber(referenceInput, document.querySelector('#reference-error'), 0, 60, '基准值')
  const samplesValid = validateNumber(samplesInput, document.querySelector('#samples-error'), 10, 120, '采样次数')

  if (!referenceValid || !samplesValid) {
    const firstInvalid = calibrationForm.querySelector('[aria-invalid="true"]')
    firstInvalid.focus()
    return
  }

  clearInterval(calibrationTimer)
  setProgress(8, '建立安全链路', '正在验证设备响应与环境稳定性。')
  calibrationState.textContent = '处理中'
  calibrationState.className = 'badge badge--processing'
  startButton.disabled = true
  stopButton.disabled = false

  calibrationTimer = setInterval(() => {
    const increment = progress < 35 ? 9 : progress < 75 ? 7 : 5
    const nextProgress = Math.min(progress + increment, 100)
    const label = nextProgress < 35 ? '建立安全链路' : nextProgress < 75 ? '采集基准样本' : nextProgress < 100 ? '写入修正参数' : '校准完成'
    const detail = nextProgress < 75 ? `已完成 ${Math.round((nextProgress / 100) * Number(samplesInput.value))} / ${samplesInput.value} 次采样。` : '正在核对修正值与设备回读结果。'
    setProgress(nextProgress, label, detail)
    if (nextProgress === 100) finishCalibration()
  }, 450)
})

stopButton.addEventListener('click', () => {
  clearInterval(calibrationTimer)
  calibrationTimer = null
  setProgress(progress, '任务已中止', '设备参数未变更，可检查链路后重新启动。')
  calibrationState.textContent = '已中止'
  calibrationState.className = 'badge badge--danger'
  startButton.disabled = false
  startButton.textContent = '重新启动'
  stopButton.disabled = true
  console.log('[stopCalibration] 校准任务已中止')
})

const toggleHistory = document.querySelector('#toggle-history')
const extraHistory = [...document.querySelectorAll('.timeline__item--extra')]

toggleHistory.addEventListener('click', () => {
  const expanded = toggleHistory.getAttribute('aria-expanded') === 'true'
  toggleHistory.setAttribute('aria-expanded', String(!expanded))
  toggleHistory.textContent = expanded ? '展开全部记录' : '收起历史记录'
  extraHistory.forEach((item) => { item.hidden = expanded })
})

const navLinks = [...document.querySelectorAll('.nav-link, .mobile-nav a')]
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const target = link.getAttribute('href')
    document.querySelectorAll(`[href="${target}"]`).forEach((item) => item.classList.add('is-active'))
    navLinks.filter((item) => item.getAttribute('href') !== target).forEach((item) => item.classList.remove('is-active'))
  })
})
