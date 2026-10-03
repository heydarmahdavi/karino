// @ts-nocheck

// ================= عناصر =================
const input = document.getElementById("taskInput");
const taskTimeInput = document.getElementById("taskTime");
const prioritySelect = document.getElementById("prioritySelect");
const tagSelect = document.getElementById("tagSelect");
const subtaskInput = document.getElementById("subtaskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");
const themeBtn = document.getElementById("themeBtn");
const settingsBtn = document.getElementById("settingsBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const filterBtns = document.querySelectorAll(".filter-btn");
const navBtns = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");
const doneHistoryList = document.getElementById("doneHistoryList");
const statCards = document.querySelectorAll(".stat-card.clickable");
const bottomNav = document.getElementById("bottomNav");

// تاریخ شمسی
const taskDateBtn = document.getElementById("taskDateBtn");
const taskDateLabel = document.getElementById("taskDateLabel");

// Repeat
const repeatCheck = document.getElementById("repeatCheck");
const repeatType = document.getElementById("repeatType");
const weekdaysRow = document.getElementById("weekdaysRow");
const weekdayBtns = document.querySelectorAll(".weekday-btn");

// Chart
const chartCanvas = document.getElementById("chartCanvas");
const rangeBtns = document.querySelectorAll(".range-btn");
const typeBtns = document.querySelectorAll(".type-btn");
const chartSummary = document.getElementById("chartSummary");

// Calendar
const calendarGrid = document.getElementById("calendarGrid");
const calPrevMonth = document.getElementById("calPrevMonth");
const calNextMonth = document.getElementById("calNextMonth");
const calMonthName = document.getElementById("calMonthName");
const calYearName = document.getElementById("calYearName");
const calTodayBtn = document.getElementById("calTodayBtn");

// Date Picker Modal
const datePickerModal = document.getElementById("datePickerModal");
const datePickerTitle = document.getElementById("datePickerTitle");
const closeDatePicker = document.getElementById("closeDatePicker");
const dpPrevMonth = document.getElementById("dpPrevMonth");
const dpNextMonth = document.getElementById("dpNextMonth");
const dpMonthName = document.getElementById("dpMonthName");
const dpYearName = document.getElementById("dpYearName");
const dpCalendarGrid = document.getElementById("dpCalendarGrid");
const dpShortcutBtns = document.querySelectorAll(".dp-shortcut-btn");

// Goal
const goalCard = document.getElementById("goalCard");
const goalFill = document.getElementById("goalFill");
const goalText = document.getElementById("goalText");
const goalMessage = document.getElementById("goalMessage");
const editGoalBtn = document.getElementById("editGoalBtn");
const goalModal = document.getElementById("goalModal");
const closeGoalModal = document.getElementById("closeGoalModal");
const customGoalInput2 = document.getElementById("customGoalInput2");
const saveGoalBtn2 = document.getElementById("saveGoalBtn2");

const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const tagsList = document.getElementById("tagsList");
const manageTagsBtn = document.getElementById("manageTagsBtn");
const tagsModal = document.getElementById("tagsModal");
const closeTagsModal = document.getElementById("closeTagsModal");
const newTagName = document.getElementById("newTagName");
const newTagColor = document.getElementById("newTagColor");
const addTagBtn = document.getElementById("addTagBtn");
const tagsManageList = document.getElementById("tagsManageList");

const settingsModal = document.getElementById("settingsModal");
const closeSettingsModal = document.getElementById("closeSettingsModal");
const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");
const importFile = document.getElementById("importFile");
const resetAllBtn = document.getElementById("resetAllBtn");
const exportStats = document.getElementById("exportStats");

const askNotifBtn = document.getElementById("askNotifBtn");
const notifBtnText = document.getElementById("notifBtnText");
const notifStatus = document.getElementById("notifStatus");
const customGoalInput = document.getElementById("customGoalInput");
const saveGoalBtn = document.getElementById("saveGoalBtn");
const goalNumBtns = document.querySelectorAll(".goal-num-btn");

const editModal = document.getElementById("editModal");
const closeEditModal = document.getElementById("closeEditModal");
const editTaskText = document.getElementById("editTaskText");
const editTaskDateBtn = document.getElementById("editTaskDateBtn");
const editTaskDateLabel = document.getElementById("editTaskDateLabel");
const editTaskTime = document.getElementById("editTaskTime");
const editTaskPriority = document.getElementById("editTaskPriority");
const editTaskTag = document.getElementById("editTaskTag");
const editSubtasksList = document.getElementById("editSubtasksList");
const editNewSubtask = document.getElementById("editNewSubtask");
const editAddSubtaskBtn = document.getElementById("editAddSubtaskBtn");
const editSaveBtn = document.getElementById("editSaveBtn");
const editCancelBtn = document.getElementById("editCancelBtn");
const editRepeatInfo = document.getElementById("editRepeatInfo");
const editRepeatLabel = document.getElementById("editRepeatLabel");
const stopRepeatBtn = document.getElementById("stopRepeatBtn");
const deleteAllRepeatBtn = document.getElementById("deleteAllRepeatBtn");

// Streak + Achievements
const streakCard = document.getElementById("streakCard");
const streakNum = document.getElementById("streakNum");
const achievementsCard = document.getElementById("achievementsCard");
const achNum = document.getElementById("achNum");
const achievementsModal = document.getElementById("achievementsModal");
const closeAchModal = document.getElementById("closeAchModal");
const achSummaryNum = document.getElementById("achSummaryNum");
const achievementsList = document.getElementById("achievementsList");

// Sounds
const soundEnabled = document.getElementById("soundEnabled");
const soundVolume = document.getElementById("soundVolume");
const soundVolumeValue = document.getElementById("soundVolumeValue");
const soundTestBtns = document.querySelectorAll(".sound-test-btn");

const toastContainer = document.getElementById("toastContainer");
const viewPage = document.getElementById("viewPage");
const viewList = document.getElementById("viewList");
const viewEmpty = document.getElementById("viewEmpty");
const viewTitle = document.getElementById("viewTitle");
const backBtn = document.getElementById("backBtn");

// ================= داده =================
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let tags = JSON.parse(localStorage.getItem("tags")) || [
  { id: "work", name: "کار", color: "#6c5ce7" },
  { id: "personal", name: "شخصی", color: "#2ed573" },
  { id: "shopping", name: "خرید", color: "#ffa502" },
  { id: "sport", name: "ورزش", color: "#ff4757" }
];

let dailyGoal = parseInt(localStorage.getItem("dailyGoal")) || 5;
let stats = JSON.parse(localStorage.getItem("stats")) || {
  doneDates: [],
  totalDone: 0,
  totalCreated: 0,
  unlockedAch: [],
  goalsCompleted: 0,
  beforeNoonCount: 0,
  afterNightCount: 0,
  earlyBird: false,
  nightOwl: false
};
let soundSettings = JSON.parse(localStorage.getItem("soundSettings")) || {
  enabled: true,
  volume: 60
};

tasks.forEach(t => {
  if (!t.subtasks) t.subtasks = [];
  if (!t.repeat) t.repeat = null;
  if (!t.parentId) t.parentId = null;
});

let currentFilter = "all";
let currentViewType = "all";
let currentTagFilter = "all";
let searchQuery = "";

let editingTaskId = null;
let editingSubtasks = [];
let selectedWeekdays = [];

let myChart = null;
let currentChartRange = "week";
let currentChartType = "bar";

let calCurrentDate = new Date();
calCurrentDate.setDate(1);

let selectedTaskDate = todayKey();
let selectedEditDate = todayKey();

let datePickerMode = "add";
let dpCurrentDate = new Date();
dpCurrentDate.setDate(1);

let previousPage = "dashboardPage";

// ================= ابزار =================
function save() { localStorage.setItem("tasks", JSON.stringify(tasks)); }
function saveTags() { localStorage.setItem("tags", JSON.stringify(tags)); }
function saveGoal() { localStorage.setItem("dailyGoal", dailyGoal); }
function saveStats() { localStorage.setItem("stats", JSON.stringify(stats)); }
function saveSoundSettings() { localStorage.setItem("soundSettings", JSON.stringify(soundSettings)); }

function toPersianNumber(num) {
  const persianDigits = ["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
  return String(num).replace(/\d/g, d => persianDigits[d]);
}

function toPersianDate(dateObj) {
  try {
    return new Intl.DateTimeFormat("fa-IR", { year: "numeric", month: "long", day: "numeric" }).format(dateObj);
  } catch (e) {
    return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
  }
}

function toPersianDateShort(key) {
  if (!key) return "";
  const [y, m, d] = key.split("-").map(Number);
  const pDate = gregorianToPersian(new Date(y, m - 1, d));
  const months = ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"];
  return `${toPersianNumber(pDate.jd)} ${months[pDate.jm - 1]}`;
}

function toRelativeDate(key) {
  if (!key) return "";
  if (key === todayKey()) return "امروز";
  if (key === tomorrowKey()) return "فردا";
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (key === dateToKey(yesterday)) return "دیروز";
  return toPersianDateShort(key);
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function tomorrowKey() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function dateToKey(dateObj) {
  return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}`;
}

function formatDate(key) {
  if (!key) return "";
  const [y, m, d] = key.split("-").map(Number);
  return toPersianDate(new Date(y, m - 1, d));
}

function getPersianMonthName(monthIndex) {
  const fakeDate = new Date(2024, monthIndex, 15);
  try {
    return new Intl.DateTimeFormat("fa-IR", { month: "short" }).format(fakeDate);
  } catch (e) {
    return ["ژان", "فور", "مار", "آپر", "می", "جون", "جول", "اوت", "سپ", "اکت", "نوا", "دسا"][monthIndex];
  }
}

function getPersianMonthNameFull(monthIndex) {
  const fakeDate = new Date(2024, monthIndex, 15);
  try {
    return new Intl.DateTimeFormat("fa-IR", { month: "long" }).format(fakeDate);
  } catch (e) {
    return ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"][monthIndex];
  }
}

function getPersianWeekday(dateObj) {
  const map = { 0: "یک", 1: "دو", 2: "سه", 3: "چهار", 4: "پنج", 5: "جمعه", 6: "شنبه" };
  return map[dateObj.getDay()];
}

function gregorianToPersian(date) {
  const g_y = date.getFullYear();
  const g_m = date.getMonth() + 1;
  const g_d = date.getDate();
  const g_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const j_days_in_month = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  let gy = g_y - 1600;
  let gm = g_m - 1;
  let gd = g_d - 1;
  let g_day_no = 365 * gy + Math.floor((gy + 3) / 4) - Math.floor((gy + 99) / 100) + Math.floor((gy + 399) / 400);
  for (let i = 0; i < gm; ++i) g_day_no += g_days_in_month[i];
  if (gm > 1 && ((gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0)) g_day_no++;
  g_day_no += gd;
  let j_day_no = g_day_no - 79;
  let j_np = Math.floor(j_day_no / 12053);
  j_day_no %= 12053;
  let jy = 979 + 33 * j_np + 4 * Math.floor(j_day_no / 1461);
  j_day_no %= 1461;
  if (j_day_no >= 366) {
    jy += Math.floor((j_day_no - 1) / 365);
    j_day_no = (j_day_no - 1) % 365;
  }
  let jm, jd;
  for (let i = 0; i < 11 && j_day_no >= j_days_in_month[i]; ++i) {
    j_day_no -= j_days_in_month[i];
    jm = i + 2;
  }
  if (!jm) { jm = 1; jd = j_day_no + 1; }
  else { jd = j_day_no + 1; }
  return { jy, jm, jd };
}

function priorityWeight(p) {
  if (p === "high") return 3;
  if (p === "medium") return 2;
  return 1;
}

function getTagById(id) { return tags.find(t => t.id === id); }

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function highlightText(text, query) {
  if (!query || query.trim() === "") return escapeHtml(text);
  const safe = escapeHtml(text);
  const q = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${q})`, "gi");
  return safe.replace(regex, "<mark>$1</mark>");
}

function subtaskProgress(task) {
  if (!task.subtasks || task.subtasks.length === 0) return null;
  const done = task.subtasks.filter(s => s.done).length;
  return { done, total: task.subtasks.length };
}

function buildTagBadge(tag) {
  const bg = hexToRgba(tag.color, 0.12);
  const border = hexToRgba(tag.color, 0.35);
  return `<span class="tag-badge" style="color:${tag.color};background:${bg};border:1px solid ${border};">
    <span class="dot" style="background:${tag.color};box-shadow:0 0 6px ${tag.color};"></span>
    ${escapeHtml(tag.name)}
  </span>`;
}

function getRepeatLabel(repeat) {
  if (!repeat) return "";
  if (repeat.type === "daily") return "هر روز";
  if (repeat.type === "weekly") return "هر هفته";
  if (repeat.type === "monthly") return "هر ماه";
  if (repeat.type === "custom") {
    const dayNames = { 6: "ش", 0: "ی", 1: "د", 2: "س", 3: "چ", 4: "پ", 5: "ج" };
    return repeat.days.map(d => dayNames[d]).join(" ");
  }
  return "تکرار";
}

function hexToRgba(hex, alpha) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map(c => c + c).join("");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ================= Toast =================
function showToast(message, type = "info", duration = 3000) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("removing");
    setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
  }, duration);
}

// ================= صداها =================
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn("Audio not supported");
    }
  }
  return audioCtx;
}

function playTone(frequency, duration, type = "sine", volume = 1, startTime = 0) {
  if (!soundSettings.enabled) return;
  const ctx = initAudio();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.value = frequency;

  const vol = (soundSettings.volume / 100) * volume * 0.3;

  const now = ctx.currentTime + startTime;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(vol, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration);
}

function playSound(type) {
  if (!soundSettings.enabled) return;
  const ctx = initAudio();
  if (ctx && ctx.state === "suspended") ctx.resume();

  switch (type) {
    case "tick":
      playTone(880, 0.08, "sine", 1);
      playTone(1320, 0.06, "sine", 0.5, 0.02);
      break;
    case "untick":
      playTone(660, 0.1, "sine", 0.8);
      playTone(440, 0.08, "sine", 0.5, 0.03);
      break;
    case "add":
      playTone(523, 0.08, "sine", 1);
      playTone(659, 0.1, "sine", 0.7, 0.05);
      playTone(784, 0.12, "sine", 0.5, 0.1);
      break;
    case "delete":
      playTone(400, 0.1, "triangle", 0.8);
      playTone(250, 0.15, "triangle", 0.5, 0.05);
      break;
    case "celebrate":
      playTone(523, 0.15, "sine", 1, 0);
      playTone(659, 0.15, "sine", 1, 0.15);
      playTone(784, 0.15, "sine", 1, 0.30);
      playTone(1047, 0.4, "sine", 1, 0.45);
      break;
    case "achievement":
      playTone(659, 0.1, "sine", 1, 0);
      playTone(784, 0.1, "sine", 1, 0.1);
      playTone(988, 0.15, "sine", 1, 0.2);
      playTone(1319, 0.35, "sine", 1, 0.35);
      break;
    case "goal":
      playTone(523, 0.12, "sine", 1, 0);
      playTone(659, 0.12, "sine", 1, 0.12);
      playTone(784, 0.12, "sine", 1, 0.24);
      playTone(1047, 0.5, "sine", 1, 0.36);
      break;
    case "notification":
      playTone(880, 0.15, "sine", 1, 0);
      playTone(1108, 0.2, "sine", 1, 0.15);
      break;
  }
}

// ================= Streak + Achievements =================
const ACHIEVEMENTS = [
  { id: "first", icon: "🎯", title: "شروع سفر", desc: "اولین کارت رو انجام بده" },
  { id: "ten", icon: "🔟", title: "ده‌تایی", desc: "۱۰ کار انجام بده" },
  { id: "hundred", icon: "💯", title: "صدتایی", desc: "۱۰۰ کار انجام بده" },
  { id: "week", icon: "📅", title: "هفته کامل", desc: "۷ روز پشت‌هم کار انجام بده" },
  { id: "month", icon: "🏅", title: "ماه طلایی", desc: "۳۰ روز پشت‌هم کار انجام بده" },
  { id: "goal3", icon: "🎯", title: "هدف‌شناس", desc: "به هدف روزانه‌ات ۳ بار برس" },
  { id: "goal10", icon: "🏆", title: "قهرمان هدف", desc: "به هدف روزانه‌ات ۱۰ بار برس" },
  { id: "earlyBird", icon: "🌅", title: "سحرخیز", desc: "۵ کار قبل از ظهر انجام بده" },
  { id: "nightOwl", icon: "🦉", title: "شب‌زنده‌دار", desc: "۵ کار بعد از ساعت ۹ شب انجام بده" },
  { id: "allDone", icon: "✨", title: "تمام‌کننده", desc: "یه روز همه کارهات رو انجام بده" }
];

function unlockAchievement(achId) {
  if (stats.unlockedAch.includes(achId)) return false;
  const ach = ACHIEVEMENTS.find(a => a.id === achId);
  if (!ach) return false;
  stats.unlockedAch.push(achId);
  saveStats();
  showToast(`🏆 دستاورد جدید: ${ach.title}`, "achievement", 5000);
  playSound("achievement");
  achievementsCard.style.transform = "scale(1.15)";
  setTimeout(() => { achievementsCard.style.transform = ""; }, 400);
  return true;
}

function calculateStreak() {
  if (stats.doneDates.length === 0) return 0;
  const sorted = [...new Set(stats.doneDates)].sort().reverse();
  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let checkDate = new Date(today);
  const todayStr = dateToKey(today);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = dateToKey(yesterday);
  if (!sorted.includes(todayStr) && !sorted.includes(yesterdayStr)) return 0;
  if (!sorted.includes(todayStr)) checkDate = yesterday;
  while (true) {
    const key = dateToKey(checkDate);
    if (sorted.includes(key)) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else break;
  }
  return streak;
}

function renderStreak() {
  const streak = calculateStreak();
  streakNum.textContent = toPersianNumber(streak);
  const todayStr = todayKey();
  if (stats.doneDates.includes(todayStr)) streakCard.classList.add("active");
  else streakCard.classList.remove("active");
  if (streak >= 7) streakCard.classList.add("hot");
  else streakCard.classList.remove("hot");
  achNum.textContent = `${toPersianNumber(stats.unlockedAch.length)}/${toPersianNumber(ACHIEVEMENTS.length)}`;
  if (streak >= 7) unlockAchievement("week");
  if (streak >= 30) unlockAchievement("month");
  const todayTasks = tasks.filter(t => t.date === todayStr);
  if (todayTasks.length > 0 && todayTasks.every(t => t.done)) {
    unlockAchievement("allDone");
  }
}

function renderAchievementsList() {
  achSummaryNum.textContent = `${toPersianNumber(stats.unlockedAch.length)}/${toPersianNumber(ACHIEVEMENTS.length)}`;
  achievementsList.innerHTML = "";
  ACHIEVEMENTS.forEach((ach, i) => {
    const unlocked = stats.unlockedAch.includes(ach.id);
    const item = document.createElement("div");
    item.className = `achievement-item ${unlocked ? "unlocked" : "locked"}`;
    item.style.animationDelay = (i * 0.03) + "s";
    item.innerHTML = `
      <div class="achievement-icon">${ach.icon}</div>
      <div class="achievement-info">
        <div class="achievement-title">${ach.title}</div>
        <div class="achievement-desc">${ach.desc}</div>
      </div>
      <div class="achievement-status">${unlocked ? "✅" : "🔒"}</div>
    `;
    achievementsList.appendChild(item);
  });
}

// ================= Notification =================
function requestNotificationPermission() {
  if (!("Notification" in window)) {
    showToast("❌ مرورگرت پشتیبانی نمی‌کنه", "error");
    return;
  }
  if (Notification.permission === "granted") {
    showToast("✅ نوتیفیکیشن فعاله", "success");
    updateNotifStatus();
    return;
  }
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      showToast("✅ نوتیفیکیشن فعال شد!", "success");
      try { new Notification("🔔 کارینو", { body: "یادآورها فعال شدن!", icon: "icon.png" }); } catch (e) {}
    } else {
      showToast("⚠️ اجازه داده نشد", "error");
    }
    updateNotifStatus();
  });
}

function updateNotifStatus() {
  if (!("Notification" in window)) {
    notifStatus.textContent = "❌ پشتیبانی نمی‌شه";
    notifStatus.className = "notif-status denied";
    notifBtnText.textContent = "🔕 پشتیبانی نمی‌شه";
    return;
  }
  const p = Notification.permission;
  if (p === "granted") {
    notifStatus.textContent = "✅ نوتیفیکیشن فعاله";
    notifStatus.className = "notif-status granted";
    notifBtnText.textContent = "✅ فعال";
  } else if (p === "denied") {
    notifStatus.textContent = "❌ دسترسی رد شده";
    notifStatus.className = "notif-status denied";
    notifBtnText.textContent = "❌ غیرفعال";
  } else {
    notifStatus.textContent = "⚠️ اجازه داده نشده";
    notifStatus.className = "notif-status default";
    notifBtnText.textContent = "🔔 اجازه نوتیفیکیشن";
  }
}

function checkReminders() {
  const now = new Date();
  const currentDateKey = todayKey();
  const currentTimeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  tasks.forEach(task => {
    if (task.done) return;
    if (!task.reminderTime) return;
    if (task.reminderNotified) return;
    if (task.date !== currentDateKey) return;
    if (task.reminderTime === currentTimeStr) {
      if ("Notification" in window && Notification.permission === "granted") {
        try {
          new Notification("🔔 یادآور کار", { body: task.text, icon: "icon.png", tag: "task-" + task.id, requireInteraction: true });
        } catch (err) {}
      }
      showToast(`🔔 یادآور: ${task.text}`, "info", 5000);
      playSound("notification");
      task.reminderNotified = true;
      save();
    }
  });
}

setInterval(checkReminders, 30000);

// ================= تکرار =================
function getRepeatDates(startDateKey, repeat) {
  const dates = [];
  if (!repeat) return [startDateKey];
  const [sy, sm, sd] = startDateKey.split("-").map(Number);
  const startDate = new Date(sy, sm - 1, sd);

  if (repeat.type === "daily") {
    for (let i = 0; i < 7; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);
      dates.push(dateToKey(d));
    }
  } else if (repeat.type === "weekly") {
    for (let i = 0; i < 4; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i * 7);
      dates.push(dateToKey(d));
    }
  } else if (repeat.type === "monthly") {
    for (let i = 0; i < 3; i++) {
      const d = new Date(startDate);
      d.setMonth(d.getMonth() + i);
      dates.push(dateToKey(d));
    }
  } else if (repeat.type === "custom") {
    const days = repeat.days || [];
    for (let i = 0; i < 14; i++) {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);
      if (days.includes(d.getDay())) dates.push(dateToKey(d));
    }
  }
  return [...new Set(dates)];
}

function generateRecurringTasks() {
  let created = 0;
  const parentTasks = tasks.filter(t => t.repeat && !t.parentId);
  parentTasks.forEach(parent => {
    const repeatDates = getRepeatDates(parent.date, parent.repeat);
    repeatDates.forEach(dateKey => {
      if (dateKey === parent.date) return;
      const exists = tasks.some(t => t.parentId === parent.id && t.date === dateKey);
      if (exists) return;
      const newTask = {
        id: Date.now() + Math.random(),
        text: parent.text,
        done: false,
        date: dateKey,
        priority: parent.priority,
        tagId: parent.tagId,
        reminderTime: parent.reminderTime,
        reminderNotified: false,
        subtasks: (parent.subtasks || []).map(s => ({ id: Date.now() + Math.random(), text: s.text, done: false })),
        repeat: parent.repeat,
        parentId: parent.id
      };
      tasks.push(newTask);
      created++;
    });
  });
  if (created > 0) save();
  return created;
}

// ================= هدف روزانه =================
function renderGoal() {
  const todayTasks = tasks.filter(t => t.date === todayKey());
  const doneToday = todayTasks.filter(t => t.done).length;
  const percent = Math.min((doneToday / dailyGoal) * 100, 100);
  goalFill.style.width = percent + "%";
  goalText.textContent = `${toPersianNumber(doneToday)} از ${toPersianNumber(dailyGoal)}`;
  if (doneToday >= dailyGoal) {
    goalCard.classList.add("completed");
    if (doneToday === dailyGoal) goalMessage.textContent = "🎉 عالی! به هدف امروزت رسیدی!";
    else goalMessage.textContent = `🔥 فوق‌العاده! ${toPersianNumber(doneToday - dailyGoal)} تا بیشتر!`;
  } else {
    goalCard.classList.remove("completed");
    const remaining = dailyGoal - doneToday;
    if (remaining <= 2 && remaining > 0) goalMessage.textContent = `💪 فقط ${toPersianNumber(remaining)} تا مونده!`;
    else goalMessage.textContent = `${toPersianNumber(remaining)} تا دیگه تا هدف`;
  }
}

function setDailyGoal(value) {
  value = parseInt(value);
  if (!value || value < 1) { showToast("⚠️ عدد معتبر وارد کن", "error"); return; }
  if (value > 99) value = 99;
  dailyGoal = value;
  saveGoal();
  renderGoal();
  updateGoalBtns();
  showToast(`🎯 هدف: ${toPersianNumber(value)} کار`, "success");
}

function updateGoalBtns() {
  goalNumBtns.forEach(btn => {
    const g = parseInt(btn.dataset.goal);
    if (g === dailyGoal) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

// ================= ناوبری =================
navBtns.forEach(btn => {
  btn.onclick = () => {
    navBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(btn.dataset.page).classList.add("active");
    bottomNav.classList.remove("hidden");
    if (btn.dataset.page === "dashboardPage") {
      renderDashboard();
      setTimeout(() => renderChart(), 100);
    }
    if (btn.dataset.page === "tasksPage") renderTasks();
    if (btn.dataset.page === "calendarPage") renderCalendar();
  };
});

// ================= آمار =================
function updateStats() {
  const tk = todayKey();
  const tmw = tomorrowKey();
  const allT = tasks.length;
  const allD = tasks.filter(t => t.done).length;
  document.getElementById("allTotal").textContent = allT;
  document.getElementById("allDone").textContent = allD;
  document.getElementById("allPending").textContent = allT - allD;

  const todayList = tasks.filter(t => t.date === tk);
  const todayT = todayList.length;
  const todayD = todayList.filter(t => t.done).length;
  document.getElementById("todayTotal").textContent = todayT;
  document.getElementById("todayDone").textContent = todayD;
  document.getElementById("todayPending").textContent = todayT - todayD;

  const tomList = tasks.filter(t => t.date === tmw);
  const tomT = tomList.length;
  const tomD = tomList.filter(t => t.done).length;
  document.getElementById("tomTotal").textContent = tomT;
  document.getElementById("tomDone").textContent = tomD;
  document.getElementById("tomPending").textContent = tomT - tomD;

  document.getElementById("doneDone").textContent = tasks.filter(t => t.done).length;
  document.getElementById("pendPending").textContent = tasks.filter(t => !t.done).length;
  if (exportStats) exportStats.textContent = `${allT} کار · ${tags.length} دسته`;
}

// ================= نمودار =================
function getStartOfWeek(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const dayOfWeek = d.getDay();
  let diff;
  if (dayOfWeek === 6) diff = 0;
  else diff = dayOfWeek + 1;
  d.setDate(d.getDate() - diff);
  return d;
}

function getChartData() {
  const now = new Date();
  let labels = [], data = [];
  let isDoughnut = currentChartType === "doughnut";

  if (isDoughnut) {
    if (currentChartRange === "week") {
      const startOfWeek = getStartOfWeek(new Date());
      const weekTasks = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(startOfWeek);
        d.setDate(d.getDate() + i);
        const key = dateToKey(d);
        weekTasks.push(...tasks.filter(t => t.date === key));
      }
      return {
        labels: ["🔴 مهم", "🟡 متوسط", "🟢 عادی"],
        data: [
          weekTasks.filter(t => t.priority === "high" && t.done).length,
          weekTasks.filter(t => t.priority === "medium" && t.done).length,
          weekTasks.filter(t => (t.priority || "normal") === "normal" && t.done).length
        ],
        colors: ["#ff4757", "#ffa502", "#2ed573"]
      };
    } else if (currentChartRange === "month") {
      const pNow = gregorianToPersian(now);
      const monthTasks = tasks.filter(t => {
        if (!t.date || !t.done) return false;
        const [gy, gm, gd] = t.date.split("-").map(Number);
        const pDate = gregorianToPersian(new Date(gy, gm - 1, gd));
        return pDate.jy === pNow.jy && pDate.jm === pNow.jm;
      });
      return {
        labels: ["🔴 مهم", "🟡 متوسط", "🟢 عادی"],
        data: [
          monthTasks.filter(t => t.priority === "high" && t.done).length,
          monthTasks.filter(t => t.priority === "medium" && t.done).length,
          monthTasks.filter(t => (t.priority || "normal") === "normal" && t.done).length
        ],
        colors: ["#ff4757", "#ffa502", "#2ed573"]
      };
    } else {
      return {
        labels: ["🔴 مهم", "🟡 متوسط", "🟢 عادی"],
        data: [
          tasks.filter(t => t.priority === "high" && t.done).length,
          tasks.filter(t => t.priority === "medium" && t.done).length,
          tasks.filter(t => (t.priority || "normal") === "normal" && t.done).length
        ],
        colors: ["#ff4757", "#ffa502", "#2ed573"]
      };
    }
  }

  if (currentChartRange === "week") {
    const startOfWeek = getStartOfWeek(new Date());
    const weekdayNames = ["شنبه", "یک", "دو", "سه", "چهار", "پنج", "جمعه"];
    for (let i = 0; i < 7; i++) {
      const d = new Date(startOfWeek);
      d.setDate(d.getDate() + i);
      const key = dateToKey(d);
      labels.push(weekdayNames[i]);
      data.push(tasks.filter(t => t.date === key && t.done).length);
    }
  } else if (currentChartRange === "month") {
    const pNow = gregorianToPersian(now);
    const currentJy = pNow.jy;
    const currentJm = pNow.jm;
    const daysInJMonth = currentJm <= 6 ? 31 : (currentJm <= 11 ? 30 : 29);

    for (let day = 1; day <= daysInJMonth; day++) {
      labels.push(String(day));
      let count = 0;
      tasks.forEach(t => {
        if (!t.date || !t.done) return;
        const [gy, gm, gd] = t.date.split("-").map(Number);
        const pDate = gregorianToPersian(new Date(gy, gm - 1, gd));
        if (pDate.jy === currentJy && pDate.jm === currentJm && pDate.jd === day) {
          count++;
        }
      });
      data.push(count);
    }
  } else {
    const pNow = gregorianToPersian(now);
    const currentJy = pNow.jy;
    const shamsiMonths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

    for (let m = 0; m < 12; m++) {
      labels.push(shamsiMonths[m]);
      let count = 0;
      tasks.forEach(t => {
        if (!t.date || !t.done) return;
        const [gy, gm, gd] = t.date.split("-").map(Number);
        const pDate = gregorianToPersian(new Date(gy, gm - 1, gd));
        if (pDate.jy === currentJy && pDate.jm === m + 1) {
          count++;
        }
      });
      data.push(count);
    }
  }

  return { labels, data };
}

function renderChart() {
  if (!chartCanvas || typeof Chart === "undefined") return;
  const chartData = getChartData();
  renderChartSummary(chartData);
  const isLight = document.body.classList.contains("light");
  const textColor = isLight ? "#222" : "#aaa";
  const gridColor = isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)";
  if (myChart) myChart.destroy();
  const ctx = chartCanvas.getContext("2d");
  let gradient;
  if (currentChartType === "line") {
    gradient = ctx.createLinearGradient(0, 0, 0, 220);
    gradient.addColorStop(0, "rgba(108,92,231,0.5)");
    gradient.addColorStop(1, "rgba(108,92,231,0.02)");
  } else {
    gradient = ctx.createLinearGradient(0, 0, 0, 220);
    gradient.addColorStop(0, "#6c5ce7");
    gradient.addColorStop(1, "#4834d4");
  }
  const isDoughnut = currentChartType === "doughnut";
  let config;

  const isYear = currentChartRange === "year";
  const isMonth = currentChartRange === "month";
  const xTickFontSize = isYear ? 9 : (isMonth ? 9 : 11);
  const xRotation = isYear ? 90 : 0;

  const xAxisConfig = {
    grid: { display: false },
    ticks: {
      color: textColor,
      font: { family: "Vazirmatn", size: xTickFontSize },
      maxRotation: xRotation,
      minRotation: xRotation,
      autoSkip: false,
      callback: function(value, index) {
        if (isMonth) {
          const day = parseInt(this.getLabelForValue(value));
          if (day % 5 === 0 || day === 1) return this.getLabelForValue(value);
          return "";
        }
        return this.getLabelForValue(value);
      }
    }
  };

  const yAxisConfig = {
    beginAtZero: true,
    grid: { color: gridColor },
    ticks: {
      color: textColor,
      font: { family: "Vazirmatn", size: 11 },
      stepSize: 1,
      precision: 0
    }
  };

  if (isDoughnut) {
    config = {
      type: "doughnut",
      data: { labels: chartData.labels, datasets: [{ data: chartData.data, backgroundColor: chartData.colors, borderWidth: 0, hoverOffset: 8 }] },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: "65%",
        animation: { animateRotate: true, animateScale: true, duration: 900, easing: "easeOutQuart" },
        plugins: {
          legend: { position: "bottom", labels: { color: textColor, font: { family: "Vazirmatn", size: 12 }, padding: 12, usePointStyle: true, pointStyle: "circle" } },
          tooltip: { backgroundColor: isLight ? "#fff" : "#2a2a40", titleColor: isLight ? "#222" : "#fff", bodyColor: isLight ? "#444" : "#ddd", borderColor: "rgba(108,92,231,0.3)", borderWidth: 1, padding: 10, titleFont: { family: "Vazirmatn", size: 13, weight: "bold" }, bodyFont: { family: "Vazirmatn", size: 12 } }
        }
      }
    };
  } else if (currentChartType === "line") {
    config = {
      type: "line",
      data: { labels: chartData.labels, datasets: [{ label: "کارها", data: chartData.data, borderColor: "#6c5ce7", backgroundColor: gradient, borderWidth: 3, fill: true, tension: 0.4, pointBackgroundColor: "#6c5ce7", pointBorderColor: isLight ? "#fff" : "#2a2a40", pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 7, pointHoverBackgroundColor: "#a29bfe" }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 900, easing: "easeOutQuart" },
        plugins: { legend: { display: false }, tooltip: { backgroundColor: isLight ? "#fff" : "#2a2a40", titleColor: isLight ? "#222" : "#fff", bodyColor: isLight ? "#444" : "#ddd", padding: 10, titleFont: { family: "Vazirmatn", size: 13 }, bodyFont: { family: "Vazirmatn", size: 12 } } },
        scales: { x: xAxisConfig, y: yAxisConfig }
      }
    };
  } else {
    config = {
      type: "bar",
      data: { labels: chartData.labels, datasets: [{ label: "کارها", data: chartData.data, backgroundColor: gradient, borderRadius: 8, borderSkipped: false, maxBarThickness: isMonth ? 14 : (isYear ? 20 : 32) }] },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 900, easing: "easeOutQuart" },
        plugins: { legend: { display: false }, tooltip: { backgroundColor: isLight ? "#fff" : "#2a2a40", titleColor: isLight ? "#222" : "#fff", bodyColor: isLight ? "#444" : "#ddd", padding: 10, titleFont: { family: "Vazirmatn", size: 13 }, bodyFont: { family: "Vazirmatn", size: 12 } } },
        scales: { x: xAxisConfig, y: yAxisConfig }
      }
    };
  }
  myChart = new Chart(ctx, config);
}

function renderChartSummary(chartData) {
  let total = 0, max = 0, maxLabel = "";
  if (currentChartType === "doughnut") {
    total = chartData.data.reduce((a, b) => a + b, 0);
    max = Math.max(...chartData.data);
    const maxIdx = chartData.data.indexOf(max);
    maxLabel = chartData.labels[maxIdx] || "—";
    chartSummary.innerHTML = `
      <div class="summary-item green"><span class="summary-num">${toPersianNumber(total)}</span><span class="summary-label">کل انجام</span></div>
      <div class="summary-item"><span class="summary-num" style="font-size:13px;">${maxLabel}</span><span class="summary-label">بیشترین</span></div>
      <div class="summary-item orange"><span class="summary-num">${toPersianNumber(max)}</span><span class="summary-label">بالاترین</span></div>
    `;
    return;
  }
  chartData.data.forEach((v, i) => {
    total += v;
    if (v > max) { max = v; maxLabel = chartData.labels[i]; }
  });
  const avg = chartData.data.length > 0 ? (total / chartData.data.length).toFixed(1) : 0;
  chartSummary.innerHTML = `
    <div class="summary-item green"><span class="summary-num">${toPersianNumber(total)}</span><span class="summary-label">کل انجام</span></div>
    <div class="summary-item orange"><span class="summary-num">${toPersianNumber(avg)}</span><span class="summary-label">میانگین</span></div>
    <div class="summary-item red"><span class="summary-num">${toPersianNumber(max)}</span><span class="summary-label">بیشترین (${maxLabel})</span></div>
  `;
}

rangeBtns.forEach(btn => {
  btn.onclick = () => {
    rangeBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentChartRange = btn.dataset.range;
    renderChart();
  };
});

typeBtns.forEach(btn => {
  btn.onclick = () => {
    typeBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentChartType = btn.dataset.type;
    renderChart();
  };
});

// ================= تاریخچه =================
function renderDoneHistory() {
  doneHistoryList.innerHTML = "";
  const doneTasks = tasks.filter(t => t.done).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  if (doneTasks.length === 0) {
    doneHistoryList.innerHTML = '<p class="empty">هنوز کاری انجام ندادی مهندس! 💪</p>';
    return;
  }
  doneTasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "done-item";
    div.innerHTML = `<span>✅ ${task.text}</span><span class="done-date">${formatDate(task.date)}</span>`;
    doneHistoryList.appendChild(div);
  });
}

function renderDashboard() {
  updateStats();
  renderChart();
  renderDoneHistory();
  renderGoal();
  renderStreak();
}

// ================= تقویم اصلی =================
function renderCalendar() {
  const year = calCurrentDate.getFullYear();
  const month = calCurrentDate.getMonth();

  calMonthName.textContent = getPersianMonthNameFull(month);
  const firstDay = new Date(year, month, 1);
  const pDate = gregorianToPersian(firstDay);
  calYearName.textContent = toPersianNumber(pDate.jy);

  calendarGrid.innerHTML = "";

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  let startDay = firstDayOfMonth.getDay();
  let weekOffset;
  if (startDay === 6) weekOffset = 0;
  else weekOffset = startDay + 1;

  for (let i = 0; i < weekOffset; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "cal-day empty";
    calendarGrid.appendChild(emptyCell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateObj = new Date(year, month, day);
    const key = dateToKey(dateObj);

    const cell = document.createElement("div");
    cell.className = "cal-day";

    const dayTasks = tasks.filter(t => t.date === key);
    const count = dayTasks.length;

    if (key === todayKey()) cell.classList.add("today");
    if (count > 0) cell.classList.add("has-tasks");

    const pDate = gregorianToPersian(dateObj);
    const numEl = document.createElement("span");
    numEl.className = "cal-day-num";
    numEl.textContent = toPersianNumber(pDate.jd);
    cell.appendChild(numEl);

    if (count > 0) {
      const dotsWrap = document.createElement("div");
      dotsWrap.className = "cal-dots";
      const dotCount = Math.min(count, 3);
      let dotClass = "dot-1";
      if (count >= 6) dotClass = "dot-3";
      else if (count >= 3) dotClass = "dot-2";
      else dotClass = "dot-1";

      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("span");
        dot.className = "cal-dot " + dotClass;
        dotsWrap.appendChild(dot);
      }
      cell.appendChild(dotsWrap);
    }

    cell.onclick = () => openDayTasks(key, dateObj);
    calendarGrid.appendChild(cell);
  }
}

function openDayTasks(dateKey, dateObj) {
  currentViewType = "custom-day";
  previousPage = "calendarPage";

  const filtered = tasks.filter(t => t.date === dateKey).sort((a, b) => {
    const w = priorityWeight(b.priority) - priorityWeight(a.priority);
    if (w !== 0) return w;
    return (a.done ? 1 : 0) - (b.done ? 1 : 0);
  });

  viewTitle.textContent = "📅 " + toPersianDate(dateObj);
  viewList.innerHTML = "";

  if (filtered.length === 0) {
    viewEmpty.style.display = "block";
  } else {
    viewEmpty.style.display = "none";
    filtered.forEach(task => {
      const item = document.createElement("div");
      item.className = `view-item priority-${task.priority || "normal"}`;
      const circle = document.createElement("div");
      circle.className = "circle" + (task.done ? " checked" : "");
      circle.textContent = "✓";
      circle.onclick = () => toggleViewTask(task.id);
      item.appendChild(circle);
      const text = document.createElement("span");
      text.className = "view-text" + (task.done ? " done" : "");
      let html = "";
      html += `<span class="view-content">${escapeHtml(task.text)}</span>`;
      if (task.tagId) {
        const tag = getTagById(task.tagId);
        if (tag) html += buildTagBadge(tag);
      }
      text.innerHTML = html;
      item.appendChild(text);
      if (task.repeat) {
        const rep = document.createElement("span");
        rep.className = "repeat-badge";
        rep.textContent = "🔁";
        item.appendChild(rep);
      }
      if (task.reminderTime) {
        const rem = document.createElement("span");
        rem.className = "task-reminder-badge";
        rem.innerHTML = `🔔 ${task.reminderTime}`;
        if (task.done) rem.style.opacity = "0.4";
        item.appendChild(rem);
      }
      const progress = subtaskProgress(task);
      if (progress) {
        const counter = document.createElement("span");
        counter.className = "subtask-counter";
        counter.textContent = `${progress.done}/${progress.total}`;
        item.appendChild(counter);
      }
      viewList.appendChild(item);
    });
  }

  pages.forEach(p => p.classList.remove("active"));
  viewPage.classList.add("active");
  bottomNav.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

calPrevMonth.onclick = () => {
  calCurrentDate.setMonth(calCurrentDate.getMonth() - 1);
  renderCalendar();
};

calNextMonth.onclick = () => {
  calCurrentDate.setMonth(calCurrentDate.getMonth() + 1);
  renderCalendar();
};

calTodayBtn.onclick = () => {
  calCurrentDate = new Date();
  calCurrentDate.setDate(1);
  renderCalendar();
  showToast("📍 به امروز برگشتیم", "success");
};

// ================= مودال انتخاب تاریخ شمسی =================
function renderDatePicker() {
  const year = dpCurrentDate.getFullYear();
  const month = dpCurrentDate.getMonth();

  dpMonthName.textContent = getPersianMonthNameFull(month);
  const firstDay = new Date(year, month, 1);
  const pDate = gregorianToPersian(firstDay);
  dpYearName.textContent = toPersianNumber(pDate.jy);

  dpCalendarGrid.innerHTML = "";

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  let startDay = firstDayOfMonth.getDay();
  let weekOffset;
  if (startDay === 6) weekOffset = 0;
  else weekOffset = startDay + 1;

  for (let i = 0; i < weekOffset; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "cal-day empty";
    dpCalendarGrid.appendChild(emptyCell);
  }

  const selectedKey = datePickerMode === "add" ? selectedTaskDate : selectedEditDate;

  for (let day = 1; day <= daysInMonth; day++) {
    const dateObj = new Date(year, month, day);
    const key = dateToKey(dateObj);

    const cell = document.createElement("div");
    cell.className = "cal-day";

    if (key === todayKey()) cell.classList.add("today");
    if (key === selectedKey) {
      cell.classList.add("has-tasks");
      cell.style.background = "var(--primary)";
      cell.style.color = "#fff";
      cell.style.borderColor = "var(--primary)";
    }

    const pDate = gregorianToPersian(dateObj);
    const numEl = document.createElement("span");
    numEl.className = "cal-day-num";
    numEl.textContent = toPersianNumber(pDate.jd);
    cell.appendChild(numEl);

    cell.onclick = () => {
      if (datePickerMode === "add") {
        selectedTaskDate = key;
        updateTaskDateLabel();
      } else {
        selectedEditDate = key;
        updateEditDateLabel();
      }
      datePickerModal.classList.remove("active");
      playSound("tick");
    };

    dpCalendarGrid.appendChild(cell);
  }
}

function updateTaskDateLabel() {
  taskDateLabel.textContent = toRelativeDate(selectedTaskDate);
}

function updateEditDateLabel() {
  editTaskDateLabel.textContent = toRelativeDate(selectedEditDate);
}

taskDateBtn.onclick = () => {
  datePickerMode = "add";
  const [y, m] = selectedTaskDate.split("-").map(Number);
  dpCurrentDate = new Date(y, m - 1, 1);
  datePickerTitle.textContent = "📅 انتخاب تاریخ";
  renderDatePicker();
  datePickerModal.classList.add("active");
};

editTaskDateBtn.onclick = () => {
  datePickerMode = "edit";
  const [y, m] = selectedEditDate.split("-").map(Number);
  dpCurrentDate = new Date(y, m - 1, 1);
  datePickerTitle.textContent = "📅 ویرایش تاریخ";
  renderDatePicker();
  datePickerModal.classList.add("active");
};

closeDatePicker.onclick = () => {
  datePickerModal.classList.remove("active");
};

datePickerModal.onclick = (e) => {
  if (e.target === datePickerModal) datePickerModal.classList.remove("active");
};

dpPrevMonth.onclick = () => {
  dpCurrentDate.setMonth(dpCurrentDate.getMonth() - 1);
  renderDatePicker();
};

dpNextMonth.onclick = () => {
  dpCurrentDate.setMonth(dpCurrentDate.getMonth() + 1);
  renderDatePicker();
};

dpShortcutBtns.forEach(btn => {
  btn.onclick = () => {
    const days = parseInt(btn.dataset.days);
    const d = new Date();
    d.setDate(d.getDate() + days);
    const key = dateToKey(d);
    if (datePickerMode === "add") {
      selectedTaskDate = key;
      updateTaskDateLabel();
    } else {
      selectedEditDate = key;
      updateEditDateLabel();
    }
    datePickerModal.classList.remove("active");
    playSound("tick");
  };
});

// ================= نوار دسته‌ها =================
function renderTagsBar() {
  tagsList.innerHTML = "";
  const allChip = document.createElement("button");
  allChip.className = "tag-chip" + (currentTagFilter === "all" ? " active" : "");
  allChip.textContent = "همه";
  if (currentTagFilter === "all") { allChip.style.background = "#6c5ce7"; allChip.style.borderColor = "#6c5ce7"; }
  allChip.onclick = () => { currentTagFilter = "all"; renderTagsBar(); renderTasks(); };
  tagsList.appendChild(allChip);

  const noneChip = document.createElement("button");
  noneChip.className = "tag-chip" + (currentTagFilter === "none" ? " active" : "");
  noneChip.textContent = "بدون دسته";
  if (currentTagFilter === "none") { noneChip.style.background = "#6c5ce7"; noneChip.style.borderColor = "#6c5ce7"; }
  noneChip.onclick = () => { currentTagFilter = "none"; renderTagsBar(); renderTasks(); };
  tagsList.appendChild(noneChip);

  tags.forEach(tag => {
    const chip = document.createElement("button");
    chip.className = "tag-chip" + (currentTagFilter === tag.id ? " active" : "");
    chip.textContent = "🏷️ " + tag.name;
    if (currentTagFilter === tag.id) { chip.style.background = tag.color; chip.style.borderColor = tag.color; }
    chip.onclick = () => { currentTagFilter = tag.id; renderTagsBar(); renderTasks(); };
    tagsList.appendChild(chip);
  });
}

// ================= ساخت آیتم کار =================
function createTaskItem(task) {
  const item = document.createElement("div");
  item.className = "task-item priority-" + (task.priority || "normal");

  const expandBtn = document.createElement("button");
  expandBtn.className = "expand-btn";
  expandBtn.textContent = "◀";
  expandBtn.title = "زیرکارها";

  let subtaskContainer = null;
  expandBtn.onclick = () => {
    if (!subtaskContainer) return;
    subtaskContainer.classList.toggle("open");
    expandBtn.classList.toggle("open");
  };
  item.appendChild(expandBtn);

  const circle = document.createElement("div");
  circle.className = "circle";
  const progress = subtaskProgress(task);
  if (task.done) {
    circle.classList.add("checked");
    circle.textContent = "✓";
  } else if (progress && progress.done > 0 && progress.done < progress.total) {
    circle.classList.add("partial");
    circle.textContent = "•";
  }
  circle.onclick = () => toggleTask(task.id);
  item.appendChild(circle);

  const text = document.createElement("span");
  text.className = "task-text" + (task.done ? " done" : "");
  let html = "";
  html += `<span class="task-content">${highlightText(task.text, searchQuery)}</span>`;
  if (task.tagId) {
    const tag = getTagById(task.tagId);
    if (tag) html += buildTagBadge(tag);
  }
  text.innerHTML = html;
  item.appendChild(text);

  if (task.repeat) {
    const rep = document.createElement("span");
    rep.className = "repeat-badge";
    rep.textContent = "🔁";
    rep.title = getRepeatLabel(task.repeat);
    item.appendChild(rep);
  }

  if (task.reminderTime) {
    const rem = document.createElement("span");
    rem.className = "task-reminder-badge";
    rem.innerHTML = `🔔 ${task.reminderTime}`;
    if (task.done) rem.style.opacity = "0.4";
    item.appendChild(rem);
  }

  if (progress) {
    const counter = document.createElement("span");
    counter.className = "subtask-counter";
    counter.textContent = `${progress.done}/${progress.total}`;
    item.appendChild(counter);
  }

  const editBtn = document.createElement("button");
  editBtn.className = "icon-btn";
  editBtn.textContent = "✏️";
  editBtn.onclick = () => openEditModal(task.id);
  item.appendChild(editBtn);

  const delBtn = document.createElement("button");
  delBtn.className = "icon-btn";
  delBtn.textContent = "🗑";
  delBtn.onclick = () => deleteTask(task.id);
  item.appendChild(delBtn);

  subtaskContainer = document.createElement("div");
  subtaskContainer.className = "subtasks";

  if (task.subtasks) {
    task.subtasks.forEach(sub => {
      const subItem = document.createElement("div");
      subItem.className = "subtask";
      const subCircle = document.createElement("div");
      subCircle.className = "circle" + (sub.done ? " checked" : "");
      subCircle.textContent = "✓";
      subCircle.onclick = () => toggleSubtask(task.id, sub.id);
      subItem.appendChild(subCircle);
      const subText = document.createElement("span");
      subText.className = "subtask-text" + (sub.done ? " done" : "");
      subText.textContent = sub.text;
      subItem.appendChild(subText);
      const subDel = document.createElement("button");
      subDel.className = "icon-btn";
      subDel.textContent = "🗑";
      subDel.onclick = () => deleteSubtask(task.id, sub.id);
      subItem.appendChild(subDel);
      subtaskContainer.appendChild(subItem);
    });
  }

  const addRow = document.createElement("div");
  addRow.className = "add-subtask-row";
  const addInput = document.createElement("input");
  addInput.type = "text";
  addInput.className = "add-subtask-input";
  addInput.placeholder = "➕ زیرکار جدید...";
  const addBtn2 = document.createElement("button");
  addBtn2.className = "add-subtask-btn";
  addBtn2.textContent = "افزودن";
  const doAdd = () => {
    const val = addInput.value.trim();
    if (val === "") return;
    addSubtask(task.id, val);
  };
  addBtn2.onclick = doAdd;
  addInput.addEventListener("keypress", (e) => { if (e.key === "Enter") doAdd(); });
  addRow.appendChild(addInput);
  addRow.appendChild(addBtn2);
  subtaskContainer.appendChild(addRow);

  const wrapper = document.createElement("div");
  wrapper.className = "task-wrapper";
  wrapper.appendChild(item);
  wrapper.appendChild(subtaskContainer);
  wrapper._subtasksEl = subtaskContainer;
  wrapper._expandBtn = expandBtn;
  return wrapper;
}

// ================= رندر لیست کارها =================
function renderTasks() {
  taskList.innerHTML = "";
  let filtered = tasks;
  if (currentFilter !== "all") {
    filtered = filtered.filter(t => (t.priority || "normal") === currentFilter);
  }
  if (currentTagFilter === "none") {
    filtered = filtered.filter(t => !t.tagId);
  } else if (currentTagFilter !== "all") {
    filtered = filtered.filter(t => t.tagId === currentTagFilter);
  }
  if (searchQuery.trim() !== "") {
    const q = searchQuery.trim().toLowerCase();
    filtered = filtered.filter(t => t.text.toLowerCase().includes(q));
  }
  if (filtered.length === 0) {
    emptyMsg.style.display = "block";
    if (searchQuery.trim() !== "") emptyMsg.textContent = "چیزی برای این جستجو پیدا نشد مهندس! 🔍";
    else emptyMsg.textContent = "هنوز هیچ کاری نداری مهندس! 😴";
    return;
  }
  emptyMsg.style.display = "none";

  const groups = {};
  filtered.forEach(t => {
    if (!groups[t.date]) groups[t.date] = [];
    groups[t.date].push(t);
  });

  const tk = todayKey();
  const sortedDates = Object.keys(groups).sort((a, b) => {
    if (a === tk) return -1;
    if (b === tk) return 1;
    if (a > tk && b > tk) return a.localeCompare(b);
    if (a < tk && b < tk) return b.localeCompare(a);
    return a > tk ? -1 : 1;
  });

  sortedDates.forEach(dateKey => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "date-group";
    const dayTasks = groups[dateKey];
    dayTasks.sort((a, b) => priorityWeight(b.priority) - priorityWeight(a.priority));
    const doneCount = dayTasks.filter(t => t.done).length;
    let dayLabel = formatDate(dateKey);
    const isToday = dateKey === tk;
    const isTomorrow = dateKey === tomorrowKey();
    if (isToday) dayLabel += " (امروز)";
    else if (isTomorrow) dayLabel += " (فردا)";
    const header = document.createElement("div");
    header.className = "date-header";
    header.innerHTML = `<span>📅 ${dayLabel}</span><small>${doneCount}/${dayTasks.length} ✅</small>`;
    groupDiv.appendChild(header);
    dayTasks.forEach(task => {
      const wrapper = createTaskItem(task);
      groupDiv.appendChild(wrapper);
      if (task.subtasks && task.subtasks.length > 0) {
        wrapper._subtasksEl.classList.add("open");
        wrapper._expandBtn.classList.add("open");
      }
    });
    taskList.appendChild(groupDiv);
  });
}

// ================= عملیات کار =================
function addTask() {
  const text = input.value.trim();
  if (text === "") return;
  const subtaskText = subtaskInput.value.trim();
  const reminderTime = taskTimeInput.value || null;

  let repeat = null;
  if (repeatCheck.checked) {
    const type = repeatType.value;
    if (type === "custom") {
      if (selectedWeekdays.length === 0) {
        showToast("⚠️ حداقل یه روز هفته انتخاب کن", "error");
        return;
      }
      repeat = { type: "custom", days: [...selectedWeekdays] };
    } else {
      repeat = { type: type };
    }
  }

  if (reminderTime && "Notification" in window && Notification.permission !== "granted") {
    showToast("⚠️ برای یادآور، اجازه نوتیفیکیشن بده", "info", 4000);
  }

  const newTask = {
    id: Date.now(),
    text: text,
    done: false,
    date: selectedTaskDate,
    priority: prioritySelect.value,
    tagId: tagSelect.value || null,
    reminderTime: reminderTime,
    reminderNotified: false,
    subtasks: [],
    repeat: repeat,
    parentId: null
  };

  if (subtaskText !== "") {
    newTask.subtasks.push({ id: Date.now() + 1, text: subtaskText, done: false });
  }

  tasks.push(newTask);
  stats.totalCreated = (stats.totalCreated || 0) + 1;
  saveStats();

  if (repeat) generateRecurringTasks();

  input.value = "";
  prioritySelect.value = "normal";
  tagSelect.value = "";
  taskTimeInput.value = "";
  subtaskInput.value = "";
  selectedTaskDate = todayKey();
  updateTaskDateLabel();
  repeatCheck.checked = false;
  repeatType.style.display = "none";
  weekdaysRow.style.display = "none";
  selectedWeekdays = [];
  weekdayBtns.forEach(b => b.classList.remove("active"));

  save();
  playSound("add");
  renderTasks();
  renderGoal();

  if (repeat) {
    showToast("🔁 کار تکرارشونده ساخته شد", "success");
  } else if (reminderTime) {
    showToast(`🔔 یادآور برای ${reminderTime} تنظیم شد`, "success");
  }
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  const wasDone = task.done;
  task.done = !task.done;

  if (task.done) {
    const today = todayKey();
    if (!stats.doneDates.includes(today)) stats.doneDates.push(today);
    stats.totalDone = (stats.totalDone || 0) + 1;

    const hour = new Date().getHours();
    if (hour < 12) {
      stats.beforeNoonCount = (stats.beforeNoonCount || 0) + 1;
      if (stats.beforeNoonCount >= 5) unlockAchievement("earlyBird");
    }
    if (hour >= 21) {
      stats.afterNightCount = (stats.afterNightCount || 0) + 1;
      if (stats.afterNightCount >= 5) unlockAchievement("nightOwl");
    }

    saveStats();
    playSound("tick");

    if (stats.totalDone >= 1) unlockAchievement("first");
    if (stats.totalDone >= 10) unlockAchievement("ten");
    if (stats.totalDone >= 100) unlockAchievement("hundred");
  } else {
    playSound("untick");
  }

  if (task.done && task.subtasks && task.subtasks.length > 0) {
    task.subtasks.forEach(s => s.done = true);
  }
  if (!task.done && task.subtasks && task.subtasks.length > 0) {
    task.subtasks.forEach(s => s.done = false);
  }

  save();

  const wasGoalDone = wasDone === false && checkGoalComplete();
  if (wasGoalDone) {
    stats.goalsCompleted = (stats.goalsCompleted || 0) + 1;
    saveStats();
    playSound("celebrate");
    showToast("🎉 هدف امروزت رو کامل کردی!", "success", 4000);

    if (stats.goalsCompleted >= 3) unlockAchievement("goal3");
    if (stats.goalsCompleted >= 10) unlockAchievement("goal10");
  }

  renderTasks();
  renderGoal();
  renderStreak();
}

function checkGoalComplete() {
  const todayTasks = tasks.filter(t => t.date === todayKey());
  const doneToday = todayTasks.filter(t => t.done).length;
  return doneToday === dailyGoal;
}

function deleteTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  if (task.repeat) {
    if (!confirm("🔁 این کار تکرارشونده‌ست.\n\nفقط همین نسخه حذف بشه؟ (تکرار همچنان ادامه داره)")) {
      return;
    }
  }

  tasks = tasks.filter(t => t.id !== id);
  save();
  playSound("delete");
  renderTasks();
  renderGoal();
  if (task.repeat) showToast("🗑 نسخه حذف شد، تکرار ادامه داره", "success");
}

// ================= مودال ویرایش =================
function openEditModal(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;
  editingTaskId = taskId;
  editTaskText.value = task.text;
  selectedEditDate = task.date || todayKey();
  updateEditDateLabel();
  editTaskTime.value = task.reminderTime || "";
  editTaskPriority.value = task.priority || "normal";
  editTaskTag.value = task.tagId || "";
  editingSubtasks = (task.subtasks || []).map(s => ({ ...s }));

  if (task.repeat) {
    editRepeatInfo.style.display = "flex";
    editRepeatLabel.textContent = getRepeatLabel(task.repeat);
  } else {
    editRepeatInfo.style.display = "none";
  }

  renderEditTagSelect();
  renderEditSubtasks();
  editNewSubtask.value = "";
  editModal.classList.add("active");
  setTimeout(() => editTaskText.focus(), 100);
}

function renderEditTagSelect() {
  editTaskTag.innerHTML = '<option value="">🏷️ بدون دسته</option>';
  tags.forEach(tag => {
    const opt = document.createElement("option");
    opt.value = tag.id;
    opt.textContent = "🏷️ " + tag.name;
    editTaskTag.appendChild(opt);
  });
  const task = tasks.find(t => t.id === editingTaskId);
  if (task && task.tagId) editTaskTag.value = task.tagId;
}

function renderEditSubtasks() {
  editSubtasksList.innerHTML = "";
  if (editingSubtasks.length === 0) {
    editSubtasksList.innerHTML = '<p class="edit-no-subtask">هنوز زیرکاری نداری</p>';
    return;
  }
  editingSubtasks.forEach((sub, index) => {
    const item = document.createElement("div");
    item.className = "edit-subtask-item";
    const text = document.createElement("span");
    text.className = "subtask-text";
    text.textContent = sub.text;
    item.appendChild(text);
    const delBtn = document.createElement("button");
    delBtn.className = "edit-subtask-del";
    delBtn.textContent = "🗑";
    delBtn.onclick = () => { editingSubtasks.splice(index, 1); renderEditSubtasks(); };
    item.appendChild(delBtn);
    editSubtasksList.appendChild(item);
  });
}

function addEditSubtask() {
  const text = editNewSubtask.value.trim();
  if (text === "") return;
  editingSubtasks.push({ id: Date.now(), text: text, done: false });
  editNewSubtask.value = "";
  renderEditSubtasks();
}

function saveEditModal() {
  const task = tasks.find(t => t.id === editingTaskId);
  if (!task) return;
  const newText = editTaskText.value.trim();
  if (newText === "") { showToast("⚠️ متن خالی نباشه", "error"); return; }
  task.text = newText;
  task.date = selectedEditDate;
  task.priority = editTaskPriority.value;
  task.tagId = editTaskTag.value || null;
  const newReminder = editTaskTime.value || null;
  const reminderChanged = task.reminderTime !== newReminder;
  task.reminderTime = newReminder;
  if (reminderChanged) task.reminderNotified = false;
  task.subtasks = editingSubtasks;
  if (task.subtasks.length > 0 && task.subtasks.every(s => s.done)) task.done = true;
  else if (task.subtasks.length > 0) task.done = false;
  save();
  editModal.classList.remove("active");
  editingTaskId = null;
  editingSubtasks = [];
  renderTasks();
  renderGoal();
  renderCalendar();
  showToast("✅ تغییرات ذخیره شد", "success");
}

// 🔥 توقف تکرار
stopRepeatBtn.onclick = () => {
  const task = tasks.find(t => t.id === editingTaskId);
  if (!task) return;
  if (!confirm("⏹ تکرار این کار متوقف بشه؟\n\nنسخه‌های آینده (انجام‌نشده) حذف می‌شن و دیگه ساخته نمی‌شن.")) return;

  const parentId = task.parentId || task.id;
  tasks = tasks.filter(t => {
    if (t.parentId === parentId && !t.done && t.date > todayKey()) return false;
    return true;
  });
  if (task.parentId) task.parentId = null;
  task.repeat = null;
  save();
  playSound("delete");
  editModal.classList.remove("active");
  editingTaskId = null;
  renderTasks();
  renderCalendar();
  showToast("⏹ تکرار متوقف شد", "success");
};

// 🔥 حذف کامل همه نسخه‌های تکرارشونده
deleteAllRepeatBtn.onclick = () => {
  const task = tasks.find(t => t.id === editingTaskId);
  if (!task) return;
  if (!confirm("🗑 حذف کامل تکرارشونده!\n\nهمه نسخه‌های این کار (گذشته، حال، آینده) حذف می‌شن.\n\nمطمئنی؟")) return;
  if (!confirm("🛑 آخرین هشدار!\n\nاین کار قابل بازگشت نیست.")) return;

  const parentId = task.parentId || task.id;

  // حذف همه نسخه‌های این تکرار (خود parent + همه بچه‌ها)
  tasks = tasks.filter(t => {
    if (t.id === parentId) return false;
    if (t.parentId === parentId) return false;
    return true;
  });

  save();
  playSound("delete");
  editModal.classList.remove("active");
  editingTaskId = null;
  renderTasks();
  renderGoal();
  renderCalendar();
  showToast("🗑 همه نسخه‌ها حذف شد", "success");
};

closeEditModal.onclick = () => { editModal.classList.remove("active"); editingTaskId = null; editingSubtasks = []; };
editCancelBtn.onclick = () => { editModal.classList.remove("active"); editingTaskId = null; editingSubtasks = []; };
editModal.onclick = (e) => {
  if (e.target === editModal) { editModal.classList.remove("active"); editingTaskId = null; editingSubtasks = []; }
};
editSaveBtn.onclick = saveEditModal;
editAddSubtaskBtn.onclick = addEditSubtask;
editNewSubtask.addEventListener("keypress", (e) => { if (e.key === "Enter") addEditSubtask(); });

// ================= عملیات زیرکار =================
function addSubtask(taskId, text) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;
  if (!task.subtasks) task.subtasks = [];
  task.subtasks.push({ id: Date.now(), text: text, done: false });
  save();
  if (task.done) task.done = false;
  renderTasks();
}

function toggleSubtask(taskId, subId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;
  const sub = task.subtasks.find(s => s.id === subId);
  if (!sub) return;
  sub.done = !sub.done;
  const allDone = task.subtasks.length > 0 && task.subtasks.every(s => s.done);
  task.done = allDone;
  save();
  renderTasks();
  renderGoal();
}

function deleteSubtask(taskId, subId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;
  task.subtasks = task.subtasks.filter(s => s.id !== subId);
  if (task.subtasks.length === 0 && task.done) task.done = false;
  save();
  renderTasks();
}

// ================= صفحه نمایش جدا =================
function openViewPage(type) {
  currentViewType = type;
  previousPage = "dashboardPage";

  let filtered = [], title = "";
  if (type === "all") { filtered = [...tasks]; title = "📋 همه کارها"; }
  else if (type === "done") { filtered = tasks.filter(t => t.done); title = "✅ کارهای انجام‌شده"; }
  else if (type === "pending") { filtered = tasks.filter(t => !t.done); title = "⏳ کارهای باقی‌مانده"; }
  else if (type === "today") { filtered = tasks.filter(t => t.date === todayKey()); title = "📅 کارهای امروز"; }
  else if (type === "tomorrow") { filtered = tasks.filter(t => t.date === tomorrowKey()); title = "📅 کارهای فردا"; }
  viewTitle.textContent = title;
  viewList.innerHTML = "";
  if (filtered.length === 0) {
    viewEmpty.style.display = "block";
  } else {
    viewEmpty.style.display = "none";
    filtered.sort((a, b) => {
      const dateCmp = (b.date || "").localeCompare(a.date || "");
      if (dateCmp !== 0) return dateCmp;
      return priorityWeight(b.priority) - priorityWeight(a.priority);
    });
    filtered.forEach(task => {
      const item = document.createElement("div");
      item.className = `view-item priority-${task.priority || "normal"}`;
      const circle = document.createElement("div");
      circle.className = "circle" + (task.done ? " checked" : "");
      circle.textContent = "✓";
      circle.onclick = () => toggleViewTask(task.id);
      item.appendChild(circle);
      const text = document.createElement("span");
      text.className = "view-text" + (task.done ? " done" : "");
      let html = "";
      html += `<span class="view-content">${escapeHtml(task.text)}</span>`;
      if (task.tagId) {
        const tag = getTagById(task.tagId);
        if (tag) html += buildTagBadge(tag);
      }
      text.innerHTML = html;
      item.appendChild(text);
      if (task.repeat) {
        const rep = document.createElement("span");
        rep.className = "repeat-badge";
        rep.textContent = "🔁";
        item.appendChild(rep);
      }
      if (task.reminderTime) {
        const rem = document.createElement("span");
        rem.className = "task-reminder-badge";
        rem.innerHTML = `🔔 ${task.reminderTime}`;
        if (task.done) rem.style.opacity = "0.4";
        item.appendChild(rem);
      }
      const progress = subtaskProgress(task);
      if (progress) {
        const counter = document.createElement("span");
        counter.className = "subtask-counter";
        counter.textContent = `${progress.done}/${progress.total}`;
        item.appendChild(counter);
      }
      const dateSpan = document.createElement("span");
      dateSpan.className = "view-date";
      dateSpan.textContent = formatDate(task.date);
      item.appendChild(dateSpan);
      viewList.appendChild(item);
    });
  }
  pages.forEach(p => p.classList.remove("active"));
  viewPage.classList.add("active");
  bottomNav.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleViewTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  const wasDone = task.done;
  task.done = !task.done;
  if (task.done) {
    if (!stats.doneDates.includes(todayKey())) stats.doneDates.push(todayKey());
    stats.totalDone = (stats.totalDone || 0) + 1;
    saveStats();
    playSound("tick");
    if (stats.totalDone >= 1) unlockAchievement("first");
    if (stats.totalDone >= 10) unlockAchievement("ten");
    if (stats.totalDone >= 100) unlockAchievement("hundred");
  } else {
    playSound("untick");
  }
  if (task.done && task.subtasks && task.subtasks.length > 0) {
    task.subtasks.forEach(s => s.done = true);
  }
  if (!task.done && task.subtasks && task.subtasks.length > 0) {
    task.subtasks.forEach(s => s.done = false);
  }
  save();
  if (currentViewType === "custom-day") {
    const dateKey = task.date;
    const [y, m, d] = dateKey.split("-").map(Number);
    openDayTasks(dateKey, new Date(y, m - 1, d));
  } else {
    openViewPage(currentViewType);
  }
  renderGoal();
  renderStreak();
}

backBtn.onclick = () => {
  pages.forEach(p => p.classList.remove("active"));

  if (previousPage === "calendarPage") {
    document.getElementById("calendarPage").classList.add("active");
    renderCalendar();
    bottomNav.classList.remove("hidden");
    navBtns.forEach(b => b.classList.remove("active"));
    document.querySelector('.nav-btn[data-page="calendarPage"]').classList.add("active");
  } else {
    document.getElementById("dashboardPage").classList.add("active");
    bottomNav.classList.remove("hidden");
    navBtns.forEach(b => b.classList.remove("active"));
    document.querySelector('.nav-btn[data-page="dashboardPage"]').classList.add("active");
    renderDashboard();
  }
};

statCards.forEach(card => { card.onclick = () => openViewPage(card.dataset.jump); });

clearAllBtn.onclick = () => {
  if (tasks.length === 0) return;
  if (confirm("مطمئنی می‌خوای همه کارها رو پاک کنی؟")) {
    tasks = [];
    save();
    renderTasks();
    renderGoal();
    renderCalendar();
    showToast("🗑 همه کارها پاک شد", "success");
  }
};

filterBtns.forEach(btn => {
  btn.onclick = () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTasks();
  };
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.style.display = searchQuery ? "block" : "none";
  renderTasks();
});

clearSearchBtn.onclick = () => {
  searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  renderTasks();
};

// ================= مدیریت دسته‌ها =================
function renderTagSelect() {
  tagSelect.innerHTML = '<option value="">بدون دسته</option>';
  tags.forEach(tag => {
    const opt = document.createElement("option");
    opt.value = tag.id;
    opt.textContent = tag.name;
    tagSelect.appendChild(opt);
  });
}

function renderTagsManageList() {
  tagsManageList.innerHTML = "";
  if (tags.length === 0) {
    tagsManageList.innerHTML = '<p class="empty">هنوز دسته‌ای نساختی.</p>';
    return;
  }
  tags.forEach(tag => {
    const count = tasks.filter(t => t.tagId === tag.id).length;
    const item = document.createElement("div");
    item.className = "tag-manage-item";
    item.innerHTML = `<span class="tag-manage-color" style="background:${tag.color}"></span><span class="tag-manage-name">${escapeHtml(tag.name)}</span><span class="tag-manage-count">${count} کار</span>`;
    const delBtn = document.createElement("button");
    delBtn.className = "tag-manage-del";
    delBtn.textContent = "🗑";
    delBtn.onclick = () => {
      if (confirm(`دسته «${tag.name}» حذف بشه؟`)) {
        tags = tags.filter(t => t.id !== tag.id);
        tasks.forEach(task => { if (task.tagId === tag.id) task.tagId = null; });
        save(); saveTags();
        if (currentTagFilter === tag.id) currentTagFilter = "all";
        renderTagsManageList();
        renderTagSelect();
        renderTagsBar();
        renderTasks();
      }
    };
    item.appendChild(delBtn);
    tagsManageList.appendChild(item);
  });
}

manageTagsBtn.onclick = () => { tagsModal.classList.add("active"); renderTagsManageList(); };
closeTagsModal.onclick = () => { tagsModal.classList.remove("active"); };
tagsModal.onclick = (e) => { if (e.target === tagsModal) tagsModal.classList.remove("active"); };

addTagBtn.onclick = () => {
  const name = newTagName.value.trim();
  if (name === "") return;
  const color = newTagColor.value;
  const id = "tag_" + Date.now();
  tags.push({ id, name, color });
  saveTags();
  newTagName.value = "";
  newTagColor.value = "#6c5ce7";
  renderTagsManageList();
  renderTagSelect();
  renderTagsBar();
};

newTagName.addEventListener("keypress", (e) => { if (e.key === "Enter") addTagBtn.click(); });

// ================= هدف روزانه =================
goalNumBtns.forEach(btn => { btn.onclick = () => setDailyGoal(btn.dataset.goal); });

saveGoalBtn.onclick = () => {
  const val = customGoalInput.value.trim();
  if (val) { setDailyGoal(val); customGoalInput.value = ""; }
  else showToast("⚠️ عدد وارد کن", "error");
};

editGoalBtn.onclick = () => {
  customGoalInput2.value = dailyGoal;
  goalModal.classList.add("active");
  updateGoalBtns();
};

closeGoalModal.onclick = () => { goalModal.classList.remove("active"); };
goalModal.onclick = (e) => { if (e.target === goalModal) goalModal.classList.remove("active"); };

const goalNumBtns2 = goalModal.querySelectorAll(".goal-num-btn");
goalNumBtns2.forEach(btn => {
  btn.onclick = () => {
    const g = parseInt(btn.dataset.goal);
    customGoalInput2.value = g;
    goalNumBtns2.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  };
});

saveGoalBtn2.onclick = () => {
  const val = customGoalInput2.value.trim();
  if (val) { setDailyGoal(val); goalModal.classList.remove("active"); }
  else showToast("⚠️ عدد وارد کن", "error");
};

// ================= Streak + Achievements رویدادها =================
streakCard.onclick = () => {
  const streak = calculateStreak();
  if (streak === 0) {
    showToast("🔥 هنوز زنجیری نداری! یه کار انجام بده تا شروع بشه.", "info", 4000);
  } else if (streak >= 7) {
    showToast(`🔥 عالی! ${toPersianNumber(streak)} روز پشت‌هم!`, "success", 3500);
  } else {
    showToast(`🔥 ${toPersianNumber(streak)} روز پشت‌هم! ادامه بده!`, "success", 3500);
  }
};

achievementsCard.onclick = () => {
  renderAchievementsList();
  achievementsModal.classList.add("active");
};

closeAchModal.onclick = () => {
  achievementsModal.classList.remove("active");
};

achievementsModal.onclick = (e) => {
  if (e.target === achievementsModal) achievementsModal.classList.remove("active");
};

// ================= Sounds رویدادها =================
soundEnabled.checked = soundSettings.enabled;
soundVolume.value = soundSettings.volume;
soundVolumeValue.textContent = toPersianNumber(soundSettings.volume) + "٪";

soundEnabled.onchange = () => {
  soundSettings.enabled = soundEnabled.checked;
  saveSoundSettings();
  if (soundEnabled.checked) {
    playSound("tick");
    showToast("🔊 صداها فعال شد", "success");
  } else {
    showToast("🔇 صداها خاموش شد", "info");
  }
};

soundVolume.oninput = () => {
  soundSettings.volume = parseInt(soundVolume.value);
  soundVolumeValue.textContent = toPersianNumber(soundSettings.volume) + "٪";
  saveSoundSettings();
};

soundVolume.onchange = () => { playSound("tick"); };

soundTestBtns.forEach(btn => {
  btn.onclick = () => {
    const type = btn.dataset.sound;
    if (type === "tick") playSound("tick");
    else if (type === "add") playSound("add");
    else if (type === "delete") playSound("delete");
    else if (type === "celebrate") playSound("celebrate");
    else if (type === "achievement") playSound("achievement");
  };
});

// ================= تکرار رویدادها =================
repeatCheck.onchange = () => {
  if (repeatCheck.checked) {
    repeatType.style.display = "block";
    if (repeatType.value === "custom") weekdaysRow.style.display = "flex";
  } else {
    repeatType.style.display = "none";
    weekdaysRow.style.display = "none";
  }
};

repeatType.onchange = () => {
  if (repeatType.value === "custom" && repeatCheck.checked) weekdaysRow.style.display = "flex";
  else weekdaysRow.style.display = "none";
};

weekdayBtns.forEach(btn => {
  btn.onclick = () => {
    const day = parseInt(btn.dataset.day);
    if (selectedWeekdays.includes(day)) {
      selectedWeekdays = selectedWeekdays.filter(d => d !== day);
      btn.classList.remove("active");
    } else {
      selectedWeekdays.push(day);
      btn.classList.add("active");
    }
  };
});

// ================= نوتیفیکیشن =================
askNotifBtn.onclick = requestNotificationPermission;

// ================= تنظیمات =================
settingsBtn.onclick = () => {
  settingsModal.classList.add("active");
  updateStats();
  updateNotifStatus();
  updateGoalBtns();
};

closeSettingsModal.onclick = () => { settingsModal.classList.remove("active"); };
settingsModal.onclick = (e) => { if (e.target === settingsModal) settingsModal.classList.remove("active"); };

exportBtn.onclick = () => {
  try {
    const data = {
      version: 8,
      exportDate: new Date().toISOString(),
      exportDatePersian: toPersianDate(new Date()),
      dailyGoal: dailyGoal,
      tasks: tasks,
      tags: tags,
      stats: stats,
      soundSettings: soundSettings
    };
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const now = new Date();
    const dateStr = dateToKey(now);
    const filename = `todo-backup-${dateStr}.json`;
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`✅ فایل دانلود شد`, "success", 3500);
  } catch (err) {
    showToast("❌ خطا", "error");
  }
};

importBtn.onclick = () => { importFile.click(); };

importFile.onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.tasks || !Array.isArray(data.tasks)) {
        showToast("❌ فایل نامعتبره!", "error");
        importFile.value = "";
        return;
      }
      const taskCount = data.tasks.length;
      const tagCount = data.tags ? data.tags.length : 0;
      if (!confirm(`⚠️ بازیابی، همه کارهای فعلی رو پاک می‌کنه.\n\n${taskCount} کار و ${tagCount} دسته.\n\nادامه؟`)) {
        importFile.value = "";
        return;
      }
      tasks = data.tasks;
      tasks.forEach(t => {
        if (!t.subtasks) t.subtasks = [];
        if (!t.repeat) t.repeat = null;
        if (!t.parentId) t.parentId = null;
      });
      if (data.tags && Array.isArray(data.tags)) tags = data.tags;
      if (data.dailyGoal) { dailyGoal = data.dailyGoal; saveGoal(); }
      if (data.stats) { stats = data.stats; saveStats(); }
      if (data.soundSettings) { soundSettings = data.soundSettings; saveSoundSettings(); }
      save(); saveTags();
      renderTagSelect();
      renderTagsBar();
      renderTagsManageList();
      renderTasks();
      renderDashboard();
      updateStats();
      updateGoalBtns();
      settingsModal.classList.remove("active");
      showToast(`✅ ${taskCount} کار بازیابی شد!`, "success", 4000);
    } catch (err) {
      showToast("❌ خطا در خواندن فایل", "error");
    }
    importFile.value = "";
  };
  reader.readAsText(file);
};

resetAllBtn.onclick = () => {
  if (tasks.length === 0 && tags.length === 0) {
    showToast("ℹ️ چیزی برای پاک کردن نیست", "info");
    return;
  }
  if (!confirm("⚠️ همه کارها و دسته‌ها پاک می‌شن!\n\nمطمئنی؟")) return;
  if (!confirm("🛑 آخرین هشدار!")) return;
  tasks = [];
  tags = [];
  save(); saveTags();
  renderTagSelect();
  renderTagsBar();
  renderTagsManageList();
  renderTasks();
  renderDashboard();
  updateStats();
  settingsModal.classList.remove("active");
  showToast("🗑 همه چیز پاک شد", "success", 3500);
};

// ================= رویدادها =================
addBtn.onclick = addTask;
input.addEventListener("keypress", (e) => { if (e.key === "Enter") addTask(); });
subtaskInput.addEventListener("keypress", (e) => { if (e.key === "Enter") addTask(); });

// ================= تم =================
function applyTheme(isLight) {
  if (isLight) {
    document.body.classList.add("light");
    themeBtn.textContent = "🌙";
  } else {
    document.body.classList.remove("light");
    themeBtn.textContent = "☀️";
  }
  if (typeof Chart !== "undefined" && myChart !== null) {
    setTimeout(() => renderChart(), 100);
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") applyTheme(true);
else if (savedTheme === "dark") applyTheme(false);
else {
  const hour = new Date().getHours();
  applyTheme(hour >= 7 && hour < 19);
}

themeBtn.onclick = () => {
  const isLight = !document.body.classList.contains("light");
  applyTheme(isLight);
  localStorage.setItem("theme", isLight ? "light" : "dark");
};

// ================= شروع =================
generateRecurringTasks();

selectedTaskDate = todayKey();
selectedEditDate = todayKey();
updateTaskDateLabel();
updateEditDateLabel();

renderTagSelect();
renderTagsBar();
renderTasks();
renderDashboard();
renderCalendar();
updateStats();
updateNotifStatus();
updateGoalBtns();

window.addEventListener("load", () => {
  setTimeout(() => {
    if (typeof Chart !== "undefined") renderChart();
  }, 300);
});

document.body.addEventListener("click", () => {
  initAudio();
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}, { once: true });