var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
canvas.width = $('img').width();
canvas.crossOrigin = "Anonymous";
canvas.height = $('img').height();
ctx.drawImage($('img').get(0), 0, 0);
ctx.font = "36pt Prompt";

function intToFloat(num, decPlaces) { return num.toFixed(decPlaces); }

document.getElementById("check-change").addEventListener('change', changeimg);
function changeimg(){
    //redraw image
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage($('img').get(0), 0, 0);
    // //refill text

    // PB7
    const PB7 = ()=>{
      const toprice = document.getElementById('inp-pb7-1').value
      const nextprice = document.getElementById('inp-pb7-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,250);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,255);
      ctx.fillText(diffStr(),810,255);
      // console.log(diffStr()); // For Debug
    }
    // // B7
    const B7 = ()=>{
      const toprice = document.getElementById('inp-b7-1').value
      const nextprice = document.getElementById('inp-b7-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,330);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,335);
      ctx.fillText(diffStr(),810,335);
      // console.log(diffStr()); // For Debug
    }
    // // Diesel
    const D = ()=>{
      const toprice = document.getElementById('inp-d-1').value
      const nextprice = document.getElementById('inp-d-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,410);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,415);
      ctx.fillText(diffStr(),810,415);
      // console.log(diffStr()); // For Debug
    }
    // // B20
    const B20 = ()=>{
      const toprice = document.getElementById('inp-b20-1').value
      const nextprice = document.getElementById('inp-b20-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,490);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,495);
      ctx.fillText(diffStr(),810,495);
      // console.log(diffStr()); // For Debug
    }
    // // เบนซิน
    const BEN = ()=>{
      const toprice = document.getElementById('inp-ben-1').value
      const nextprice = document.getElementById('inp-ben-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,570);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,575);
      ctx.fillText(diffStr(),810,575);
      // console.log(diffStr()); // For Debug
    }
    // // 95
    const G95 = ()=>{
      const toprice = document.getElementById('inp-95-1').value
      const nextprice = document.getElementById('inp-95-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,650);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,655);
      ctx.fillText(diffStr(),810,655);
      // console.log(diffStr()); // For Debug
    }
    // // 91
    const G91 = ()=>{
      const toprice = document.getElementById('inp-91-1').value
      const nextprice = document.getElementById('inp-91-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,730);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,735);
      ctx.fillText(diffStr(),810,735);
      // console.log(diffStr()); // For Debug
    }
    // // E20
    const E20 = ()=>{
      const toprice = document.getElementById('inp-e20-1').value
      const nextprice = document.getElementById('inp-e20-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,810);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,815);
      ctx.fillText(diffStr(),810,815);
      // console.log(diffStr()); // For Debug
    }
    // // E85
    const E85 = ()=>{
      const toprice = document.getElementById('inp-e85-1').value
      const nextprice = document.getElementById('inp-e85-2').value
      const diff = Number(toprice)-Number(nextprice)
      const diffStr = () => {
        if ( diff >= 0){
          return String('-'+intToFloat(diff, 2))
        } else if ( diff < 0) {
          const diffSlice = String(diff).slice(1)
          return String('+'+intToFloat(Number(diffSlice), 2))
        }
      }
      // //refill text
      ctx.fillStyle = "#0071ba";
      // ctx.fillText(toprice,330,255); // For Debug
      if ( diffStr().startsWith('+') ) {
        ctx.fillStyle = "#ff0000";
      } else if ( diffStr().startsWith('-') ) {
        ctx.fillStyle = "#039b54";
      } else {
        ctx.fillStyle = "#0071ba";
      }
      ctx.font = "28pt Prompt";
      ctx.fillText(intToFloat(Number(toprice), 2),340,890);
      ctx.font = "36pt Prompt";
      ctx.fillText(intToFloat(Number(nextprice), 2),560,895);
      ctx.fillText(diffStr(),810,895);
      // console.log(diffStr()); // For Debug
    }
    const Label = ()=>{
      const lebelValue = document.getElementById('inp-label').value
      // //refill text
      ctx.fillStyle = "#ffffff";
      ctx.font = "15pt Prompt";
      ctx.fillText('มีผลบังคับใช้ วันที่ ' + lebelValue + 'หลังเวลา 05:00 น. เป็นต้นไป', 290, 927);
    }
    PB7()
    B7()
    D()
    B20()
    BEN()
    G95()
    G91()
    E20()
    E85()
    Label()
}




$('button').click(function(){
    var gh = canvas.toDataURL(ctx.getImageData(50, 50, 100, 100));

    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click()
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage($('img').get(0), 0, 0);
});