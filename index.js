 var quizDB=[
    {
    title:"A complete graph can have",
    options:["n^2 spanning tree","n^n spanning tree","2n spanning tree","n^(n-2) spanning tree"],
    correct:"n^(n-2) spanning tree"    
    },

    {
    title:"What is the full form of CSS",
    options:["Cascading Style Sheets","Cascadeless Styling Sheet","Common Styling Sheet","None of These"],
    correct:"Cascading Style Sheets"       
    },

    {
    title:"How to include javascript to HTML documents",
    options:["input","link","script","None of These"],
    correct:"script"        
    },

    {
    title:"How to declare variable in javascript",
    options:["int","var","char","All of the above"],
    correct:"var"
    },

    {
    title:"What => means in javascript",
    options:["Arrow Function","implies","Equal to","Invalid"],
    correct:"Arrow Function"
    },

    {
    title:"Which of these is not javascript framework",
    options:["Angular js","Angular","bootstrap","Django"],
    correct:"Django"
    },

    {
    title:"How do you define objects in js",
    options:["{}","[]","none","()"],
    correct:"{}"
    },

    {
    title:"Which of these is not a valid js version",
    options:["ES2","ES3","ES1","EX19"],
    correct:"EX19"
    },

    {
    title:"What is the output of '2'+2",
    options:["22","5","'4'"," None of these"],
    correct:"22"
    },

    {
    title:"What is the output of '2'-1",
    options:["1","'1'","3","None of these"],
    correct:"3"
    }
    
]

var score=0;
var ques_no=0;
var index;

function check()
{
    var radio=document.getElementsByName("option");
    var selected=false;

    for(var i=0;i<4;i++)
    {
        if(radio[i].checked)
        {
            selected=true;
            index=i;
            break;
        }
    }

    if(!selected)
    {
        alert("Please select an option!!");
    }
    else{
        var ans=document.getElementById("radio"+index).value;
         console.log(ans+" "+index);

        if(ans==quizDB[ques_no].correct)
        {
            score++;
            document.getElementById("submit").innerHTML
            ="<p id='a' style='background-color:#BFECCE; color: green; '>Correct</p><button class='btn btn-success' onclick='next()'>Next</button>";
        }
        else{
            document.getElementById("submit").innerHTML=
            "<p id='a' style='background-color: #FCD3D3; color: maroon;'>Incorrect</p><button class='btn btn-success' onclick='next()'>Next</button>";
        }
    }

}
function next()
{
    ques_no++;


    document.getElementsByName("option")[index].checked=false;
    document.getElementById("question").innerHTML=quizDB[ques_no].title;

    document.getElementById("option0").innerHTML=quizDB[ques_no].options[0];
    document.getElementById("option1").innerHTML=quizDB[ques_no].options[1];
    document.getElementById("option2").innerHTML=quizDB[ques_no].options[2];
    document.getElementById("option3").innerHTML=quizDB[ques_no].options[3]; 

    document.getElementById("radio0").value=quizDB[ques_no].options[0];
    document.getElementById("radio1").value=quizDB[ques_no].options[1];
    document.getElementById("radio2").value=quizDB[ques_no].options[2];
    document.getElementById("radio3").value=quizDB[ques_no].options[3];

    if(ques_no!=quizDB.length-1)
     document.getElementById("submit").innerHTML="<button class='btn btn-warning' onclick='check()'>Submit</button>";
    
    else
        document.getElementById("submit").innerHTML="<button class='btn btn-warning' onclick='finish()'>Finish</button>"
    
}
     function finish()
     {
         document.getElementById("head").innerHTML=
         "<div class='container' id='head'>SCORE: "+score+"</div>";

          var b="<ul>";
          for(var i=0;i<quizDB.length;i++)
          {
              b=b+"<li>"+quizDB[i].title+" - <span class='badge badge-success'>"+quizDB[i].correct+"</span></li>";
          }
          b=b+"</ul>";
          document.getElementById('test').innerHTML="";
          document.getElementById('ans').innerHTML=b;

          document.getElementById("h").innerHTML="<h2>Answer Key</h2>";
        document.getElementById("finish").innerHTML="<button class='btn btn-primary' onclick='restart()'>Restart</button>";

     }              

    function restart()
    {
        ques_no=0;
        location.reload();
    }
