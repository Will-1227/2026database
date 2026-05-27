// 訪客預約系統 i18n（zh-TW / en / vi）
// 越文為初稿，建議找母語人士校對

const I18N_LANG_KEY = "visitorLang";
const I18N_DEFAULT = "zh-TW";

const I18N = {
  "zh-TW": {
    // 共用
    "common.signIn":          "使用 Google 登入",
    "common.signOut":         "登出",
    "common.back":            "← 回首頁",
    "common.save":            "儲存",
    "common.cancel":          "取消",
    "common.submit":          "送出",
    "common.confirm":         "確定",
    "common.delete":          "刪除",
    "common.edit":            "編輯",
    "common.enable":          "啟用",
    "common.disable":         "停用",
    "common.required":        "*",
    "common.optional":        "（選填）",
    "common.copy":            "複製",
    "common.copied":          "已複製",
    "common.copyLink":        "複製連結",
    "common.download":        "下載",
    "common.note":            "備註",
    "common.notSet":          "—",
    "common.individual":      "個人",
    "common.loading":         "載入中…",
    "common.processing":      "處理中…",
    "common.kbCompressed":    "已壓縮為約 {{kb}} KB",

    // 狀態
    "status.pending":         "待核可",
    "status.approved":        "已核可",
    "status.checkedIn":       "已報到",
    "status.checkedOut":      "已離場",
    "status.cancelled":       "已取消",
    "status.approvedAuto":    "已核可（自動）",

    // 語言切換
    "lang.zh-TW":             "繁中",
    "lang.en":                "EN",
    "lang.vi":                "TIẾNG VIỆT",

    // visitor-index
    "index.title":            "訪客預約系統",
    "index.subtitle":         "Firebase 雲端訪客管理",
    "index.book.title":       "訪客預約登記",
    "index.book.desc":        "外部訪客填表，立即取得到訪 QR Code",
    "index.book.tag":         "🌐 公開頁面",
    "index.invite.title":     "員工邀約",
    "index.invite.desc":      "員工主動建立邀約，產生 QR 與分享連結",
    "index.invite.tag":       "🔐 需登入",
    "index.approve.title":    "員工核可",
    "index.approve.desc":     "受訪員工 / 主管核可預約、檢視紀錄",
    "index.approve.tag":      "🔐 需登入",
    "index.gate.title":       "保衛室控台",
    "index.gate.desc":        "今日訪客名單、掃 QR 自動報到",
    "index.gate.tag":         "🔐 需登入",
    "index.vip.title":        "VIP 名冊管理",
    "index.vip.desc":         "維護重要訪客名單、Google Drive 大頭照",
    "index.vip.tag":          "🔐 需登入",

    // visitor-book 表單
    "book.title":             "訪客預約登記",
    "book.subtitle":          "填寫資料後即可取得到訪 QR Code",
    "book.name":              "姓名",
    "book.namePh":            "您的姓名",
    "book.phone":             "電話",
    "book.phonePh":           "0912345678",
    "book.email":             "Email",
    "book.emailPh":           "選填",
    "book.company":           "公司 / 單位",
    "book.companyPh":         "例如：ABC 股份有限公司",
    "book.host":              "受訪員工",
    "book.hostPh":            "您要拜訪的同仁姓名",
    "book.visitAt":           "預計到訪",
    "book.plate":             "車牌（如有）",
    "book.platePh":           "ABC-1234",
    "book.notePh":            "會議主題、攜帶物品等",
    "book.consent":           "我同意提供以上資料供本次到訪用途；資料將於 6 個月後自動刪除。",
    "book.submit":            "送出預約 →",
    "book.bookAgain":         "+ 再預約一筆",

    // visitor-book / confirm 共用
    "confirm.title":          "預約已送出",
    "confirm.qrHint":         "到訪時請出示此 QR 碼",
    "confirm.guestLabel":     "訪客",
    "confirm.companyLabel":   "公司",
    "confirm.hostLabel":      "受訪",
    "confirm.timeLabel":      "時間",
    "confirm.plateLabel":     "車牌",
    "confirm.downloadQr":     "⬇ 下載 QR",
    "confirm.addCalendar":    "📅 加入行事曆",
    "confirm.shareLink":      "📎 可分享連結：",
    "confirm.hint":           "💡 請截圖保存 QR，或複製上方連結保存。<br>到訪當日由保衛室掃描 QR 即可完成報到。",
    "confirm.qrFailed":       "QR 產生失敗：{{msg}}",

    // visitor-confirm 額外
    "confirm.noToken":        "缺少 token，無法顯示預約資料",
    "confirm.notFound":       "找不到此預約紀錄",
    "confirm.loadFailed":     "讀取失敗：{{msg}}",
    "confirm.qrFooter":       "到訪時請出示此 QR 碼",

    // 錯誤訊息
    "err.fillName":           "請填寫姓名",
    "err.fillPhone":          "請填寫電話",
    "err.fillHost":           "請填寫受訪員工",
    "err.fillVisitAt":        "請選擇預計到訪時間",
    "err.fillConsent":        "請勾選同意條款",
    "err.fillVisitorName":    "請填寫訪客姓名",
    "err.badDateTime":        "時間格式錯誤",
    "err.submitFail":         "送出失敗：{{msg}}",
    "err.createFail":         "建立失敗：{{msg}}",
    "err.saveFail":           "儲存失敗：{{msg}}",
    "err.deleteFail":         "刪除失敗：{{msg}}",
    "err.opFail":             "操作失敗：{{msg}}",
    "err.signInFail":         "登入失敗：{{msg}}",
    "err.approveFail":        "核可失敗：{{msg}}",
    "err.rejectFail":         "退件失敗：{{msg}}",
    "err.checkInFail":        "報到失敗：{{msg}}",
    "err.checkOutFail":       "離場失敗：{{msg}}",

    // staff-approve
    "approve.title":          "訪客預約核可",
    "approve.loginTitle":     "員工登入",
    "approve.loginDesc":      "核可訪客預約需要登入企業 Google 帳號",
    "approve.filter.pending": "⏳ 待核可",
    "approve.filter.approved":"✅ 已核可",
    "approve.filter.checkedIn":"🟢 已報到",
    "approve.filter.cancelled":"⛔ 已取消",
    "approve.filter.all":     "全部",
    "approve.empty":          "目前沒有「{{label}}」的預約",
    "approve.emptyAll":       "目前沒有任何的預約",
    "approve.btnApprove":     "✓ 核可",
    "approve.btnReject":      "✕ 退件",
    "approve.btnQr":          "查看 QR",
    "approve.hostPrefix":     "受訪：",
    "approve.confirmReject":  "確定要退件嗎？",

    // staff-invite
    "invite.title":           "邀約訪客",
    "invite.loginTitle":      "員工邀約訪客",
    "invite.loginDesc":       "登入企業 Google 帳號後即可主動建立預約",
    "invite.subtitle":        "直接核可，免再經員工核可流程",
    "invite.visitorName":     "訪客姓名",
    "invite.visitorNamePh":   "王董事長",
    "invite.hostHint":        "預設為您",
    "invite.notePh":          "會議主題、地點、接待 SOP 等",
    "invite.noteHint":        "VIP 勾選時亦作為接待 SOP",
    "invite.vipToggle":       "🌟 標記為 VIP 訪客",
    "invite.vipHint":         "保衛室控台會即時顯示警示與大頭照",
    "invite.vipPhotoLabel":   "VIP 大頭照（選填）",
    "invite.vipPhotoBtn":     "📷 拍照 / 選擇相片",
    "invite.vipPhotoTip":     "手機開啟會跳「拍照 / 照片圖庫 / 選取檔案」原生選單（自動壓縮）",
    "invite.vipPhotoEmpty":   "尚未選擇照片",
    "invite.submit":          "建立邀約並取得 QR →",
    "invite.confirmTitle":    "邀約已建立",
    "invite.shareTitle":      "將此 QR 或下方連結傳給訪客",
    "invite.hint":            "💡 把 QR 圖片或連結貼到 LINE / Slack / Email 給訪客即可。<br>訪客到訪當日由保衛室掃描 QR 完成報到。",
    "invite.inviteAgain":     "+ 再邀約一位",

    // gate-dashboard
    "gate.title":             "保衛室 — 今日訪客",
    "gate.loginTitle":        "保衛室登入",
    "gate.loginDesc":         "請以保衛室專用 Google 帳號登入",
    "gate.scanTitle":         "📷 掃描 QR Code",
    "gate.scanStart":         "啟動相機",
    "gate.scanStop":          "停止",
    "gate.scanIdle":          "尚未掃描",
    "gate.todayList":         "📋 今日預約名單",
    "gate.todayEmpty":        "今日尚無預約紀錄",
    "gate.vipPanel":          "🌟 今日 VIP（{{count}} 位）",
    "gate.btnCheckIn":        "✓ 報到",
    "gate.btnCheckOut":       "離場",
    "gate.metaVisit":         "預約",
    "gate.metaArrival":       "✅ 實到",
    "gate.metaLeave":         "🚪 離場",
    "gate.metaHost":          "受訪：",
    "gate.scanCantParse":     "⚠ 無法解析 QR 內容",
    "gate.scanNotFound":      "❌ 找不到此 QR 對應的預約",
    "gate.scanAutoCheckIn":   "✅ 已自動報到",
    "gate.scanCheckInFail":   "⚠ 報到失敗：{{msg}}",
    "gate.scanNotApproved":   "⏳ 此預約尚未核可，請聯絡受訪人員",
    "gate.scanAlreadyIn":     "ℹ 此訪客已報到過",
    "gate.scanCancelled":     "⛔ 此預約已取消",
    "gate.scanFailedStart":   "無法啟動相機：{{msg}}",
    "gate.scanLibMissing":    "QR 掃描器未載入",
    "gate.vipFlag":           "VIP",

    // admin-vip
    "vip.title":              "VIP 名冊管理",
    "vip.loginTitle":          "主管登入",
    "vip.loginDesc":          "管理 VIP 名冊需要登入 Google 帳號",
    "vip.formAdd":            "＋ 新增 VIP",
    "vip.formEdit":           "✏ 編輯 VIP",
    "vip.fieldName":          "姓名",
    "vip.fieldNameHint":      "與訪客預約姓名一致即自動比對",
    "vip.fieldNamePh":        "王董事長",
    "vip.fieldCompany":       "公司",
    "vip.fieldCompanyPh":     "ABC 集團",
    "vip.fieldTitle":         "職稱",
    "vip.fieldTitlePh":       "董事長 / 執行長",
    "vip.fieldPhone":         "電話",
    "vip.fieldEmail":         "Email",
    "vip.fieldEmailPh":       "vip@company.com",
    "vip.fieldRef":           "備查",
    "vip.fieldPhoto":         "Google Drive 大頭照連結",
    "vip.fieldPhotoHint":     "公開可檢視",
    "vip.fieldPhotoPh":       "https://drive.google.com/file/d/.../view 或檔案 ID",
    "vip.fieldOwner":         "對接窗口員工 Email",
    "vip.fieldOwnerPh":       "staff@company.com",
    "vip.fieldSop":           "接待 SOP 備註",
    "vip.fieldSopPh":         "例：請帶往 9F 貴賓室；總經理會親自接待",
    "vip.photoEmpty":         "尚未設定照片",
    "vip.photoBadLink":       "⚠ 無法解析連結",
    "vip.photoLoadFail":      "⚠ 圖片無法載入<br><small>請確認 Drive 連結已設為「任何人皆可檢視」</small>",
    "vip.listTitle":          "📋 名冊（{{count}} 位）",
    "vip.empty":              "尚無 VIP 資料，請從左側新增",
    "vip.cardInactive":       "（停用）",
    "vip.confirmDelete":      "確定刪除「{{name}}」？此動作無法復原。",
    "vip.errBadDriveLink":    "Drive 連結無法解析，請確認格式",
    "vip.saveChanges":        "儲存變更"
  },

  "en": {
    "common.signIn":          "Sign in with Google",
    "common.signOut":         "Sign out",
    "common.back":            "← Home",
    "common.save":            "Save",
    "common.cancel":          "Cancel",
    "common.submit":          "Submit",
    "common.confirm":         "Confirm",
    "common.delete":          "Delete",
    "common.edit":            "Edit",
    "common.enable":          "Enable",
    "common.disable":         "Disable",
    "common.required":        "*",
    "common.optional":        "(optional)",
    "common.copy":            "Copy",
    "common.copied":          "Link copied",
    "common.copyLink":        "Copy link",
    "common.download":        "Download",
    "common.note":            "Note",
    "common.notSet":          "—",
    "common.individual":      "Individual",
    "common.loading":         "Loading…",
    "common.processing":      "Processing…",
    "common.kbCompressed":    "Compressed to about {{kb}} KB",

    "status.pending":         "Pending",
    "status.approved":        "Approved",
    "status.checkedIn":       "Checked in",
    "status.checkedOut":      "Checked out",
    "status.cancelled":       "Cancelled",
    "status.approvedAuto":    "Approved (auto)",

    "lang.zh-TW":             "繁中",
    "lang.en":                "EN",
    "lang.vi":                "TIẾNG VIỆT",

    "index.title":            "Visitor Booking System",
    "index.subtitle":         "Firebase cloud visitor management",
    "index.book.title":       "Book a Visit",
    "index.book.desc":        "External visitors fill the form and get an arrival QR code",
    "index.book.tag":         "🌐 Public",
    "index.invite.title":     "Staff Invite",
    "index.invite.desc":      "Staff creates an invitation, generates QR and shareable link",
    "index.invite.tag":       "🔐 Sign-in required",
    "index.approve.title":    "Approval",
    "index.approve.desc":     "Host / manager approves bookings and reviews records",
    "index.approve.tag":      "🔐 Sign-in required",
    "index.gate.title":       "Security Desk",
    "index.gate.desc":        "Today's visitor list, scan QR for auto check-in",
    "index.gate.tag":         "🔐 Sign-in required",
    "index.vip.title":        "VIP Roster",
    "index.vip.desc":         "Maintain VIP visitor list with Google Drive photos",
    "index.vip.tag":          "🔐 Sign-in required",

    "book.title":             "Book a Visit",
    "book.subtitle":          "Fill out the form to receive your arrival QR code",
    "book.name":              "Name",
    "book.namePh":            "Your name",
    "book.phone":             "Phone",
    "book.phonePh":           "0912345678",
    "book.email":             "Email",
    "book.emailPh":           "optional",
    "book.company":           "Company / Organization",
    "book.companyPh":         "e.g. ABC Co., Ltd.",
    "book.host":              "Host (employee)",
    "book.hostPh":            "Name of the colleague you visit",
    "book.visitAt":           "Visit time",
    "book.plate":             "Car plate (if any)",
    "book.platePh":           "ABC-1234",
    "book.notePh":            "Meeting topic, items to bring, etc.",
    "book.consent":           "I agree my information is used for this visit only and will be auto-deleted after 6 months.",
    "book.submit":            "Submit →",
    "book.bookAgain":         "+ Book another",

    "confirm.title":          "Booking submitted",
    "confirm.qrHint":         "Please show this QR code on arrival",
    "confirm.guestLabel":     "Visitor",
    "confirm.companyLabel":   "Company",
    "confirm.hostLabel":      "Host",
    "confirm.timeLabel":      "Time",
    "confirm.plateLabel":     "Plate",
    "confirm.downloadQr":     "⬇ Download QR",
    "confirm.addCalendar":    "📅 Add to calendar",
    "confirm.shareLink":      "📎 Shareable link:",
    "confirm.hint":           "💡 Save a screenshot of the QR or copy the link above.<br>On arrival, security scans the QR to check you in.",
    "confirm.qrFailed":       "QR generation failed: {{msg}}",

    "confirm.noToken":        "Token missing — cannot show booking",
    "confirm.notFound":       "Booking not found",
    "confirm.loadFailed":     "Load failed: {{msg}}",
    "confirm.qrFooter":       "Please show this QR code on arrival",

    "err.fillName":           "Please enter your name",
    "err.fillPhone":          "Please enter your phone",
    "err.fillHost":           "Please enter the host",
    "err.fillVisitAt":        "Please select a visit time",
    "err.fillConsent":        "Please tick the consent checkbox",
    "err.fillVisitorName":    "Please enter the visitor's name",
    "err.badDateTime":        "Invalid date / time",
    "err.submitFail":         "Submit failed: {{msg}}",
    "err.createFail":         "Create failed: {{msg}}",
    "err.saveFail":           "Save failed: {{msg}}",
    "err.deleteFail":         "Delete failed: {{msg}}",
    "err.opFail":             "Operation failed: {{msg}}",
    "err.signInFail":         "Sign-in failed: {{msg}}",
    "err.approveFail":        "Approve failed: {{msg}}",
    "err.rejectFail":         "Reject failed: {{msg}}",
    "err.checkInFail":        "Check-in failed: {{msg}}",
    "err.checkOutFail":       "Check-out failed: {{msg}}",

    "approve.title":          "Visitor Approval",
    "approve.loginTitle":     "Staff Sign-in",
    "approve.loginDesc":      "Sign in with your company Google account to approve bookings",
    "approve.filter.pending": "⏳ Pending",
    "approve.filter.approved":"✅ Approved",
    "approve.filter.checkedIn":"🟢 Checked in",
    "approve.filter.cancelled":"⛔ Cancelled",
    "approve.filter.all":     "All",
    "approve.empty":          "No bookings under \"{{label}}\"",
    "approve.emptyAll":       "No bookings",
    "approve.btnApprove":     "✓ Approve",
    "approve.btnReject":      "✕ Reject",
    "approve.btnQr":          "View QR",
    "approve.hostPrefix":     "Host: ",
    "approve.confirmReject":  "Confirm reject?",

    "invite.title":           "Invite a visitor",
    "invite.loginTitle":      "Staff invite",
    "invite.loginDesc":       "Sign in with your company Google account to create invitations",
    "invite.subtitle":        "Approved automatically — no separate approval needed",
    "invite.visitorName":     "Visitor name",
    "invite.visitorNamePh":   "Mr. Wang",
    "invite.hostHint":        "Defaults to you",
    "invite.notePh":          "Meeting topic, location, reception SOP, etc.",
    "invite.noteHint":        "Used as reception SOP when VIP is checked",
    "invite.vipToggle":       "🌟 Mark as VIP",
    "invite.vipHint":         "Security desk will show alert and photo",
    "invite.vipPhotoLabel":   "VIP photo (optional)",
    "invite.vipPhotoBtn":     "📷 Take photo / Choose",
    "invite.vipPhotoTip":     "On mobile, opens the native Camera / Photo Library / Files menu (auto-compressed)",
    "invite.vipPhotoEmpty":   "No photo selected",
    "invite.submit":          "Create invite & get QR →",
    "invite.confirmTitle":    "Invitation created",
    "invite.shareTitle":      "Send this QR or link to the visitor",
    "invite.hint":            "💡 Paste the QR image or link to LINE / Slack / Email.<br>Security desk scans the QR on arrival to check in.",
    "invite.inviteAgain":     "+ Invite another",

    "gate.title":             "Security — Today's Visitors",
    "gate.loginTitle":        "Security Sign-in",
    "gate.loginDesc":         "Sign in with the security desk Google account",
    "gate.scanTitle":         "📷 Scan QR Code",
    "gate.scanStart":         "Start camera",
    "gate.scanStop":          "Stop",
    "gate.scanIdle":          "Not scanned yet",
    "gate.todayList":         "📋 Today's bookings",
    "gate.todayEmpty":        "No bookings today",
    "gate.vipPanel":          "🌟 Today's VIPs ({{count}})",
    "gate.btnCheckIn":        "✓ Check in",
    "gate.btnCheckOut":       "Check out",
    "gate.metaVisit":         "Booked",
    "gate.metaArrival":       "✅ Arrived",
    "gate.metaLeave":         "🚪 Left",
    "gate.metaHost":          "Host: ",
    "gate.scanCantParse":     "⚠ Cannot parse QR content",
    "gate.scanNotFound":      "❌ No booking matches this QR",
    "gate.scanAutoCheckIn":   "✅ Auto checked in",
    "gate.scanCheckInFail":   "⚠ Check-in failed: {{msg}}",
    "gate.scanNotApproved":   "⏳ Not approved yet — please contact the host",
    "gate.scanAlreadyIn":     "ℹ Already checked in",
    "gate.scanCancelled":     "⛔ This booking is cancelled",
    "gate.scanFailedStart":   "Cannot start camera: {{msg}}",
    "gate.scanLibMissing":    "QR scanner not loaded",
    "gate.vipFlag":           "VIP",

    "vip.title":              "VIP Roster",
    "vip.loginTitle":         "Manager Sign-in",
    "vip.loginDesc":          "Sign in with Google to manage the VIP roster",
    "vip.formAdd":            "+ Add VIP",
    "vip.formEdit":           "✏ Edit VIP",
    "vip.fieldName":          "Name",
    "vip.fieldNameHint":      "Auto-matches when visitor uses the same name",
    "vip.fieldNamePh":        "Mr. Wang",
    "vip.fieldCompany":       "Company",
    "vip.fieldCompanyPh":     "ABC Group",
    "vip.fieldTitle":         "Title",
    "vip.fieldTitlePh":       "Chairman / CEO",
    "vip.fieldPhone":         "Phone",
    "vip.fieldEmail":         "Email",
    "vip.fieldEmailPh":       "vip@company.com",
    "vip.fieldRef":           "Reference",
    "vip.fieldPhoto":         "Google Drive photo link",
    "vip.fieldPhotoHint":     "Must be publicly viewable",
    "vip.fieldPhotoPh":       "https://drive.google.com/file/d/.../view or File ID",
    "vip.fieldOwner":         "Contact staff email",
    "vip.fieldOwnerPh":       "staff@company.com",
    "vip.fieldSop":           "Reception SOP",
    "vip.fieldSopPh":         "e.g. Lead to 9F VIP lounge; CEO will greet personally",
    "vip.photoEmpty":         "No photo set",
    "vip.photoBadLink":       "⚠ Cannot parse link",
    "vip.photoLoadFail":      "⚠ Image failed to load<br><small>Make sure the Drive link is set to \"Anyone with the link\"</small>",
    "vip.listTitle":          "📋 Roster ({{count}})",
    "vip.empty":              "No VIPs yet — add one on the left",
    "vip.cardInactive":       "(inactive)",
    "vip.confirmDelete":      "Delete \"{{name}}\"? This cannot be undone.",
    "vip.errBadDriveLink":    "Cannot parse Drive link — check the format",
    "vip.saveChanges":        "Save changes"
  },

  "vi": {
    "common.signIn":          "Đăng nhập bằng Google",
    "common.signOut":         "Đăng xuất",
    "common.back":            "← Trang chủ",
    "common.save":            "Lưu",
    "common.cancel":          "Huỷ",
    "common.submit":          "Gửi",
    "common.confirm":         "Xác nhận",
    "common.delete":          "Xoá",
    "common.edit":            "Sửa",
    "common.enable":          "Bật",
    "common.disable":         "Tắt",
    "common.required":        "*",
    "common.optional":        "(không bắt buộc)",
    "common.copy":            "Sao chép",
    "common.copied":          "Đã sao chép",
    "common.copyLink":        "Sao chép liên kết",
    "common.download":        "Tải xuống",
    "common.note":            "Ghi chú",
    "common.notSet":          "—",
    "common.individual":      "Cá nhân",
    "common.loading":         "Đang tải…",
    "common.processing":      "Đang xử lý…",
    "common.kbCompressed":    "Đã nén khoảng {{kb}} KB",

    "status.pending":         "Chờ duyệt",
    "status.approved":        "Đã duyệt",
    "status.checkedIn":       "Đã đến",
    "status.checkedOut":      "Đã rời",
    "status.cancelled":       "Đã huỷ",
    "status.approvedAuto":    "Đã duyệt (tự động)",

    "lang.zh-TW":             "繁中",
    "lang.en":                "EN",
    "lang.vi":                "TIẾNG VIỆT",

    "index.title":            "Hệ thống đặt lịch khách",
    "index.subtitle":         "Quản lý khách trên Firebase",
    "index.book.title":       "Đặt lịch thăm",
    "index.book.desc":        "Khách điền biểu mẫu, nhận ngay QR Code khi đến",
    "index.book.tag":         "🌐 Công khai",
    "index.invite.title":     "Nhân viên mời",
    "index.invite.desc":      "Nhân viên tạo lời mời, sinh QR và liên kết chia sẻ",
    "index.invite.tag":       "🔐 Cần đăng nhập",
    "index.approve.title":    "Duyệt khách",
    "index.approve.desc":     "Nhân viên / quản lý duyệt lịch và xem hồ sơ",
    "index.approve.tag":      "🔐 Cần đăng nhập",
    "index.gate.title":       "Bảo vệ",
    "index.gate.desc":        "Danh sách khách hôm nay, quét QR để check-in",
    "index.gate.tag":         "🔐 Cần đăng nhập",
    "index.vip.title":        "Danh sách VIP",
    "index.vip.desc":         "Quản lý danh sách VIP và ảnh đại diện từ Google Drive",
    "index.vip.tag":          "🔐 Cần đăng nhập",

    "book.title":             "Đặt lịch thăm",
    "book.subtitle":          "Điền thông tin để nhận QR Code khi đến",
    "book.name":              "Họ tên",
    "book.namePh":            "Họ tên của bạn",
    "book.phone":             "Điện thoại",
    "book.phonePh":           "0912345678",
    "book.email":             "Email",
    "book.emailPh":           "không bắt buộc",
    "book.company":           "Công ty / Đơn vị",
    "book.companyPh":         "VD: Công ty TNHH ABC",
    "book.host":              "Người tiếp",
    "book.hostPh":            "Tên người bạn muốn gặp",
    "book.visitAt":           "Thời gian dự kiến",
    "book.plate":             "Biển số xe (nếu có)",
    "book.platePh":           "ABC-1234",
    "book.notePh":            "Chủ đề họp, vật mang theo, v.v.",
    "book.consent":           "Tôi đồng ý cung cấp thông tin trên cho lần thăm này; dữ liệu sẽ tự động xoá sau 6 tháng.",
    "book.submit":            "Gửi →",
    "book.bookAgain":         "+ Đặt thêm",

    "confirm.title":          "Đã gửi đặt lịch",
    "confirm.qrHint":         "Vui lòng xuất trình QR khi đến",
    "confirm.guestLabel":     "Khách",
    "confirm.companyLabel":   "Công ty",
    "confirm.hostLabel":      "Người tiếp",
    "confirm.timeLabel":      "Thời gian",
    "confirm.plateLabel":     "Biển số",
    "confirm.downloadQr":     "⬇ Tải QR",
    "confirm.addCalendar":    "📅 Thêm vào lịch",
    "confirm.shareLink":      "📎 Liên kết chia sẻ:",
    "confirm.hint":           "💡 Chụp màn hình QR hoặc sao chép liên kết ở trên.<br>Khi đến, bảo vệ sẽ quét QR để check-in.",
    "confirm.qrFailed":       "Tạo QR thất bại: {{msg}}",

    "confirm.noToken":        "Thiếu token — không thể hiển thị lịch",
    "confirm.notFound":       "Không tìm thấy lịch đặt",
    "confirm.loadFailed":     "Tải thất bại: {{msg}}",
    "confirm.qrFooter":       "Vui lòng xuất trình QR khi đến",

    "err.fillName":           "Vui lòng nhập họ tên",
    "err.fillPhone":          "Vui lòng nhập số điện thoại",
    "err.fillHost":           "Vui lòng nhập người tiếp",
    "err.fillVisitAt":        "Vui lòng chọn thời gian",
    "err.fillConsent":        "Vui lòng tích đồng ý điều khoản",
    "err.fillVisitorName":    "Vui lòng nhập tên khách",
    "err.badDateTime":        "Định dạng thời gian không hợp lệ",
    "err.submitFail":         "Gửi thất bại: {{msg}}",
    "err.createFail":         "Tạo thất bại: {{msg}}",
    "err.saveFail":           "Lưu thất bại: {{msg}}",
    "err.deleteFail":         "Xoá thất bại: {{msg}}",
    "err.opFail":             "Thao tác thất bại: {{msg}}",
    "err.signInFail":         "Đăng nhập thất bại: {{msg}}",
    "err.approveFail":        "Duyệt thất bại: {{msg}}",
    "err.rejectFail":         "Từ chối thất bại: {{msg}}",
    "err.checkInFail":        "Check-in thất bại: {{msg}}",
    "err.checkOutFail":       "Check-out thất bại: {{msg}}",

    "approve.title":          "Duyệt lịch khách",
    "approve.loginTitle":     "Đăng nhập nhân viên",
    "approve.loginDesc":      "Đăng nhập Google công ty để duyệt lịch khách",
    "approve.filter.pending": "⏳ Chờ duyệt",
    "approve.filter.approved":"✅ Đã duyệt",
    "approve.filter.checkedIn":"🟢 Đã đến",
    "approve.filter.cancelled":"⛔ Đã huỷ",
    "approve.filter.all":     "Tất cả",
    "approve.empty":          "Không có lịch ở \"{{label}}\"",
    "approve.emptyAll":       "Chưa có lịch",
    "approve.btnApprove":     "✓ Duyệt",
    "approve.btnReject":      "✕ Từ chối",
    "approve.btnQr":          "Xem QR",
    "approve.hostPrefix":     "Người tiếp: ",
    "approve.confirmReject":  "Xác nhận từ chối?",

    "invite.title":           "Mời khách",
    "invite.loginTitle":      "Nhân viên mời khách",
    "invite.loginDesc":       "Đăng nhập Google công ty để tạo lời mời",
    "invite.subtitle":        "Tự động duyệt — không cần qua bước duyệt riêng",
    "invite.visitorName":     "Tên khách",
    "invite.visitorNamePh":   "Ông Wang",
    "invite.hostHint":        "Mặc định là bạn",
    "invite.notePh":          "Chủ đề họp, địa điểm, SOP đón tiếp, v.v.",
    "invite.noteHint":        "Cũng dùng làm SOP đón tiếp khi tích VIP",
    "invite.vipToggle":       "🌟 Đánh dấu VIP",
    "invite.vipHint":         "Bảo vệ sẽ nhận cảnh báo và xem ảnh tức thời",
    "invite.vipPhotoLabel":   "Ảnh VIP (không bắt buộc)",
    "invite.vipPhotoBtn":     "📷 Chụp / Chọn ảnh",
    "invite.vipPhotoTip":     "Trên điện thoại sẽ hiện menu Máy ảnh / Thư viện ảnh / Tệp (tự động nén)",
    "invite.vipPhotoEmpty":   "Chưa chọn ảnh",
    "invite.submit":          "Tạo lời mời & nhận QR →",
    "invite.confirmTitle":    "Đã tạo lời mời",
    "invite.shareTitle":      "Gửi QR hoặc liên kết bên dưới cho khách",
    "invite.hint":            "💡 Gửi ảnh QR hoặc liên kết qua LINE / Slack / Email.<br>Khi khách đến, bảo vệ quét QR để check-in.",
    "invite.inviteAgain":     "+ Mời người khác",

    "gate.title":             "Bảo vệ — Khách hôm nay",
    "gate.loginTitle":        "Đăng nhập bảo vệ",
    "gate.loginDesc":         "Đăng nhập tài khoản Google của bảo vệ",
    "gate.scanTitle":         "📷 Quét QR Code",
    "gate.scanStart":         "Bật camera",
    "gate.scanStop":          "Dừng",
    "gate.scanIdle":          "Chưa quét",
    "gate.todayList":         "📋 Danh sách hôm nay",
    "gate.todayEmpty":        "Hôm nay chưa có lịch",
    "gate.vipPanel":          "🌟 VIP hôm nay ({{count}})",
    "gate.btnCheckIn":        "✓ Check-in",
    "gate.btnCheckOut":       "Check-out",
    "gate.metaVisit":         "Hẹn",
    "gate.metaArrival":       "✅ Đến",
    "gate.metaLeave":         "🚪 Rời",
    "gate.metaHost":          "Người tiếp: ",
    "gate.scanCantParse":     "⚠ Không đọc được nội dung QR",
    "gate.scanNotFound":      "❌ Không tìm thấy lịch khớp QR",
    "gate.scanAutoCheckIn":   "✅ Đã tự động check-in",
    "gate.scanCheckInFail":   "⚠ Check-in thất bại: {{msg}}",
    "gate.scanNotApproved":   "⏳ Chưa duyệt — vui lòng liên hệ người tiếp",
    "gate.scanAlreadyIn":     "ℹ Khách đã check-in trước đó",
    "gate.scanCancelled":     "⛔ Lịch đã huỷ",
    "gate.scanFailedStart":   "Không bật được camera: {{msg}}",
    "gate.scanLibMissing":    "Bộ quét QR chưa tải",
    "gate.vipFlag":           "VIP",

    "vip.title":              "Danh sách VIP",
    "vip.loginTitle":         "Đăng nhập quản lý",
    "vip.loginDesc":          "Đăng nhập Google để quản lý danh sách VIP",
    "vip.formAdd":            "+ Thêm VIP",
    "vip.formEdit":           "✏ Sửa VIP",
    "vip.fieldName":          "Họ tên",
    "vip.fieldNameHint":      "Tự khớp khi khách dùng cùng tên",
    "vip.fieldNamePh":        "Ông Wang",
    "vip.fieldCompany":       "Công ty",
    "vip.fieldCompanyPh":     "Tập đoàn ABC",
    "vip.fieldTitle":         "Chức vụ",
    "vip.fieldTitlePh":       "Chủ tịch / CEO",
    "vip.fieldPhone":         "Điện thoại",
    "vip.fieldEmail":         "Email",
    "vip.fieldEmailPh":       "vip@company.com",
    "vip.fieldRef":           "Tham khảo",
    "vip.fieldPhoto":         "Liên kết Drive cho ảnh",
    "vip.fieldPhotoHint":     "Phải để chế độ ai có liên kết đều xem được",
    "vip.fieldPhotoPh":       "https://drive.google.com/file/d/.../view hoặc File ID",
    "vip.fieldOwner":         "Email nhân viên đầu mối",
    "vip.fieldOwnerPh":       "staff@company.com",
    "vip.fieldSop":           "SOP đón tiếp",
    "vip.fieldSopPh":         "VD: dẫn đến phòng VIP tầng 9; Tổng Giám đốc tiếp đón",
    "vip.photoEmpty":         "Chưa đặt ảnh",
    "vip.photoBadLink":       "⚠ Không đọc được liên kết",
    "vip.photoLoadFail":      "⚠ Ảnh không tải được<br><small>Đảm bảo liên kết Drive ở chế độ \"Bất kỳ ai có liên kết\"</small>",
    "vip.listTitle":          "📋 Danh sách ({{count}})",
    "vip.empty":              "Chưa có VIP — hãy thêm ở bên trái",
    "vip.cardInactive":       "(đã tắt)",
    "vip.confirmDelete":      "Xoá \"{{name}}\"? Không thể hoàn tác.",
    "vip.errBadDriveLink":    "Không đọc được liên kết Drive — vui lòng kiểm tra",
    "vip.saveChanges":        "Lưu thay đổi"
  }
};

function getLang() {
  return localStorage.getItem(I18N_LANG_KEY) || I18N_DEFAULT;
}

function setLang(lang) {
  if (!I18N[lang]) lang = I18N_DEFAULT;
  localStorage.setItem(I18N_LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyI18n();
}

// 用於 JS 動態字串：t("err.submitFail", { msg: "xxx" })
function t(key, params) {
  const dict = I18N[getLang()] || I18N[I18N_DEFAULT];
  let s = dict[key];
  if (s == null) {
    // fallback 找預設語言，再不然回傳 key
    s = (I18N[I18N_DEFAULT] && I18N[I18N_DEFAULT][key]) || key;
  }
  if (params) {
    for (const k in params) {
      s = s.replace(new RegExp("{{" + k + "}}", "g"), params[k]);
    }
  }
  return s;
}

// 套用：找所有 data-i18n / data-i18n-placeholder / data-i18n-html，
// 以及更新切換器按鈕 active 狀態與 document.title
function applyI18n() {
  const lang = getLang();
  const dict = I18N[lang] || I18N[I18N_DEFAULT];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] != null) el.placeholder = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  // 切換器 active 樣式
  document.querySelectorAll(".lang-switch [data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // 通知頁面：重新渲染動態內容（state badge、清單等）
  document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang } }));
}

// 暴露給 inline onclick
window.setLang = setLang;
window.t = t;
window.applyI18n = applyI18n;
window.getLang = getLang;

// 注入語言切換器共用 CSS（每頁只要放 div.lang-switch 即可）
(function injectLangSwitchCss() {
  const css = `
    .lang-switch {
      display: inline-flex;
      gap: 2px;
      padding: 3px;
      background: rgba(255,255,255,0.55);
      border-radius: 18px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }
    .lang-switch button {
      padding: 5px 10px;
      background: transparent;
      border: none;
      border-radius: 14px;
      cursor: pointer;
      font-size: 0.78rem;
      color: #555;
      font-weight: 600;
      transition: background 0.15s, color 0.15s;
      letter-spacing: 0.02em;
    }
    .lang-switch button:hover { background: rgba(255,255,255,0.5); }
    .lang-switch button.active { background: white; color: #667eea; }

    /* 深底樣式（gate-dashboard） */
    .lang-switch.dark { background: rgba(255,255,255,0.12); }
    .lang-switch.dark button { color: #c5cbe0; }
    .lang-switch.dark button:hover { background: rgba(255,255,255,0.1); }
    .lang-switch.dark button.active { background: rgba(255,255,255,0.95); color: #5a4eb8; }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
})();

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = getLang();
  applyI18n();
});
