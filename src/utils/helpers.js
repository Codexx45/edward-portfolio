export const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "resume/Resume.pdf"; // Make sure this is in /public/resume/
  link.download = "Edward_Tenchavez_Resume.pdf";
  link.click();
};

export const scrollToFooter = () => {
  const footer = document.getElementById("contact");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};