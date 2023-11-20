//Business logic//
function set(){
    var names=document.getElementById("firstName").value;
    var school=document.getElementById("schoolName").value;
    document.getElementById("person").innerHTML=names;
    document.getElementById("school").innerHTML=school;
  }
  //U.I logic//
  $(document).ready(function(){
    $("#quiz").submit(function(event){
      event.preventDefault();
      var Q1 = parseInt($("input:radio[name=Q1]:checked").val());
      var Q2 = parseInt($("input:radio[name=Q2]:checked").val());
      var Q3 = parseInt($("input:radio[name=Q3]:checked").val());
      var Q4 = parseInt($("input:radio[name=Q4]:checked").val());
      var Q5 = parseInt($("input:radio[name=Q5]:checked").val());
      var Q6 = parseInt($("input:radio[name=Q6]:checked").val());
      var Q7 = parseInt($("input:radio[name=Q7]:checked").val());
      var Q8 = parseInt($("input:radio[name=Q8]:checked").val());
      var Q9 = parseInt($("input:radio[name=Q9]:checked").val());
      var Q10 = parseInt($("input:radio[name=Q10]:checked").val());


      var display =parseInt((Q1+Q2+Q3+Q4+Q5+Q6+Q7+Q8+Q9+Q10));
      var name=$("input#firstName").val();
      $("#hide").slideDown();
      $("input").prop("disabled", true);
      $("#results").text(name+" "+"your score is :"+" "+display+"%");
    });
    $("#start").click(function(){
      $("#quiz").slideToggle();
    });
    $("#name").submit(function(){
      event.preventDefault();
      $("#name").hide();
      $("#begin").slideDown();
    });
    $("#seeResults").click(function(){
      $("#begin").hide();
      $("#questions").hide();
      $("#answers").show();
    });
  });
  