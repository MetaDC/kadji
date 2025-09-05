document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const button = document.getElementById("continuecal");
    const loader = document.getElementById("btn-loader");
    button.querySelector(".cleenhearts-btn__icon-box").classList.add("d-none");
    button.querySelector(".cleenhearts-btn__text").classList.add("d-none");
    loader.classList.remove("d-none");
    button.disabled = true;

    let name = document.getElementById("contactName").value;
    let phone = document.getElementById("contactPhone").value;
    let email = document.getElementById("email").value;

    const data = {
      emails: ["info@kadji.co.in"],
      // emails: ["matinshaikh79070@gmail.com"],
      subject: "New Pricing Submission",
      message: `<strong>Name</strong> : ${name}<br/> <strong>Phone</strong> : ${phone}<br/> <strong>email</strong> : ${email}<br/>`,
    };
    try {
      const response = await fetch("https://mailer-5x4h33dpla-uc.a.run.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resultText = await response.text();
      console.log(resultText);
      if (response.ok) {
        // alert("Success: Your enquiry has been submitted!");
        document.getElementById("contactForm").reset();
        window.open("pdf.html", "_blank");

        setTimeout(() => {
          closeForm();
        }, 1000);
      } else {
        alert(`Error: ${resultText}`);
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("An error occurred. Please try again later.");
    } finally {
      button
        .querySelector(".cleenhearts-btn__icon-box")
        .classList.remove("d-none");
      button.querySelector(".cleenhearts-btn__text").classList.remove("d-none");
      loader.classList.add("d-none");
      button.disabled = false;
    }

    function closeForm() {
      window.location.href = document.URL;
      return;
      // // document.getElementById("deck").modal("toggle")
      // // $('#deck').modal('toggle');

      // console.log($("#deck"));
      // $("#deck").modal("hide");
      // console.log("Mmmmm");
      // return false;
    }
  });

// document
//   .getElementById("contactForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const button = document.getElementById("continuecal");
//     const loader = document.getElementById("btn-loader");
//     button.disabled = true;
//     loader.classList.remove("d-none");

//     let name = document.getElementById("contactName").value;
//     let phone = document.getElementById("contactPhone").value;
//     let email = document.getElementById("email").value;

//     const data = {
//       emails: ["matinshaikh79070@gmail.com"],
//       subject: "New Pricing Submission",
//       message: `<strong>Name</strong> : ${name}<br/> <strong>Phone</strong> : ${phone}<br/> <strong>email</strong> : ${email}<br/>`,
//     };

//     try {
//       const response = await fetch("https://mailer-5x4h33dpla-uc.a.run.app/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const resultText = await response.text();
//       console.log(resultText);

//       if (response.ok) {
//         alert("Success: Your enquiry has been submitted!");
//         document.getElementById("contactForm").reset();
//         window.open("pdf.html", "_blank");
//         setTimeout(() => {
//           closeForm();
//         }, 1000);
//       } else {
//         alert(`Error: ${resultText}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       button.disabled = false;
//       loader.classList.add("d-none");
//     }

//     function closeForm() {
//       window.location.href = document.URL;
//     }
//   });
