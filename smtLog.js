const FNZform = document.getElementById('aspnetForm');
const logTypeField = document.getElementById("logtype");
const priorityField = document.getElementById("logpriority");
const componentField = document.getElementById("component");
const summaryField = document.getElementById("logsummary");
const detailField = document.getElementById("logdesc");
const popUpbox = document.createElement('div');
popUpbox.innerHTML = `<div>
<h1 style="font-size: 25px;
padding: 0px 0px 10px 40px;
display: block;
border-bottom:1px solid #E4E4E4;
margin: -10px -15px 30px -10px;;
color: #888;">Log Info 
</h1>
<label style="display: block;
margin: 0px;">
    <span>Log Type :</span><select id="log-reason" name="selection" required>
    <option value="General">General</option>
    <option value="Complain">Complain</option>
    </select>
</label>
<label>
        <span>Account Number :</span>
        <textarea id="account-number" name="account-number" placeholder="One or more account numbers"></textarea>
    </label>
     
 <label>
    <span>&nbsp;</span> 
    <input type="submit" class="button" value="Send" id="client-form-button"/> 
</label>    
</div>`

FNZform.appendChild(popUpbox);
var logReason
const clientFormBtn = document.getElementById('client-form-button')
FNZform.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log('submitted')
    logReason = document.getElementById('log-reason').value
    console.log(logReason)
    if (logReason == 'General') {
        logTypeField.value = 'Request'
        priorityField.value = 'High'
        componentField.value = 'Other';
        summaryField.value = 'A3 Reopen Accounts'
        detailField.value = 'Please reopen the following accounts'
    } else if (logReason == 'Complain') {
        logTypeField.value = 'Complaints'
        priorityField.value = 'Critical'
        componentField.value = 'Other';
        summaryField.value = 'Urgent'
        detailField.value = 'Please raise complaint for the following accounts'
    }
})

