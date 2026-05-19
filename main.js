function navigateTo(pageId) {
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    
    document.getElementById(pageId).classList.add('active');
    
    
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if(pageId === 'dashboardPage' && item.innerText.includes('Bosh panel')) item.classList.add('active');
        if(pageId === 'settingsPage' && item.innerText.includes('Sozlamalar')) item.classList.add('active');
    });

    toggleSidebar(false);
}


function switchAuthTab(tab) {
    if(tab === 'login') {
        document.getElementById('loginPage').classList.add('active');
        document.getElementById('registerPage').classList.remove('active');
    } else {
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('registerPage').classList.add('active');
    }
}


function fillDemo(email) {
    document.getElementById('loginEmail').value = email;
    document.getElementById('loginPassword').value = "parol12345";
}


function handleLogin(event) {
    event.preventDefault(); 
    
    
    navigateTo('dashboardPage');
}


function handleRegister(event) {
    event.preventDefault();
    alert("Muvaffaqiyatli ro'yxatdan o'tdingiz! Endi tizimga kirishingiz mumkin.");
    switchAuthTab('login');
}

function logout() {
    navigateTo('loginPage');
    document.getElementById('loginEmail').value = "";
    document.getElementById('loginPassword').value = "";
}


function toggleSidebar(open) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if(open) {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
    } else {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
    }
}


document.getElementById('sidebarOverlay').addEventListener('click', () => {
    toggleSidebar(false);
});


function updateConfidence(val) {
    document.getElementById('confidenceVal').innerText = "Hozir: " + val + "%";
}
