/*
these data points represent different 
aspects of the show...
(do not change these values)
*/
const ticketCostDollarsCDN      = 30;
const minimumAgeToAttend        = 21;
const taxRate                   = 0.10;

/*
these data points represent information
about the current user
NOTE: since this data would in theory be
supplied by the user, all values 
(even numeric) here are strings... 
- change these values as you test your script!
*/
const userName              = "Shania Smith";
const age                   = "21";
const cashOnHandDollarsCDN  = "320";
const quantityOfTickets     = "3";
let   output                = "";
let   result                = "";
const totalCost             = quantityOfTickets * ticketCostDollarsCDN;
const totalCostAfterTax     = totalCost*1/100 + totalCost;


output += '<p>' + (age<minimumAgeToAttend ? 'You are not old enough to attend the show' : 'User will be exactly old enough to attend the show! Proceeding with ticket sales...') + '</p>' +
          `<p> Purchasing ${quantityOfTickets} tickets at ${ticketCostDollarsCDN}: $${totalCost} <p>` +
          `<p>After Tax Total Cost: $${totalCostAfterTax}</p>`+
          "<p>" + (totalCostAfterTax<=cashOnHandDollarsCDN ? 'User can afford this' : 'You cant afford buying the ticket') + "</p>";


result += (((age<minimumAgeToAttend) || (totalCostAfterTax>cashOnHandDollarsCDN)) ? 'The are some errors befor procceding' : 'There are no error messages to report. Enjoy the show!');


const userNameId = document.getElementById('user-name-heading');
const introMsgId = document.getElementById('intro-message');
const userLiId = document.getElementById('user-name-li');
const userAgeId = document.getElementById('user-age');
const qtyTickId = document.getElementById('qty-tickets');
const userCashId = document.getElementById('user-cash');
const minAgeId = document.getElementById('minimum-age');
const tickCostId = document.getElementById('ticket-cost');
const taxRateId = document.getElementById('tax-rate');
const outputId = document.getElementById('output');
const resultId = document.getElementById('result-messages');

userNameId.innerHTML = userName;
introMsgId.innerHTML = userName + 'says: "lets buy some tickets" ';
userLiId.innerHTML += userName;
userAgeId.innerHTML +=age;
qtyTickId.innerHTML += quantityOfTickets;
userCashId.innerHTML += '$'+ cashOnHandDollarsCDN;
minAgeId.innerHTML += minimumAgeToAttend;
tickCostId.innerHTML += ticketCostDollarsCDN;
taxRateId.innerHTML += taxRate;
outputId.innerHTML += output;
resultId.innerHTML +=result;








