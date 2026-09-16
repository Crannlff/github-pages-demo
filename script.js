const dayTabs = document.querySelectorAll(".day-tab");
const dayPanels = document.querySelectorAll(".day-panel");

dayTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedDay = tab.dataset.day;

    dayTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    dayPanels.forEach((panel) => {
      const isActive = panel.id === selectedDay;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});
