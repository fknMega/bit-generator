document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const textInput = document.getElementById('phoneInput');
    const amountInput = document.getElementById('amountInput');
    const dateInput = document.getElementById('dateInput');
    const timeInput = document.getElementById('timeInput');
    const addTextButton = document.getElementById('addTextButton');
    const saveButton = document.getElementById('saveButton');
    const downloadLink = document.getElementById('downloadLink'); // Added download link

    canvas.width = 1440; // Set canvas dimensions to match your image
    canvas.height = 3088;

    let phoneX = 425;
    let phoneY = 1113;

    // Initial image rendering
    const image = new Image();
    image.src = './template.png';
    image.onload = () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    function drawText() {
        const phone = textInput.value;
        let date = dateInput.value.toString();
        date = date.replace(/-/g, '.');
        const time = timeInput.value;
    
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height); // Draw the image
    
        ctx.font = '100px bitbold';
        ctx.fillStyle = 'white';
        //stretch text lower width
        






        // Center text
        ctx.textAlign = 'center';

        ctx.fillText(phone, phoneX, phoneY);
        ctx.font = '135px bitbold';

        //write amount

        ctx.fillText(amountInput.value, 720, 1300);

        //write the character ₪ to the left of the amount

        ctx.font = '95px bitbold';


        ctx.fillText('₪', 720 - ctx.measureText(amountInput.value).width / 2 - 100, 1300);


        
        ctx.font = '85px bitmedium';


        ctx.fillText(date, 548, 1677);
        ctx.fillText(time, 614, 1795);


        //generate random 13 digit number
        let randomNum = Math.floor(Math.random() * 10000000000000);
        //convert to string and put - after 4 digits, after second 4 digits
        randomNum = randomNum.toString().replace(/(\d{4})(\d{4})(\d{5})/, '$1-$2-$3');
        //write the number to the canvas
        ctx.fillText(randomNum, 456, 1910);


        //write amount and phone again in smaller font at the bottom of the canvas
        ctx.font = '55px bitbold';

        ctx.fillText(amountInput.value, 475, 2035);
        //write the character ₪ to the left of the amount
        ctx.fillText('₪', 470 - ctx.measureText(amountInput.value).width / 2 - 25, 2035);
        

        ctx.font = '52px bitbold';


        //stretch in font width
        






    ctx.fillText(phone, 445, 2110);


    }
    
    addTextButton.addEventListener('click', () => {
        drawText();
    });

    saveButton.addEventListener('click', () => {
        const imageDataURL = canvas.toDataURL('image/png');
        
        // Set the href of the download link
        downloadLink.setAttribute('href', imageDataURL);
        downloadLink.download = 'edited_image.png';

        // Programmatically click the download link to trigger the download
        downloadLink.click();
    });

    // Initial drawing
    drawText();
});
