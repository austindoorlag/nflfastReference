<h1 style="text-align: center;">nflfastReference</h1>

---
<<<<<<< HEAD
<h1> OVERVIEW </h1>
<p> nflfastReference is a data application built to easily visualize and manipulate data related to the National Football League.  nflfastReference provides an alternative to the longer, more involved processes previously avaliable for NFL data analysis while sacrifing minimal functionality.  </P>


<h1> DEVELOPMENT </h1>
<b>AS OF 8/21 DEVELOPMENT IS STILL ONGOING</b>
<p> nflfastReference is built using React for the frotend and Java with Spring Boot for backend.  The bulk of the data manipulatation is done solely through the React frontend, while the Java library <a href="https://github.com/jbytecode/rcaller">RCaller</a> is used to pull visualize data from the <a href="https://github.com/nflverse/nflfastR">nflfastR</a> R package.</p>
<p> Some interesting design questions that arose during the development process include:
<ul>
<li><b>Q:</b> Should the backend or frontend be responsible for manipulating data given a certain set of restrictions? <br/> <b>A:</b> The frontend handles almost all of the data filtration in this application.  There are certainly pros and cons to both approaches however:
<ul>
<li> <b>Pros:</b>
<ul>
<li> Performing client side data filtration improved performance time in almsot every case. </li>
<li> Frontend remains quite cohesive </li>
<li> Helped me learn React!  I am already perfectly comfortable in Java, so this was a good oppurtuinity to broaden my skills </li>
</ul>
<li> <b>Cons:</b>
<ul>
<li> Data manipulation is far more complicated (much more development time) in React when compared to R (accesses through Java & RCaller) </li>
<li> Scalability is sacrificed (adding a new feature is far easier when you simply have to make an R call rather than implement your own manipulatations)</li>
</ul>
</ul>
</li>

</ul>
</p>  

<h1> REFLECTION </h1>
<p> Throughout the creation of this application I have been extremely impressed with the power of React.  Following the design constraints is slightly challenging at first--because it forces you to have a 'plan of attack' when you start developing--but you are rewarded with simple, effective and beautiful frontend elements!</p>
=======

>>>>>>> 03f21b9d5121685fce75bf5ae75500ea74ab3427
