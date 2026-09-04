import './style.css'
import { mountTerminalEffects } from './terminal-effects.js'
import { mountSidebarSearch } from './terminal-navigation.js'

const icon = (name) => {
  const icons = {
    grid: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
    sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
    export: '<path d="M12 3v12M7 8l5-5 5 5M5 14v6h14v-6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    copy: '<rect x="8" y="8" width="11" height="11"/><path d="M5 16H4V5h11v1"/>',
  }
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${icons[name]}</svg>`
}

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="shell">
    <aside class="rail terminal-sidebar" data-nav-collapse="720">
      <label class="terminal-sidebar__search"><input type="search" placeholder="档案检索" aria-label="检索协议栏目" aria-controls="primary-navigation" autocomplete="off"></label>
      <nav id="primary-navigation" class="terminal-sidebar__nav" aria-label="主导航">
        <button class="nav-item terminal-sidebar__link active" data-page="overview" aria-current="location">${icon('grid')}<span>协议总览</span></button>
        <button class="nav-item terminal-sidebar__link" data-page="rules">${icon('sliders')}<span>协议规则</span></button>
        <button class="nav-item terminal-sidebar__link" data-page="components">${icon('layers')}<span>组件档案</span></button>
        <button class="nav-item terminal-sidebar__link" data-page="source">${icon('code')}<span>协议文件</span></button>
      </nav>
      <p class="terminal-sidebar__empty" role="status" hidden>未检索到匹配档案</p>
    </aside>

    <main>
      <header class="topbar">
        <div><span class="eyebrow">PRTS / VISUAL PROTOCOL / 01</span><h1>视觉协议终端</h1></div>
        <div class="top-actions"><span class="status-dot">协议已同步</span><button class="button ghost" id="previewBtn">终端预览</button><button class="button primary" id="exportBtn">${icon('export')}导出协议</button></div>
      </header>

      <div class="workspace">
        <section class="hero panel-cut terminal-enter">
          <div class="hero-network" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><b></b><b></b><b></b></div>
          <div class="hero-copy"><span class="kicker">PRTS / VISUAL PROTOCOL / 01</span><h2>PRTS<br><em>视觉协议。</em></h2><p>界面规范正在写入 PRTS 档案库。字体、色彩、状态与交互规则均已完成编号，可供各级终端检索与调用。</p><div class="hero-actions"><button class="button primary" data-jump="rules">录入协议 ${icon('sliders')}</button><button class="text-button" data-jump="source">调阅协议源文件 →</button></div></div>
          <div class="telemetry" aria-label="PRTS 协议完整度"><div class="rings"><span>98<small>%</small></span></div><p>协议完整度</p><div class="meter"><i class="terminal-progress"></i></div><ul><li><span>视觉参数</span><b>20/20</b></li><li><span>组件档案</span><b>22/22</b></li><li><span>调用记录</span><b>19/19</b></li></ul></div>
          <span class="hero-index">01</span>
        </section>

        <section class="section-block" data-section="overview">
          <div class="section-title"><div><span class="eyebrow">PRTS / SYSTEM OVERVIEW</span><h3>视觉协议总览</h3></div><button class="square-button" aria-label="新增协议条目">${icon('plus')}</button></div>
          <div class="stat-grid">
            <article class="stat-card dark"><span>SIGNAL BLUE</span><strong>#22BBFF</strong><div class="swatch cyan"></div><small>信息 / 选择 / 确认</small></article>
            <article class="stat-card"><span>GEOMETRY</span><strong>02<sup>PX</sup></strong><div class="corner-demo"></div><small>硬边 / 切角 / 明确分层</small></article>
            <article class="stat-card"><span>CONTRAST</span><strong>14.8<sup>:1</sup></strong><div class="bars"><i></i><i></i><i></i></div><small>AA 标准 / 主要文本</small></article>
            <article class="stat-card warning"><span>STATUS COLORS</span><div class="status-colors"><i></i><i></i><i></i></div><strong>03</strong><small>提示 / 警告 / 危险</small></article>
          </div>
          <div class="type-specimen" aria-label="字体系统样张">
            <div class="type-serif"><span>01 / NARRATIVE SERIF</span><b>叙事标题与品牌表达</b><small>Noto Serif SC · 700 / 900</small></div>
            <div class="type-display"><span>02 / OPERATION SANS</span><b>任务操作与状态指令</b><small>Noto Sans SC · 400 / 700</small></div>
            <div class="type-data"><span>03 / TERMINAL NUMERALS</span><b>24.8 <i>MS</i>　06 / 08</b><small>Bender · 400 / 700</small></div>
          </div>
        </section>

        <section class="section-block split" data-section="rules">
          <div class="rule-panel">
            <div class="section-title compact"><div><span class="eyebrow">PRTS / CORE DIRECTIVES</span><h3>协议核心条目</h3></div><span class="counter">06 / 06</span></div>
            <div class="rule-list">
              <label><input type="checkbox" checked><span class="check">${icon('check')}</span><span><b>建立终端视觉基底</b><small>黑、炭灰、灰白构成主要信息层级</small></span><i>01</i></label>
              <label><input type="checkbox" checked><span class="check">${icon('check')}</span><span><b>标记关键操作与数据</b><small>亮青蓝用于状态信号，深青蓝用于浅色正文</small></span><i>02</i></label>
              <label><input type="checkbox" checked><span class="check">${icon('check')}</span><span><b>维持硬边几何结构</b><small>圆角不得超过 2px，保留机械结构感</small></span><i>03</i></label>
              <label><input type="checkbox" checked><span class="check">${icon('check')}</span><span><b>确认信息识别层级</b><small>以字号、留白、边框与对比划分优先级</small></span><i>04</i></label>
              <label><input type="checkbox" checked><span class="check">${icon('check')}</span><span><b>分配终端字体职责</b><small>宋体负责叙事，黑体负责指令与正文</small></span><i>05</i></label>
              <label><input type="checkbox" checked><span class="check">${icon('check')}</span><span><b>登记状态信号语义</b><small>青色操作、黄色活动、橙色更新、红色危险</small></span><i>06</i></label>
            </div>
          </div>
          <div class="preview-panel"><span class="eyebrow">PRTS / LIVE TERMINAL</span><h3>终端组件预览</h3><div class="mini-ui"><div class="mini-head"><span>TERMINAL / A-17</span><b>链路正常</b></div><strong class="mini-value">24.8<small>ms</small></strong><p>平均响应时间</p><div class="mini-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="mini-actions"><button>中止</button><button>执行校准</button></div></div>
        </section>

        <section class="section-block component-library" data-section="components">
          <div class="section-title component-heading">
            <div><span class="eyebrow">PRTS / COMPONENT ARCHIVE</span><h3>终端组件档案</h3><p>收录后台、审核页与设备控制终端的高频操作模式。全部图形已登记为项目内原创线性 SVG 与 CSS。</p></div>
          <div class="component-count"><strong>22</strong><span>COMPONENT GROUPS</span></div>
          </div>

          <div class="component-grid">
            <article class="component-card span-2">
              <div class="component-meta"><span>01 / ACTION</span><b>指令与操作</b></div>
              <div class="component-demo button-showcase">
                <button class="ui-button primary" data-feedback="主指令已执行">执行主指令</button>
                <button class="ui-button secondary" data-feedback="辅助指令已执行">执行辅助指令</button>
                <button class="ui-button danger" data-feedback="高危指令需要二次确认">高危指令</button>
                <button class="ui-button icon-only" aria-label="新增协议条目">${icon('plus')}</button>
                <button class="ui-button secondary" disabled>不可用</button>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>02 / STATUS</span><b>状态识别</b></div>
              <div class="component-demo status-showcase">
                <span class="ui-badge success">运行中</span><span class="ui-badge info">指令执行中</span>
                <span class="ui-badge warning">等待复核</span><span class="ui-badge danger">链路异常</span>
                <span class="ui-badge neutral">已归档</span>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>03 / CONTROL</span><b>模式与选择</b></div>
              <div class="component-demo control-showcase">
                <label class="ui-switch"><input type="checkbox" checked><span></span><b>实时回传</b></label>
                <label class="ui-check"><input type="checkbox" checked><span>${icon('check')}</span><b>显示标记</b></label>
                <label class="ui-radio"><input type="radio" name="mode" checked><span></span><b>自动模式</b></label>
              </div>
            </article>

            <article class="component-card span-2">
              <div class="component-meta"><span>04 / INPUT</span><b>参数录入</b></div>
              <div class="component-demo form-showcase">
                <label><span>行动名称</span><input id="taskName" value="夜间设备校准" placeholder="输入行动名称"></label>
                <div class="field-group">
                  <span id="dataGroupLabel">终端分区</span>
                  <div class="ui-select" data-select>
                    <button id="dataGroup" class="ui-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="dataGroupLabel dataGroupValue">
                      <span id="dataGroupValue">本舰终端 / A 区</span><i aria-hidden="true"></i>
                    </button>
                    <div class="ui-select-menu" role="listbox" aria-labelledby="dataGroupLabel" hidden>
                      <button type="button" role="option" aria-selected="true" data-value="本舰终端 / A 区"><span>本舰终端 / A 区</span><small>PROD / A</small></button>
                      <button type="button" role="option" aria-selected="false" data-value="外勤节点 / B 区"><span>外勤节点 / B 区</span><small>TEST / B</small></button>
                      <button type="button" role="option" aria-selected="false" data-value="档案节点 / C 区"><span>档案节点 / C 区</span><small>ARCHIVE / C</small></button>
                    </div>
                  </div>
                </div>
                <label class="field-error"><span>帧率阈值</span><input value="300" aria-describedby="thresholdError"><small id="thresholdError">允许范围：1–240 FPS</small></label>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>05 / NAV</span><b>档案分区</b></div>
              <div class="component-demo">
                <div class="ui-segments" role="tablist" aria-label="数据视图">
                  <button class="active" role="tab" aria-selected="true">概览</button>
                  <button role="tab" aria-selected="false">日志</button>
                  <button role="tab" aria-selected="false">参数</button>
                </div>
                <p class="segment-output">当前档案：概览</p>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>06 / PROGRESS</span><b>进度监测</b></div>
              <div class="component-demo progress-showcase">
                <div><span>数据解析 <b>72%</b></span><div class="ui-progress"><i style="width:72%"></i></div></div>
                <div><span>存储容量 <b>186 / 256 GB</b></span><div class="ui-progress warning"><i style="width:73%"></i></div></div>
              </div>
            </article>

            <article class="component-card span-2">
              <div class="component-meta"><span>07 / TABLE</span><b>终端数据</b></div>
              <div class="component-demo table-wrap">
                <table class="ui-table"><thead><tr><th>终端</th><th>状态</th><th>延迟</th><th>回传时间</th></tr></thead><tbody>
                  <tr><td><b>CAM-A17</b><small>主相机</small></td><td><span class="ui-badge success">在线</span></td><td>24.8 ms</td><td>刚刚</td></tr>
                  <tr><td><b>LIDAR-03</b><small>激光雷达</small></td><td><span class="ui-badge warning">波动</span></td><td>91.2 ms</td><td>12 秒前</td></tr>
                  <tr><td><b>IMU-08</b><small>惯性单元</small></td><td><span class="ui-badge danger">离线</span></td><td>—</td><td>3 分钟前</td></tr>
                </tbody></table>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>08 / NOTICE</span><b>系统通讯</b></div>
              <div class="component-demo notice-stack">
                <div class="ui-notice info"><b>档案同步完成</b><span>12 份记录已写入 PRTS 档案库。</span></div>
                <div class="ui-notice warning"><b>终端链路波动</b><span>请复核采集设备与中继节点。</span></div>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>09 / OVERLAY</span><b>指令确认</b></div>
              <div class="component-demo overlay-showcase"><p>高危指令必须登记影响范围，并执行二次确认。</p><button class="ui-button secondary" id="openDialogBtn">调出确认协议</button></div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>10 / NAVIGATION</span><b>导航与流程</b></div>
              <div class="component-demo navigation-showcase">
                <nav class="ui-breadcrumb" aria-label="当前位置"><span>PRTS 终端</span><i>/</i><span>设备档案</span><i>/</i><b>A-17</b></nav>
                <ol class="ui-steps"><li class="done"><i>01</i><b>接入</b></li><li class="active"><i>02</i><b>校准</b></li><li><i>03</i><b>写入</b></li></ol>
                <div class="ui-pagination" aria-label="分页"><button aria-label="上一页">‹</button><button class="active">1</button><button>2</button><button>3</button><button aria-label="下一页">›</button></div>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>11 / DISCLOSURE</span><b>参数展开</b></div>
              <div class="component-demo disclosure-showcase">
                <details open><summary><span>采集参数</span><b>03</b></summary><p>分辨率 1280×720 · 30 FPS · 自动曝光关闭</p></details>
                <details><summary><span>高级诊断</span><b>05</b></summary><p>显示时间戳、同步偏差和丢帧统计。</p></details>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>12 / LOADING</span><b>回传与空状态</b></div>
              <div class="component-demo loading-showcase">
                <div class="ui-skeleton" aria-label="等待数据回传"><i></i><span><b></b><b></b><b></b></span></div>
                <div class="ui-empty"><strong>＋</strong><span><b>暂无回传记录</b><small>首次采集完成后写入终端档案</small></span></div>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>13 / IDENTITY</span><b>身份识别</b></div>
              <div class="component-demo identity-showcase">
                <div class="ui-person"><span class="ui-avatar">RK<i></i></span><p><b>RECON-KILO</b><small>外勤干员</small></p><em>在线</em></div>
                <div class="ui-person"><span class="ui-avatar muted">A7</span><p><b>DEVICE-A17</b><small>采集终端</small></p><em class="warning">离线维护</em></div>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>14 / RANGE</span><b>阈值与评级</b></div>
              <div class="component-demo range-showcase">
                <label><span>响应阈值 <b>72 ms</b></span><input type="range" min="0" max="100" value="72"></label>
                <div class="ui-rating" aria-label="信号质量 4 星"><span>信号质量</span><b>◆ ◆ ◆ ◆</b><i>◇</i></div>
              </div>
            </article>

            <article class="component-card queue-card">
              <div class="component-meta"><span>15 / COMMAND</span><b>指令队列</b></div>
              <div class="component-demo queue-showcase">
                <div class="ui-queue"><span><b>PRTS 指令中枢</b><small>04 个执行单元待命</small></span><div><i>01</i><i>02</i><i>03</i><i>04</i></div><button aria-label="轮换队列">⇄</button></div>
                <div class="ui-command"><span>当前执行协议</span><b>标准采集 / 自动回退</b><button data-feedback="执行队列已重新编组">重新编组</button></div>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>16 / DATETIME</span><b>行动时序</b></div>
              <div class="component-demo datetime-showcase">
                <label><span>执行日期</span><input type="date" value="2026-08-06"></label>
                <label><span>开始时间</span><input type="time" value="21:30"></label>
                <div class="ui-calendar-strip"><button aria-label="前一天">‹</button><span><small>WED</small><b>05</b></span><span class="active"><small>THU</small><b>06</b></span><span><small>FRI</small><b>07</b></span><button aria-label="后一天">›</button></div>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>17 / UPLOAD</span><b>数据载入</b></div>
              <div class="component-demo upload-showcase">
                <label class="ui-dropzone"><input type="file"><strong>＋</strong><span><b>选择采集文件</b><small>MP4、CSV 或 JSON，单文件不超过 2 GB</small></span></label>
                <div class="ui-file"><span>JSON</span><p><b>camera-param.json</b><small>18.6 KB · 校验完成</small></p><em>100%</em></div>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>18 / TREE</span><b>节点结构</b></div>
              <div class="component-demo tree-showcase">
                <ul class="ui-tree">
                  <li class="open"><label><input type="checkbox" checked><span></span><b>本舰终端</b><em>04</em></label>
                    <ul><li><label><input type="checkbox" checked><span></span><b>工程部节点</b><em>02</em></label></li><li><label><input type="checkbox"><span></span><b>控制中枢节点</b><em>02</em></label></li></ul>
                  </li>
                </ul>
                <div class="tree-summary"><span>已选节点</span><b>本舰终端 / 工程部节点</b></div>
              </div>
            </article>

            <article class="component-card transfer-card">
              <div class="component-meta"><span>19 / TRANSFER</span><b>设备调度</b></div>
              <div class="component-demo transfer-showcase">
                <section><header><b>可用设备</b><span>3</span></header><label><input type="checkbox"><span>CAM-A17</span><small>在线</small></label><label><input type="checkbox"><span>LIDAR-03</span><small>波动</small></label><label><input type="checkbox"><span>IMU-08</span><small>在线</small></label></section>
                <div><button aria-label="添加设备">→</button><button aria-label="移除设备">←</button></div>
                <section><header><b>已选设备</b><span>2</span></header><label><input type="checkbox"><span>GNSS-04</span><small>在线</small></label><label><input type="checkbox"><span>RADAR-11</span><small>在线</small></label><p>还可添加 6 台设备</p></section>
              </div>
            </article>

            <article class="component-card">
              <div class="component-meta"><span>20 / DESCRIPTION</span><b>档案统计</b></div>
              <div class="component-demo description-showcase">
                <dl><div><dt>行动编号</dt><dd>CAL-260806-A17</dd></div><div><dt>登记人员</dt><dd>RECON-KILO</dd></div><div><dt>协议版本</dt><dd>v2.4.1</dd></div><div><dt>运行模式</dt><dd><span class="ui-badge success">自动执行</span></dd></div></dl>
                <div class="stat-strip"><span><small>成功率</small><b>98.6<em>%</em></b></span><span><small>平均延迟</small><b>24.8<em>ms</em></b></span><span><small>异常记录</small><b>03<em>条</em></b></span></div>
              </div>
            </article>

            <article class="component-card timeline-card">
              <div class="component-meta"><span>21 / TIMELINE</span><b>行动记录</b></div>
              <div class="component-demo timeline-showcase">
                <ol class="ui-timeline"><li class="done"><time>21:30</time><span><b>行动登记</b><small>设备组 A-17 已载入</small></span></li><li class="done"><time>21:32</time><span><b>协议校验</b><small>16 项参数全部通过</small></span></li><li class="active"><time>21:34</time><span><b>数据回传中</b><small>当前进度 72%</small></span></li><li><time>--:--</time><span><b>归档结果</b><small>等待前序指令完成</small></span></li></ol>
                <div class="ui-result"><strong>${icon('check')}</strong><span><b>PRTS 预检通过</b><small>终端状态满足行动执行条件</small></span><button data-feedback="行动已写入执行队列">写入执行队列</button></div>
              </div>
            </article>

            <article class="component-card task-center-card">
              <div class="component-meta"><span>22 / TASK CENTER</span><b>任务调度与配给</b></div>
              <div class="component-demo task-center-showcase">
                <nav class="task-tabs" aria-label="任务分类"><button class="active">日常任务</button><button>周期任务<i aria-label="有更新"></i></button><button>主线任务</button><button>特殊任务<i aria-label="有更新"></i></button></nav>
                <div class="task-layout">
                  <aside class="reward-track"><header><span>阶段奖励</span><b>03 / 08</b></header><ol><li class="done"><b>01</b><span>基础配给</span><em>已领取</em></li><li class="active"><b>02</b><span>标准配给</span><em>可领取</em></li><li><b>03</b><span>高级配给</span><em>80 / 120</em></li></ol></aside>
                  <section class="task-list">
                    <article class="claimable"><strong>${icon('check')}</strong><p><b>完成 3 次设备校准</b><small>周期任务 / 08-06</small></p><button data-feedback="任务奖励已领取">点击领取 <span>×2</span></button></article>
                    <article><strong>02</strong><p><b>同步 12 个采集文件</b><small>当前进度 8 / 12</small></p><div class="task-progress"><b>8 / 12</b><i><span style="width:67%"></span></i></div></article>
                    <article class="complete"><strong>${icon('check')}</strong><p><b>检查生产环境连接状态</b><small>已完成 / 11:42</small></p><em>完成</em></article>
                  </section>
                </div>
              </div>
            </article>
          </div>

          <div class="license-note"><span>ASSET PROTOCOL / 001</span><p><b>素材协议：</b>本页未使用游戏图片或 PRTS Wiki 页面素材。游戏图片、动画、音频与原文版权归其权利人；组件代码与图标均为项目内原创。</p></div>
        </section>

        <section class="source-panel panel-cut" data-section="source">
          <div><span class="eyebrow">PRTS / GENERATED PROTOCOL</span><h3>SKILL.md</h3><p>当前视觉协议已编译为可调用的 Skill 入口文件。</p></div>
          <pre><code><span>---</span>\nname: arknights-interface\ndescription: 创建具备 PRTS 终端语气的宋黑高对比工业界面。\n<span>---</span>\n\n# PRTS 视觉协议\n\n## 字体层级\n- 宋体：品牌、叙事与页面主标题。\n- 黑体：操作标题、按钮与正文。\n- Bender：数字、日期、编号、关键数据与侧栏英文。\n- 新罗马：英文叙事与标签。\n\n## 终端语言\n- 用短句陈述状态、结果与下一步指令。\n- 优先使用协议、档案、指令、节点、链路、回传与归档等终端词汇。\n- 按钮以动作开头，并明确执行对象。\n\n## 状态规则\n- 亮青蓝表示选中、进度与重点数据；蓝底按钮统一使用白字。\n- 黄色表示活动与奖励。\n- 橙色表示未读更新，红色只表示危险。\n- 使用硬边、切角和向下软阴影；禁止网格、Hover 与蓝紫渐变。\n- 内容淡入 320ms，背景粒子持续漂浮；鼠标圆环跟随与点击扩散；支持减少动态效果。</code></pre>
          <button class="copy-button" id="copyBtn">${icon('copy')}复制</button>
        </section>
      </div>
    </main>
    <div class="toast" role="status" aria-live="polite"></div>
    <div class="dialog-backdrop" id="confirmDialog" hidden>
      <section class="ui-dialog panel-cut" role="dialog" aria-modal="true" aria-labelledby="dialogTitle">
        <span class="eyebrow">PRTS / HIGH RISK COMMAND</span><h3 id="dialogTitle">是否终止当前校准？</h3>
        <p>未提交的校准参数将被撤回，终端恢复至上一次稳定协议。</p>
        <div><button class="ui-button secondary" id="cancelDialogBtn">返回</button><button class="ui-button danger" id="confirmDialogBtn">终止校准</button></div>
      </section>
    </div>
  </div>
`

const toast = document.querySelector('.toast')

function showToast(message) {
  toast.textContent = message
  toast.classList.add('show')
  window.setTimeout(() => toast.classList.remove('show'), 1800)
}

function scrollToSection(section) {
  const workspace = document.querySelector('.workspace')
  const target = document.querySelector(`[data-section="${section}"]`)
  if (workspace && target) {
    const top = target.getBoundingClientRect().top - workspace.getBoundingClientRect().top + workspace.scrollTop - 18
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    if (window.matchMedia('(max-width: 720px)').matches) target.scrollIntoView({ behavior, block: 'start' })
    else workspace.scrollTo({ top, behavior })
  }
  document.querySelectorAll('.nav-item').forEach((item) => {
    const selected = item.dataset.page === section
    item.classList.toggle('active', selected)
    if (selected) item.setAttribute('aria-current', 'location')
    else item.removeAttribute('aria-current')
  })
}

document.querySelectorAll('[data-page], [data-jump]').forEach((button) => {
  button.addEventListener('click', () => scrollToSection(button.dataset.page || button.dataset.jump))
})

document.querySelector('#previewBtn').addEventListener('click', () => {
  document.body.classList.toggle('preview-mode')
  showToast(document.body.classList.contains('preview-mode') ? 'PRTS 终端预览已开启' : '协议编辑模式已恢复')
})

document.querySelector('#exportBtn').addEventListener('click', () => showToast('PRTS 视觉协议已生成'))

document.querySelectorAll('[data-feedback]').forEach((button) => {
  button.addEventListener('click', () => showToast(button.dataset.feedback))
})

document.querySelectorAll('.ui-segments button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.ui-segments button').forEach((item) => {
      const selected = item === button
      item.classList.toggle('active', selected)
      item.setAttribute('aria-selected', String(selected))
    })
    document.querySelector('.segment-output').textContent = `当前档案：${button.textContent}`
  })
})

const customSelect = document.querySelector('[data-select]')
if (customSelect) {
  const trigger = customSelect.querySelector('.ui-select-trigger')
  const menu = customSelect.querySelector('.ui-select-menu')
  const options = [...menu.querySelectorAll('[role="option"]')]
  const value = trigger.querySelector('span')

  const setSelectOpen = (isOpen) => {
    trigger.setAttribute('aria-expanded', String(isOpen))
    menu.hidden = !isOpen
    if (isOpen) {
      ;(options.find((option) => option.getAttribute('aria-selected') === 'true') || options[0]).focus()
    }
  }

  const selectOption = (option) => {
    options.forEach((item) => item.setAttribute('aria-selected', String(item === option)))
    value.textContent = option.dataset.value
    setSelectOpen(false)
    trigger.focus()
  }

  trigger.addEventListener('click', () => {
    setSelectOpen(trigger.getAttribute('aria-expanded') !== 'true')
  })

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      setSelectOpen(true)
    }
  })

  options.forEach((option, index) => {
    option.addEventListener('click', () => selectOption(option))
    option.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault()
        const offset = event.key === 'ArrowDown' ? 1 : -1
        options[(index + offset + options.length) % options.length].focus()
      }
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        selectOption(option)
      }
      if (event.key === 'Escape') {
        event.preventDefault()
        setSelectOpen(false)
        trigger.focus()
      }
    })
  })

  document.addEventListener('click', (event) => {
    if (!customSelect.contains(event.target)) setSelectOpen(false)
  })
}

const dialog = document.querySelector('#confirmDialog')

function closeDialog() {
  dialog.hidden = true
  document.querySelector('#openDialogBtn').focus()
}

document.querySelector('#openDialogBtn').addEventListener('click', () => {
  dialog.hidden = false
  document.querySelector('#cancelDialogBtn').focus()
})

document.querySelector('#cancelDialogBtn').addEventListener('click', closeDialog)
document.querySelector('#confirmDialogBtn').addEventListener('click', () => {
  closeDialog()
  showToast('校准指令已终止')
})

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) closeDialog()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !dialog.hidden) closeDialog()
})

document.querySelector('#copyBtn').addEventListener('click', async () => {
  await navigator.clipboard.writeText(document.querySelector('pre').innerText)
  showToast('协议源文件已复制')
})

const disposeTerminalEffects = mountTerminalEffects()
const disposeSidebarSearch = mountSidebarSearch(document.querySelector('.terminal-sidebar'))
if (import.meta.hot) import.meta.hot.dispose(() => {
  disposeTerminalEffects()
  disposeSidebarSearch()
})
