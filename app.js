var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
canvas.width = $('img').width();
canvas.crossOrigin = "Anonymous";
canvas.height = $('img').height();
ctx.drawImage($('img').get(0), 0, 0);
ctx.font = "36pt Prompt";
// $(document).on('input','#inp-pb7-3',function(){
//     //redraw image
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.drawImage($('img').get(0), 0, 0);
//     // //refill text
//     // ctx.fillStyle = "#07ffff";
//     if ( $(this).val().startsWith('-') ){
//       ctx.fillStyle = "red";
//     }
//     else{
//       ctx.fillStyle = "#07ffff";
//     }
//     // ctx.fillText($(this).val(),330,255);
//     // PB7
//     ctx.fillText(('33.33'),330,255);
//     ctx.fillText(('33.33'),560,255);
//     ctx.fillText(('-0.10'),810,255);
//     // B7
//     ctx.fillText(('33.33'),330,335);
//     ctx.fillText(('33.33'),560,335);
//     ctx.fillText(('-0.10'),810,335);
//     // Diesel
//     ctx.fillText(('33.33'),330,415);
//     ctx.fillText(('33.33'),560,415);
//     ctx.fillText(('-0.10'),810,415);
//     // B20
//     ctx.fillText(('33.33'),330,495);
//     ctx.fillText(('33.33'),560,495);
//     ctx.fillText(('-0.10'),810,495);
//     // เบนซิน
//     ctx.fillText(('33.33'),330,575);
//     ctx.fillText(('33.33'),560,575);
//     ctx.fillText(('-0.10'),810,575);
//     // 95
//     ctx.fillText(('33.33'),330,655);
//     ctx.fillText(('33.33'),560,655);
//     ctx.fillText(('-0.10'),810,655);
//     // 91
//     ctx.fillText(('33.33'),330,735);
//     ctx.fillText(('33.33'),560,735);
//     ctx.fillText(('-0.10'),810,735);
//     // E20
//     ctx.fillText(('33.33'),330,815);
//     ctx.fillText(('33.33'),560,815);
//     ctx.fillText(('-0.10'),810,815);
//     // E85
//     ctx.fillText(('33.33'),330,895);
//     ctx.fillText(('33.33'),560,895);
//     ctx.fillText(('-0.10'),810,895);
// });
$(document).on('input','#inp-pb7-3',function(){
  //redraw image
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  // ctx.drawImage($('img').get(0), 0, 0);
  const toprice = document.getElementById('inp-pb7-1').value
  const nextprice = document.getElementById('inp-pb7-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,255);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,255);
  ctx.fillText(nextprice,560,255);
  ctx.fillText($(this).val(),810,255);
});
$(document).on('input','#inp-b7-3',function(){
  //redraw image
  const toprice = document.getElementById('inp-b7-1').value
  const nextprice = document.getElementById('inp-b7-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,335);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,335);
  ctx.fillText(nextprice,560,335);
  ctx.fillText($(this).val(),810,335);
});
$(document).on('input','#inp-d-3',function(){
  //redraw image
  const toprice = document.getElementById('inp-d-1').value
  const nextprice = document.getElementById('inp-d-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,415);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,415);
  ctx.fillText(nextprice,560,415);
  ctx.fillText($(this).val(),810,415);
});
$(document).on('input','#inp-b20-3',function(){
  //redraw image
  const toprice = document.getElementById('inp-b20-1').value
  const nextprice = document.getElementById('inp-b20-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,495);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,495);
  ctx.fillText(nextprice,560,495);
  ctx.fillText($(this).val(),810,495);
});
$(document).on('input','#inp-ben-3',function(){
  //redraw image
  const toprice = document.getElementById('inp-ben-1').value
  const nextprice = document.getElementById('inp-ben-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,575);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,575);
  ctx.fillText(nextprice,560,575);
  ctx.fillText($(this).val(),810,575);
});
$(document).on('input','#inp-95-3',function(){
  //redraw image
  const toprice = document.getElementById('inp-95-1').value
  const nextprice = document.getElementById('inp-95-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,655);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,655);
  ctx.fillText(nextprice,560,655);
  ctx.fillText($(this).val(),810,655);
});
$(document).on('input','#inp-91-3',function(){
  //redraw image
  const toprice = document.getElementById('inp-91-1').value
  const nextprice = document.getElementById('inp-91-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,735);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,735);
  ctx.fillText(nextprice,560,735);
  ctx.fillText($(this).val(),810,735);
});
$(document).on('input','#inp-e20-3',function(){
  //redraw image
  const toprice = document.getElementById('inp-e20-1').value
  const nextprice = document.getElementById('inp-e20-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,815);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,815);
  ctx.fillText(nextprice,560,815);
  ctx.fillText($(this).val(),810,815);
});
$(document).on('input','#inp-e85-3',function(){
  //redraw image
  const toprice = document.getElementById('inp-e85-1').value
  const nextprice = document.getElementById('inp-e85-2').value
  // //refill text
  ctx.fillStyle = "#0071ba";
  ctx.fillText(toprice,330,895);
  if ( $(this).val().startsWith('+') ) {
    ctx.fillStyle = "#ff0000";
  } else if ( $(this).val().startsWith('-') ) {
    ctx.fillStyle = "#039b54";
  } else {
    ctx.fillStyle = "#0071ba";
  }
  // ctx.fillText(toprice,330,895);
  ctx.fillText(nextprice,560,895);
  ctx.fillText($(this).val(),810,895);
});




$('button').click(function(){
    var gh = canvas.toDataURL(ctx.getImageData(50, 50, 100, 100));

    var a  = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click()
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage($('img').get(0), 0, 0);
});