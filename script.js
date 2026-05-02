import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 SUA CONFIG (já coloquei)
const firebaseConfig = {
  apiKey: "AIzaSyDDtq4Uk2sFkUQIbwyag3jmQSfaMMg6o9w",
  authDomain: "loja-scripts.firebaseapp.com",
  projectId: "loja-scripts",
  storageBucket: "loja-scripts.firebasestorage.app",
  messagingSenderId: "709306440079",
  appId: "1:709306440079:web:cd74b604dd1294dcd413fa",
  measurementId: "G-N94GR40WXR"
};

// iniciar
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 📌 CADASTRO
window.cadastrar = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => alert("Conta criada 🔥"))
    .catch(err => alert(err.message));
};

// 📌 LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => alert("Logado com sucesso 🔥"))
    .catch(err => alert(err.message));
};

// 📌 GOOGLE LOGIN
window.loginGoogle = function () {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => alert("Login com Google OK 🔥"))
    .catch(err => alert(err.message));
};

// 📌 MOSTRAR USUÁRIO LOGADO
onAuthStateChanged(auth, (user) => {
  const el = document.getElementById("usuario-logado");

  if (user) {
    el.innerText = "Logado como: " + user.email;
  } else {
    el.innerText = "Não logado";
  }
});

// 📌 LOGOUT
window.logout = function () {
  signOut(auth);
};
