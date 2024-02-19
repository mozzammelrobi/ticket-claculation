const btns = document.getElementsByClassName('add-btn')

let count = 0 ;
let ticketPrice = 550 ;

for(const btn of btns){
   btn.addEventListener('click', function(e){
    count = count + 1;

    if(count == 4){
        for(const button of btns){
            button.setAttribute('disabled', true)
        } 
    }

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
        
        
        setInnerText('grand-total', totalPriceSum)
        setInnerText('total-price', totalPriceSum)
        setInnerText('seat-count', count)
        
        btn.disabled = true;
        btn.style.color = 'white'

        
   })
}



function nextBtn(){
    const cmpBtn = document.getElementById('success-section')
    cmpBtn.classList.remove('hidden')

    document.getElementById('header').classList.add('hidden')
    document.getElementById('best-offer').classList.add('hidden')
    document.getElementById('paribahan').classList.add('hidden')
    document.getElementById('footer').classList.add('hidden')
}

document.getElementById('copone').addEventListener('keyup', function(e){
    const text = e.target.value;
    const coponeBtn = document.getElementById('copone-btn')
    if(text === 'NEW15' || text === 'Couple 20'){
        coponeBtn.removeAttribute('disabled')
    }
    else{
        coponeBtn.setAttribute('disabled',true)
    }
})

function discount(){
    
    const grandTotalButton = document.getElementById('grand-total').innerText
    const convertedGrandTotal = parseInt(grandTotalButton) 
        
   const discount1 =  convertedGrandTotal * 15 /100;
   const finalGrandTotal = convertedGrandTotal - discount1
   setInnerText('grand-total', finalGrandTotal)
  
    
    const coponeContainer = document.getElementById('copone-container')
    coponeContainer.classList.add('hidden')
}
