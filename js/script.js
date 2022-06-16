
$(document).ready(function(){
    
    const sideMenu = document.querySelector('aside');
    const menuBtn = document.querySelector('#menu-btn');
    const closeBtn = document.querySelector('#close-btn');
    const themeToggler = document.querySelector('.theme-toggler');

    menuBtn.addEventListener('click' , ()=>{
        sideMenu.style.left = '0'
    })
    
    closeBtn.addEventListener('click' ,()=>{
        sideMenu.style.left = '-100%'
    })

    themeToggler.addEventListener('click',()=>{
        document.body.classList.toggle('dark-theme-variables')
        themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
    })

    // Fill Order in Table 
    Orders.forEach(order => {
        const tr  = document.createElement('tr');
        const trContent = `
            <tr>
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="
                    ${order.shipping === 'Decline' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}  
                ">${order.shipping}</td>
                <td class="primary">Details</td>
            </tr>
        `;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
    })



    // easy chart pie (circle progress bar)
    $(function() {
        $('.chart').easyPieChart({
            easing: 'easeOutElastic',
            scaleColor: false,
            lineWidth: 10,
            trackWidth: 8,
            lineCap: 'butt',
            animate : {
                duration: 1000, enabled: true
            },
            onStep: function(from, to, percent) {
                this.el.children[0].innerHTML = Math.round(percent);
            }
        });
    });

    
})
