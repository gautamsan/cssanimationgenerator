$( document ).ready(function() {
  // Handler for .ready() called.

     $("input").spinner({
     max: 3,
     min: 0
 }).on('input', function () {
     var val = this.value,
         $this = $(this),
         max = $this.spinner('option', 'max'),
         min = $this.spinner('option', 'min');
         if (!val.match(/^\d+$/)) val = 0; //we want only number, no alpha
     this.value = val > max ? max : val < min ? min : val;
 });

 });