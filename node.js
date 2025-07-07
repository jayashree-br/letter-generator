function selectLetterType(letterType) {
    // Store the selected letter type in a hidden element or variable
    document.getElementById('letter-type').value = letterType;

    // Hide the option cards after selection
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.style.display = 'none';
    });

    // Display the selected form
    showLetterForm();
}


function showLetterForm() {
    const letterType = document.getElementById('letter-type').value;
    let formHtml = '';

    // Form fields for different letter types
    switch (letterType) {
        case 'cover':
            formHtml = `
                <hr>
                <h2>Cover Letter (Business Letter)</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Enter Your Name" required>
                <label for="recipient">Recipient Name:</label>
                <input type="text" id="recipient" placeholder="Enter Recipient's Name" required>
                <label for="str">Street:</label>
                <input type="textarea" id="str" placeholder="Enter your street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar" placeholder="Enter your area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st" placeholder="Enter your State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin" placeholder="Enter your pincode" required>
                <label for="str">Street:</label>
                <input type="textarea" id="str1" placeholder="Enter recipient's street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar1" placeholder="Enter recipient's area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st1" placeholder="Enter recipient's State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin1" placeholder="Enter recipient's pincode" required>
                <label for="message">In which job you were appling:</label>
                <input id="message" placeholder="Write your job here" required></input>
                <label for="corp">In which corperation do you wish to apply?</label>
                <input type="text" id="corp" placeholder="Enter the name of the corperation" required>
                <label for="corpe"> Perviously in which coperation you worked? </label>
                <input id="corpe" type="text" placeholder="Enter the corperation" required></input>
                <label for="experience">Your Experience:</label>
                <input type="text" id="experience" placeholder="Write your experience" required></input>
                <button type="submit" onclick="generateLetter()">Generate Letter</button>`;
            break;

        case 'leave':
            formHtml = `
                <hr>
                <h2> Sick Leave Letter (Leave Letter)</h2>
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="Enter Your Name" required></input>
                <label for="str">Street:</label>
                <input type="textarea" id="str" placeholder="Enter your street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar" placeholder="Enter your area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st" placeholder="Enter your State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin" placeholder="Enter your pincode" required>
                <label for="str">Street:</label>
                <input type="textarea" id="str1" placeholder="Enter recipient's street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar1" placeholder="Enter recipient's area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st1" placeholder="Enter recipient's State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin1" placeholder="Enter recipient's pincode" required>
                <label for="date">From:</label>
                <input id="date" type="date" required>
                <label for="edate">To:</label>
                <input id="edate" type="date" required> 
                <label for="recipient">Recipient (e.g., Manager):</label>
                <input type="text" id="recipient" placeholder="Enter Recipient's Name" required>
                <label for="leave-reason">Reason for Leave:</label>
                <input id="leave-reason" type="text" placeholder="Explain your leave reason" required></input>
                <button type="submit" onclick="generateLetter()">Generate Letter</button>`;
            break;

        case 'resign':
            formHtml = `
                <hr>
                <h2>Office Letter</h2>
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="Enter Your Name" required></input>
                <label for="str">Street:</label>
                <input type="textarea" id="str" placeholder="Enter your street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar" placeholder="Enter your area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st" placeholder="Enter your State" required >
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin" placeholder="Enter your pincode" required>
                <label for="str">Street:</label>
                <input type="textarea" id="str1" placeholder="Enter recipient's street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar1" placeholder="Enter recipient's area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st1" placeholder="Enter recipient's State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin1" placeholder="Enter recipient's pincode" required>
                <label for="message">Job:</label>
                <input id="message" type="text" placeholder="Write your job here" required></input>
                <label for="date">When are you resigning your job? </label>
                <input id="date" type="date" placeholder="Enter your date" required> 
                <label for="recipient">Recipient (e.g., HR):</label>
                <input type="text" id="recipient" placeholder="Enter Recipient's Name" required>
                <label for="corpe"> In which coperation you worked? </label>
                <input id="corpe" type="text" placeholder="Enter the corperation" required></input>
                <button type="submit" onclick="generateLetter()">Generate Letter</button>`;
            break;

        case 'thank':
            formHtml = `
                <hr>
                <h2>Thank You Letter (Personal Letter)</h2>
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="Enter Your Name" required></input>
                <label for="str">Street:</label>
                <input type="textarea" id="str" placeholder="Enter your street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar" placeholder="Enter your area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st" placeholder="Enter your State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin" placeholder="Enter your pincode" required>
                <label for="str">Street:</label>
                <input type="textarea" id="str1" placeholder="Enter recipient's street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar1" placeholder="Enter recipient's area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st1" placeholder="Enter recipient's State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin1" placeholder="Enter recipient's pincode" required>
                <label for="recipient">Recipient :</label>
                <input type="text" id="recipient" placeholder="Enter Recipient's Name" required>
                <label for="cause">Cause:</label>
                <input type="text" id="cause" placeholder="Enter the cause" required>
                <label for="rel">Relation:</label>
                <input id="rel" type="text" placeholder="Write your relation with sender" required>
                <button onclick="generateLetter()">Generate Letter</button>`;
            break;
            case 'complain':
            formHtml = `
                <hr>
                <h2>Complaint Letter (Official Letter)</h2>
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="Enter Your Name" required></input>
                <label for="str">Street:</label>
                <input type="textarea" id="str" placeholder="Enter your street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar" placeholder="Enter your area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st" placeholder="Enter your State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin" placeholder="Enter your pincode" required>
                <label for="str">Street:</label>
                <input type="textarea" id="str1" placeholder="Enter recipient's street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar1" placeholder="Enter recipient's area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st1" placeholder="Enter recipient's State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin1" placeholder="Enter recipient's pincode" required>
                <label for="recipient">Recipient :</label>
                <input type="text" id="recipient" placeholder="Enter Recipient's Name" required>
                <label for='obj'>In which items you want to complain?</label>
                <input type="text" id="obj" placeholder="Enter the object you want to complain" required>
                <label for="message">What is the reason for complain?</label>
                <input id="message" placeholder="Write your complain here" required></input>
                <label for='date'>On When You bought a product</label>
                <input id="date" type="date" required>
                <label for="rel">Relation:</label>
                <input id="rel" type="text" placeholder="Write your relation with sender" required>
                <button onclick="generateLetter()">Generate Letter</button>`;
            break;

            case 'peti':
            formHtml = `
                <hr>
                <h2>Petition Letter (Official Letter)</h2>
                <label for="name">Name:</label>
                <input id="name" type="text" placeholder="Enter Your Name" required></input>
                <label for="str">Street:</label>
                <input type="textarea" id="str" placeholder="Enter your street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar" placeholder="Enter your area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st" placeholder="Enter your State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin" placeholder="Enter your pincode" required>
                <label for="str">Street:</label>
                <input type="textarea" id="str1" placeholder="Enter recipient's street" required>
                <label for="ar">Area belong:</label>
                <input type="textarea" id="ar1" placeholder="Enter recipient's area" required>
                <label for="st">State:</label>
                <input type="textarea" id="st1" placeholder="Enter recipient's State" required>
                <label for="pin">Pincode:</label>
                <input type="textarea" id="pin1" placeholder="Enter recipient's pincode" required>
                <label for="recipient">Recipient :</label>
                <input type="text" id="recipient" placeholder="Enter Recipient's Name" required>
                <label for='sub'>Subject:</label>
                <input type="text" id="sub" placeholder="Enter the Subject" required>
                <label for="cause">Cause:</label>
                <input type="text" id="cause" placeholder="Enter the cause for petition" required>
                <label for='sol'>Solution:</label>
                <input type="text" id="sol" placeholder="Enter the solution" required>
                <label for="date">How many year or month or days you are suffering?:</label>
                <input id="date" type="text" required>
                <label for="note">Note:</label>
                <input id="note" type="text" placeholder="Detail related to the petition" required>
                <label for="rel">Relation:</label>
                <input id="rel" type="text" placeholder="Write your relation with sender" required>
                <button onclick="generateLetter()">Generate Letter</button>`;
            break;

        default:
            formHtml = '';
    }

    // Insert the form into the HTML
    document.getElementById('letter-form').innerHTML = formHtml;
}

// Generate the letter based on user inputs
function generateLetter() {
    const letterType = document.getElementById('letter-type').value;
    let letterTemplate = '';

    switch (letterType) {
        case 'cover':
            const recipient = document.getElementById('recipient').value;
            const message = document.getElementById('message').value;
            const corp = document.getElementById('corp').value;
            const corpe = document.getElementById('corpe').value;
            const name = document.getElementById('name').value;
            const experience = document.getElementById('experience').value;
            const str = document.getElementById('str').value;
            const ar = document.getElementById('ar').value;
            const st = document.getElementById('st').value;
            const pin = document.getElementById('pin').value;
            const str1 = document.getElementById('str1').value;
            const ar1 = document.getElementById('ar1').value;
            const st1 = document.getElementById('st1').value;
            const pin1 = document.getElementById('pin1').value;
            letterTemplate = `<hr><h2>Cover Letter (Business Letter)</h2><p>From:<br>${str},<br>${ar},<br>${st}-${pin}</p><p>To:<br>${str1},<br>${ar1},<br>${st1}-${pin1}</p><p></<b>SUBJECT:</b>Application letter for ${message} job</p><p>Respected ${recipient},</p><p>I am writing to apply for the position of ${message} at ${corp}. I have been working at ${corpe} for the past ${experience} years, and I believe my skills and experience make me a strong candidate for this position.</p><p>Thank you for considering my application. I look forward to the opportunity to discuss this further and answer any questions you may have.</p><p>Sincerely,<br>${name}</p>
            <hr>
            <section style="margin-top: 20px; margin-bottom: 20px;">
            <button onclick="saveLetter()">Save Letter</button>
            <button onclick="loadSavedLetter()">Load Saved Letter</button>
            <button onclick="downloadPDF()">Download as PDF</button>
            </section>`;
            break;

        case 'leave':
            const leaveRecipient = document.getElementById('recipient').value;
            const reason = document.getElementById('leave-reason').value;
            const date = document.getElementById('date').value;
            const edate = document.getElementById('edate').value;
            const leavename = document.getElementById('name').value;
            const leaveStr = document.getElementById('str').value;
            const leaveAr = document.getElementById('ar').value;
            const leaveSt = document.getElementById('st').value;
            const leavePin = document.getElementById('pin').value;
            const leaveStr1 = document.getElementById('str1').value;
            const leaveAr1 = document.getElementById('ar1').value;
            const leaveSt1 = document.getElementById('st1').value;
            const leavePin1 = document.getElementById('pin1').value;
            letterTemplate = `<hr><h2> Sick Leave Letter (Leave Letter)</h2><p>From:<br>${leaveStr},<br>${leaveAr},<br>${leaveSt}-${leavePin}</p><p>To:<br>${leaveStr1},<br>${leaveAr1},<br>${leaveSt1}-${leavePin1}</p><p><b>SUBJECT:</b>Sick Leave Request</p><p>Respected ${leaveRecipient},</p><p>I am writing to inform you that I am unwell as I am suffering from ${reason} and will not be able to report to work from ${date} to ${edate}. I have attached a doctor’s note for your reference.<br> During my absence, I will be reachable via email if there is anything urgent. Thank you for your understanding.</p><p>Sincerely,<br>${leavename}</p>
            <hr>
            <section style="margin-top: 20px; margin-bottom: 20px;">
            <button onclick="saveLetter()">Save Letter</button>
            <button onclick="loadSavedLetter()">Load Saved Letter</button>
            <button onclick="downloadPDF()">Download as PDF</button>
            </section>`;
            break;

        case 'resign':
            const officeRecipient = document.getElementById('recipient').value;
            const officeDate = document.getElementById('date').value;
            const officeCorp = document.getElementById('corpe').value;
            const officeName = document.getElementById('name').value;
            const officeMessage = document.getElementById('message').value;
            const officeStr = document.getElementById('str').value;
            const officeAr = document.getElementById('ar').value;
            const officeSt = document.getElementById('st').value;
            const officePin = document.getElementById('pin').value;
            const officeStr1 = document.getElementById('str1').value;
            const officeAr1 = document.getElementById('ar1').value;
            const officeSt1 = document.getElementById('st1').value;
            const officePin1 = document.getElementById('pin1').value;
            letterTemplate = `<hr><h2>Resignation Letter (Business Letter)</h2><p>From:<br>${officeStr},<br>${officeAr},<br>${officeSt}-${officePin}</p><p>To:<br>${officeStr1},<br>${officeAr1},<br>${officeSt1}-${officePin1}</p><p><b>SUBJECT:</b> Resignation Letter <br><br> Mr/Mrs ${officeRecipient},I am writing to formally resign from my position as ${officeMessage} at ${officeCorp}, effective ${officeDate}. I have enjoyed working with the team and appreciate the opportunities for growth that I have been given.Thank you for your support throughout my time here. I will do my best to ensure a smooth transition and assist with handing over my responsibilities.<p>Best regards,<br>${officeName}</p>
            <hr>
            <section style="margin-top: 20px; margin-bottom: 20px;">
            <button onclick="saveLetter()">Save Letter</button>
            <button onclick="loadSavedLetter()">Load Saved Letter</button>
            <button onclick="downloadPDF()">Download as PDF</button>
            </section>`;
            break;

        case 'thank':
            const cause = document.getElementById('cause').value; 
            const rel = document.getElementById('rel').value;
            const thankName = document.getElementById('name').value;
            const thankRecipient = document.getElementById('recipient').value;
            const thankStr = document.getElementById('str').value;
            const thankAr = document.getElementById('ar').value;
            const thankSt = document.getElementById('st').value;
            const thankPin = document.getElementById('pin').value;
            const thankStr1 = document.getElementById('str1').value;
            const thankAr1 = document.getElementById('ar1').value;
            const thankSt1 = document.getElementById('st1').value;
            const thankPin1 = document.getElementById('pin1').value;
            letterTemplate = `<hr><h2>Thank You Letter (Personal Letter)</h2><p>From:<br>${thankStr},<br>${thankAr},<br>${thankSt}-${thankPin}</p><p>To:<br>${thankStr1},<br>${thankAr1},<br>${thankSt1}-${thankPin1}</p><p>Dear ${thankRecipient},<br><br>Thank you so much for helping me with ${cause}. Your insights on how to structure the content really made a difference, and I’m happy to say that it went well. I truly appreciate your willingness to take time out of your busy schedule to help. You’ve always been a great ${rel}, and I look forward to working together more in the future.<br><br> Best regards,${thankName}</p>
            <hr>
            <section style="margin-top: 20px; margin-bottom: 20px;">
            <button onclick="saveLetter()">Save Letter</button>
            <button onclick="loadSavedLetter()">Load Saved Letter</button>
            <button onclick="downloadPDF()">Download as PDF</button>
            </section>`;
            break;   
            
            case 'complain':
            const ccause = document.getElementById('message').value; 
            const crel = document.getElementById('rel').value;
            const cName = document.getElementById('name').value;
            const cRecipient = document.getElementById('recipient').value;
            const cStr = document.getElementById('str').value;
            const cAr = document.getElementById('ar').value;
            const cSt = document.getElementById('st').value;
            const cPin = document.getElementById('pin').value;
            const cStr1 = document.getElementById('str1').value;
            const cAr1 = document.getElementById('ar1').value;
            const cSt1 = document.getElementById('st1').value;
            const cPin1 = document.getElementById('pin1').value;
            const cObj = document.getElementById('obj').value;
            const cDate = document.getElementById('date').value;
            letterTemplate = `<hr><h2>Complaint Letter (Official Letter)</h2><p>From:<br>${cStr},<br>${cAr},<br>${cSt}-${cPin}</p><p>To:<br>${cStr1},<br>${cAr1},<br>${cSt1}-${cPin1}</p><p>Dear ${cRecipient},<br><br>I am writing to express my dissatisfaction with the ${cObj} I purchased from your store on ${cDate}. The ${cObj} has been ${ccause}<br>I would like to request a replacement or a refund for the faulty product. I have attached the receipt and other relevant documents for your reference.<br>Please look into this matter and resolve it at your earliest convenience.<br><br> Yours Sincerely,${cName}</p>
            <hr>
            <section style="margin-top: 20px; margin-bottom: 20px;">
            <button onclick="saveLetter()">Save Letter</button>
            <button onclick="loadSavedLetter()">Load Saved Letter</button>
            <button onclick="downloadPDF()">Download as PDF</button>
            </section>`;
            break;

            case 'peti':
            const pcause = document.getElementById('note').value; 
            const prel = document.getElementById('rel').value;
            const pName = document.getElementById('name').value;
            const pRecipient = document.getElementById('recipient').value;
            const pStr = document.getElementById('str').value;
            const pAr = document.getElementById('ar').value;
            const pSt = document.getElementById('st').value;
            const pPin = document.getElementById('pin').value;
            const pStr1 = document.getElementById('str1').value;
            const pAr1 = document.getElementById('ar1').value;
            const pSt1 = document.getElementById('st1').value;
            const pPin1 = document.getElementById('pin1').value;
            const pDate = document.getElementById('date').value;
            const pSol = document.getElementById('sol').value;
            const plcause= document.getElementById('cause').value;
            const psub= document.getElementById('sub').value;
            letterTemplate = `<hr><h2>Petition Letter (Official Letter)</h2><p>From:<br>${pStr},<br>${pAr},<br>${pSt}-${pPin}</p><p>To:<br>${pStr1},<br>${pAr1},<br>${pSt1}-${pPin1}</p><br><p>Subject:${psub}</p><p>Dear ${pRecipient},<br><br>We, the undersigned residents of ${pSt}, are writing to request ${plcause}. Over the past ${pDate}, ${pcause}

We believe that our solution will probably led to good need of ourself. Attached are signatures from residents who support this request.

We kindly ask you to take immediate action to address this issue.<br><br> Yours Sincerely,${cName}</p>
            <hr>
            <section style="margin-top: 20px; margin-bottom: 20px;">
            <button onclick="saveLetter()">Save Letter</button>
            <button onclick="loadSavedLetter()">Load Saved Letter</button>
            <button onclick="downloadPDF()">Download as PDF</button>
            </section>`;
            break;

        default:
            letterTemplate = '';
    }

    // Display the generated letter
    document.getElementById('letter-template').innerHTML = letterTemplate;
    document.getElementById('letter-form').style.display = 'none'
    document.getElementById('back-button').style.display = 'block';
}

function showOptions() {
    // Show the form and options again
    document.getElementById('letter-form').style.display = 'block';

    // Display option cards again
    const optionCards = document.querySelectorAll('.option-card');
    optionCards.forEach(card => {
        card.style.display = 'block';
    });

    // Hide the back button
    document.getElementById('back-button').style.display = 'none';

    // Clear generated letter template
    document.getElementById('letter-template').innerHTML = '';
}

// Download the generated letter as PDF using jsPDF
function downloadPDF() {
    const letterContent = document.getElementById('letter-template').innerText;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text(letterContent, 10, 10);
    doc.save('generated-letter.pdf');
}

// Save the generated letter using localStorage
function saveLetter() {
    const letterContent = document.getElementById('letter-template').innerHTML;
    localStorage.setItem('savedLetter', letterContent);
    alert('Letter saved!');
}

// Load the saved letter from localStorage
function loadSavedLetter() {
    const savedLetter = localStorage.getItem('savedLetter');
    if (savedLetter) {
        document.getElementById('letter-template').innerHTML = savedLetter;
    } else {
        alert('No saved letter found.');
    }
}

function filterLetterOptions() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.getElementsByClassName("option-card");

    for (let i = 0; i < cards.length; i++) {
        const cardText = cards[i].innerText.toLowerCase();
        if (cardText.includes(input)) {
            cards[i].style.display = "inline-block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

