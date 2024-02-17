const btns = document.getElementsByClassName('add-btn')

let count = 0 ;
let ticketPrice = 550 ;

for(const btn of btns){
   btn.addEventListener('click', function(e){
    count = count + 1;

    const totalSeats = document.getElementById('total-seats').innerText;
    const convertedTotalSeat =parseInt(totalSeats)
    document.getElementById('total-seats').innerText = convertedTotalSeat - 1

    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice)
    const totalPriceSum = convertedTotalPrice + ticketPrice


    const setBackground = e.target;
    const seatNumber = e.target.innerText;
    const p = document.createElement('p')
        p.innerText = seatNumber
    const p2 = document.createElement('p')
        p2.innerText = 'Economy'
    const p3 = document.createElement('p')
        p3.innerText = '550'
        
        btn.style.backgroundColor = "green";
        btn.classList.add('text-white')
       

        appendChildAndSet('seat-name-container',p)
        appendChildAndSet('class-name',p2 )
        appendChildAndSet('price',p3)    
        
        setInnerText('total-price', totalPriceSum)
        setInnerText('seat-count', count)
        
        
   })
}