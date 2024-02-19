
const allSeat = document.getElementsByClassName('seat');
let count = 40;

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        count = count - 1;
        const seatNumber = e.target.innerText;
        e.target.style.backgroundColor = 'rgb(29,209,0)';
        e.target.setAttribute("disabled", true);
        // get and set selectded seat number
        const totalSeat = document.getElementById('total-seat').innerText;
        const convertedTotalSeat = parseInt(totalSeat);
        const sum = convertedTotalSeat + 1;

        // get ticket price by id
        const ticketPrice = document.getElementById('ticket-price').innerText;

        // create or add new element
        const selectContainer = document.getElementById('select-seat-container');
        const createNweElement = document.createElement('p')
        const p = document.createElement('p');
        p.innerText = seatNumber;
        const p2 = document.createElement('p2');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p2');
        p3.innerText = ticketPrice;

        createNweElement.appendChild(p);
        createNweElement.appendChild(p2);
        createNweElement.appendChild(p3);
        selectContainer.appendChild(createNweElement);

        // called utility functions
        totalPrice('total-price', parseInt(ticketPrice));
        setInnerText('available-seat', count);
        setInnerText('total-seat', sum);
        grandTotal()





    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
function totalPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);
    setInnerText('total-price', sum)
}

function grandTotal() {
    const totalPrice = document.getElementById('total-price').innerText;
    const convertedGrandTotal = parseInt(totalPrice);
    setInnerText('grand-total', convertedGrandTotal)

}

function modal() {
    const showModal = document.getElementById('show-modal');
    const header = document.getElementById('header')
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')

    header.classList.add('hidden')
    main.classList.add('hidden')
    footer.classList.add('hidden')
    showModal.classList.remove('hidden')
    console.log(header);
}
function showALl(){
    const showModal = document.getElementById('show-modal');
    const header = document.getElementById('header')
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')
    
    header.classList.remove('hidden')
    main.classList.remove('hidden')
    footer.classList.remove('hidden')
    showModal.classList.add('hidden')
}





