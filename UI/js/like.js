function myFunction(x) {
    x.classList.toggle("fa-flip-horizontal");

    var comment = document.getElementById('small_comment');

    comment.addEventListener('keydown', autosize);
                 
    function autosize(){
      var spec = this;
      setTimeout(function(){
        spec.style.cssText = 'height:auto; padding:0';
        spec.style.cssText = 'height:' + spec.scrollHeight + 'px';
      },0);
    }

  }