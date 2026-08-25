const STORAGE_KEY = "accessibility-field-app-state-v1";
const SESSION_API_KEY = "accessibility-field-app-openai-api-key";

const catalog = {
  clusters: [
    { id: "built", name: 'מתו"ס ותשתיות' },
    { id: "service", name: "נגישות השירות" },
    { id: "digital", name: "דיגיטל וטכנולוגיה" },
    { id: "special", name: "נגישות ייעודית" },
  ],
  siteTypes: [
    { id: "building", cluster: "built", name: "מבנה ציבורי" },
    { id: "open_space", cluster: "built", name: "שטח ציבורי פתוח" },
    { id: "sidewalk", cluster: "built", name: "מדרכה / דרך נגישה" },
    { id: "bus_stop", cluster: "built", name: "תחנת אוטובוס" },
    { id: "pedestrian_bridge", cluster: "built", name: "גשר הולכי רגל" },
    { id: "beach", cluster: "built", name: "חוף רחצה" },
    { id: "cemetery", cluster: "built", name: "בית עלמין" },
    { id: "sports_facility", cluster: "built", name: "מתקן ספורט" },
    { id: "service_center", cluster: "service", name: "מרכז שירות / סניף" },
    { id: "organizational_service", cluster: "service", name: "שירות ארגוני / נהלים" },
    { id: "telephone_center", cluster: "service", name: "מוקד טלפוני / נתב שיחות" },
    { id: "public_information", cluster: "service", name: "מידע לציבור ופרסום הסדרי נגישות" },
    { id: "event", cluster: "service", name: "אירוע / כנס" },
    { id: "food_service", cluster: "service", name: "מסעדה / שירותי הסעדה" },
    { id: "website", cluster: "digital", name: "אתר אינטרנט" },
    { id: "mobile_app", cluster: "digital", name: "אפליקציה סלולרית" },
    { id: "kiosk", cluster: "digital", name: "קיוסק / מכונת שירות עצמי" },
    { id: "assistive_technology", cluster: "digital", name: "עזרים וטכנולוגיות נגישות" },
    { id: "accommodation", cluster: "special", name: "יחידת אכסון / מלון" },
    { id: "education", cluster: "special", name: "מוסד חינוך" },
    { id: "health", cluster: "special", name: "מוסד בריאות" },
    { id: "higher_education", cluster: "special", name: "השכלה גבוהה" },
    { id: "park", cluster: "special", name: "פארק" },
    { id: "emergency", cluster: "special", name: "שעת חירום / מרחב מוגן" },
  ],
  checklistTemplates: {
    building: [
      {
        id: "CHK-B1",
        title: "רוחב דרך נגישה",
        threshold: "90 ס\"מ מינימום נטו",
        sourceRefs: ["ת\"י 1918 חלק 1", "FR-4.2", "NFR-19"],
      },
      {
        id: "CHK-B2",
        title: "כניסה נגישה ללא מדרגה לא מטופלת",
        threshold: "רצף נגיש מלא",
        sourceRefs: ["ת\"י 1918 חלק 3.1", "FR-4.3"],
      },
      {
        id: "CHK-B3",
        title: "שילוט והכוונה",
        threshold: "קריא, עקבי ונגיש",
        sourceRefs: ["FR-11.6", "NFR-11"],
      },
    ],
    open_space: [
      {
        id: "CHK-O1",
        title: "רציפות משטח הליכה",
        threshold: "ללא מכשולים מסכנים",
        sourceRefs: ["ת\"י 1918 חלק 2", "FR-5.1"],
      },
      {
        id: "CHK-O2",
        title: "ריהוט רחוב נגיש",
        threshold: "מיקום שלא חוסם מעבר",
        sourceRefs: ["FR-4.1", "FR-4.4"],
      },
    ],
    bus_stop: [
      {
        id: "CHK-S1",
        title: "רחבת המתנה נגישה",
        threshold: "גישה רציפה ורוחב מעבר תקין",
        sourceRefs: ["FR-2.1", "FR-4.2"],
      },
      {
        id: "CHK-S2",
        title: "שילוט תחנה קריא",
        threshold: "ניגודיות וזיהוי ברור",
        sourceRefs: ["NFR-11", "FR-11.4"],
      },
    ],
    service_center: [
      {
        id: "CHK-SVC1",
        title: "פרסום הסדרי נגישות",
        threshold: "זמין וברור לציבור",
        sourceRefs: ["FR-11.6"],
      },
      {
        id: "CHK-SVC2",
        title: "הדרכת עובדים",
        threshold: "תוקף ומעקב הדרכה",
        sourceRefs: ["FR-11.3"],
      },
    ],
    event: [
      {
        id: "CHK-E1",
        title: "רצף נגישות לאירוע",
        threshold: "מהרישום ועד היציאה",
        sourceRefs: ["FR-13.2"],
      },
    ],
    website: [
      {
        id: "CHK-W1",
        title: "בדיקת אתר נפרדת לגרסה",
        threshold: "שמירת URL, גרסה ותאריך",
        sourceRefs: ["FR-12.1"],
      },
      {
        id: "CHK-W2",
        title: "ממצאים ידניים וכלי בדיקה",
        threshold: "תיעוד כלי ותוצאה",
        sourceRefs: ["FR-12.1", "NFR-9"],
      },
    ],
    kiosk: [
      {
        id: "CHK-K1",
        title: "גובה רכיבי הפעלה",
        threshold: "גישה פיזית ותפעול נגיש",
        sourceRefs: ["FR-12.2", "FR-12.3"],
      },
      {
        id: "CHK-K2",
        title: "משוב חזותי וקולי",
        threshold: "אפשרות שימוש ללא ראייה",
        sourceRefs: ["FR-12.3"],
      },
    ],
  },
};

catalog.siteTypes.forEach((siteType) => {
  if (!catalog.checklistTemplates[siteType.id]) {
    catalog.checklistTemplates[siteType.id] = createBaselineChecklist(siteType);
  }
});

function createBaselineChecklist(siteType) {
  const prefix = siteType.id.toUpperCase().replaceAll("_", "-");
  return [
    {
      id: `CHK-${prefix}-1`,
      title: `רצף נגישות עבור ${siteType.name}`,
      threshold: "בדיקה לפי תחולה, מסלול גישה והשימוש באתר",
      sourceRefs: ["FR-2.1", "FR-4.1", "ת\"י 1918 לפי תחולה"],
    },
    {
      id: `CHK-${prefix}-2`,
      title: "מידע, שילוט ושירות נגישים",
      threshold: "מידע ברור וחלופה נגישה כאשר נדרשת",
      sourceRefs: ["FR-4.2", "FR-11.4", "FR-11.6"],
    },
    {
      id: `CHK-${prefix}-3`,
      title: "בדיקת תחולה מקצועית",
      threshold: "אימות מקור, סוג שימוש, מועד וחריגים לפני הכרעה",
      sourceRefs: ["FR-13.4", "NFR-19"],
    },
  ];
}

const defaultState = {
  settings: {
    apiKeyMasked: "",
    visionModel: "gpt-4.1-mini",
    reasoningModel: "o4-mini",
    confidenceThreshold: 0.8,
    privacyNotes: "המפתח נשמר לזמן הסשן בלבד. צילום נשלח ל-OpenAI רק לאחר לחיצה מפורשת על \"נתח צילום עם AI\".",
  },
  inspections: [],
  issues: [],
  activeInspectionId: null,
  auditLog: [],
  pendingSyncCount: 0,
};

let state = loadState();
let reportInspectionId = null;

const els = {
  navLinks: [...document.querySelectorAll(".nav-link")],
  views: {
    dashboard: document.getElementById("dashboard-view"),
    inspection: document.getElementById("inspection-view"),
    issues: document.getElementById("issues-view"),
    settings: document.getElementById("settings-view"),
  },
  systemStatus: document.getElementById("system-status"),
  statsGrid: document.getElementById("stats-grid"),
  severityBreakdown: document.getElementById("severity-breakdown"),
  recentInspections: document.getElementById("recent-inspections"),
  inspectionForm: document.getElementById("inspection-form"),
  checklistContainer: document.getElementById("checklist-container"),
  inspectionWorkspace: document.getElementById("inspection-workspace"),
  activeInspectionName: document.getElementById("active-inspection-name"),
  activeInspectionMeta: document.getElementById("active-inspection-meta"),
  issuesList: document.getElementById("issues-list"),
  statusFilter: document.getElementById("status-filter"),
  settingsForm: document.getElementById("settings-form"),
  settingsSummary: document.getElementById("settings-summary"),
  seedDemo: document.getElementById("seed-demo"),
  clearData: document.getElementById("clear-data"),
  saveDraft: document.getElementById("save-draft"),
  prepareReport: document.getElementById("prepare-report"),
  correctionReport: document.getElementById("correction-report"),
  correctionReportContent: document.getElementById("correction-report-content"),
  saveCorrectionReport: document.getElementById("save-correction-report"),
  exportJson: document.getElementById("export-json"),
  exportCsv: document.getElementById("export-csv"),
  installApp: document.getElementById("install-app"),
  checklistTemplate: document.getElementById("checklist-item-template"),
};

let installPromptEvent = null;

init();

function init() {
  populateInspectionForm();
  bindEvents();
  registerServiceWorker();
  render();
  switchView(viewFromHash());
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(action) {
  if (action) {
    state.auditLog.unshift({
      id: crypto.randomUUID(),
      action,
      at: new Date().toISOString(),
    });
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bindEvents() {
  els.navLinks.forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  window.addEventListener("hashchange", () => switchView(viewFromHash()));

  els.inspectionForm.addEventListener("submit", handleCreateInspection);
  els.inspectionForm.cluster.addEventListener("change", populateSiteTypes);
  els.statusFilter.addEventListener("change", renderIssues);
  els.settingsForm.addEventListener("submit", handleSaveSettings);
  els.seedDemo.addEventListener("click", seedDemoData);
  els.clearData.addEventListener("click", resetData);
  els.saveDraft.addEventListener("click", () => {
    saveState("draft_saved");
    renderSystemStatus("הטיוטה נשמרה מקומית.");
  });
  els.prepareReport.addEventListener("click", () => {
    reportInspectionId = state.activeInspectionId;
    renderCorrectionReport();
  });
  els.saveCorrectionReport.addEventListener("click", saveCorrectionReport);
  els.exportJson.addEventListener("click", exportJson);
  els.exportCsv.addEventListener("click", exportCsv);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPromptEvent = event;
    els.installApp.classList.remove("hidden");
  });
  window.addEventListener("appinstalled", () => {
    installPromptEvent = null;
    els.installApp.classList.add("hidden");
    renderSystemStatus("האפליקציה הותקנה במכשיר.");
  });
  els.installApp.addEventListener("click", async () => {
    if (!installPromptEvent) return;
    installPromptEvent.prompt();
    await installPromptEvent.userChoice;
    installPromptEvent = null;
    els.installApp.classList.add("hidden");
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && window.isSecureContext) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      renderSystemStatus("לא ניתן היה להפעיל מטמון אופליין.");
    });
  }
}

function populateInspectionForm() {
  els.inspectionForm.cluster.innerHTML = catalog.clusters
    .map((cluster) => `<option value="${cluster.id}">${cluster.name}</option>`)
    .join("");
  populateSiteTypes();
}

function populateSiteTypes() {
  const clusterId = els.inspectionForm.cluster.value;
  const options = catalog.siteTypes.filter((item) => item.cluster === clusterId);
  els.inspectionForm.siteType.innerHTML = options
    .map((item) => `<option value="${item.id}">${item.name}</option>`)
    .join("");
}

function switchView(viewName) {
  const validView = Object.hasOwn(els.views, viewName) ? viewName : "dashboard";
  els.navLinks.forEach((button) => {
    const isActive = button.dataset.view === validView;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });
  Object.entries(els.views).forEach(([name, view]) => view.classList.toggle("is-active", name === validView));
}

function viewFromHash() {
  const name = window.location.hash.replace("#", "");
  return Object.hasOwn(els.views, name) ? name : "dashboard";
}

function handleCreateInspection(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const siteType = formData.get("siteType");
  const inspection = {
    id: crypto.randomUUID(),
    cluster: formData.get("cluster"),
    siteType,
    siteName: formData.get("siteName"),
    address: formData.get("address"),
    inspector: formData.get("inspector"),
    gps: formData.get("gps"),
    notes: formData.get("notes"),
    createdAt: new Date().toISOString(),
    status: "draft",
    checklist: catalog.checklistTemplates[siteType].map((item) => ({
      ...item,
      reviewStatus: "unreviewed",
      issueId: null,
    })),
  };

  state.inspections.unshift(inspection);
  state.activeInspectionId = inspection.id;
  state.pendingSyncCount += 1;
  saveState("inspection_created");
  event.currentTarget.reset();
  populateInspectionForm();
  render();
  switchView("inspection");
}

function render() {
  renderSystemStatus();
  renderDashboard();
  renderActiveInspection();
  renderCorrectionReport();
  renderIssues();
  renderSettings();
}

function renderSystemStatus(message) {
  const activeInspection = state.inspections.find((item) => item.id === state.activeInspectionId);
  const rows = [
    ["משתמש", "Single-user local profile"],
    ["סטטוס AI", state.settings.apiKeyMasked ? "BYOK הוגדר" : "ללא מפתח שמור"],
    ["ממתין לסנכרון", String(state.pendingSyncCount)],
    ["ביקורת פעילה", activeInspection ? activeInspection.siteName : "אין"],
    ["הודעה", message || "הנתונים נשמרים בדפדפן המקומי"],
  ];
  els.systemStatus.innerHTML = rows.map(([term, value]) => `<dt>${term}</dt><dd>${value}</dd>`).join("");
}

function renderDashboard() {
  const openIssues = state.issues.filter((issue) => issue.lifecycle !== "closed");
  const stats = [
    { label: "סבבי ביקורת", value: state.inspections.length },
    { label: "ליקויים פתוחים", value: openIssues.length },
    { label: "ליקויים סגורים", value: state.issues.filter((issue) => issue.lifecycle === "closed").length },
    { label: "אירועי Audit", value: state.auditLog.length },
  ];
  els.statsGrid.innerHTML = stats
    .map((item) => `<article class="stat-card"><span class="muted">${item.label}</span><strong>${item.value}</strong></article>`)
    .join("");

  const severityLabels = {
    low: "קל",
    medium: "בינוני",
    high: "חמור",
    blocking: "מונע גישה",
  };
  const severityCounts = Object.keys(severityLabels).map((key) => ({
    key,
    label: severityLabels[key],
    count: openIssues.filter((issue) => issue.severity === key).length,
  }));
  els.severityBreakdown.innerHTML = severityCounts
    .map((item) => `<div class="list-row"><strong>${item.label}</strong><span>${item.count}</span></div>`)
    .join("");

  els.recentInspections.innerHTML = state.inspections.length
    ? state.inspections
        .slice(0, 5)
        .map(
          (inspection) => `
            <div class="list-row">
              <strong>${inspection.siteName}</strong>
              <div class="muted small">${siteTypeLabel(inspection.siteType)} · ${formatDate(inspection.createdAt)}</div>
            </div>
          `,
        )
        .join("")
    : `<div class="list-row">עדיין לא נפתחו ביקורות.</div>`;
}

function renderActiveInspection() {
  const inspection = state.inspections.find((item) => item.id === state.activeInspectionId);
  if (!inspection) {
    els.inspectionWorkspace.classList.add("hidden");
    return;
  }

  els.inspectionWorkspace.classList.remove("hidden");
  els.activeInspectionName.textContent = inspection.siteName;
  els.activeInspectionMeta.textContent = `${siteTypeLabel(inspection.siteType)} · ${inspection.address} · ${inspection.inspector}`;
  els.checklistContainer.innerHTML = "";

  inspection.checklist.forEach((item) => {
    const fragment = els.checklistTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".check-item");
    const title = fragment.querySelector(".item-title");
    const meta = fragment.querySelector(".item-meta");
    const badge = fragment.querySelector(".badge");
    const issueFields = fragment.querySelector(".issue-fields");
    const descriptionInput = fragment.querySelector(".issue-description");
    const severitySelect = fragment.querySelector(".severity-select");
    const photoInput = fragment.querySelector(".issue-photo");
    const analyzeButton = fragment.querySelector(".analyze-photo");
    const aiResult = fragment.querySelector(".ai-result");
    const aiReviewControls = fragment.querySelector(".ai-review-controls");
    const radios = [...fragment.querySelectorAll('input[type="radio"]')];

    title.textContent = item.title;
    meta.textContent = `${item.id} · ${item.threshold} · ${item.sourceRefs.join(", ")}`;

    if (item.reviewStatus !== "unreviewed") {
      badge.textContent = statusText(item.reviewStatus);
      badge.classList.toggle("fail", item.reviewStatus === "fail");
      badge.classList.toggle("pass", item.reviewStatus === "pass");
    }

    radios.forEach((radio) => {
      radio.name = `${inspection.id}-${item.id}`;
      radio.checked = radio.value === item.reviewStatus;
      radio.addEventListener("change", () => {
        item.reviewStatus = radio.value;
        if (radio.value === "fail") {
          issueFields.classList.remove("hidden");
          badge.textContent = "ליקוי";
          badge.classList.add("fail");
          createOrUpdateIssue(inspection, item, descriptionInput.value, severitySelect.value, photoInput.files[0]);
        } else {
          issueFields.classList.add("hidden");
          badge.textContent = statusText(radio.value);
          badge.classList.remove("fail");
          badge.classList.toggle("pass", radio.value === "pass");
          if (item.issueId) archiveIssue(item.issueId, radio.value);
        }
        saveState("checklist_item_updated");
        render();
      });
    });

    descriptionInput.addEventListener("input", () => {
      if (item.reviewStatus === "fail") {
        createOrUpdateIssue(inspection, item, descriptionInput.value, severitySelect.value, photoInput.files[0]);
        saveState("issue_description_updated");
      }
    });

    severitySelect.addEventListener("change", () => {
      if (item.reviewStatus === "fail") {
        createOrUpdateIssue(inspection, item, descriptionInput.value, severitySelect.value, photoInput.files[0]);
        saveState("issue_severity_updated");
        render();
      }
    });

    photoInput.addEventListener("change", () => {
      if (item.reviewStatus === "fail") {
        createOrUpdateIssue(inspection, item, descriptionInput.value, severitySelect.value, photoInput.files[0]);
        saveState("issue_photo_attached");
      }
    });

    analyzeButton.addEventListener("click", async () => {
      if (!photoInput.files[0]) {
        aiResult.textContent = "יש לבחור צילום לפני ניתוח AI.";
        return;
      }
      if (!getApiKey()) {
        aiResult.textContent = "יש להזין OpenAI API Key בהגדרות עבור סשן זה.";
        switchView("settings");
        return;
      }
      analyzeButton.disabled = true;
      aiResult.textContent = "מנתח את הצילום...";
      try {
        const assessment = await analyzePhotoWithOpenAI(photoInput.files[0], inspection, item);
        const issue = state.issues.find((entry) => entry.id === item.issueId);
        if (issue) {
          issue.aiStatus = "PENDING_HUMAN_REVIEW";
          issue.aiAssessment = assessment;
          if (!descriptionInput.value && assessment.observation) {
            descriptionInput.value = assessment.observation;
            issue.description = assessment.observation;
          }
          saveState("photo_analyzed_with_ai");
        }
        renderAiAssessment(issue, aiResult, aiReviewControls);
        renderIssues();
        renderSystemStatus("ניתוח AI התקבל וממתין לאישור אנושי.");
      } catch (error) {
        aiResult.textContent = `הניתוח לא הושלם: ${error.message}`;
      } finally {
        analyzeButton.disabled = false;
      }
    });

    if (item.reviewStatus === "fail") {
      issueFields.classList.remove("hidden");
      const issue = state.issues.find((entry) => entry.id === item.issueId);
      if (issue) {
        descriptionInput.value = issue.description;
        severitySelect.value = issue.severity;
        if (issue.aiAssessment) {
          renderAiAssessment(issue, aiResult, aiReviewControls);
        }
      }
    }

    els.checklistContainer.appendChild(card);
  });
}

function renderAiAssessment(issue, resultElement, controlsElement) {
  if (!issue?.aiAssessment) {
    resultElement.textContent = "";
    controlsElement.classList.add("hidden");
    controlsElement.replaceChildren();
    return;
  }

  const assessment = issue.aiAssessment;
  const confidence = Math.round(Number(assessment.confidence || 0) * 100);
  resultElement.textContent = [
    `תצפית AI: ${assessment.observation || "לא נמסרה תצפית."}`,
    `הערכת AI: ${recommendationLabel(assessment.recommendation)}`,
    `פעולה מוצעת: ${assessment.recommendedAction || "נדרשת בדיקה מקצועית בשטח."}`,
    `בסיס נורמטיבי מוצע: ${assessment.legalBasis || "נדרש אימות תחולה מקצועי."}`,
    `מגבלות: ${assessment.limitations || "הערכה מצילום בלבד."}`,
    `ודאות: ${confidence}%`,
  ].join("\n");

  controlsElement.classList.remove("hidden");
  controlsElement.replaceChildren();
  const status = document.createElement("strong");
  if (issue.aiStatus === "PENDING_HUMAN_REVIEW") {
    status.textContent = "הכרעה אנושית נדרשת עבור הצעת ה-AI:";
    const approveButton = document.createElement("button");
    approveButton.type = "button";
    approveButton.textContent = "אשר הצעת AI";
    approveButton.addEventListener("click", () => reviewAiAssessment(issue.id, "approved"));
    const rejectButton = document.createElement("button");
    rejectButton.type = "button";
    rejectButton.className = "ghost reject-ai";
    rejectButton.textContent = "דחה הצעת AI";
    rejectButton.addEventListener("click", () => reviewAiAssessment(issue.id, "rejected"));
    controlsElement.append(status, approveButton, rejectButton);
  } else {
    status.textContent = issue.aiStatus === "HUMAN_APPROVED" ? "הצעת ה-AI אושרה אנושית." : "הצעת ה-AI נדחתה אנושית.";
    controlsElement.append(status);
  }
}

function renderCorrectionReport() {
  const inspection = state.inspections.find((item) => item.id === reportInspectionId);
  if (!inspection) {
    els.correctionReport.classList.add("hidden");
    return;
  }

  const issues = state.issues
    .filter((issue) => issue.inspectionId === inspection.id && issue.lifecycle !== "closed")
    .sort((a, b) => correctionPriorityRank(a.severity) - correctionPriorityRank(b.severity));
  els.correctionReport.classList.remove("hidden");
  els.correctionReportContent.replaceChildren();

  if (!issues.length) {
    const empty = document.createElement("div");
    empty.className = "list-row";
    empty.textContent = "אין ליקויים פתוחים בביקורת זו, ולכן אין פעולות תיקון להציג.";
    els.correctionReportContent.append(empty);
    return;
  }

  issues.forEach((issue, index) => {
    const entry = document.createElement("article");
    entry.className = "issue-card";
    const heading = document.createElement("strong");
    heading.textContent = `${index + 1}. ${issue.title}`;
    const priority = document.createElement("p");
    priority.textContent = `עדיפות: ${correctionPriority(issue.severity)}`;
    const action = document.createElement("p");
    action.textContent = `לביצוע: ${issue.aiAssessment?.recommendedAction || issue.description || "בדיקה מקצועית והסרת הליקוי שתועד."}`;
    const basis = document.createElement("p");
    basis.className = "muted small";
    basis.textContent = `בסיס נורמטיבי לבדיקה: ${issue.aiAssessment?.legalBasis || legalBasesForInspection(inspection, issue).join("; ")}`;
    entry.append(heading, priority, action, basis);
    els.correctionReportContent.append(entry);
  });
}

function saveCorrectionReport() {
  const inspection = state.inspections.find((item) => item.id === reportInspectionId);
  if (!inspection) return;
  const issues = state.issues
    .filter((issue) => issue.inspectionId === inspection.id && issue.lifecycle !== "closed")
    .sort((a, b) => correctionPriorityRank(a.severity) - correctionPriorityRank(b.severity));
  const lines = [
    `# דוח תיקון ליקויי נגישות: ${inspection.siteName}`,
    "",
    `תאריך ביקורת: ${formatDate(inspection.createdAt)}`,
    `כתובת: ${inspection.address}`,
    `מבצע הסקר: ${inspection.inspector}`,
    "",
    "## פעולות לתיקון",
    "",
  ];
  if (!issues.length) lines.push("אין ליקויים פתוחים בביקורת זו.");
  issues.forEach((issue, index) => {
    lines.push(`${index + 1}. ${issue.title}`);
    lines.push(`   - עדיפות: ${correctionPriority(issue.severity)}`);
    lines.push(`   - לביצוע: ${issue.aiAssessment?.recommendedAction || issue.description || "בדיקה מקצועית והסרת הליקוי שתועד."}`);
    lines.push(`   - בסיס נורמטיבי לבדיקה: ${issue.aiAssessment?.legalBasis || legalBasesForInspection(inspection, issue).join("; ")}`);
    lines.push("");
  });
  lines.push("הערה: המקור המוצג הוא עזר לבדיקת תחולה ואינו מחליף הכרעה של מורשה/יועץ נגישות מוסמך.");
  downloadFile(`correction-report-${inspection.siteName.replaceAll(/[^\p{L}\p{N}]+/gu, "-")}.md`, lines.join("\n"), "text/markdown;charset=utf-8");
}

function correctionPriority(severity) {
  const labels = {
    blocking: "מיידי - מונע גישה",
    high: "דחוף - לטיפול בהקדם",
    medium: "חשוב - לתכנון ותיקון קרוב",
    low: "מתוכנן - לשילוב בתחזוקה",
  };
  return labels[severity] || "נדרש תיעדוף מקצועי";
}

function correctionPriorityRank(severity) {
  return { blocking: 1, high: 2, medium: 3, low: 4 }[severity] || 5;
}

function reviewAiAssessment(issueId, decision) {
  const issue = state.issues.find((entry) => entry.id === issueId);
  if (!issue) return;
  issue.aiStatus = decision === "approved" ? "HUMAN_APPROVED" : "HUMAN_REJECTED";
  issue.aiReviewedAt = new Date().toISOString();
  saveState(`ai_assessment_${decision}`);
  render();
  renderSystemStatus(decision === "approved" ? "הצעת ה-AI אושרה אנושית." : "הצעת ה-AI נדחתה אנושית.");
}

function createOrUpdateIssue(inspection, checklistItem, description, severity, photoFile) {
  let issue = state.issues.find((entry) => entry.id === checklistItem.issueId);
  const photoName = photoFile?.name || issue?.photoName || "PENDING_PHOTO";
  if (!issue) {
    issue = {
      id: crypto.randomUUID(),
      inspectionId: inspection.id,
      checklistId: checklistItem.id,
      title: checklistItem.title,
      description: description || "ללא תיאור",
      severity,
      lifecycle: "open",
      siteName: inspection.siteName,
      siteType: inspection.siteType,
      createdAt: new Date().toISOString(),
      dueDate: addDays(14),
      photoName,
      gps: inspection.gps || "לא הוזן",
      aiStatus: "PENDING_AI",
      sourceRefs: checklistItem.sourceRefs,
    };
    state.issues.unshift(issue);
    checklistItem.issueId = issue.id;
  } else {
    issue.description = description || issue.description;
    issue.severity = severity;
    issue.photoName = photoName;
  }
}

async function analyzePhotoWithOpenAI(photoFile, inspection, checklistItem) {
  const imageUrl = await readFileAsDataUrl(photoFile);
  const legalBases = legalBasesForInspection(inspection, checklistItem);
  const prompt = [
    "אתה מסייע לבודק נגישות. נתח את הצילום בהקשר של פריט הצ'קליסט בלבד.",
    `פריט: ${checklistItem.title}.`,
    `סף נדרש: ${checklistItem.threshold}.`,
    `סוג אתר: ${siteTypeLabel(inspection.siteType)}.`,
    `בסיסים נורמטיביים אפשריים לבדיקה: ${legalBases.join(" | ")}.`,
    "החזר בעברית תצפית קונקרטית על מה שנראה בצילום, כולל האלמנטים שנצפו והקשרם לפריט. אם אין די ראיות, הסבר בדיוק מה חסר. אל תקבע תאימות או כשל סופיים.",
  ].join(" ");
  const schema = {
    type: "object",
    additionalProperties: false,
    properties: {
      observation: { type: "string" },
      recommendation: { type: "string", enum: ["possible_accessibility_issue", "no_clear_accessibility_issue", "insufficient_evidence"] },
      recommendedAction: { type: "string" },
      legalBasis: { type: "string", enum: legalBases },
      confidence: { type: "number", minimum: 0, maximum: 1 },
      limitations: { type: "string" },
    },
    required: ["observation", "recommendation", "recommendedAction", "legalBasis", "confidence", "limitations"],
  };
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getApiKey()}`,
    },
    body: JSON.stringify({
      model: state.settings.visionModel,
      input: [{ role: "user", content: [{ type: "input_text", text: prompt }, { type: "input_image", image_url: imageUrl }] }],
      text: { format: { type: "json_schema", name: "accessibility_photo_assessment", strict: true, schema } },
    }),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error?.message || "שגיאה בתקשורת עם OpenAI.");
  const output = payload.output_text || payload.output?.flatMap((item) => item.content || []).find((item) => item.type === "output_text")?.text;
  if (!output) throw new Error("לא התקבלה תשובת ניתוח תקינה.");
  const assessment = JSON.parse(output);
  assessment.confidence = Number(assessment.confidence);
  return assessment;
}

function legalBasesForInspection(inspection, checklistItem) {
  const directStandard = checklistItem.sourceRefs.find((source) => source.startsWith('ת"י 1918'));
  const bases = ["חוק שוויון זכויות לאנשים עם מוגבלות, תשנ״ח-1998"];
  if (directStandard) bases.push(directStandard);
  if (inspection.cluster === "built") bases.push('ת"י 1918 והתקנות החלות לפי סוג המקום והמסלול');
  if (inspection.cluster === "service" || inspection.cluster === "digital") {
    bases.push("תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע״ג-2013");
  }
  if (inspection.cluster === "special") bases.push("דרישות נגישות ייעודיות לפי תחום השימוש והתחולה");
  return [...new Set(bases)];
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("לא ניתן לקרוא את הצילום."));
    reader.readAsDataURL(file);
  });
}

function getApiKey() {
  return sessionStorage.getItem(SESSION_API_KEY) || "";
}

function archiveIssue(issueId, reviewStatus) {
  const issue = state.issues.find((entry) => entry.id === issueId);
  if (!issue) return;
  issue.lifecycle = reviewStatus === "pass" ? "closed" : issue.lifecycle;
}

function renderIssues() {
  const filter = els.statusFilter.value;
  const issues = state.issues.filter((issue) => (filter === "all" ? true : issue.lifecycle === filter));
  els.issuesList.innerHTML = issues.length
    ? issues
        .map(
          (issue) => `
            <article class="issue-card">
              <header>
                <div>
                  <strong>${issue.title}</strong>
                  <div class="muted small">${issue.siteName} · ${siteTypeLabel(issue.siteType)}</div>
                </div>
                <span class="badge ${issue.lifecycle === "closed" ? "pass" : "fail"}">${lifecycleLabel(issue.lifecycle)}</span>
              </header>
              <p>${issue.description}</p>
              <div class="issue-meta">
                <span class="pill">חומרה: ${severityLabel(issue.severity)}</span>
                <span class="pill">יעד: ${issue.dueDate}</span>
                <span class="pill">צילום: ${issue.photoName}</span>
                <span class="pill">AI: ${issue.aiStatus}</span>
              </div>
              <label class="full">
                <span>עדכן סטטוס</span>
                <select data-issue-id="${issue.id}" class="lifecycle-select">
                  ${["open", "assigned", "in_progress", "pending_verification", "closed"]
                    .map(
                      (value) =>
                        `<option value="${value}" ${issue.lifecycle === value ? "selected" : ""}>${lifecycleLabel(value)}</option>`,
                    )
                    .join("")}
                </select>
              </label>
            </article>
          `,
        )
        .join("")
    : `<div class="issue-card">אין ליקויים בתצוגה הנוכחית.</div>`;

  document.querySelectorAll(".lifecycle-select").forEach((select) => {
    select.addEventListener("change", () => {
      const issue = state.issues.find((entry) => entry.id === select.dataset.issueId);
      if (!issue) return;
      issue.lifecycle = select.value;
      saveState("issue_lifecycle_updated");
      render();
    });
  });
}

function handleSaveSettings(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const apiKey = String(formData.get("apiKey") || "");
  if (apiKey) sessionStorage.setItem(SESSION_API_KEY, apiKey);
  state.settings = {
    apiKeyMasked: apiKey ? `${apiKey.slice(0, 3)}...${apiKey.slice(-4)}` : state.settings.apiKeyMasked,
    visionModel: String(formData.get("visionModel")),
    reasoningModel: String(formData.get("reasoningModel")),
    confidenceThreshold: Number(formData.get("confidenceThreshold")),
    privacyNotes: String(formData.get("privacyNotes")),
  };
  saveState("settings_saved");
  render();
}

function renderSettings() {
  els.settingsForm.visionModel.value = state.settings.visionModel;
  els.settingsForm.reasoningModel.value = state.settings.reasoningModel;
  els.settingsForm.confidenceThreshold.value = state.settings.confidenceThreshold;
  els.settingsForm.privacyNotes.value = state.settings.privacyNotes;
  els.settingsSummary.innerHTML = `
    <strong>מצב נוכחי</strong><br />
    מפתח בסשן: ${getApiKey() ? state.settings.apiKeyMasked || "הוגדר" : "לא הוגדר"}<br />
    Vision: ${state.settings.visionModel}<br />
    Reasoning: ${state.settings.reasoningModel}<br />
    סף ודאות: ${state.settings.confidenceThreshold}
  `;
}

function seedDemoData() {
  state = structuredClone(defaultState);
  const inspection = {
    id: crypto.randomUUID(),
    cluster: "built",
    siteType: "building",
    siteName: "מרכז שירות עירוני",
    address: "הרצל 12, תל אביב",
    inspector: "רכז נגישות",
    gps: "32.066, 34.777",
    notes: "ביקורת הדגמה",
    createdAt: new Date().toISOString(),
    status: "draft",
    checklist: catalog.checklistTemplates.building.map((item) => ({
      ...item,
      reviewStatus: item.id === "CHK-B1" ? "fail" : "pass",
      issueId: null,
    })),
  };
  state.inspections.push(inspection);
  state.activeInspectionId = inspection.id;
  createOrUpdateIssue(inspection, inspection.checklist[0], "רוחב המעבר נמדד כ-76 ס\"מ ליד עמדת הכניסה.", "high");
  state.pendingSyncCount = 2;
  saveState("demo_seeded");
  render();
}

function resetData() {
  state = structuredClone(defaultState);
  saveState("data_reset");
  render();
}

function exportJson() {
  downloadFile("accessibility-field-data.json", JSON.stringify(state, null, 2), "application/json");
}

function exportCsv() {
  const headers = ["id", "siteName", "title", "severity", "lifecycle", "dueDate", "aiStatus"];
  const rows = state.issues.map((issue) =>
    [issue.id, issue.siteName, issue.title, issue.severity, issue.lifecycle, issue.dueDate, issue.aiStatus]
      .map(csvEscape)
      .join(","),
  );
  downloadFile("accessibility-issues.csv", [headers.join(","), ...rows].join("\n"), "text/csv;charset=utf-8");
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("he-IL", { dateStyle: "short", timeStyle: "short" }).format(new Date(value));
}

function addDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function siteTypeLabel(id) {
  return catalog.siteTypes.find((item) => item.id === id)?.name || id;
}

function statusText(status) {
  const labels = {
    unreviewed: "טרם נבדק",
    pass: "תקין",
    fail: "ליקוי",
    na: "לא רלוונטי",
  };
  return labels[status] || status;
}

function lifecycleLabel(status) {
  const labels = {
    open: "פתוח",
    assigned: "הוקצה לטיפול",
    in_progress: "בתיקון",
    pending_verification: "ממתין לאימות",
    closed: "סגור",
  };
  return labels[status] || status;
}

function severityLabel(severity) {
  const labels = {
    low: "קל",
    medium: "בינוני",
    high: "חמור",
    blocking: "מונע גישה",
  };
  return labels[severity] || severity;
}

function recommendationLabel(recommendation) {
  const labels = {
    possible_accessibility_issue: "ייתכן ליקוי נגישות",
    no_clear_accessibility_issue: "לא זוהה ליקוי ברור בצילום",
    insufficient_evidence: "אין מספיק ראיות בצילום",
    review_required: "נדרשת בדיקה מקצועית",
    likely_issue: "ייתכן ליקוי נגישות",
  };
  return labels[recommendation] || recommendation;
}

function csvEscape(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}
