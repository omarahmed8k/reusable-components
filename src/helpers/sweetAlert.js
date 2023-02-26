import i18n from "../locales/i18n";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const sweetAlert = {
  error: (text) => {
    const lang = i18n.language;
    Toast.fire({
      icon: "error",
      title: text,
      position: lang === "ar" ? "top-start" : "top-end",
    });
  },

  success: (text) => {
    const lang = i18n.language;
    Toast.fire({
      icon: "success",
      title: text,
      position: lang === "ar" ? "top-start" : "top-end",
    });
  },
};

export default sweetAlert;
