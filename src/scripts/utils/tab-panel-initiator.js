        
const activatePanel = () => {
    const tabPanel = document.getElementById("tab-panel");
    const tabs = tabPanel.getElementsByClassName("tab");
    const tabContents = tabPanel.getElementsByClassName("tab-content");

    tabPanel.addEventListener("click", function (event) {
        if (event.target.classList.contains("tab")) {
            const tabId = event.target.id;
            const contentId = tabId.replace("tab-", "content-");

            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("active");
                tabContents[i].classList.remove("show");
                tabContents[i].style.opacity = "0";
            }

            event.target.classList.add("active");
            document.getElementById(contentId).classList.add("show");
            setTimeout(() => {
                document.getElementById(contentId).style.opacity = "1";
            }, 200);
        }
    });
}
        
export default activatePanel;