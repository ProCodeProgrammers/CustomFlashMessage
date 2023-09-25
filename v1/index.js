document.addEventListener("DOMContentLoaded", function () {
  const styleElement = document.createElement("style");
  const cssCode = `
  .procodeprogrammers_custom_flash_message_v1_container {
    position: fixed;
    z-index: 999999999999999999999999999999999999999999999999999999999999999;
    width: 100vw;
    height: 100vh;
    display: none;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .procodeprogrammers_custom_flash_message_v1 {
    min-width: 150px;
    max-width: 300px;
    min-height: 60px;
    padding: 20px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    align-items: center;
    color: white;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    animation: procodeprogrammers_zoom_in_effect_v1 2s;
    margin-bottom: 10px;
  }

  .procodeprogrammers_custom_flash_message_v1.warning {
    background-color: rgba(255, 234, 0, 0.2);
    border: 2px solid #ffea00;
  }

  .procodeprogrammers_custom_flash_message_v1.error {
    background-color: rgba(255, 0, 0, 0.2);
    border: 2px solid red;
  }

  .procodeprogrammers_custom_flash_message_v1.success {
    background-color: rgba(0, 255, 0, 0.2);
    border: 2px solid green;
  }

  @keyframes procodeprogrammers_zoom_in_effect_v1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }


  @keyframes procodeprogrammers_zoom_out_effect_v1 {
      0% {
          transform: scale(1);
      }
      100% {
          transform: scale(0);
      }
  }

  .procodeprogrammers_zoom_out_v1 {
      animation: procodeprogrammers_zoom_out_effect_v1 2s;
  }

`;
  styleElement.textContent = cssCode;
  document.head.appendChild(styleElement);

  const containerDiv = document.createElement("div");
  containerDiv.className =
    "procodeprogrammers_custom_flash_message_v1_container";

  containerDiv.innerHTML = `
          <div style="margin-top: 40px;">

            

          </div>
        `;

  document.body.prepend(containerDiv);

  function appendDivToInnerContainer(className, content, timeout = "3000") {
    const outerContainer = document.querySelector(
      ".procodeprogrammers_custom_flash_message_v1_container"
    );

    if (outerContainer) {
      const innerDiv = outerContainer.querySelector("div");

      if (innerDiv) {
        const divElement = document.createElement("div");
        divElement.className = `procodeprogrammers_custom_flash_message_v1 ${className}`;
        divElement.textContent = content;

        innerDiv.insertBefore(divElement, innerDiv.firstChild);

        setTimeout(() => {
          divElement.classList.add("procodeprogrammers_zoom_out_v1");
          setTimeout(() => {
            innerDiv.removeChild(divElement);
          }, 2000);
        }, timeout);
      } else {
        console.error("Inner div not found");
      }
    } else {
      console.error("Outer container not found");
    }
  }

  window.pcpFlashMessageV1 = {
    warning: function (message, timeout) {
      const container = document.querySelector(
        ".procodeprogrammers_custom_flash_message_v1_container"
      );
      container.style.display = "flex";
      setTimeout(() => {
        container.style.display = "none";
      }, timeout + 2000);
      appendDivToInnerContainer("warning", message, timeout);
    },

    error: function (message, timeout) {
      const container = document.querySelector(
        ".procodeprogrammers_custom_flash_message_v1_container"
      );
      container.style.display = "flex";
      setTimeout(() => {
        container.style.display = "none";
      }, timeout + 2000);
      appendDivToInnerContainer("error", message, timeout);
    },

    success: function (message, timeout) {
      const container = document.querySelector(
        ".procodeprogrammers_custom_flash_message_v1_container"
      );
      container.style.display = "flex";
      setTimeout(() => {
        container.style.display = "none";
      }, timeout + 2000);
      appendDivToInnerContainer("success", message, timeout);
    },
  };
});
