function toggleContent(id) {
    const content = document.getElementById(`${id}-content`);
    const header = content.previousElementSibling;

    // Close all other roadmaps
    document.querySelectorAll('.roadmap-content').forEach(el => {
        if (el !== content) {
            el.classList.remove('active');
            el.previousElementSibling.classList.remove('active');
        }
    });

    // Toggle the clicked roadmap
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        header.classList.remove('active');
    } else {
        content.classList.add('active');
        header.classList.add('active');
    }
}

// === عناصر DOM ===
const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatMessages = document.getElementById("chat-messages");

// === فتح و إغلاق صندوق الشات ===
chatToggle.addEventListener("click", () => {
    if (chatBox.style.display === "flex") {
        chatBox.style.display = "none";
    } else {
        chatBox.style.display = "flex";
    }
});

// === إضافة رسالة للمحادثة ===
function addMessage(text, sender = "bot") {
    const msg = document.createElement("div");
    msg.className = sender === "bot" ? "bot-msg" : "user-msg";
    msg.innerText = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// === ردود ذكية بسيطة ===
function botReply(userText) {
    userText = userText.toLowerCase();

    if (userText.includes("hello") || userText.includes("hi") || userText.includes("welcome"))  {
        return "Welcome! 👋 How can I help you today?";
    }

    if (userText.includes("مرحبا") || userText.includes("السلام عليكم") || userText.includes("اهلا")) {
        return "اهلا! انا ذكاء اصطناعي ادعى كورليوني. كيف يمكنني مساعدتك اليوم؟";
    }

    if (userText.includes("start") || userText.includes("begin")) {
        return "If you're confused where to start, tell me your background  or what you like and I’ll suggest the best track!";
    }

    if (userText.includes("حيرة") || userText.includes("ابدا")) {
        return "إذا كنت غير متأكد من أين تبدأ، أخبرني بخلفيتك او ما تحب وسأقترح عليك أفضل مسار";
    }

    if (userText.includes("roadmap") || userText.includes("choose")) {
        return "There are many tracks! AI, Data Science, Web, Software Engineering, Cyber Security… Tell me what you enjoy and I’ll choose for you.";
    }

    if (userText.includes("الخطط التعليمية") || userText.includes("مسارات")) {
        return "هناك العديد من المسارات! الذكاء الاصطناعي، علم البيانات، الويب، هندسة البرمجيات، الأمن السيبراني… أخبرني بما تستمتع به وسأختار لك الأنسب.";
    }

    if (userText.includes("ai")) {
        return "AI is amazing! Start with Python → Math Basics → Machine Learning → Deep Learning.";
    }

    if (userText.includes("الذكاء الأصطناعي")) {
        return "الذكاء الاصطناعي رائع! ابدأ بـ Python → أساسيات الرياضيات → تعلم الآلة → التعلّم العميق.";
    }

    if (userText.includes("data science")) {
        return "Data Science path: Python → Statistics → Pandas → Data Visualization → Machine Learning.";
    }

    if (userText.includes("علم البيانات")) {
        return "مسار علم البيانات: ابدأ بتعلم بايثون → الإحصاء → استخدام Pandas لتحليل البيانات → تصور البيانات → تعلم الآلة."
    }

    if (userText.includes("cyber security")) {
        return "Cybersecurity path: Fundamentals → Networking → Operating Systems → Security Tools → Ethical Hacking → Defensive Security";
    }

    if (userText.includes("الأمن السيبراني")) {
        return "مسار الأمن السيبراني: الأساسيات → الشبكات → أنظمة التشغيل → أدوات الأمان → الاختراق الأخلاقي → الحماية الدفاعية.";
    }

    if (userText.includes("software engineering")) {
        return "Software Engineering path: Programming → Data Structures → Algorithms → Databases → System Design → Testing/Debugging";
    }

    if (userText.includes("هندسة البرمجيات")) {
        return "مسار هندسة البرمجيات: البرمجة → هياكل البيانات → الخوارزميات → قواعد البيانات → تصميم الأنظمة → الاختبار وتصحيح الأخطاء.";
    }
        
    if (userText.includes("البيض بالبسطرمة")) {
        return "تمام! طريقة بسيطة ولذيذة لعمل البيض بالبسطرمة سخّن مقلاة على نار متوسطة وحط فيها الزيت أو الزبدة. ضيف البسطرمة وقلّبها شوي لحد ما تتحمّر شوية. اكسر البيض فوق البسطرمة. رش الملح والفلفل. غطّي المقلاة لمدة 2-3 دقايق لو تحب الصفار نصف مستوي، أو أطول لو تحب البيض متماسك أكثر. قدّمه سخن مع عيش أو خبز حسب الرغبة. وكل وادعيلي";   
    } 

        return "I didn’t fully understand, but I can help! Tell me what you want exactly. 😊";

    }

// === عند الضغط على زر الإرسال ===
chatSend.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (text === "") return;

    addMessage(text, "user");
    chatInput.value = "";

    setTimeout(() => {
        const reply = botReply(text);
        addMessage(reply, "bot");
    }, 500);
});

// === عند الضغط على Enter ===
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        chatSend.click();
    }
});

const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.roadmap-card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const parentLink = card.closest('a');
        const dataTitle = parentLink ? parentLink.getAttribute('data-title').toLowerCase() : "";

        if (title.includes(searchTerm) || dataTitle.includes(searchTerm)) {
            parentLink.style.display = 'block';
        } else {
            parentLink.style.display = 'none';
        }
    });
});
