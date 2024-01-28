class DixieComponent {
  constructor(id) {
    this.id = id;
  }

  draw(dataParams, zoneId, uniqueId) {
    const dixieComponentElement = document.createElement("div");
    dixieComponentElement.classList.add("dixieComponent");
    dixieComponentElement.id = uniqueId;
    const inlineStyles = `
      /* inline styling beginning */
        /* сюда перенести в итоге все что есть и вставить в классы под #${uniqueId} */
      /* inline styleing ending */
    `;
    dixieComponentElement.style.cssText = inlineStyles;

    const clickerZoneElement = document.createElement("div");
    clickerZoneElement.style.cssText = `
      position: fixed;
      width: 250px;
      height: 100vh;
      top: 0px;
      left: 0px;
      background: white;
      border-right: 1px solid lightgray;
      padding: 5px;
    `;
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    rowElement.style.maxWidth = "99%";
    const groupNameElement = document.createElement("h3");
    groupNameElement.classList.add("col-md-12");
    groupNameElement.textContent = "Group Name:";
    const firstFrameElement = document.createElement("div");
    firstFrameElement.classList.add("col-md-12", `${uniqueId}_choose_zone`);
    firstFrameElement.style.cssText = `
      cursor: pointer;
      border-bottom: 1px solid gray;
      color: black;
    `;
    firstFrameElement.setAttribute("showZone", `${uniqueId}_zone_x01`);
    firstFrameElement.setAttribute("id", `${uniqueId}_clickButton_x01`);
    firstFrameElement.addEventListener("click", () => this.onClickDoShow(zoneId, uniqueId, firstFrameElement));
    firstFrameElement.textContent = "First frame";
    const secondFrameElement = document.createElement("div");
    secondFrameElement.classList.add("col-md-12", `${uniqueId}_choose_zone`);
    secondFrameElement.style.cssText = `
      cursor: pointer;
      border-bottom: 1px solid gray;
      color: black;
    `;
    secondFrameElement.setAttribute("showZone", `${uniqueId}_zone_x02`);
    secondFrameElement.setAttribute("id", `${uniqueId}_clickButton_x02`);
    secondFrameElement.addEventListener("click", () => this.onClickDoShow(zoneId, uniqueId, secondFrameElement));
    secondFrameElement.textContent = "Second frame";

    rowElement.appendChild(groupNameElement);
    rowElement.appendChild(firstFrameElement);
    rowElement.appendChild(secondFrameElement);
    clickerZoneElement.appendChild(rowElement);

    const zoneOfTheRestPointElements = dataParams.map((param, index) => {
      const zoneElement = document.createElement("div");
      zoneElement.style.cssText = `
        padding-left: 260px;
        padding-right: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: white;
        min-height: 100vh;
      `;
      zoneElement.classList.add(`${uniqueId}_${param.class}_x0${index + 1}`);
      const testElement = document.createElement("div");
      testElement.style.borderBottom = "1px solid gray";
      const testNameElement = document.createElement("h3");
      testNameElement.textContent = `Test name#${index + 1}:`;
      testElement.appendChild(testNameElement);
      const contentZoneElement = document.createElement("div");
      contentZoneElement.textContent = `content zone of the test #${index + 1}`;
      testElement.appendChild(contentZoneElement);
      zoneElement.appendChild(testElement);
      return zoneElement;
    });

    const containerElement = document.createElement("div");
    containerElement.appendChild(clickerZoneElement);
    zoneOfTheRestPointElements.forEach((zoneElement) => containerElement.appendChild(zoneElement));

    const targetZone = document.getElementById(zoneId);
    targetZone.appendChild(dixieComponentElement);
    targetZone.appendChild(containerElement);
  }

  update(newDataParams, zoneId, uniqueId) {
    const targetZone = document.getElementById(zoneId);
    const dixieComponentElement = document.getElementById(uniqueId);
    targetZone.removeChild(dixieComponentElement);
    const containerElement = document.createElement("div");
    containerElement.appendChild(this.createClickerZoneElement(uniqueId));
    newDataParams.forEach((param, index) => containerElement.appendChild(this.createRestPointZoneElement(uniqueId, param, index)));
    targetZone.appendChild(containerElement);
  }

  message(messageType, messageData, zoneId, uniqueId) {
    if (messageType === "newDataParams") {
      this.update(messageData, zoneId, uniqueId);
    } else {
      console.log(`Message of type ${messageType} received with data: ${messageData}`);
    }
  }

  createClickerZoneElement(uniqueId) {
    const clickerZoneElement = document.createElement("div");
    clickerZoneElement.style.cssText = `
      position: fixed;
      width: 250px;
      height: 100vh;
      top: 0px;
      left: 0px;
      background: white;
      border-right: 1px solid lightgray;
      padding: 5px;
    `;
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    rowElement.style.maxWidth = "99%";
    const groupNameElement = document.createElement("h3");
    groupNameElement.classList.add("col-md-12");
    groupNameElement.textContent = "Group Name:";
    const zones = ["zone_x01", "zone_x02"];
    const chooseZoneElements = zones.map((zone) => {
      const chooseZoneElement = document.createElement("div");
      chooseZoneElement.classList.add("col-md-12", `${uniqueId}_choose_zone`);
      chooseZoneElement.style.cssText = `
        cursor: pointer;
        border-bottom: 1px solid gray;
        color: black;
      `;
      chooseZoneElement.setAttribute("showZone", `${uniqueId}_${zone}`);
      chooseZoneElement.setAttribute("id", `${uniqueId}_clickButton_${zone}`);
      chooseZoneElement.addEventListener("click", () => this.onClickDoShow(zoneId, uniqueId, chooseZoneElement));
      chooseZoneElement.textContent = `${zone.replace("_", " ").replace("zone", "Zone").replace("x", " ")}`;
      return chooseZoneElement;
    });

    rowElement.appendChild(groupNameElement);
    chooseZoneElements.forEach((zone) => rowElement.appendChild(zone));
    clickerZoneElement.appendChild(rowElement);
    return clickerZoneElement;
  }

  createRestPointZoneElement(uniqueId, param, index) {
    const zoneElement = document.createElement("div");
    zoneElement.style.cssText = `
      padding-left: 260px;
      padding-right: 5px;
      padding-top: 5px;
      padding-bottom: 5px;
      background-color: white;
      min-height: 100vh;
    `;
    zoneElement.classList.add(`${uniqueId}_${param.class}_x0${index + 1}`);
    const testElement = document.createElement("div");
    testElement.style.borderBottom = "1px solid gray";
    const testNameElement = document.createElement("h3");
    testNameElement.textContent = `${param.title}:${index + 1}`;
    testElement.appendChild(testNameElement);
    const contentZoneElement = document.createElement("div");
    contentZoneElement.textContent = `${param.content}`;
    testElement.appendChild(contentZoneElement);
    zoneElement.appendChild(testElement);
    return zoneElement;
  }

  onClickDoShow(zoneId, uniqueId, clickedElement) {
    const showZoneAttr = clickedElement.getAttribute("showZone");
    const zoneElements = Array.from(document.querySelectorAll(`.${uniqueId}_choose_zone`));
    const restPointElements = Array.from(document.querySelectorAll(`.${uniqueId}`));
    zoneElements.forEach((zoneElement) => {
      if (zoneElement === clickedElement) {
        zoneElement.style.color = "blue";
        document.querySelector(`.${showZoneAttr}`).style.display = "block";
      } else {
        zoneElement.style.color = "black";
        document.querySelector(`[showZone=${zoneElement.getAttribute("showZone")}]`).style.display = "none";
      }
    });
    restPointElements.forEach((restPointElement) => {
      if (!restPointElement.classList.contains(showZoneAttr)) {
        restPointElement.style.display = "none";
      } else {
        restPointElement.style.display = "block";
      }
    });
  }
}
