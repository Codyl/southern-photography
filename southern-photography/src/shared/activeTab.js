export const setClassForActiveTab = (activeTab) => {
  const navTabs = document.getElementsByClassName("nav-tab");
  Array.from(navTabs).forEach((element) => {
    element.classList.remove("active");
  });

  const activeTabElement = document.getElementById(activeTab);
  if (!!activeTabElement) {
    activeTabElement.classList.add("active");
  } else {
    document.getElementById("home").classList.add("active");
  }
};
